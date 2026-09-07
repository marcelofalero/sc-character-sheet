/**
 * StarCraft Ghost Living Document & Interactive Compendium Engine (High-Performance)
 * Core Data-Driven Mutation Architecture
 */

(function () {
  'use strict';

  // --- Audio Synthesis Engine ---
  const SoundFX = {
    ctx: null,
    muted: false,

    init() {
      if (!this.ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) this.ctx = new AudioContext();
      }
    },

    playTone(freq, type, duration, gainVal = 0.04) {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();

      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      } catch (e) {}
    },

    click() { this.playTone(880, 'sine', 0.04, 0.02); },
    toggle() { this.playTone(540, 'triangle', 0.06, 0.03); },
    roll() {
      this.playTone(420, 'square', 0.05, 0.03);
      setTimeout(() => this.playTone(680, 'square', 0.07, 0.03), 40);
      setTimeout(() => this.playTone(950, 'sine', 0.1, 0.04), 80);
    },
    success() {
      this.playTone(523.25, 'sine', 0.08, 0.04);
      setTimeout(() => this.playTone(659.25, 'sine', 0.08, 0.04), 60);
      setTimeout(() => this.playTone(783.99, 'sine', 0.15, 0.05), 120);
    },
    alert() {
      this.playTone(300, 'sawtooth', 0.1, 0.05);
      setTimeout(() => this.playTone(220, 'sawtooth', 0.15, 0.05), 80);
    }
  };

  const DIE_STEPS = [4, 6, 8, 10, 12, 14, 16];
  const DIE_LABELS = { 0: '0', 4: 'd4', 6: 'd6', 8: 'd8', 10: 'd10', 12: 'd12', 14: 'd12+1', 16: 'd12+2' };

  function dieLabel(val) {
    if (!val) return '—';
    return DIE_LABELS[val] || `d${val}`;
  }

  function getSteppedDie(baseDie, stepOffset) {
    let idx = DIE_STEPS.indexOf(baseDie);
    if (idx === -1) idx = 0;
    let newIdx = Math.max(0, Math.min(DIE_STEPS.length - 1, idx + stepOffset));
    return DIE_STEPS[newIdx];
  }

  function formatTraitBoost(traitCode, steps) {
    if (steps > 0) return `${traitCode}${'+'.repeat(steps)}`;
    if (steps < 0) return `${traitCode}${'-'.repeat(Math.abs(steps))}`;
    return '';
  }

  const SKILL_ATTR_MAP = {
    athletics: 'agility',
    melee: 'agility',
    stealth: 'agility',
    insight: 'instinct',
    perception: 'instinct',
    pilot: 'instinct',
    ranged: 'instinct',
    survival: 'instinct',
    tactics: 'intelligence',
    computers: 'intelligence',
    engineering: 'intelligence',
    lore: 'intelligence',
    medicine: 'intelligence',
    science: 'intelligence',
    influence: 'spirit',
    leadership: 'spirit',
    psionics: 'spirit'
  };

  /**
   * Data-Driven Boost Definitions with Declarative Mutation Models
   */
  function getDefaultActiveBoosts() {
    return [
      {
        id: "boost_hes_suit",
        name: "Hostile Environment Suit",
        category: "Gear",
        type: "hes-suit",
        targetAttr: "strength",
        state: "active",
        hasRaise: false,
        desc: "Hermetic Ghost suit granting Str+ and +8 Armor to Toughness.",
        mutations: {
          attrSteps: { strength: 1 },
          armor: 8
        }
      },
      {
        id: "boost_digital_uplink",
        name: "Digital Uplink II",
        category: "Gear",
        type: "digital-uplink",
        state: "active",
        hasRaise: false,
        desc: "Tactical cyber-link granting +1 trait bonus to tech & tactical skills.",
        mutations: {
          skillRollMods: {
            computers: 1,
            engineering: 1,
            lore: 1,
            medicine: 1,
            science: 1,
            tactics: 1,
            perception: 1,
            pilot: 1,
            ranged: 1
          }
        }
      },
      {
        id: "boost_muscular_enh",
        name: "Muscular Enhancement",
        category: "Psionics (PL 4)",
        type: "muscular-enh",
        state: "off",
        hasRaise: true,
        desc: "+1 (+2 on Raise) to Strength rolls, Athletics, Stealth, and Vigor tests vs extreme environments/fatigue/disease/poison.",
        mutations: {
          attrRollMods: { strength: 1 },
          skillRollMods: { athletics: 1, stealth: 1 }
        },
        raiseMutations: {
          attrRollMods: { strength: 2 },
          skillRollMods: { athletics: 2, stealth: 2 }
        }
      },
      {
        id: "boost_enhance_abilities_agi",
        name: "Enhance Abilities (Agility)",
        category: "Psionics (PL 3)",
        type: "enhance-abilities",
        targetAttr: "agility",
        state: "off",
        hasRaise: true,
        desc: "+1 die step (Agi+) on Success, +2 die steps (Agi++) on Raise to Agility and its linked skills (Athletics, Melee, Stealth).",
        mutations: {
          attrSteps: { agility: 1 },
          linkedAttrSkillMods: { agility: 1 }
        },
        raiseMutations: {
          attrSteps: { agility: 2 },
          linkedAttrSkillMods: { agility: 2 }
        }
      },
      {
        id: "boost_thought_block",
        name: "Thought Blocking",
        category: "Psionics",
        type: "thought-block",
        state: "off",
        hasRaise: true,
        desc: "+1 (+3 on Raise) to Discipline and Resolve.",
        mutations: {
          disciplineMod: 1,
          resolveMod: 1
        },
        raiseMutations: {
          disciplineMod: 3,
          resolveMod: 3
        }
      },
      {
        id: "boost_stimpack",
        name: "Military Stimpack",
        category: "Chemical",
        type: "stimpack",
        state: "off",
        hasRaise: false,
        desc: "+2 Speed and Agi+ for the combat encounter.",
        mutations: {
          attrSteps: { agility: 1 },
          speedMod: 2
        }
      }
    ];
  }

  function getDefaultCharacter() {
    return {
      "id": "char_rick_kageyama",
      "name": "Rick Kageyama",
      "codename": "Operative Kageyama",
      "homeworld": "moria",
      "rank": "Seasoned",
      "cotLevel": "Operative",
      "trainingPath": "ghost",
      "concept": "Psionic Human operative from Moria (Kel-Morian Combine) channeling Void energy.",
      "psiRating": 5,
      "advancements": 4,
      "advancementAllocation": {
        "skills": 1,
        "attributes": 1,
        "edges": 2
      },
      "credits": 3325,
      "attributes": {
        "agility": 8,
        "strength": 6,
        "vigor": 6,
        "instinct": 6,
        "intelligence": 8,
        "spirit": 10
      },
      "skills": {
        "athletics": 6,
        "computers": 0,
        "engineering": 0,
        "insight": 6,
        "influence": 4,
        "leadership": 0,
        "lore": 8,
        "medicine": 8,
        "melee": 8,
        "perception": 6,
        "pilot": 0,
        "psionics": 10,
        "ranged": 6,
        "science": 0,
        "stealth": 8,
        "survival": 0,
        "tactics": 0
      },
      "activeBoosts": getDefaultActiveBoosts(),
      "tempAttributeMods": {
        "agility": 0, "strength": 0, "vigor": 0, "instinct": 0, "intelligence": 0, "spirit": 0
      },
      "tempSkillMods": {},
      "hindranceConversions": { "attributeSteps": 1, "edges": 1, "skillPoints": 0 },
      "hindrances": [
        { "name": "Death Wish", "type": "Minor", "desc": "Destroy the Confederacy at all costs." },
        { "name": "Delusional", "type": "Minor", "desc": "Believes he was chosen for a higher galactic purpose." },
        { "name": "Echoes of the Void", "type": "Minor", "desc": "Psychic static and dark visions from void energy manipulation." },
        { "name": "Emotional Isolation", "type": "Minor", "desc": "Distanced from comrades due to intense psionic conditioning." }
      ],
      "edges": [
        { "name": "Psionic Level +1", "req": "Novice", "desc": "Increases character's effective Psi Level by 1." },
        { "name": "Terran Energy Adept (Void)", "req": "Novice", "desc": "Specializes in void-infused energy manifestations and force fields." },
        { "name": "Psychic Discipline Focus (Energy)", "req": "Seasoned", "desc": "Reduces SP cost and improves effectiveness of Energy discipline powers." },
        { "name": "Psionic Level +1 (2)", "req": "Seasoned", "desc": "Further elevates Psi Rating to PL 5." },
        { "name": "Unbreakable Will (Moria)", "req": "Moria Origin", "desc": "Roll Spirit to avoid Morale loss from battlefield trauma." },
        { "name": "Scurry (Moria)", "req": "Moria Origin", "desc": "Gain a free reroll on Evasion tests." }
      ],
      "powers": [
        { "name": "Psionic Bolt", "discipline": "Energy", "desc": "3d6+5 (PL+2) + d6 on raise | AP 12 | Range 6 | 3 SP" },
        { "name": "Psionic Burst", "discipline": "Energy", "desc": "2d6+PL energy damage (AP 4 at PL 6) in variable area | 4 SP" },
        { "name": "Force Fields", "discipline": "Energy", "desc": "Summons 1 cubic square of force fields per PL (Hardness 10+PL, 4 Shield Points) | Range 60 | 6 SP" },
        { "name": "Cloaking", "discipline": "Augmentation", "desc": "Bends light & sensor waves rendering operative completely invisible | 3 SP" },
        { "name": "Reading", "discipline": "Telepathy", "desc": "Reads surface thoughts and memories via mental link | 1 SP" },
        { "name": "Compulsion", "discipline": "Telepathy", "desc": "Places a hypnotic suggestion forcing a single mental command vs Discipline | 2 SP" },
        { "name": "Muscular Enhancement", "discipline": "Augmentation", "desc": "+1 Athletics, Stealth, and Vigor tests against Fatigue/Poison (+2 on Raise) | 2 SP" },
        { "name": "Regeneration", "discipline": "Augmentation", "desc": "Heals 1 Wound per round for ½ PL minutes | 4 SP" },
        { "name": "Enhanced Attributes", "discipline": "Augmentation", "desc": "Increases chosen physical attribute (Agility, Instinct, or Strength) and all linked skills by +1 die step (+2 on Raise) | 3 SP" },
        { "name": "Light Orb (Minor)", "discipline": "Energy", "desc": "Floating orb providing bright light within 2xPL squares | 1 PP/min" },
        { "name": "Light Panels (Minor)", "discipline": "Energy", "desc": "Projects flat light panels on surfaces for inspection | Touch" },
        { "name": "Backup Battery (Minor)", "discipline": "Technomancy", "desc": "Acts as a tier 1 power cell for devices for 1 min per PL | 2 SP" },
        { "name": "Meditation", "discipline": "Telepathy", "desc": "Deep trance recovering 2 Stress Points & 1 Fatigue every 10 min | 0 SP" }
      ],
      "weapons": [
        { "name": "C-10 Canister Rifle", "range": "24/48/96", "damage": "2d12+4", "rof": "2", "ap": 4, "notes": "Anti-personnel canister sniper rifle (Shots: 10, Min Str d6)" },
        { "name": "FWG5 Combat Pistol", "range": "12/24/48", "damage": "2d6+1", "rof": "1", "ap": 2, "notes": "Standard Terran military sidearm (Shots: 12, Min Str d4)" },
        { "name": "Heavy Revolver", "range": "12/24/48", "damage": "2d10+1", "rof": "2", "ap": 2, "notes": "High-caliber magnum revolver (Shots: 6, Min Str d6)" },
        { "name": "Long Rifle", "range": "25/50/100", "damage": "2d10", "rof": "1", "ap": 2, "notes": "Precision hunting/sniper rifle with optical scope (Shots: 6)" },
        { "name": "Combat Knife", "range": "Melee", "damage": "Str+d4", "rof": "1", "ap": 1, "notes": "Close-quarters military blade" }
      ],
      "armor": {
        "name": "Hostile Environment Suit",
        "value": 8,
        "class": "Heavy",
        "boost": "Str+",
        "defMod": 0,
        "weight": "15 lbs.",
        "traits": "Elemental Protection, Radiation Shielding, Oxygen Supply, Personal Cloaking, Armor Decay",
        "mounted": "Communicator, Tactical Mask I",
        "notes": "Hermetic full-body pressure suit (+8 Armor, life-support, +1 Strength die step, Cloaking integration)"
      },
      "gear": [
        { "name": "Digital Uplink II", "count": 1, "notes": "+2 Tactics/Pilot/Leadership, +1 Ranged, Athletics, Computers, Med, Lore, Percep, Sci, Stealth" },
        { "name": "Tactical Mask I", "count": 1, "notes": "Environmental filtration & integrated HUD optics" },
        { "name": "Motion Detector II", "count": 1, "notes": "Detects movement through obstacles within range" },
        { "name": "Bio-Mechanical Nanites", "count": 1, "notes": "Accelerates biological healing & cyber repairs" },
        { "name": "Trauma Kit & Medipack", "count": 1, "notes": "Emergency surgical & field trauma stabilization" },
        { "name": "Communicators & Injector", "count": 1, "notes": "Encrypted radio & hypospray auto-injector" },
        { "name": "Backpack & Belt & Canteen", "count": 1, "notes": "Utility field rig & rations x2" }
      ],
      "cybernetics": [],
      "currentWounds": 0,
      "currentFatigue": 0,
      "stressPoints": 6,
      "isShaken": false,
      "isDistracted": false,
      "isVulnerable": false,
      "notes": "Rick Kageyama — Psionic Operative from Moria (Kel-Morian Combine). Advancements: 1) Agility, 2) Psychic Discipline Focus (Energy), 3) Athletics, Melee, Stealth, 4) PL Increase to 5."
    };
  }

  /**
   * C.O.T. (Continuous Operative Training) & Rank Progression Map
   * Novice: Base PL 2
   * Seasoned: +1 PL (Operative)
   * Veteran: +2 PL (Specialist)
   * Heroic: +3 PL (Lieutenant)
   * Legendary: +4 PL (Captain)
   */
  const RANK_COT_MAP = {
    'Novice': { cotLevel: 'Recruit', cotPlBonus: 0, maxPl: 3, advMin: 0, advMax: 3 },
    'Seasoned': { cotLevel: 'Operative', cotPlBonus: 1, maxPl: 5, advMin: 4, advMax: 7 },
    'Veteran': { cotLevel: 'Specialist', cotPlBonus: 2, maxPl: 7, advMin: 8, advMax: 11 },
    'Heroic': { cotLevel: 'Lieutenant', cotPlBonus: 3, maxPl: 9, advMin: 12, advMax: 15 },
    'Legendary': { cotLevel: 'Captain', cotPlBonus: 4, maxPl: 10, advMin: 16, advMax: 99 }
  };

  /**
   * Calculates effective PL from:
   * 1. Base Ghost Novice PL = 2
   * 2. C.O.T. Rank Change Bonus (+1 Seasoned, +2 Veteran, +3 Heroic, +4 Legendary)
   * 3. 'Psionic Level +1' Edges taken
   */
  function computeEffectivePsiRating(char) {
    if (!char) return { basePL: 2, cotBonus: 1, plEdgeCount: 2, calculatedPL: 5, effectivePL: 5, maxPlForRank: 5, cotLevel: 'Operative' };
    const basePL = 2; // Novice Ghost C.O.T. base Psi Level
    const rank = char.rank || 'Seasoned';
    const rankInfo = RANK_COT_MAP[rank] || RANK_COT_MAP['Seasoned'];
    const cotBonus = rankInfo.cotPlBonus;

    // Count edges granting +1 PL
    const edges = Array.isArray(char.edges) ? char.edges : [];
    let plEdgeCount = 0;
    edges.forEach(e => {
      const name = (e.name || '').toLowerCase();
      if (name.includes('psionic level') || name.includes('psi level') || name.includes('pl increase') || name.includes('psi rating')) {
        plEdgeCount++;
      }
    });

    const calculatedPL = basePL + cotBonus + plEdgeCount;
    const effectivePL = char.psiRating !== undefined ? parseInt(char.psiRating, 10) : calculatedPL;

    return {
      basePL,
      cotBonus,
      plEdgeCount,
      calculatedPL,
      effectivePL,
      maxPlForRank: rankInfo.maxPl,
      cotLevel: rankInfo.cotLevel
    };
  }

  /**
   * PURE FUNCTIONAL STATE PIPELINE
   * Applies all temporary adjustments and active boost mutations to base data.
   */
  function computeEffectiveCharacterState(char) {
    if (!char) return null;

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
    const skillRollMods = {};
    const linkedAttrSkillMods = { agility: 0, strength: 0, vigor: 0, instinct: 0, intelligence: 0, spirit: 0 };

    let totalArmor = 0;
    let totalDefMod = 0;
    let totalToughnessMod = 0;
    let totalDisciplineMod = 0;
    let totalResolveMod = 0;
    let totalSpeedMod = 0;

    // 1. Temporary Manual Attribute & Skill Modifiers
    const tempAttr = char.tempAttributeMods || {};
    for (let k in tempAttr) {
      if (attrSteps[k] !== undefined) attrSteps[k] += (tempAttr[k] || 0);
    }

    const tempSkill = char.tempSkillMods || {};
    for (let k in tempSkill) {
      skillRollMods[k] = (skillRollMods[k] || 0) + (tempSkill[k] || 0);
    }

    // 2. Active Boost Data Mutations
    const activeBoosts = Array.isArray(char.activeBoosts) ? char.activeBoosts : [];
    activeBoosts.forEach(b => {
      if (!b.state || b.state === 'off') return;

      const m = (b.state === 'raise' && b.raiseMutations) ? b.raiseMutations : b.mutations;
      if (!m) return;

      if (m.attrSteps) {
        for (let k in m.attrSteps) {
          if (attrSteps[k] !== undefined) attrSteps[k] += m.attrSteps[k];
        }
      }

      if (m.attrRollMods) {
        for (let k in m.attrRollMods) {
          if (attrRollMods[k] !== undefined) attrRollMods[k] += m.attrRollMods[k];
        }
      }

      if (m.skillRollMods) {
        for (let k in m.skillRollMods) {
          skillRollMods[k] = (skillRollMods[k] || 0) + m.skillRollMods[k];
        }
      }

      if (m.linkedAttrSkillMods) {
        for (let k in m.linkedAttrSkillMods) {
          if (linkedAttrSkillMods[k] !== undefined) linkedAttrSkillMods[k] += m.linkedAttrSkillMods[k];
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

      // Psionic Reflexes & Absorption Field (while wearing HES Suit)
      if (isWearingHES) {
        attrSteps.agility = (attrSteps.agility || 0) + 1;
        totalArmor += Math.floor(psiRating / 2);
      }
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
    const effectiveSkillBonuses = {};
    if (window.SC_DATA && window.SC_DATA.skills) {
      window.SC_DATA.skills.forEach(sk => {
        const skillId = (sk.id || sk.name.toLowerCase().replace(/[^a-z0-9]/g, '')).trim();
        const linkedAttr = (sk.attr || SKILL_ATTR_MAP[skillId] || 'Agility').toLowerCase();
        effectiveSkillBonuses[skillId] = (skillRollMods[skillId] || 0) + (linkedAttrSkillMods[linkedAttr] || 0);
      });
    }

    // 5. Derived Stats
    const rawDefense = Math.floor(effectiveAttr.agility / 2) + Math.floor(effectiveAttr.instinct / 2) + totalDefMod;
    const defense = Math.max(1, rawDefense);

    const discipline = Math.floor(effectiveAttr.spirit / 2) + Math.floor(effectiveAttr.intelligence / 2) + totalDisciplineMod;

    const baseToughness = Math.floor(effectiveAttr.vigor / 2) + Math.floor(effectiveAttr.strength / 2);
    const totalToughness = baseToughness + totalArmor + totalToughnessMod;

    const resolve = Math.floor(effectiveAttr.spirit / 2) + Math.floor(effectiveAttr.instinct / 2) + psiRating + totalResolveMod;
    const maxWounds = Math.floor(effectiveAttr.strength / 3) + 1;
    const maxFatigue = Math.floor(effectiveAttr.vigor / 3);

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

  function getEffectiveAttributes(char) {
    const s = computeEffectiveCharacterState(char);
    return {
      base: s.baseAttributes,
      steps: s.attributeSteps,
      effective: s.effectiveAttributes
    };
  }

  function getEffectiveAttributeRollBonus(char, attrId) {
    const s = computeEffectiveCharacterState(char);
    return s.attributeRollMods[attrId] || 0;
  }

  function getEffectiveSkillBonus(char, skillId) {
    const s = computeEffectiveCharacterState(char);
    return s.effectiveSkillBonuses[skillId.toLowerCase().trim()] || 0;
  }

  function calculateDerivedStats(char) {
    return computeEffectiveCharacterState(char);
  }

  function calculatePoints(char) {
    const advAlloc = char.advancementAllocation || {
      skills: 1,
      attributes: 1,
      edges: Math.max(0, (char.advancements || 4) - 2)
    };

    const advSkillCount = advAlloc.skills !== undefined ? advAlloc.skills : 0;
    const advAttrCount = advAlloc.attributes !== undefined ? advAlloc.attributes : 0;
    const advEdgeCount = advAlloc.edges !== undefined ? advAlloc.edges : 0;

    const hindranceAttrBonus = (char.hindranceConversions && char.hindranceConversions.attributeSteps) || 0;
    const advAttrBonus = advAttrCount * 1;
    const totalAttrPointsPool = 9 + hindranceAttrBonus + advAttrBonus;

    let spentAttrPoints = 0;
    for (let key in char.attributes) {
      const die = char.attributes[key];
      const stepIndex = DIE_STEPS.indexOf(die);
      if (stepIndex > 0) spentAttrPoints += stepIndex;
    }

    const intel = char.attributes.intelligence || 4;
    let intBonus = 0;
    if (intel === 6) intBonus = 1;
    else if (intel === 8) intBonus = 2;
    else if (intel === 10) intBonus = 3;
    else if (intel >= 12) intBonus = 4;

    const advSkillBonus = advSkillCount * 3;
    const hindranceSkillBonus = (char.hindranceConversions && char.hindranceConversions.skillPoints) || 0;
    const baseSkillPoints = 13;
    const totalSkillPointsPool = baseSkillPoints + intBonus + advSkillBonus + hindranceSkillBonus;

    let spentSkillPoints = 0;
    if (window.SC_DATA && window.SC_DATA.skills) {
      window.SC_DATA.skills.forEach(sk => {
        const skillId = (sk.id || sk.name.toLowerCase().replace(/[^a-z0-9]/g, '')).trim();
        const charSkillDie = char.skills[skillId] || 0;
        const linkedAttr = (sk.attr || SKILL_ATTR_MAP[skillId] || 'Agility').toLowerCase();
        const linkedAttrDie = char.attributes[linkedAttr] || 4;

        if (charSkillDie > 0) {
          let freeDie = sk.core ? 4 : 0;
          if (char.trainingPath === 'ghost') {
            if (skillId === 'ranged' || skillId === 'melee') freeDie = Math.max(freeDie, 4);
            if (skillId === 'stealth') freeDie = Math.max(freeDie, 6);
          }

          if (charSkillDie > freeDie) {
            const freeStepIdx = freeDie === 0 ? -1 : DIE_STEPS.indexOf(freeDie);
            const targetStepIdx = DIE_STEPS.indexOf(charSkillDie);
            const linkedAttrIdx = DIE_STEPS.indexOf(linkedAttrDie);

            for (let i = freeStepIdx + 1; i <= targetStepIdx; i++) {
              if (i <= linkedAttrIdx) spentSkillPoints += 1;
              else spentSkillPoints += 2;
            }
          }
        }
      });
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

  function loadCharacters() {
    try {
      const stored = localStorage.getItem('sc_rpg_characters');
      if (stored) {
        characters = JSON.parse(stored);
        if (characters.length > 0 && characters[0].name === 'Nova Terra') {
          characters = [getDefaultCharacter()];
          saveCharacters();
        }
      }
    } catch (e) {}

    if (!characters || characters.length === 0) {
      characters = [getDefaultCharacter()];
      saveCharacters();
    }

    // Ensure activeBoosts array exists on all characters
    characters.forEach(char => {
      if (!char.activeBoosts || !Array.isArray(char.activeBoosts)) {
        char.activeBoosts = getDefaultActiveBoosts();
      }
    });

    const activeId = localStorage.getItem('sc_rpg_active_char_id');
    currentCharacter = characters.find(c => c.id === activeId) || characters[0];
  }

  function saveCharacters() {
    try {
      localStorage.setItem('sc_rpg_characters', JSON.stringify(characters));
      if (currentCharacter) {
        localStorage.setItem('sc_rpg_active_char_id', currentCharacter.id);
      }
    } catch (e) {}
  }

  function renderAll() {
    renderDossier();
    renderAttributesAndStats();
    renderSkillsList();
    renderCharacterPowers();
    renderCharacterWeapons();
    renderCharacterArmorGear();
    renderCharacterCybernetics();
    renderCharacterHindrances();
    renderCharacterEdges();
    updateCharacterSelector();
    updateQuickTelemetry();
  }

  function renderDossier() {
    if (!currentCharacter) return;
    document.getElementById('char-name-input').value = currentCharacter.name || '';
    document.getElementById('char-codename-input').value = currentCharacter.codename || '';
    document.getElementById('char-homeworld-select').value = currentCharacter.homeworld || 'moria';
    document.getElementById('char-rank-select').value = currentCharacter.rank || 'Seasoned';
    document.getElementById('char-cot-select').value = currentCharacter.cotLevel || 'Operative';
    document.getElementById('char-training-select').value = currentCharacter.trainingPath || 'ghost';

    const plInfo = computeEffectivePsiRating(currentCharacter);
    const psiInput = document.getElementById('char-psi-input');
    if (psiInput) {
      psiInput.value = currentCharacter.psiRating || plInfo.calculatedPL;
    }
    const psiTag = document.getElementById('psi-breakdown-tag');
    if (psiTag) {
      psiTag.textContent = `PL ${plInfo.effectivePL}`;
      psiTag.title = `Base PL: ${plInfo.basePL} + C.O.T. Rank (${currentCharacter.rank || 'Seasoned'}): +${plInfo.cotBonus} + PL Edges: +${plInfo.plEdgeCount} (Max Rank PL: ${plInfo.maxPlForRank})`;
    }

    document.getElementById('char-adv-input').value = currentCharacter.advancements || 4;

    const alloc = currentCharacter.advancementAllocation || { skills: 1, attributes: 1, edges: 2 };
    const advSkillsEl = document.getElementById('char-adv-skills-input');
    if (advSkillsEl) advSkillsEl.value = alloc.skills !== undefined ? alloc.skills : 1;
    const advAttrEl = document.getElementById('char-adv-attr-input');
    if (advAttrEl) advAttrEl.value = alloc.attributes !== undefined ? alloc.attributes : 1;
    const advEdgesEl = document.getElementById('char-adv-edges-input');
    if (advEdgesEl) advEdgesEl.value = alloc.edges !== undefined ? alloc.edges : 2;

    document.getElementById('char-credits-input').value = currentCharacter.credits || 3325;
    document.getElementById('char-concept-input').value = currentCharacter.concept || '';
  }

  function renderActiveBoosts() {
    const container = document.getElementById('active-boosts-container');
    const counter = document.getElementById('active-boosts-counter');
    if (!container || !currentCharacter) return;

    if (!currentCharacter.activeBoosts || !Array.isArray(currentCharacter.activeBoosts)) {
      currentCharacter.activeBoosts = getDefaultActiveBoosts();
    }

    container.innerHTML = '';
    let activeCount = 0;

    if (currentCharacter.activeBoosts.length === 0) {
      container.innerHTML = `
        <div style="grid-column:1/-1; padding:0.85rem; text-align:center; color:var(--text-dim); font-size:0.85rem; border:1px dashed var(--border-subtle); border-radius:var(--radius-sm); background:rgba(10, 18, 32, 0.5);">
          No active boosts or combat modifiers applied. Click <strong style="color:var(--cyan);">+ Add Boost / Modifier</strong> above to apply powers, gear buffs, or ally stance bonuses.
        </div>
      `;
      if (counter) {
        counter.textContent = '0 Active';
        counter.className = 'tag tag-amber';
      }
      return;
    }

    const shortCodes = { agility: 'Agi', strength: 'Str', vigor: 'Vig', instinct: 'Inst', intelligence: 'Int', spirit: 'Spi' };

    currentCharacter.activeBoosts.forEach((b, idx) => {
      const isActive = (b.state && b.state !== 'off');
      if (isActive) activeCount++;

      const card = document.createElement('div');
      card.className = `buff-control-card ${isActive ? 'active-buff' : ''}`;

      const catLower = (b.category || '').toLowerCase();
      const badgeColor = catLower.includes('psion') ? 'violet' : (catLower.includes('gear') ? 'cyan' : (catLower.includes('chem') ? 'emerald' : 'amber'));
      let categoryTag = b.category ? `<span class="tag tag-${badgeColor}">${b.category}</span>` : '';

      let targetNotation = '';
      if (b.type === 'enhance-abilities' && b.targetAttr) {
        const sc = shortCodes[b.targetAttr] || b.targetAttr;
        if (b.state === 'raise') targetNotation = `<span class="tag tag-emerald" style="margin-left:4px; font-weight:bold;">${sc}++</span>`;
        else if (b.state === 'success' || b.state === 'active') targetNotation = `<span class="tag tag-cyan" style="margin-left:4px; font-weight:bold;">${sc}+</span>`;
        else targetNotation = `<span class="tag tag-outline" style="margin-left:4px;">${sc}</span>`;
      } else if (b.targetAttr) {
        const sc = shortCodes[b.targetAttr] || b.targetAttr;
        targetNotation = `<span class="tag tag-outline" style="margin-left:4px;">${sc}</span>`;
      }

      let buttonsHtml = '';
      if (b.hasRaise) {
        buttonsHtml = `
          <div class="tri-state-group" data-boost-idx="${idx}">
            <button class="tri-btn ${b.state === 'off' ? 'active' : ''}" data-boost-val="off">Off</button>
            <button class="tri-btn ${b.state === 'success' ? 'active' : ''}" data-boost-val="success">Success</button>
            <button class="tri-btn ${b.state === 'raise' ? 'active raise-active' : ''}" data-boost-val="raise">Raise</button>
          </div>
        `;
      } else {
        buttonsHtml = `
          <div class="tri-state-group" data-boost-idx="${idx}">
            <button class="tri-btn ${b.state === 'off' ? 'active' : ''}" data-boost-val="off">Off</button>
            <button class="tri-btn ${b.state === 'active' ? 'active' : ''}" data-boost-val="active">Active</button>
          </div>
        `;
      }

      const deleteBtn = `<button class="btn btn-crimson btn-sm" data-delete-boost-idx="${idx}" title="Remove Boost" style="padding:1px 6px; font-size:0.75rem; line-height:1; height:20px;">✕</button>`;

      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:0.4rem; width:100%;">
          <div style="display:flex; flex-direction:column; gap:0.25rem;">
            <div style="display:flex; align-items:center; gap:0.35rem; flex-wrap:wrap;">
              <span class="buff-title" style="font-weight:700; color:#fff; font-size:0.86rem; line-height:1.2;">${b.name}</span>
              ${targetNotation}
            </div>
            <div style="display:flex; align-items:center; gap:0.35rem;">
              ${categoryTag}
              <span class="info-icon" title="${b.desc || ''}">ⓘ
                <span class="tooltip-box">${b.desc || ''}</span>
              </span>
            </div>
          </div>
          ${deleteBtn}
        </div>
        <div style="display:flex; justify-content:flex-end; width:100%; margin-top:0.35rem;">
          ${buttonsHtml}
        </div>
      `;

      container.appendChild(card);
    });

    if (counter) {
      counter.textContent = `${activeCount} Active`;
      counter.className = activeCount > 0 ? 'tag tag-emerald' : 'tag tag-amber';
    }
  }

  function renderAttributesAndStats() {
    if (!currentCharacter) return;

    if (!currentCharacter.tempAttributeMods) {
      currentCharacter.tempAttributeMods = { agility: 0, strength: 0, vigor: 0, instinct: 0, intelligence: 0, spirit: 0 };
    }
    if (!currentCharacter.tempSkillMods) {
      currentCharacter.tempSkillMods = {};
    }

    renderActiveBoosts();

    const state = computeEffectiveCharacterState(currentCharacter);
    const points = calculatePoints(currentCharacter);

    // Points Badges
    const attrBadge = document.getElementById('attr-points-badge');
    if (attrBadge) {
      const attrParts = ['Base 9'];
      if (points.hindranceAttrBonus > 0) attrParts.push(`Hind +${points.hindranceAttrBonus}`);
      if (points.advAttrBonus > 0) attrParts.push(`Adv +${points.advAttrBonus}`);
      const attrFormula = attrParts.join(' + ');
      attrBadge.textContent = `${points.spentAttrPoints} / ${points.totalAttrPointsPool} pts (${attrFormula}) (${points.remAttrPoints} left)`;
      attrBadge.className = points.remAttrPoints < 0 ? 'point-tracker-badge warning' : 'point-tracker-badge';
    }

    const skillBadge = document.getElementById('skill-points-badge');
    if (skillBadge) {
      const parts = ['Base 13'];
      if (points.intBonus > 0) parts.push(`Int +${points.intBonus}`);
      if (points.advSkillBonus > 0) parts.push(`AdvSkills (${points.advSkillCount}x3) +${points.advSkillBonus}`);
      if (points.hindranceSkillBonus > 0) parts.push(`Hind +${points.hindranceSkillBonus}`);
      const formulaStr = parts.join(' + ');
      skillBadge.textContent = `${points.spentSkillPoints} / ${points.totalSkillPointsPool} pts (${formulaStr}) (${points.remSkillPoints} left)`;
      skillBadge.className = points.remSkillPoints < 0 ? 'point-tracker-badge warning' : 'point-tracker-badge';
    }

    // Attributes Grid
    const attrContainer = document.getElementById('attributes-grid');
    if (attrContainer) {
      attrContainer.innerHTML = '';
      const shortCodes = {
        agility: 'Agi',
        strength: 'Str',
        vigor: 'Vig',
        instinct: 'Inst',
        intelligence: 'Int',
        spirit: 'Spi'
      };

      const attrNames = [
        { id: 'agility', name: 'Agility' },
        { id: 'strength', name: 'Strength' },
        { id: 'vigor', name: 'Vigor' },
        { id: 'instinct', name: 'Instinct' },
        { id: 'intelligence', name: 'Intelligence' },
        { id: 'spirit', name: 'Spirit' }
      ];

      attrNames.forEach(attr => {
        const baseVal = state.baseAttributes[attr.id];
        const effVal = state.effectiveAttributes[attr.id];
        const stepOffset = state.attributeSteps[attr.id];
        const isBoosted = stepOffset > 0;
        const customTemp = currentCharacter.tempAttributeMods[attr.id] || 0;
        const rollBonus = state.attributeRollMods[attr.id] || 0;

        const card = document.createElement('div');
        card.className = `attribute-card ${isBoosted ? 'boosted' : ''}`;
        card.innerHTML = `
          <div class="attr-name">${attr.name}</div>
          <div class="attr-die-display" title="Base: ${dieLabel(baseVal)} | Effective: ${dieLabel(effVal)}">
            ${isBoosted ? `${dieLabel(baseVal)}<span style="font-size:1.1rem; color:var(--emerald);"> (${dieLabel(effVal)})</span>` : dieLabel(baseVal)}
          </div>
          ${isBoosted ? `<span class="eff-badge">${formatTraitBoost(shortCodes[attr.id], stepOffset)}</span>` : (stepOffset < 0 ? `<span class="eff-badge penalty">${formatTraitBoost(shortCodes[attr.id], stepOffset)}</span>` : (rollBonus > 0 ? `<span class="eff-badge">+${rollBonus} Rolls</span>` : ''))}
          <div class="attr-controls">
            <button class="attr-btn" data-attr="${attr.id}" data-action="dec" ${baseVal <= 4 ? 'disabled' : ''} title="Lower Base Die">-</button>
            <button class="attr-btn" data-attr="${attr.id}" data-action="inc" ${baseVal >= 14 ? 'disabled' : ''} title="Raise Base Die">+</button>
          </div>
          <div class="temp-step-ctrls" title="Custom Temporary Step Modifier">
            <span style="font-size:0.68rem; color:var(--text-dim);">Temp:</span>
            <button class="temp-step-btn" data-temp-attr="${attr.id}" data-action="dec">-</button>
            <span style="font-size:0.75rem; font-weight:bold; color:var(--amber);">${customTemp >= 0 ? `+${customTemp}` : customTemp}</span>
            <button class="temp-step-btn" data-temp-attr="${attr.id}" data-action="inc">+</button>
          </div>
          <button class="roll-btn" data-roll-type="trait" data-name="${attr.name}" data-die="${effVal}" data-mod="${rollBonus}">Roll ${dieLabel(effVal)}${rollBonus > 0 ? `+${rollBonus}` : ''} 🎲</button>
        `;
        attrContainer.appendChild(card);
      });
    }

    // Derived Stats Update
    const defEl = document.getElementById('stat-defense');
    if (defEl) defEl.textContent = state.defense;
    const defFormula = document.getElementById('stat-defense-formula');
    if (defFormula) {
      defFormula.textContent = `½ Agi (${Math.floor(state.effectiveAttributes.agility/2)}) + ½ Inst (${Math.floor(state.effectiveAttributes.instinct/2)})${state.defMod !== 0 ? ` + Mod (${state.defMod})` : ''}`;
    }

    const discEl = document.getElementById('stat-discipline');
    if (discEl) discEl.textContent = state.discipline;

    const toughEl = document.getElementById('stat-toughness');
    if (toughEl) toughEl.textContent = state.armor > 0 ? `${state.totalToughness} (${state.armor})` : `${state.totalToughness}`;
    const toughFormula = document.getElementById('stat-toughness-formula');
    if (toughFormula) {
      toughFormula.textContent = state.armor > 0
        ? `½ Vigor (${Math.floor(state.effectiveAttributes.vigor/2)}) + ½ Str (${Math.floor(state.effectiveAttributes.strength/2)}) + Armor (${state.armor})`
        : `½ Vigor (${Math.floor(state.effectiveAttributes.vigor/2)}) + ½ Str (${Math.floor(state.effectiveAttributes.strength/2)})`;
    }

    const resEl = document.getElementById('stat-resolve');
    if (resEl) resEl.textContent = state.resolve;

    const speedEl = document.getElementById('stat-speed');
    if (speedEl) speedEl.textContent = `${state.speed}″`;

    // Damage Pips
    const woundsWrap = document.getElementById('wounds-pips-wrap');
    if (woundsWrap) {
      woundsWrap.innerHTML = '';
      for (let i = 1; i <= state.maxWounds; i++) {
        const pip = document.createElement('div');
        pip.className = `pip-box ${i <= (currentCharacter.currentWounds || 0) ? 'checked-wound' : ''}`;
        pip.textContent = i;
        pip.onclick = () => {
          SoundFX.toggle();
          currentCharacter.currentWounds = (currentCharacter.currentWounds === i) ? i - 1 : i;
          saveCharacters();
          renderAttributesAndStats();
          updateQuickTelemetry();
        };
        woundsWrap.appendChild(pip);
      }
    }

    const fatigueWrap = document.getElementById('fatigue-pips-wrap');
    if (fatigueWrap) {
      fatigueWrap.innerHTML = '';
      for (let i = 1; i <= state.maxFatigue; i++) {
        const pip = document.createElement('div');
        pip.className = `pip-box ${i <= (currentCharacter.currentFatigue || 0) ? 'checked-fatigue' : ''}`;
        pip.textContent = i;
        pip.onclick = () => {
          SoundFX.toggle();
          currentCharacter.currentFatigue = (currentCharacter.currentFatigue === i) ? i - 1 : i;
          saveCharacters();
          renderAttributesAndStats();
        };
        fatigueWrap.appendChild(pip);
      }
    }

    const shakenBox = document.getElementById('cond-shaken');
    if (shakenBox) shakenBox.checked = !!currentCharacter.isShaken;
    const distractedBox = document.getElementById('cond-distracted');
    if (distractedBox) distractedBox.checked = !!currentCharacter.isDistracted;
    const vulnerableBox = document.getElementById('cond-vulnerable');
    if (vulnerableBox) vulnerableBox.checked = !!currentCharacter.isVulnerable;
    const psiEnergy = document.getElementById('tracker-psi-energy');
    if (psiEnergy) psiEnergy.value = currentCharacter.currentEnergy || 15;

    // Derived Stats
    setElText('stat-defense', state.defense);
    setElText('stat-discipline', state.discipline);
    setElText('stat-toughness', `${state.baseToughness} (${state.totalToughness})`);
    setElText('stat-armor-val', state.armor);
    setElText('stat-resolve', state.resolve);
    setElText('stat-speed', state.speed);

    // Trackers
    setElText('wound-max-badge', `Max: ${state.maxWounds}`);
    setElText('fatigue-max-badge', `Max: ${state.maxFatigue}`);
  }

  function renderSkillsList() {
    const container = document.getElementById('skills-container');
    if (!container || !window.SC_DATA || !window.SC_DATA.skills || !currentCharacter) return;

    container.innerHTML = '';
    const state = computeEffectiveCharacterState(currentCharacter);
    const shortCodes = { agility: 'Agi', strength: 'Str', vigor: 'Vig', instinct: 'Inst', intelligence: 'Int', spirit: 'Spi' };

    window.SC_DATA.skills.forEach(sk => {
      const skillId = (sk.id || sk.name.toLowerCase().replace(/[^a-z0-9]/g, '')).trim();
      const baseVal = currentCharacter.skills[skillId] || 0;
      const linkedAttr = (sk.attr || SKILL_ATTR_MAP[skillId] || 'Agility').toLowerCase();
      const linkedAttrEff = state.effectiveAttributes[linkedAttr] || 4;
      const linkedAttrStep = state.attributeSteps[linkedAttr] || 0;
      const bonus = state.effectiveSkillBonuses[skillId] || 0;

      const boostTag = linkedAttrStep !== 0 ? formatTraitBoost(shortCodes[linkedAttr] || linkedAttr, linkedAttrStep) : '';

      const row = document.createElement('div');
      row.className = 'skill-row';
      row.innerHTML = `
        <div>
          <span class="skill-name">${sk.name}</span>
          ${sk.core ? '<span class="core-badge">Core</span>' : ''}
          ${bonus > 0 ? `<span class="tag tag-emerald">+${bonus} Buff</span>` : ''}
          ${boostTag ? `<span class="tag tag-cyan" style="margin-left:4px; font-weight:bold;">${boostTag}</span>` : ''}
          <div style="font-size:0.72rem; color:var(--text-dim);">${sk.attr || linkedAttr} (${dieLabel(linkedAttrEff)})</div>
        </div>
        <div style="display:flex; align-items:center; gap:0.35rem;">
          <button class="attr-btn" data-skill="${skillId}" data-action="dec" ${baseVal <= 0 ? 'disabled' : ''}>-</button>
          <span class="skill-die-badge">${dieLabel(baseVal)}</span>
          <button class="attr-btn" data-skill="${skillId}" data-action="inc" ${baseVal >= 14 ? 'disabled' : ''}>+</button>
          <button class="roll-btn" data-roll-type="skill" data-name="${sk.name}" data-die="${baseVal}" data-mod="${bonus}">
            Roll ${dieLabel(baseVal)}${bonus > 0 ? `+${bonus}` : ''} 🎲
          </button>
        </div>
      `;
      container.appendChild(row);
    });
  }

  function renderCharacterPowers() {
    const list = document.getElementById('char-powers-list');
    if (!list || !currentCharacter) return;
    list.innerHTML = '';
    (currentCharacter.powers || []).forEach((p, idx) => {
      const div = document.createElement('div');
      div.className = 'compendium-card';
      div.style.padding = '0.65rem';
      div.innerHTML = `
        <div class="card-top">
          <span class="card-title">${p.name}</span>
          <span class="tag tag-violet">${p.discipline || 'Psionic'}</span>
        </div>
        <div class="card-desc">${p.desc || ''}</div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:0.4rem;">
          <button class="roll-btn" data-roll-type="skill" data-name="Psionics (${p.name})" data-die="${currentCharacter.skills.psionics || 10}">Test Power 🎲</button>
          <button class="btn btn-crimson btn-sm" data-remove-power="${idx}">Remove</button>
        </div>
      `;
      list.appendChild(div);
    });
  }

  function renderCharacterWeapons() {
    const container = document.getElementById('char-weapons-table-body');
    if (!container || !currentCharacter) return;
    container.innerHTML = '';
    const state = computeEffectiveCharacterState(currentCharacter);

    (currentCharacter.weapons || []).forEach((w, idx) => {
      const tr = document.createElement('tr');
      const isRanged = w.range && w.range !== 'Melee';
      const attackSkillDie = isRanged ? (currentCharacter.skills.ranged || 6) : (currentCharacter.skills.melee || 8);
      const skillName = isRanged ? 'Ranged' : 'Melee';
      const skillBonus = state.effectiveSkillBonuses[isRanged ? 'ranged' : 'melee'] || 0;

      let apBonus = 0;
      if ((currentCharacter.trainingPath || 'ghost') === 'ghost') {
        apBonus = (w.name && w.name.toLowerCase().includes('c-10')) ? 4 : 2;
      }
      const totalAp = (w.ap || 0) + apBonus;

      tr.innerHTML = `
        <td style="font-weight:bold; color:#fff;">${w.name}</td>
        <td><span class="tag tag-cyan">${w.range}</span></td>
        <td><span class="tag tag-amber">${w.damage}</span></td>
        <td><span class="tag tag-emerald">AP ${totalAp}${apBonus > 0 ? ` (+${apBonus} Ghost)` : ''}</span></td>
        <td style="font-size:0.8rem; color:var(--text-muted);">${w.notes || ''}</td>
        <td>
          <div style="display:flex; gap:0.35rem;">
            <button class="roll-btn" data-roll-type="skill" data-name="${skillName} (${w.name})" data-die="${attackSkillDie}" data-mod="${skillBonus}">Attack${skillBonus > 0 ? `+${skillBonus}` : ''}</button>
            <button class="roll-btn" data-roll-type="damage" data-name="${w.name} Damage" data-damage="${w.damage}" data-ap="${totalAp}">Dmg</button>
            <button class="btn btn-crimson btn-sm" data-remove-weapon="${idx}">✕</button>
          </div>
        </td>
      `;
      container.appendChild(tr);
    });
  }

  function renderCharacterArmorGear() {
    const armorWrap = document.getElementById('char-armor-display');
    if (armorWrap && currentCharacter) {
      const arm = currentCharacter.armor;
      const state = computeEffectiveCharacterState(currentCharacter);
      const hasActiveArmorBoost = state.armor > 0;

      if (arm && arm.value && arm.name !== 'Unarmored' && arm.name !== 'None') {
        const bonusArmor = state.armor - (arm.value || 0);
        armorWrap.innerHTML = `
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
            <div>
              <strong style="color:#fff; font-size:0.95rem;">${arm.name}</strong>
              <span class="tag tag-amber" style="margin-left:6px;">${arm.class || 'Armor'}</span>
              <span class="tag tag-emerald" style="margin-left:4px;">+${state.armor} Armor${bonusArmor > 0 ? ` (+${bonusArmor} Field)` : ''}</span>
              ${arm.boost ? `<span class="tag tag-cyan" style="margin-left:4px; font-weight:bold;">${arm.boost}</span>` : ''}
              ${arm.defMod ? `<span class="tag tag-crimson" style="margin-left:4px;">Def ${arm.defMod}</span>` : ''}
              ${!hasActiveArmorBoost ? `<span class="tag tag-crimson" style="margin-left:4px;">(Boost Deactivated / Removed)</span>` : ''}
            </div>
            <div style="display:flex; gap:0.4rem; align-items:center;">
              <button id="unequip-armor-btn" class="btn btn-sm btn-crimson" style="padding:2px 8px;">Unequip</button>
            </div>
          </div>
          <div style="font-size:0.78rem; color:var(--text-muted); margin-top:0.35rem;">
            ${arm.traits ? `<strong>Traits:</strong> ${arm.traits}<br>` : ''}
            ${arm.mounted ? `<strong>Mounted:</strong> ${arm.mounted}<br>` : ''}
            ${arm.notes || ''}
          </div>
        `;
      } else {
        armorWrap.innerHTML = `
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span style="color:var(--text-dim); font-size:0.85rem;">No armor currently equipped (Unarmored: 0 Armor).</span>
            <a href="#sec-armors" class="btn btn-sm btn-cyan" style="padding:2px 8px; text-decoration:none;">Open Armory</a>
          </div>
        `;
      }
    }

    const gearList = document.getElementById('char-gear-list');
    if (gearList && currentCharacter) {
      gearList.innerHTML = '';
      (currentCharacter.gear || []).forEach((g, idx) => {
        const div = document.createElement('div');
        div.style.display = 'flex';
        div.style.justifyContent = 'space-between';
        div.style.padding = '0.3rem 0';
        div.style.borderBottom = '1px solid var(--border-subtle)';
        div.innerHTML = `
          <div><strong style="color:#fff;">${g.name}</strong> <span style="color:var(--text-dim); font-size:0.75rem;">(${g.notes || ''})</span></div>
          <div style="display:flex; gap:0.4rem; align-items:center;">
            <span class="tag tag-cyan">x${g.count || 1}</span>
            <button class="btn btn-crimson btn-sm" data-remove-gear="${idx}">✕</button>
          </div>
        `;
        gearList.appendChild(div);
      });
    }
  }

  function renderCharacterCybernetics() {
    const list = document.getElementById('char-cybernetics-list');
    if (!list || !currentCharacter) return;
    list.innerHTML = '';
    let totalPoints = 0;
    (currentCharacter.cybernetics || []).forEach((c, idx) => {
      totalPoints += (c.points || 1);
      const div = document.createElement('div');
      div.className = 'compendium-card';
      div.style.padding = '0.5rem';
      div.innerHTML = `
        <div class="card-top">
          <span class="card-title">${c.name}</span>
          <span class="tag tag-cyan">${c.points || 1} Cyber Point</span>
        </div>
        <div class="card-desc">${c.desc || ''}</div>
        <div style="text-align:right; margin-top:0.3rem;">
          <button class="btn btn-crimson btn-sm" data-remove-cyber="${idx}">Remove</button>
        </div>
      `;
      list.appendChild(div);
    });

    const ptsBadge = document.getElementById('cyber-points-badge');
    if (ptsBadge) {
      const state = computeEffectiveCharacterState(currentCharacter);
      const maxPts = Math.floor(state.effectiveAttributes.vigor / 2);
      ptsBadge.textContent = `${totalPoints} / ${maxPts} Points Used`;
      ptsBadge.className = totalPoints > maxPts ? 'point-tracker-badge warning' : 'point-tracker-badge';
    }
  }

  function renderCharacterHindrances() {
    const list = document.getElementById('char-hindrances-list');
    if (!list || !currentCharacter) return;
    list.innerHTML = '';
    const hindrances = currentCharacter.hindrances || [];
    let totalPoints = 0;

    hindrances.forEach((h, idx) => {
      const pts = (h.type === 'Major' || h.type === 'major') ? 2 : 1;
      totalPoints += pts;
      const div = document.createElement('div');
      div.className = 'compendium-card';
      div.style.padding = '0.6rem';
      div.style.marginBottom = '0.4rem';
      div.innerHTML = `
        <div class="card-top">
          <strong style="color:#fff; font-size:0.9rem;">${h.name}</strong>
          <span class="tag tag-crimson">${h.type || 'Minor'} (${pts} pt)</span>
        </div>
        <div class="card-desc" style="font-size:0.8rem; margin-top:0.25rem;">${h.desc || ''}</div>
        <div style="display:flex; justify-content:flex-end; margin-top:0.35rem;">
          <button class="btn btn-crimson btn-sm" data-remove-hindrance="${idx}" style="padding:1px 6px; font-size:0.75rem;">Remove</button>
        </div>
      `;
      list.appendChild(div);
    });

    const badge = document.getElementById('hindrance-points-badge');
    if (badge) {
      badge.textContent = `${totalPoints} / 4 Pts`;
      badge.className = totalPoints > 4 ? 'tag tag-crimson' : 'tag tag-amber';
    }
  }

  function renderCharacterEdges() {
    const list = document.getElementById('char-edges-list');
    if (!list || !currentCharacter) return;
    list.innerHTML = '';
    const edges = currentCharacter.edges || [];

    edges.forEach((e, idx) => {
      const isPlEdge = (e.name || '').toLowerCase().includes('psionic level') || (e.name || '').toLowerCase().includes('psi level') || (e.name || '').toLowerCase().includes('pl increase');
      const div = document.createElement('div');
      div.className = 'compendium-card';
      div.style.padding = '0.6rem';
      div.style.marginBottom = '0.4rem';
      div.innerHTML = `
        <div class="card-top">
          <strong style="color:#fff; font-size:0.9rem;">${e.name}</strong>
          <div>
            ${isPlEdge ? '<span class="tag tag-violet" style="margin-right:4px;">+1 PL Edge</span>' : ''}
            <span class="tag tag-amber">${e.req || 'Edge'}</span>
          </div>
        </div>
        <div class="card-desc" style="font-size:0.8rem; margin-top:0.25rem;">${e.desc || ''}</div>
        <div style="display:flex; justify-content:flex-end; margin-top:0.35rem;">
          <button class="btn btn-crimson btn-sm" data-remove-edge="${idx}" style="padding:1px 6px; font-size:0.75rem;">Remove</button>
        </div>
      `;
      list.appendChild(div);
    });
  }

  function updateQuickTelemetry() {
    if (!currentCharacter) return;
    const dName = document.getElementById('dossier-name');
    if (dName) dName.textContent = currentCharacter.name || 'Operative';
    const dCode = document.getElementById('dossier-codename');
    if (dCode) dCode.textContent = currentCharacter.codename || 'Ghost Unit';
    const dConcept = document.getElementById('dossier-concept');
    if (dConcept) dConcept.textContent = currentCharacter.concept || '';

    const state = computeEffectiveCharacterState(currentCharacter);

    const tDef = document.getElementById('telemetry-defense');
    if (tDef) tDef.textContent = state.defense;
    const tTough = document.getElementById('telemetry-toughness');
    if (tTough) tTough.textContent = state.armor > 0 ? `${state.totalToughness} (${state.armor})` : `${state.totalToughness}`;
    const tDisc = document.getElementById('telemetry-discipline');
    if (tDisc) tDisc.textContent = state.discipline;
    const tRes = document.getElementById('telemetry-resolve');
    if (tRes) tRes.textContent = state.resolve;
  }

  function updateCharacterSelector() {
    const sel = document.getElementById('global-character-select');
    if (!sel) return;
    sel.innerHTML = '';
    characters.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.id;
      opt.textContent = `${c.name} (${c.codename || 'Operative'})`;
      if (currentCharacter && c.id === currentCharacter.id) opt.selected = true;
      sel.appendChild(opt);
    });
  }

  // --- Dice & Combat Action Engine ---
  function rollExplodingDie(sides) {
    let total = 0;
    let rolls = [];
    let r = 0;
    do {
      r = Math.floor(Math.random() * sides) + 1;
      rolls.push(r);
      total += r;
    } while (r === sides && sides > 1);
    return { total, rolls };
  }

  function executeTraitRoll(name, dieVal, modifier = 0, isWild = true) {
    SoundFX.roll();
    const traitRoll = rollExplodingDie(dieVal);
    let wildRoll = null;
    if (isWild) wildRoll = rollExplodingDie(6);

    let bestDie = traitRoll.total;
    let bestType = `d${dieVal}`;
    if (wildRoll && wildRoll.total > bestDie) {
      bestDie = wildRoll.total;
      bestType = 'Wild d6';
    }

    const finalTotal = bestDie + modifier;
    const isCriticalFailure = (traitRoll.rolls[0] === 1 && (wildRoll ? wildRoll.rolls[0] === 1 : true));
    const isSuccess = !isCriticalFailure && finalTotal >= 4;
    const isRaise = !isCriticalFailure && finalTotal >= 8;
    const raises = isRaise ? Math.floor((finalTotal - 4) / 4) : 0;

    let resultText = '';
    let resultClass = '';

    if (isCriticalFailure) {
      resultText = 'CRITICAL FAILURE! (Snake Eyes)';
      resultClass = 'crit-fail';
      SoundFX.alert();
    } else if (isRaise) {
      resultText = `SUCCESS WITH ${raises} RAISE${raises > 1 ? 'S' : ''}!`;
      resultClass = 'crit-success';
      SoundFX.success();
    } else if (isSuccess) {
      resultText = 'SUCCESS (Target 4 Achieved)';
      resultClass = 'success';
      SoundFX.success();
    } else {
      resultText = 'FAILURE (Missed Target 4)';
      resultClass = 'failure';
    }

    logToTerminal({
      name,
      finalTotal,
      resultText,
      resultClass,
      details: `Trait d${dieVal}: [${traitRoll.rolls.join(', ')}] = ${traitRoll.total}${wildRoll ? ` | Wild d6: [${wildRoll.rolls.join(', ')}] = ${wildRoll.total}` : ''}${modifier ? ` | Mod: ${modifier > 0 ? '+' : ''}${modifier}` : ''}`
    });

    openDiceDrawer();
  }

  function executeDamageRoll(name, damageExpr, ap = 0) {
    SoundFX.roll();
    let total = 0;
    let breakdown = [];

    const parts = damageExpr.toLowerCase().replace(/\s+/g, '').split('+');
    parts.forEach(part => {
      if (part === 'str') {
        const state = computeEffectiveCharacterState(currentCharacter);
        const strEff = state.effectiveAttributes.strength || 6;
        const res = rollExplodingDie(strEff);
        total += res.total;
        breakdown.push(`Str(d${strEff}): [${res.rolls.join(',')}]`);
      } else if (part.includes('d')) {
        const [cntStr, sideStr] = part.split('d');
        const count = cntStr ? parseInt(cntStr, 10) : 1;
        const sides = parseInt(sideStr, 10);
        let partTotal = 0;
        let pRolls = [];
        for (let i = 0; i < count; i++) {
          const res = rollExplodingDie(sides);
          partTotal += res.total;
          pRolls.push(res.rolls.join(','));
        }
        total += partTotal;
        breakdown.push(`${part}: [${pRolls.join(' + ')}]`);
      } else {
        const flat = parseInt(part, 10) || 0;
        total += flat;
        breakdown.push(`+${flat}`);
      }
    });

    SoundFX.success();
    logToTerminal({
      name: `${name} (Damage Roll)`,
      finalTotal: total,
      resultText: `Damage: ${total} Total (AP ${ap})`,
      resultClass: total >= 12 ? 'crit-success' : 'success',
      details: `${damageExpr} => ${breakdown.join(' + ')} (AP: ${ap})`
    });

    openDiceDrawer();
  }

  function openDiceDrawer() {
    const drawer = document.getElementById('dice-drawer');
    if (drawer && !drawer.classList.contains('active')) {
      drawer.classList.add('active');
    }
  }

  function logToTerminal(data) {
    const screen = document.getElementById('terminal-screen-logs');
    if (!screen) return;

    const timeStr = new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const logItem = document.createElement('div');
    logItem.className = 'log-entry';
    logItem.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span class="log-title">${data.name}</span>
        <span class="log-time">[${timeStr}]</span>
      </div>
      <div style="display:flex; align-items:center; gap:0.75rem; margin:0.35rem 0;">
        <span class="log-total">${data.finalTotal}</span>
        <span class="log-status ${data.resultClass}">${data.resultText}</span>
      </div>
      <div class="log-details">${data.details}</div>
    `;

    screen.insertBefore(logItem, screen.firstChild);
    while (screen.children.length > 50) {
      screen.removeChild(screen.lastChild);
    }
  }

  function debounce(fn, delay) {
    let timer = null;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  function setupEventListeners() {
    // Sidebar toggle
    document.getElementById('toggle-sidebar-btn')?.addEventListener('click', () => {
      document.getElementById('doc-sidebar')?.classList.toggle('collapsed');
    });

    // Theme toggle
    document.getElementById('theme-toggle-btn')?.addEventListener('click', () => {
      document.body.classList.toggle('theme-light');
      SoundFX.click();
    });

    // Print button
    document.getElementById('print-doc-btn')?.addEventListener('click', () => {
      window.print();
    });

    // Character Sheet Jump Button
    document.getElementById('toggle-sheet-btn')?.addEventListener('click', () => {
      document.getElementById('sec-character-sheet')?.scrollIntoView({ behavior: 'smooth' });
    });

    // Dice drawer toggle
    document.getElementById('toggle-dice-drawer-btn')?.addEventListener('click', () => {
      document.getElementById('dice-drawer')?.classList.toggle('active');
    });

    document.getElementById('close-dice-drawer-btn')?.addEventListener('click', () => {
      document.getElementById('dice-drawer')?.classList.remove('active');
    });

    // Clear logs
    document.getElementById('clear-terminal-logs-btn')?.addEventListener('click', () => {
      const screen = document.getElementById('terminal-screen-logs');
      if (screen) screen.innerHTML = '<div class="terminal-line dim">Terminal reset. Ready for operations.</div>';
    });

    // Global Document Search
    const searchBox = document.getElementById('global-doc-search');
    if (searchBox) {
      searchBox.addEventListener('input', debounce(e => {
        const q = e.target.value.toLowerCase().trim();
        if (!q) return;

        const matches = document.querySelectorAll('.doc-h2, .doc-h3, .compendium-card, .doc-card');
        for (let el of matches) {
          if (el.textContent.toLowerCase().includes(q)) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            el.style.outline = '2px solid var(--cyan)';
            setTimeout(() => el.style.outline = 'none', 1200);
            break;
          }
        }
      }, 200));

      window.addEventListener('keydown', e => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
          e.preventDefault();
          searchBox.focus();
          searchBox.select();
        }
      });
    }

    // Filter Hindrances
    document.getElementById('hindrance-filter-input')?.addEventListener('input', debounce(e => {
      const q = e.target.value.toLowerCase();
      document.querySelectorAll('#hindrances-grid-container [data-hind-item]').forEach(el => {
        el.style.display = el.getAttribute('data-hind-item').includes(q) || el.textContent.toLowerCase().includes(q) ? 'flex' : 'none';
      });
    }, 150));

    // Filter Edges
    document.getElementById('edge-filter-input')?.addEventListener('input', debounce(e => {
      const q = e.target.value.toLowerCase();
      document.querySelectorAll('#edges-grid-container [data-edge-item]').forEach(el => {
        el.style.display = el.getAttribute('data-edge-item').includes(q) || el.textContent.toLowerCase().includes(q) ? 'flex' : 'none';
      });
    }, 150));

    // Filter Psionics
    document.querySelectorAll('.filter-btn[data-psi-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        SoundFX.click();
        document.querySelectorAll('.filter-btn[data-psi-filter]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-psi-filter');

        document.querySelectorAll('#psionics-grid-container [data-power-disc]').forEach(el => {
          el.style.display = (filter === 'all' || el.getAttribute('data-power-disc').toLowerCase() === filter.toLowerCase()) ? 'flex' : 'none';
        });
      });
    });

    // Quick Dice buttons inside drawer
    document.querySelectorAll('.dice-btn[data-quick-die]').forEach(btn => {
      btn.addEventListener('click', () => {
        const sides = parseInt(btn.getAttribute('data-quick-die'), 10);
        const mod = parseInt(document.getElementById('term-modifier-input')?.value, 10) || 0;
        const useWild = document.getElementById('term-wild-die-toggle')?.checked ?? true;
        executeTraitRoll(`Quick d${sides}`, sides, mod, useWild);
      });
    });

    // Character Management Events
    document.getElementById('global-character-select')?.addEventListener('change', e => {
      const found = characters.find(c => c.id === e.target.value);
      if (found) {
        currentCharacter = found;
        saveCharacters();
        renderAll();
      }
    });

    document.getElementById('new-character-btn')?.addEventListener('click', () => {
      const newChar = getDefaultCharacter();
      newChar.id = 'char_' + Date.now();
      newChar.name = 'New Operative';
      characters.push(newChar);
      currentCharacter = newChar;
      saveCharacters();
      renderAll();
    });

    document.getElementById('delete-character-btn')?.addEventListener('click', () => {
      if (characters.length <= 1) return alert('At least one character profile must remain.');
      if (confirm(`Delete ${currentCharacter.name}?`)) {
        characters = characters.filter(c => c.id !== currentCharacter.id);
        currentCharacter = characters[0];
        saveCharacters();
        renderAll();
      }
    });

    document.getElementById('export-json-btn')?.addEventListener('click', () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(currentCharacter, null, 2));
      const a = document.createElement('a');
      a.setAttribute("href", dataStr);
      a.setAttribute("download", `${(currentCharacter.name || 'ghost_character').replace(/\s+/g, '_')}.json`);
      document.body.appendChild(a);
      a.click();
      a.remove();
    });

    document.getElementById('import-json-btn')?.addEventListener('click', () => {
      document.getElementById('import-file-input')?.click();
    });

    document.getElementById('import-file-input')?.addEventListener('change', e => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = evt => {
        try {
          const imported = JSON.parse(evt.target.result);
          if (imported && imported.name) {
            imported.id = 'char_' + Date.now();
            characters.push(imported);
            currentCharacter = imported;
            saveCharacters();
            renderAll();
            alert(`Imported ${imported.name} successfully!`);
          }
        } catch (err) {
          alert('Invalid character JSON format.');
        }
      };
      reader.readAsText(file);
    });

    // Inputs live binding
    const bindInput = (id, prop, reCalc = false) => {
      const el = document.getElementById(id);
      if (el) {
        const handler = () => {
          if (currentCharacter) {
            currentCharacter[prop] = el.value;
            saveCharacters();
            updateCharacterSelector();
            updateQuickTelemetry();
            if (reCalc) renderAttributesAndStats();
          }
        };
        el.addEventListener('input', handler);
        el.addEventListener('change', handler);
      }
    };

    bindInput('char-name-input', 'name');
    bindInput('char-codename-input', 'codename');
    bindInput('char-homeworld-select', 'homeworld', true);

    const rankSelect = document.getElementById('char-rank-select');
    if (rankSelect) {
      rankSelect.addEventListener('change', (e) => {
        if (!currentCharacter) return;
        const newRank = e.target.value;
        currentCharacter.rank = newRank;
        const info = RANK_COT_MAP[newRank];
        if (info) {
          currentCharacter.cotLevel = info.cotLevel;
          const cotSelect = document.getElementById('char-cot-select');
          if (cotSelect) cotSelect.value = info.cotLevel;
          const newPlInfo = computeEffectivePsiRating(currentCharacter);
          currentCharacter.psiRating = newPlInfo.calculatedPL;
        }
        saveCharacters();
        renderAll();
      });
    }

    bindInput('char-cot-select', 'cotLevel', true);
    bindInput('char-training-select', 'trainingPath', true);
    bindInput('char-psi-input', 'psiRating', true);
    bindInput('char-adv-input', 'advancements', true);

    const bindNestedInput = (id, parentProp, childProp, reCalc = false) => {
      const el = document.getElementById(id);
      if (!el) return;
      const handler = (e) => {
        if (!currentCharacter) return;
        if (!currentCharacter[parentProp]) currentCharacter[parentProp] = {};
        const val = e.target.type === 'number' ? (parseInt(e.target.value, 10) || 0) : e.target.value;
        currentCharacter[parentProp][childProp] = val;
        saveCharacters();
        if (reCalc) renderAll();
      };
      el.addEventListener('input', handler);
      el.addEventListener('change', handler);
    };

    bindNestedInput('char-adv-skills-input', 'advancementAllocation', 'skills', true);
    bindNestedInput('char-adv-attr-input', 'advancementAllocation', 'attributes', true);
    bindNestedInput('char-adv-edges-input', 'advancementAllocation', 'edges', true);

    bindInput('char-credits-input', 'credits');
    bindInput('char-concept-input', 'concept');

    // --- Add Boost UI Setup ---
    const addBoostPanel = document.getElementById('add-boost-panel');
    const btnToggleAddBoost = document.getElementById('btn-toggle-add-boost');
    const btnCloseAddBoost = document.getElementById('btn-close-add-boost');
    const btnCancelAddBoost = document.getElementById('btn-cancel-add-boost');
    const btnConfirmAddBoost = document.getElementById('btn-confirm-add-boost');
    const selBoostTemplate = document.getElementById('new-boost-template');
    const grpTargetAttr = document.getElementById('grp-boost-target-attr');
    const grpBoostLevel = document.getElementById('grp-boost-level');
    const grpCustomFields = document.getElementById('grp-custom-fields');

    const toggleBoostPanel = (open) => {
      if (!addBoostPanel) return;
      if (open === undefined) {
        addBoostPanel.classList.toggle('open');
      } else if (open) {
        addBoostPanel.classList.add('open');
      } else {
        addBoostPanel.classList.remove('open');
      }
      SoundFX.click();
    };

    btnToggleAddBoost?.addEventListener('click', () => toggleBoostPanel());
    btnCloseAddBoost?.addEventListener('click', () => toggleBoostPanel(false));
    btnCancelAddBoost?.addEventListener('click', () => toggleBoostPanel(false));

    if (selBoostTemplate) {
      selBoostTemplate.addEventListener('change', () => {
        const val = selBoostTemplate.value;
        if (val === 'enhance-abilities') {
          if (grpTargetAttr) grpTargetAttr.style.display = 'block';
          if (grpBoostLevel) grpBoostLevel.style.display = 'block';
          if (grpCustomFields) grpCustomFields.style.display = 'none';
        } else if (val === 'muscular-enh' || val === 'thought-block') {
          if (grpTargetAttr) grpTargetAttr.style.display = 'none';
          if (grpBoostLevel) grpBoostLevel.style.display = 'block';
          if (grpCustomFields) grpCustomFields.style.display = 'none';
        } else if (val === 'stimpack' || val === 'digital-uplink' || val === 'hes-suit') {
          if (grpTargetAttr) grpTargetAttr.style.display = 'none';
          if (grpBoostLevel) grpBoostLevel.style.display = 'none';
          if (grpCustomFields) grpCustomFields.style.display = 'none';
        } else if (val === 'custom') {
          if (grpTargetAttr) grpTargetAttr.style.display = 'block';
          if (grpBoostLevel) grpBoostLevel.style.display = 'none';
          if (grpCustomFields) grpCustomFields.style.display = 'block';
        }
      });
    }

    btnConfirmAddBoost?.addEventListener('click', () => {
      if (!currentCharacter) return;
      if (!currentCharacter.activeBoosts) currentCharacter.activeBoosts = getDefaultActiveBoosts();

      const template = selBoostTemplate ? selBoostTemplate.value : 'enhance-abilities';
      const targetAttr = document.getElementById('new-boost-target-attr')?.value || 'agility';
      const stance = document.getElementById('new-boost-level')?.value || 'success';
      const shortCodes = { agility: 'Agi', strength: 'Str', vigor: 'Vig', instinct: 'Inst', intelligence: 'Int', spirit: 'Spi' };
      const attrCap = targetAttr.charAt(0).toUpperCase() + targetAttr.slice(1);
      const sc = shortCodes[targetAttr] || attrCap;

      let newBoost = null;

      if (template === 'enhance-abilities') {
        newBoost = {
          id: 'boost_' + Date.now(),
          name: `Enhance Abilities (${attrCap})`,
          category: 'Psionics (PL 3)',
          type: 'enhance-abilities',
          targetAttr: targetAttr,
          state: stance,
          hasRaise: true,
          desc: `+1 die step (${sc}+) on Success, +2 die steps (${sc}++) on Raise to ${attrCap} and its linked skills.`,
          mutations: {
            attrSteps: { [targetAttr]: 1 },
            linkedAttrSkillMods: { [targetAttr]: 1 }
          },
          raiseMutations: {
            attrSteps: { [targetAttr]: 2 },
            linkedAttrSkillMods: { [targetAttr]: 2 }
          }
        };
      } else if (template === 'muscular-enh') {
        newBoost = {
          id: 'boost_' + Date.now(),
          name: 'Muscular Enhancement',
          category: 'Psionics (PL 4)',
          type: 'muscular-enh',
          state: stance,
          hasRaise: true,
          desc: '+1 (+2 on Raise) to Strength rolls, Athletics, Stealth, and Vigor tests vs extreme environments/fatigue/disease/poison.',
          mutations: {
            attrRollMods: { strength: 1 },
            skillRollMods: { athletics: 1, stealth: 1 }
          },
          raiseMutations: {
            attrRollMods: { strength: 2 },
            skillRollMods: { athletics: 2, stealth: 2 }
          }
        };
      } else if (template === 'thought-block') {
        newBoost = {
          id: 'boost_' + Date.now(),
          name: 'Thought Blocking',
          category: 'Psionics',
          type: 'thought-block',
          state: stance,
          hasRaise: true,
          desc: '+1 (+3 on Raise) to Discipline and Resolve.',
          mutations: {
            disciplineMod: 1,
            resolveMod: 1
          },
          raiseMutations: {
            disciplineMod: 3,
            resolveMod: 3
          }
        };
      } else if (template === 'stimpack') {
        newBoost = {
          id: 'boost_' + Date.now(),
          name: 'Military Stimpack',
          category: 'Chemical',
          type: 'stimpack',
          state: 'active',
          hasRaise: false,
          desc: '+2 Speed and Agi+ for the combat encounter.',
          mutations: {
            attrSteps: { agility: 1 },
            speedMod: 2
          }
        };
      } else if (template === 'digital-uplink') {
        newBoost = {
          id: 'boost_' + Date.now(),
          name: 'Digital Uplink II',
          category: 'Gear',
          type: 'digital-uplink',
          state: 'active',
          hasRaise: false,
          desc: '+1 trait bonus to tech & tactical skills.',
          mutations: {
            skillRollMods: {
              computers: 1, engineering: 1, lore: 1, medicine: 1, science: 1, tactics: 1, perception: 1, pilot: 1, ranged: 1
            }
          }
        };
      } else if (template === 'hes-suit') {
        newBoost = {
          id: 'boost_hes_suit',
          name: 'Hostile Environment Suit',
          category: 'Gear',
          type: 'hes-suit',
          targetAttr: 'strength',
          state: 'active',
          hasRaise: false,
          desc: 'Hermetic Ghost suit granting Str+ and +8 Armor to Toughness.',
          mutations: {
            attrSteps: { strength: 1 },
            armor: 8
          }
        };
      } else if (template === 'custom') {
        const customName = document.getElementById('new-boost-custom-name')?.value.trim() || 'Custom Trait Boost';
        const customType = document.getElementById('new-boost-custom-type')?.value || 'attr-step';
        
        const mut = {};
        if (customType === 'attr-step') mut.attrSteps = { [targetAttr]: 1 };
        else if (customType === 'attr-step-2') mut.attrSteps = { [targetAttr]: 2 };
        else if (customType === 'roll-1') { mut.attrRollMods = { [targetAttr]: 1 }; mut.linkedAttrSkillMods = { [targetAttr]: 1 }; }
        else if (customType === 'roll-2') { mut.attrRollMods = { [targetAttr]: 2 }; mut.linkedAttrSkillMods = { [targetAttr]: 2 }; }
        else if (customType === 'armor-4') mut.armor = 4;
        else if (customType === 'def-2') mut.defMod = 2;
        else if (customType === 'speed-2') mut.speedMod = 2;

        newBoost = {
          id: 'boost_' + Date.now(),
          name: customName,
          category: 'Custom / Ally',
          type: 'custom',
          customType: customType,
          targetAttr: targetAttr,
          state: 'active',
          hasRaise: false,
          desc: `Custom modifier targeting ${attrCap} (${customType}).`,
          mutations: mut
        };
      }

      if (newBoost) {
        currentCharacter.activeBoosts.push(newBoost);
        SoundFX.success();
        saveCharacters();
        toggleBoostPanel(false);
        renderAttributesAndStats();
        renderSkillsList();
        renderCharacterWeapons();
        updateQuickTelemetry();
      }
    });

    // Unified Global Click Listener
    document.addEventListener('click', e => {
      // Dynamic Boost Segmented Buttons
      const triBtn = e.target.closest('.tri-btn[data-boost-val]');
      if (triBtn) {
        const group = triBtn.closest('.tri-state-group[data-boost-idx]');
        if (!group) return;
        const idx = parseInt(group.getAttribute('data-boost-idx'), 10);
        const val = triBtn.getAttribute('data-boost-val');

        if (currentCharacter && currentCharacter.activeBoosts && currentCharacter.activeBoosts[idx]) {
          currentCharacter.activeBoosts[idx].state = val;
          SoundFX.toggle();
          saveCharacters();
          renderAttributesAndStats();
          renderSkillsList();
          renderCharacterWeapons();
          updateQuickTelemetry();
        }
        return;
      }

      // Delete Boost Button
      const delBoostBtn = e.target.closest('button[data-delete-boost-idx]');
      if (delBoostBtn) {
        const idx = parseInt(delBoostBtn.getAttribute('data-delete-boost-idx'), 10);
        if (currentCharacter && currentCharacter.activeBoosts && currentCharacter.activeBoosts[idx] !== undefined) {
          currentCharacter.activeBoosts.splice(idx, 1);
          SoundFX.toggle();
          saveCharacters();
          renderAttributesAndStats();
          renderSkillsList();
          renderCharacterWeapons();
          updateQuickTelemetry();
        }
        return;
      }

      // Temp Attribute Step
      const tempAttrBtn = e.target.closest('.temp-step-btn[data-temp-attr]');
      if (tempAttrBtn) {
        const attr = tempAttrBtn.getAttribute('data-temp-attr');
        const action = tempAttrBtn.getAttribute('data-action');
        if (!currentCharacter.tempAttributeMods) currentCharacter.tempAttributeMods = {};
        const currentTemp = currentCharacter.tempAttributeMods[attr] || 0;

        if (action === 'inc') currentCharacter.tempAttributeMods[attr] = currentTemp + 1;
        else if (action === 'dec') currentCharacter.tempAttributeMods[attr] = currentTemp - 1;

        SoundFX.click();
        saveCharacters();
        renderAttributesAndStats();
        updateQuickTelemetry();
        return;
      }

      // Base Attribute Buttons
      const attrBtn = e.target.closest('.attr-btn[data-attr]');
      if (attrBtn) {
        const attr = attrBtn.getAttribute('data-attr');
        const action = attrBtn.getAttribute('data-action');
        const val = currentCharacter.attributes[attr] || 4;
        const idx = DIE_STEPS.indexOf(val);

        if (action === 'inc' && idx < DIE_STEPS.length - 1) currentCharacter.attributes[attr] = DIE_STEPS[idx + 1];
        else if (action === 'dec' && idx > 0) currentCharacter.attributes[attr] = DIE_STEPS[idx - 1];

        SoundFX.click();
        saveCharacters();
        renderAttributesAndStats();
        updateQuickTelemetry();
        return;
      }

      // Skill Step Buttons
      const skillBtn = e.target.closest('.attr-btn[data-skill]');
      if (skillBtn) {
        const skill = skillBtn.getAttribute('data-skill');
        const action = skillBtn.getAttribute('data-action');
        const val = currentCharacter.skills[skill] || 0;
        const idx = DIE_STEPS.indexOf(val);

        if (action === 'inc') {
          if (val === 0) currentCharacter.skills[skill] = 4;
          else if (idx < DIE_STEPS.length - 1) currentCharacter.skills[skill] = DIE_STEPS[idx + 1];
        } else if (action === 'dec') {
          if (idx === 0) currentCharacter.skills[skill] = 0;
          else if (idx > 0) currentCharacter.skills[skill] = DIE_STEPS[idx - 1];
        }

        SoundFX.click();
        saveCharacters();
        renderSkillsList();
        renderAttributesAndStats();
        return;
      }

      // Roll Buttons
      const rollBtn = e.target.closest('.roll-btn[data-roll-type]');
      if (rollBtn) {
        const type = rollBtn.getAttribute('data-roll-type');
        const name = rollBtn.getAttribute('data-name');
        const die = parseInt(rollBtn.getAttribute('data-die'), 10) || 4;
        const mod = parseInt(rollBtn.getAttribute('data-mod'), 10) || 0;
        if (type === 'trait' || type === 'skill') executeTraitRoll(name, die, mod, true);
        else if (type === 'damage') {
          const dmg = rollBtn.getAttribute('data-damage');
          const ap = parseInt(rollBtn.getAttribute('data-ap'), 10) || 0;
          executeDamageRoll(name, dmg, ap);
        }
        return;
      }

      // Armory & Catalog Interactions
      const addWep = e.target.closest('button[data-armory-add-weapon]');
      if (addWep) {
        const name = addWep.getAttribute('data-armory-add-weapon');
        const data = window.SC_DATA?.weapons?.find(w => w.name === name);
        if (data) {
          if (!currentCharacter.weapons) currentCharacter.weapons = [];
          currentCharacter.weapons.push({ name: data.name, range: data.range, damage: data.damage, ap: data.ap, notes: data.notes });
          SoundFX.success();
          saveCharacters();
          renderCharacterWeapons();
          alert(`Added "${data.name}" to equipped weapons.`);
        }
        return;
      }

      const equipArmor = e.target.closest('button[data-armory-equip-armor]');
      if (equipArmor) {
        const name = equipArmor.getAttribute('data-armory-equip-armor');
        const data = window.SC_DATA?.armors?.find(a => a.name === name);
        if (data) {
          currentCharacter.armor = {
            name: data.name,
            value: data.armor,
            class: data.class,
            boost: data.boost,
            defMod: data.defMod || 0,
            weight: data.weight,
            traits: data.traits,
            mounted: data.mounted,
            notes: data.desc
          };
          
          let strStep = 0;
          let agiStep = 0;
          const boostStr = (data.boost || '').toUpperCase();
          if (boostStr.includes('STR +4') || boostStr.includes('STR++++')) strStep = 4;
          else if (boostStr.includes('STR +3') || boostStr.includes('STR+++')) strStep = 3;
          else if (boostStr.includes('STR +2') || boostStr.includes('STR++')) strStep = 2;
          else if (boostStr.includes('STR +1') || boostStr.includes('STR+')) strStep = 1;

          if (boostStr.includes('AGI +2') || boostStr.includes('AGI++')) agiStep = 2;
          else if (boostStr.includes('AGI +1') || boostStr.includes('AGI+')) agiStep = 1;

          const armorMutations = {
            armor: parseInt(data.armor, 10) || 0,
            defMod: parseInt(data.defMod, 10) || 0
          };
          if (strStep > 0 || agiStep > 0) {
            armorMutations.attrSteps = {};
            if (strStep > 0) armorMutations.attrSteps.strength = strStep;
            if (agiStep > 0) armorMutations.attrSteps.agility = agiStep;
          }

          if (!currentCharacter.activeBoosts) currentCharacter.activeBoosts = [];
          const exIdx = currentCharacter.activeBoosts.findIndex(b => b.type === 'hes-suit' || b.id === 'boost_hes_suit' || b.name === data.name);
          if (exIdx >= 0) {
            currentCharacter.activeBoosts[exIdx].state = 'active';
            currentCharacter.activeBoosts[exIdx].name = data.name;
            currentCharacter.activeBoosts[exIdx].mutations = armorMutations;
          } else {
            currentCharacter.activeBoosts.unshift({
              id: 'boost_hes_suit',
              name: data.name,
              category: 'Gear',
              type: 'hes-suit',
              targetAttr: strStep > 0 ? 'strength' : (agiStep > 0 ? 'agility' : undefined),
              state: 'active',
              hasRaise: false,
              desc: `${data.name} (+${data.armor} Armor${data.boost ? `, ${data.boost}` : ''}).`,
              mutations: armorMutations
            });
          }

          SoundFX.success();
          saveCharacters();
          renderAttributesAndStats();
          renderCharacterArmorGear();
          updateQuickTelemetry();
          alert(`Equipped "${data.name}". Armor (+${data.armor}) and trait modifiers applied.`);
        }
        return;
      }

      const unequipArmorBtn = e.target.closest('#unequip-armor-btn');
      if (unequipArmorBtn) {
        currentCharacter.armor = { name: 'Unarmored', value: 0, boost: '', defMod: 0 };
        if (currentCharacter.activeBoosts) {
          const exIdx = currentCharacter.activeBoosts.findIndex(b => b.type === 'hes-suit' || b.id === 'boost_hes_suit');
          if (exIdx >= 0) currentCharacter.activeBoosts.splice(exIdx, 1);
        }
        SoundFX.toggle();
        saveCharacters();
        renderAttributesAndStats();
        renderCharacterArmorGear();
        updateQuickTelemetry();
        return;
      }

      const addGear = e.target.closest('button[data-armory-add-gear]');
      if (addGear) {
        const name = addGear.getAttribute('data-armory-add-gear');
        const data = window.SC_DATA?.gear_items?.find(g => g.name === name);
        if (data) {
          if (!currentCharacter.gear) currentCharacter.gear = [];
          const ex = currentCharacter.gear.find(g => g.name === name);
          if (ex) ex.count = (ex.count || 1) + 1;
          else currentCharacter.gear.push({ name: data.name, count: 1, notes: data.desc });
          SoundFX.success();
          saveCharacters();
          renderCharacterArmorGear();
          alert(`Added "${data.name}" to field gear.`);
        }
        return;
      }

      const addCyber = e.target.closest('button[data-armory-add-cyber]');
      if (addCyber) {
        const name = addCyber.getAttribute('data-armory-add-cyber');
        const data = window.SC_DATA?.cybernetics?.find(c => c.name === name);
        if (data) {
          if (!currentCharacter.cybernetics) currentCharacter.cybernetics = [];
          currentCharacter.cybernetics.push({ name: data.name, points: data.points, desc: data.desc });
          SoundFX.success();
          saveCharacters();
          renderCharacterCybernetics();
          alert(`Installed implant "${data.name}".`);
        }
        return;
      }

      const togglePower = e.target.closest('button[data-toggle-power]');
      if (togglePower) {
        const name = togglePower.getAttribute('data-toggle-power');
        const data = window.SC_DATA?.powers?.find(p => p.name === name);
        if (data) {
          if (!currentCharacter.powers) currentCharacter.powers = [];
          const exIdx = currentCharacter.powers.findIndex(p => p.name === name);
          if (exIdx >= 0) currentCharacter.powers.splice(exIdx, 1);
          else currentCharacter.powers.push({ name: data.name, discipline: data.discipline, desc: data.desc });
          SoundFX.toggle();
          saveCharacters();
          renderCharacterPowers();
          alert(`Updated "${data.name}" on character sheet.`);
        }
        return;
      }

      // Toggle Edge from Compendium
      const toggleEdge = e.target.closest('button[data-toggle-edge]');
      if (toggleEdge) {
        const name = toggleEdge.getAttribute('data-toggle-edge');
        const data = window.SC_DATA?.edges?.find(ed => ed.name === name);
        if (data) {
          if (!currentCharacter.edges) currentCharacter.edges = [];
          const exIdx = currentCharacter.edges.findIndex(ed => ed.name === name);
          if (exIdx >= 0) currentCharacter.edges.splice(exIdx, 1);
          else currentCharacter.edges.push({ name: data.name, req: data.req, desc: data.desc });
          
          const newPl = computeEffectivePsiRating(currentCharacter).calculatedPL;
          currentCharacter.psiRating = newPl;
          SoundFX.success();
          saveCharacters();
          renderAll();
          alert(`Updated Edge "${data.name}" on character sheet.`);
        }
        return;
      }

      // Toggle Hindrance from Compendium
      const toggleHind = e.target.closest('button[data-toggle-hindrance]');
      if (toggleHind) {
        const name = toggleHind.getAttribute('data-toggle-hindrance');
        const data = window.SC_DATA?.hindrances?.find(h => h.name === name);
        if (data) {
          if (!currentCharacter.hindrances) currentCharacter.hindrances = [];
          const exIdx = currentCharacter.hindrances.findIndex(h => h.name === name);
          if (exIdx >= 0) currentCharacter.hindrances.splice(exIdx, 1);
          else currentCharacter.hindrances.push({ name: data.name, type: data.type, desc: data.desc });
          SoundFX.toggle();
          saveCharacters();
          renderCharacterHindrances();
          alert(`Updated Hindrance "${data.name}" on character sheet.`);
        }
        return;
      }

      // Removal Handlers
      const remEdge = e.target.closest('button[data-remove-edge]');
      if (remEdge) {
        currentCharacter.edges.splice(parseInt(remEdge.getAttribute('data-remove-edge'), 10), 1);
        const newPl = computeEffectivePsiRating(currentCharacter).calculatedPL;
        currentCharacter.psiRating = newPl;
        saveCharacters();
        renderAll();
        return;
      }

      const remHind = e.target.closest('button[data-remove-hindrance]');
      if (remHind) {
        currentCharacter.hindrances.splice(parseInt(remHind.getAttribute('data-remove-hindrance'), 10), 1);
        saveCharacters();
        renderCharacterHindrances();
        return;
      }

      const remWep = e.target.closest('button[data-remove-weapon]');
      if (remWep) {
        currentCharacter.weapons.splice(parseInt(remWep.getAttribute('data-remove-weapon'), 10), 1);
        saveCharacters();
        renderCharacterWeapons();
        return;
      }

      const remPower = e.target.closest('button[data-remove-power]');
      if (remPower) {
        currentCharacter.powers.splice(parseInt(remPower.getAttribute('data-remove-power'), 10), 1);
        saveCharacters();
        renderCharacterPowers();
        return;
      }

      const remGear = e.target.closest('button[data-remove-gear]');
      if (remGear) {
        currentCharacter.gear.splice(parseInt(remGear.getAttribute('data-remove-gear'), 10), 1);
        saveCharacters();
        renderCharacterArmorGear();
        return;
      }

      const remCyber = e.target.closest('button[data-remove-cyber]');
      if (remCyber) {
        currentCharacter.cybernetics.splice(parseInt(remCyber.getAttribute('data-remove-cyber'), 10), 1);
        saveCharacters();
        renderCharacterCybernetics();
        return;
      }
    });
  }

  // Expose calculation pipeline to window for testing / extensions
  window.computeEffectiveCharacterState = computeEffectiveCharacterState;
  window.calculatePoints = calculatePoints;

  document.addEventListener('DOMContentLoaded', () => {
    loadCharacters();
    setupEventListeners();
    renderAll();
    console.log('StarCraft High-Performance Living Document Initialized with Data-Driven Mutation Model.');
  });

})();
