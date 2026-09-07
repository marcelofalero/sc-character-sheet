export interface DieRollResult {
  total: number;
  rolls: number[];
}

export interface TraitRollResult {
  traitName: string;
  traitDie: number;
  traitRolls: number[];
  traitTotal: number;
  hasWildDie: boolean;
  wildRolls?: number[];
  wildTotal?: number;
  modifier: number;
  finalTotal: number;
  isSuccess: boolean;
  isRaise: boolean;
  isCriticalFailure: boolean;
  targetNumber: number;
  details: string;
}

export function rollExplodingDie(sides: number): DieRollResult {
  let total = 0;
  const rolls: number[] = [];
  let r = 0;
  do {
    r = Math.floor(Math.random() * sides) + 1;
    rolls.push(r);
    total += r;
  } while (r === sides && sides > 1);
  return { total, rolls };
}

export function rollTraitCheck(
  traitName: string,
  traitDie: number,
  modifier: number = 0,
  useWildDie: boolean = true,
  targetNumber: number = 4
): TraitRollResult {
  const traitRoll = rollExplodingDie(traitDie);
  let wildRoll: DieRollResult | undefined;
  let isCriticalFailure = false;

  let bestBase = traitRoll.total;

  if (useWildDie) {
    wildRoll = rollExplodingDie(6);
    if (traitRoll.rolls[0] === 1 && wildRoll.rolls[0] === 1) {
      isCriticalFailure = true;
    }
    bestBase = Math.max(traitRoll.total, wildRoll.total);
  } else {
    if (traitRoll.rolls[0] === 1) {
      isCriticalFailure = false; // Regular failure unless wild die is also 1
    }
  }

  const finalTotal = bestBase + modifier;
  const isSuccess = !isCriticalFailure && finalTotal >= targetNumber;
  const isRaise = !isCriticalFailure && finalTotal >= (targetNumber + 4);

  let details = `[d${traitDie}: ${traitRoll.rolls.join('+')}=${traitRoll.total}]`;
  if (useWildDie && wildRoll) {
    details += ` | [Wild d6: ${wildRoll.rolls.join('+')}=${wildRoll.total}]`;
  }
  if (modifier !== 0) {
    details += ` + Mod (${modifier > 0 ? '+' + modifier : modifier})`;
  }
  details += ` → Final: ${finalTotal}`;

  return {
    traitName,
    traitDie,
    traitRolls: traitRoll.rolls,
    traitTotal: traitRoll.total,
    hasWildDie: useWildDie,
    wildRolls: wildRoll?.rolls,
    wildTotal: wildRoll?.total,
    modifier,
    finalTotal,
    isSuccess,
    isRaise,
    isCriticalFailure,
    targetNumber,
    details
  };
}
