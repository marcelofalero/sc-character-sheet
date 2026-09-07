import { DIE_STEPS, RANK_COT_MAP, SKILL_ATTR_MAP } from '../data/defaultCharacter';
import { AttributeKey, Character, EffectiveCharacterState, EffectivePsiInfo, PointPools } from '../types/character';

export function getSteppedDie(baseDie: number, stepDelta: number): number {
  let idx = DIE_STEPS.indexOf(baseDie);
  if (idx === -1) idx = 1; // Default d6
  const newIdx = Math.max(0, Math.min(DIE_STEPS.length - 1, idx + stepDelta));
  return DIE_STEPS[newIdx];
}

export function formatTraitBoost(shortAttr: string, steps: number): string {
  if (steps === 0) return '';
  if (steps > 0) return `${shortAttr}${'+'.repeat(steps)}`;
  return `${shortAttr}${'-'.repeat(Math.abs(steps))}`;
}

export function getRankForAdvancements(totalAdv: number): 'Novice' | 'Seasoned' | 'Veteran' | 'Heroic' | 'Legendary' {
  if (totalAdv >= 16) return 'Legendary';
  if (totalAdv >= 12) return 'Heroic';
  if (totalAdv >= 8) return 'Veteran';
  if (totalAdv >= 4) return 'Seasoned';
  return 'Novice';
}

export function computeEffectivePsiRating(char: Character): EffectivePsiInfo {
  const basePL = 2;
  const advCount = (char.advancementsList && char.advancementsList.length) !== undefined
    ? char.advancementsList.length
    : (char.advancements || 0);

  const derivedRank = getRankForAdvancements(advCount);
  const rank = char.rank || derivedRank;
  const rankInfo = RANK_COT_MAP[rank] || { cotLevel: 'Recruit', cotBonus: 0, maxPl: 3 };
  const cotBonus = rankInfo.cotBonus;

  // Count PL increase edges in advancements or edges list
  let plEdgeCount = 0;
  if (Array.isArray(char.advancementsList)) {
    char.advancementsList.forEach(a => {
      const desc = (a.desc || '').toLowerCase();
      if ((a.type === 'edge' || a.type === 'other') && (desc.includes('psionic level') || desc.includes('psi rating') || desc.includes('pl +1') || desc.includes('pl+1') || desc.includes('pl 5'))) {
        plEdgeCount++;
      }
    });
  }

  const calculatedPL = basePL + cotBonus + plEdgeCount;
  const effectivePL = Math.min(rankInfo.maxPl, Math.max(1, char.psiRating || calculatedPL));

  return {
    basePL,
    cotBonus,
    plEdgeCount,
    maxPlForRank: rankInfo.maxPl,
    calculatedPL,
    effectivePL
  };
}

