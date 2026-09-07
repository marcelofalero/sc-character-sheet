import { ActiveBoost, Character } from '../types/character';

export const DIE_STEPS = [4, 6, 8, 10, 12];

export const SKILL_ATTR_MAP: Record<string, string> = {
  athletics: 'agility',
  computers: 'intelligence',
  engineering: 'intelligence',
  insight: 'instinct',
  influence: 'spirit',
  leadership: 'spirit',
  lore: 'intelligence',
  medicine: 'intelligence',
  melee: 'agility',
  perception: 'instinct',
  pilot: 'instinct',
  psionics: 'spirit',
  ranged: 'instinct',
  science: 'intelligence',
  stealth: 'agility',
  survival: 'instinct',
  tactics: 'instinct'
};

export const RANK_COT_MAP: Record<string, { cotLevel: string; cotBonus: number; maxPl: number }> = {
  'Novice': { cotLevel: 'Recruit', cotBonus: 0, maxPl: 3 },
  'Seasoned': { cotLevel: 'Operative', cotBonus: 1, maxPl: 5 },
  'Veteran': { cotLevel: 'Specialist', cotBonus: 2, maxPl: 7 },
  'Heroic': { cotLevel: 'Lieutenant', cotBonus: 3, maxPl: 9 },
  'Legendary': { cotLevel: 'Captain', cotBonus: 4, maxPl: 10 }
};

