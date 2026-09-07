export type AttributeKey = 'agility' | 'strength' | 'vigor' | 'instinct' | 'intelligence' | 'spirit';

export type DieStep = 4 | 6 | 8 | 10 | 12;

export interface CharacterAttributes {
  agility: number;
  strength: number;
  vigor: number;
  instinct: number;
  intelligence: number;
  spirit: number;
}

export interface CharacterSkills {
  [skillId: string]: number;
}

export interface CharacterWeapon {
  name: string;
  range: string;
  damage: string;
  rof: string;
  ap: number;
  notes?: string;
}

export interface CharacterArmor {
  name: string;
  value: number;
  class?: string;
  boost?: string;
  defMod?: number;
  weight?: string;
  traits?: string;
  mounted?: string;
  notes?: string;
}

export interface CharacterGearItem {
  name: string;
  count: number;
  notes?: string;
}

export interface CharacterCybernetic {
  name: string;
  strain: number;
  notes: string;
}

export interface CharacterPower {
  name: string;
  cost?: string;
  range?: string;
  duration?: string;
  discipline?: string;
  summary?: string;
  notes?: string;
}

export interface CharacterAdvancement {
  id: string;
  rank: 'Novice' | 'Seasoned' | 'Veteran' | 'Heroic' | 'Legendary';
  type: 'attribute' | 'skills' | 'edge' | 'other';
  target?: string;
  desc: string;
}

export interface CharacterHindranceEntry {
  name: string;
  type: 'Major' | 'Minor';
  notes?: string;
}

export interface CharacterEdgeEntry {
  name: string;
  category?: string;
  notes?: string;
}

export interface Character {
  id: string;
  name: string;
  codename: string;
  homeworld: string;
  rank: string;
  cotLevel: string;
  trainingPath: string;
  concept: string;
  psiRating: number;
  advancements: number;
  advancementsList: CharacterAdvancement[];
  credits: number;
  attributes: CharacterAttributes;
  skills: CharacterSkills;
  activeBoosts: ActiveBoost[];
  tempAttributeMods?: Partial<CharacterAttributes>;
  tempSkillMods?: Record<string, number>;
  hindranceConversions?: {
    attributeSteps: number;
    edges: number;
    skillPoints: number;
  };
  advancementAllocation?: {
    skills?: number;
    attributes?: number;
    edges?: number;
  };
  powers: CharacterPower[];
  hindrances: (CharacterHindranceEntry | string)[];
  edges: (CharacterEdgeEntry | string)[];
  weapons: CharacterWeapon[];
  armor: CharacterArmor;
  gear: CharacterGearItem[];
  cybernetics: CharacterCybernetic[];
  currentWounds: number;
  currentFatigue: number;
  currentEnergy?: number;
  stressPoints?: number;
  isShaken?: boolean;
  isDistracted?: boolean;
  isVulnerable?: boolean;
  notes?: string;
}

export interface BoostMutations {
  attrSteps?: Partial<CharacterAttributes>;
  attrRollMods?: Partial<CharacterAttributes>;
  skillRollMods?: Record<string, number>;
  linkedAttrSkillMods?: Partial<CharacterAttributes>;
  armor?: number;
  defMod?: number;
  toughnessMod?: number;
  disciplineMod?: number;
  resolveMod?: number;
  speedMod?: number;
}

export interface ActiveBoost {
  id: string;
  name: string;
  category?: string;
  type?: string;
  targetAttr?: AttributeKey;
  state: 'off' | 'active' | 'success' | 'raise';
  hasRaise?: boolean;
  desc?: string;
  mutations?: BoostMutations;
  raiseMutations?: BoostMutations;
}

export interface EffectiveCharacterState {
  baseAttributes: CharacterAttributes;
  attributeSteps: CharacterAttributes;
  attributeRollMods: CharacterAttributes;
  effectiveAttributes: CharacterAttributes;
  effectiveSkillBonuses: Record<string, number>;
  armor: number;
  defMod: number;
  defense: number;
  discipline: number;
  baseToughness: number;
  totalToughness: number;
  resolve: number;
  maxWounds: number;
  maxFatigue: number;
  speed: number;
}

export interface EffectivePsiInfo {
  basePL: number;
  cotBonus: number;
  plEdgeCount: number;
  maxPlForRank: number;
  calculatedPL: number;
  effectivePL: number;
}

export interface PointPools {
  totalAttrPointsPool: number;
  spentAttrPoints: number;
  remAttrPoints: number;
  hindranceAttrBonus: number;
  advAttrBonus: number;
  baseSkillPoints: number;
  intBonus: number;
  advSkillBonus: number;
  advSkillCount: number;
  advAttrCount: number;
  advEdgeCount: number;
  hindranceSkillBonus: number;
  totalSkillPointsPool: number;
  spentSkillPoints: number;
  remSkillPoints: number;
}