export function computeEffectiveCharacterState(char: Character): EffectiveCharacterState {
  const baseAttr = {
    agility: char.attributes?.agility || 4,
    strength: char.attributes?.strength || 4,
    vigor: char.attributes?.vigor || 4,
    instinct: char.attributes?.instinct || 4,
    intelligence: char.attributes?.intelligence || 4,
    spirit: char.attributes?.spirit || 4
  };

  const attrSteps = { agility: 0, strength: 0, vigor: 0, instinct: 0, intelligence: 0, spirit: 0 };
  const attrRollMods = { agility: 0, strength: 0, vigor: 0, instinct: 0, intelligence: 0, spirit: 0 };
  const skillRollMods: Record<string, number> = {};
  const linkedAttrSkillMods = { agility: 0, strength: 0, vigor: 0, instinct: 0, intelligence: 0, spirit: 0 };

  let totalArmor = 0;
  let totalDefMod = 0;
  let totalToughnessMod = 0;
  let totalDisciplineMod = 0;
  let totalResolveMod = 0;
  let totalSpeedMod = 0;

  // 1. Temporary Manual Attribute & Skill Modifiers
  const tempAttr = char.tempAttributeMods || {};
  for (const k in tempAttr) {
    const key = k as AttributeKey;
    if (attrSteps[key] !== undefined) attrSteps[key] += (tempAttr[key] || 0);
  }

  const tempSkill = char.tempSkillMods || {};
  for (const k in tempSkill) {
    skillRollMods[k] = (skillRollMods[k] || 0) + (tempSkill[k] || 0);
  }

  // 2. Active Boost Data Mutations
  const activeBoosts = Array.isArray(char.activeBoosts) ? char.activeBoosts : [];
  activeBoosts.forEach(b => {
    if (!b.state || b.state === 'off') return;

    const m = (b.state === 'raise' && b.raiseMutations) ? b.raiseMutations : b.mutations;
    if (!m) return;

    if (m.attrSteps) {
      for (const k in m.attrSteps) {
        const key = k as AttributeKey;
        if (attrSteps[key] !== undefined && m.attrSteps[key]) attrSteps[key] += m.attrSteps[key]!;
      }
    }

    if (m.attrRollMods) {
      for (const k in m.attrRollMods) {
        const key = k as AttributeKey;
        if (attrRollMods[key] !== undefined && m.attrRollMods[key]) attrRollMods[key] += m.attrRollMods[key]!;
      }
    }

    if (m.skillRollMods) {
      for (const k in m.skillRollMods) {
        skillRollMods[k] = (skillRollMods[k] || 0) + m.skillRollMods[k];
      }
    }

    if (m.linkedAttrSkillMods) {
      for (const k in m.linkedAttrSkillMods) {
        const key = k as AttributeKey;
        if (linkedAttrSkillMods[key] !== undefined && m.linkedAttrSkillMods[key]) {
          linkedAttrSkillMods[key] += m.linkedAttrSkillMods[key]!;
        }
      }
    }

    if (m.armor) totalArmor += m.armor;
    if (m.defMod) totalDefMod += m.defMod;
    if (m.toughnessMod) totalToughnessMod += m.toughnessMod;
    if (m.disciplineMod) totalDisciplineMod += m.disciplineMod;
    if (m.resolveMod) totalResolveMod += m.resolveMod;
    if (m.speedMod) totalSpeedMod += m.speedMod;
  });

  // 2b. Training Path Inherent Mutations & Bonuses
  const plInfo = computeEffectivePsiRating(char);
  const psiRating = plInfo.effectivePL;
  const trainingPath = char.trainingPath || 'ghost';
  const isWearingHES = activeBoosts.some(b => 
    (b.type === 'hes-suit' || b.id === 'boost_hes_suit' || (b.name && b.name.toLowerCase().includes('environment suit'))) && 
    b.state !== 'off'
  );

  if (trainingPath === 'ghost') {
    // Covert Ops Training: Gain +1 to Stealth, Perception, and Ranged or Melee rolls
    skillRollMods.stealth = (skillRollMods.stealth || 0) + 1;
    skillRollMods.perception = (skillRollMods.perception || 0) + 1;
    skillRollMods.ranged = (skillRollMods.ranged || 0) + 1;
    skillRollMods.melee = (skillRollMods.melee || 0) + 1;
  } else if (trainingPath === 'shadowguard') {
    // Espionage Training: Gain +1 to Insight, Influence, and Stealth rolls
    skillRollMods.insight = (skillRollMods.insight || 0) + 1;
    skillRollMods.influence = (skillRollMods.influence || 0) + 1;
    skillRollMods.stealth = (skillRollMods.stealth || 0) + 1;
  }

  // 3. Stepped Effective Attributes
  const effectiveAttr = {
    agility: getSteppedDie(baseAttr.agility, attrSteps.agility),
    strength: getSteppedDie(baseAttr.strength, attrSteps.strength),
    vigor: getSteppedDie(baseAttr.vigor, attrSteps.vigor),
    instinct: getSteppedDie(baseAttr.instinct, attrSteps.instinct),
    intelligence: getSteppedDie(baseAttr.intelligence, attrSteps.intelligence),
    spirit: getSteppedDie(baseAttr.spirit, attrSteps.spirit)
  };

  // 4. Effective Skill Bonuses
  const effectiveSkillBonuses: Record<string, number> = {};
  for (const sk in char.skills) {
    const skillId = sk.toLowerCase().trim();
    const linkedAttr = (SKILL_ATTR_MAP[skillId] || 'agility') as AttributeKey;
    let b = skillRollMods[skillId] || 0;
    if (linkedAttrSkillMods[linkedAttr]) {
      b += linkedAttrSkillMods[linkedAttr];
    }
    effectiveSkillBonuses[skillId] = b;
  }

  // 5. Derived Stats
  const rawDefense = Math.floor(effectiveAttr.agility / 2) + Math.floor(effectiveAttr.instinct / 2) + totalDefMod;
  const defense = Math.max(1, rawDefense);
  const discipline = Math.floor(effectiveAttr.spirit / 2) + Math.floor(effectiveAttr.intelligence / 2) + totalDisciplineMod;
  const baseToughness = Math.floor(effectiveAttr.vigor / 2) + Math.floor(effectiveAttr.strength / 2);
  const totalToughness = baseToughness + totalArmor + totalToughnessMod;
  const resolve = Math.floor(effectiveAttr.spirit / 2) + Math.floor(effectiveAttr.instinct / 2) + psiRating + totalResolveMod;
  const maxWounds = Math.max(1, Math.floor(effectiveAttr.strength / 3) + 1);
  const maxFatigue = Math.max(1, Math.floor(effectiveAttr.vigor / 3));
  const speed = 6 + totalSpeedMod;

  return {
    baseAttributes: baseAttr,
    attributeSteps: attrSteps,
    attributeRollMods: attrRollMods,
    effectiveAttributes: effectiveAttr,
    effectiveSkillBonuses,
    armor: totalArmor,
    defMod: totalDefMod,
    defense,
    discipline,
    baseToughness,
    totalToughness,
    resolve,
    maxWounds,
    maxFatigue,
    speed
  };
}