export function getDefaultActiveBoosts(): ActiveBoost[] {
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

export function getDefaultCharacter(): Character {
  return {
    id: "char_rick_kageyama",
    name: "Rick Kageyama",
    codename: "Operative Kageyama",
    homeworld: "moria",
    rank: "Seasoned",
    cotLevel: "Operative",
    trainingPath: "ghost",
    concept: "Psionic Human operative from Moria (Kel-Morian Combine) channeling Void energy.",
    psiRating: 5,
    advancements: 4,
    advancementsList: [
      { id: "adv_1", rank: "Novice", type: "attribute", target: "agility", desc: "Agility increase (+1 step: d6 → d8)" },
      { id: "adv_2", rank: "Novice", type: "edge", desc: "Psychic Discipline Focus (Energy) [Seasoned Edge]" },
      { id: "adv_3", rank: "Novice", type: "skills", desc: "+3 Skill Points (Athletics d6, Melee d8, Stealth d8)" },
      { id: "adv_4", rank: "Seasoned", type: "edge", desc: "Psionic Level +1 (Psi Rating increased to PL 5)" }
    ],
    credits: 11325,
    attributes: {
      agility: 8,
      strength: 6,
      vigor: 6,
      instinct: 6,
      intelligence: 8,
      spirit: 10
    },
    skills: {
      athletics: 6,
      computers: 0,
      engineering: 0,
      insight: 6,
      influence: 4,
      leadership: 0,
      lore: 8,
      medicine: 8,
      melee: 8,
      perception: 6,
      pilot: 0,
      psionics: 10,
      ranged: 6,
      science: 0,
      stealth: 8,
      survival: 0,
      tactics: 0
    },
    activeBoosts: getDefaultActiveBoosts(),
    tempAttributeMods: {
      agility: 0, strength: 0, vigor: 0, instinct: 0, intelligence: 0, spirit: 0
    },
    tempSkillMods: {},
    hindranceConversions: { attributeSteps: 1, edges: 1, skillPoints: 0 },
    advancementAllocation: { skills: 1, attributes: 1, edges: 2 },
    powers: [
      { name: "Cloak", cost: "3/rd", range: "Self", duration: "Maintained", discipline: "Telepathy", notes: "Full visual & electromagnetic cloaking invisibility (-6 to be detected)" },
      { name: "Lockdown", cost: "4", range: "24\"", duration: "Instant (3 rds)", discipline: "Energy", notes: "Electromagnetic surge disables mechanical vehicles/cyborgs" },
      { name: "Psychic Shockwave", cost: "3", range: "Cone Template", duration: "Instant", discipline: "Telekinesis", notes: "Psionic kinetic blast dealing 2d8 damage and knocks targets prone" },
      { name: "Mind Blast", cost: "3", range: "12\"", duration: "Instant", discipline: "Telepathy", notes: "Mental assault dealing 2d6 direct resolve damage" },
      { name: "Enhance Abilities", cost: "2", range: "Self / Touch", duration: "5 rounds", discipline: "Augmentation", notes: "Increases physical attribute by +1 die step (+2 on Raise)" },
      { name: "Muscular Enhancement", cost: "2", range: "Self", duration: "10 mins", discipline: "Augmentation", notes: "Grants +1 (+2 on Raise) to Strength checks & Athletics" },
      { name: "Thought Blocking", cost: "2", range: "Self", duration: "10 mins", discipline: "Telepathy", notes: "Shields mind against psionic probes & grants +1 to Discipline/Resolve" }
    ],
    hindrances: [
      { name: "Enemy (Major - Dominion Security)", type: "Major", notes: "Wanted by Dominion covert divisions" },
      { name: "Secret Identity (Minor)", type: "Minor", notes: "Covert operative aliases must be protected" },
      { name: "Vow (Minor - Protect Morian Miners)", type: "Minor", notes: "Loyalty to Kel-Morian labor unions" }
    ],
    edges: [
      { name: "Arcane Background (Psionics)", category: "Background", notes: "Grants psionic power pool, PL rating, and psionics skill access" },
      { name: "Psychic Discipline Focus (Energy)", category: "Psionic", notes: "Specialized in energy manipulation and kinetic psionics" },
      { name: "Marksman", category: "Combat", notes: "Grants +1 to Ranged attack rolls if stationary" },
      { name: "Quick", category: "Combat", notes: "Redraw initiative cards of 5 or less" }
    ],
    weapons: [
      { name: "C-10 Canister Rifle", range: "24/48/96", damage: "2d12+4", rof: "2", ap: 4, notes: "Anti-personnel canister sniper rifle (Shots: 10, Min Str d6)" },
      { name: "FWG5 Combat Pistol", range: "12/24/48", damage: "2d6+1", rof: "1", ap: 2, notes: "Standard Terran military sidearm (Shots: 12, Min Str d4)" },
      { name: "Heavy Revolver", range: "12/24/48", damage: "2d10+1", rof: "2", ap: 2, notes: "High-caliber magnum revolver (Shots: 6, Min Str d6)" },
      { name: "Long Rifle", range: "25/50/100", damage: "2d10", rof: "1", ap: 2, notes: "Precision hunting/sniper rifle with optical scope (Shots: 6)" },
      { name: "Combat Knife", range: "Melee", damage: "Str+d4", rof: "1", ap: 1, notes: "Close-quarters military blade" }
    ],
    armor: {
      name: "Hostile Environment Suit",
      value: 8,
      class: "Heavy",
      boost: "Str+",
      defMod: 0,
      weight: "15 lbs.",
      traits: "Elemental Protection, Radiation Shielding, Oxygen Supply, Personal Cloaking, Armor Decay",
      mounted: "Communicator, Tactical Mask I",
      notes: "Hermetic full-body pressure suit (+8 Armor, life-support, +1 Strength die step, Cloaking integration)"
    },
    gear: [
      { name: "Digital Uplink II", count: 1, notes: "+2 Tactics/Pilot/Leadership, +1 Ranged, Athletics, Computers, Med, Lore, Percep, Sci, Stealth" },
      { name: "Tactical Mask I", count: 1, notes: "Environmental filtration & integrated HUD optics" },
      { name: "Motion Detector II", count: 1, notes: "Detects movement through obstacles within range" },
      { name: "Bio-Mechanical Nanites", count: 1, notes: "Accelerates biological healing & cyber repairs" },
      { name: "Trauma Kit & Medipack", count: 1, notes: "Emergency surgical & field trauma stabilization" },
      { name: "Communicators & Injector", count: 1, notes: "Encrypted radio & hypospray auto-injector" },
      { name: "Backpack & Belt & Canteen", count: 1, notes: "Utility field rig & rations x2" }
    ],
    cybernetics: [],
    currentWounds: 0,
    currentFatigue: 0,
    currentEnergy: 15,
    stressPoints: 6,
    isShaken: false,
    isDistracted: false,
    isVulnerable: false,
    notes: "Rick Kageyama — Psionic Operative from Moria (Kel-Morian Combine). Advancements: 1) Agility, 2) Psychic Discipline Focus (Energy), 3) Athletics, Melee, Stealth, 4) PL Increase to 5."
  };
}