export function calculatePoints(char: Character): PointPools {
  let advSkillCount = 0;
  let advAttrCount = 0;
  let advEdgeCount = 0;

  if (char && Array.isArray(char.advancementsList) && char.advancementsList.length > 0) {
    char.advancementsList.forEach(a => {
      if (a.type === 'skills') advSkillCount++;
      else if (a.type === 'attribute') advAttrCount++;
      else if (a.type === 'edge') advEdgeCount++;
    });
  } else if (char) {
    const advAlloc = char.advancementAllocation || {
      skills: 1,
      attributes: 1,
      edges: Math.max(0, (char.advancements || 4) - 2)
    };
    advSkillCount = advAlloc.skills !== undefined ? advAlloc.skills : 0;
    advAttrCount = advAlloc.attributes !== undefined ? advAlloc.attributes : 0;
    advEdgeCount = advAlloc.edges !== undefined ? advAlloc.edges : 0;
  }

  const hindranceAttrBonus = (char.hindranceConversions && char.hindranceConversions.attributeSteps) || 0;
  const advAttrBonus = advAttrCount * 1;
  const totalAttrPointsPool = 9 + hindranceAttrBonus + advAttrBonus;

  let spentAttrPoints = 0;
  for (const key in char.attributes) {
    const die = char.attributes[key as AttributeKey];
    const stepIndex = DIE_STEPS.indexOf(die);
    if (stepIndex > 0) spentAttrPoints += stepIndex;
  }

  const intel = char.attributes?.intelligence || 4;
  let intBonus = 0;
  if (intel === 6) intBonus = 1;
  else if (intel === 8) intBonus = 2;
  else if (intel === 10) intBonus = 3;
  else if (intel === 12) intBonus = 4;

  const baseSkillPoints = 13;
  const advSkillBonus = advSkillCount * 3;
  const hindranceSkillBonus = (char.hindranceConversions && char.hindranceConversions.skillPoints) || 0;
  const totalSkillPointsPool = baseSkillPoints + intBonus + advSkillBonus + hindranceSkillBonus;

  let spentSkillPoints = 0;
  const coreSkills = ['athletics', 'lore', 'perception', 'influence', 'stealth'];

  if (char && char.skills) {
    for (const skillId in char.skills) {
      const val = char.skills[skillId] || 0;
      if (val === 0) continue;

      const linkedAttr = (SKILL_ATTR_MAP[skillId] || 'agility') as AttributeKey;
      const linkedAttrDie = char.attributes[linkedAttr] || 4;
      const linkedAttrIdx = DIE_STEPS.indexOf(linkedAttrDie);
      const isCore = coreSkills.includes(skillId);
      const freeStepIdx = isCore ? 0 : -1;
      const targetStepIdx = DIE_STEPS.indexOf(val);

      if (targetStepIdx > freeStepIdx) {
        for (let i = freeStepIdx + 1; i <= targetStepIdx; i++) {
          if (i <= linkedAttrIdx) spentSkillPoints += 1;
          else spentSkillPoints += 2;
        }
      }
    }
  }

  return {
    totalAttrPointsPool,
    spentAttrPoints,
    remAttrPoints: totalAttrPointsPool - spentAttrPoints,
    hindranceAttrBonus,
    advAttrBonus,
    baseSkillPoints,
    intBonus,
    advSkillBonus,
    advSkillCount,
    advAttrCount,
    advEdgeCount,
    hindranceSkillBonus,
    totalSkillPointsPool,
    spentSkillPoints,
    remSkillPoints: totalSkillPointsPool - spentSkillPoints
  };
}
