import React from 'react';
import { useCharacter } from '../../store/useCharacterStore';
import { AttributeKey } from '../../types/character';
import { DIE_STEPS } from '../../data/defaultCharacter';
import { formatTraitBoost } from '../../utils/calculations';
import { rollTraitCheck } from '../../utils/diceEngine';
import soundFx from '../../utils/soundFx';
import { Dices } from 'lucide-react';

export const AttributesGrid: React.FC = () => {
  const { activeCharacter, effectiveState, pointPools, updateAttribute, addTerminalLog } = useCharacter();

  const attributesList: { id: AttributeKey; name: string; short: string }[] = [
    { id: 'agility', name: 'Agility', short: 'Agi' },
    { id: 'strength', name: 'Strength', short: 'Str' },
    { id: 'vigor', name: 'Vigor', short: 'Vig' },
    { id: 'instinct', name: 'Instinct', short: 'Inst' },
    { id: 'intelligence', name: 'Intelligence', short: 'Int' },
    { id: 'spirit', name: 'Spirit', short: 'Spi' }
  ];

  const handleRoll = (attrName: string, effDie: number, rollBonus: number) => {
    soundFx.roll();
    const result = rollTraitCheck(attrName, effDie, rollBonus);
    let logType: any = 'info';
    if (result.isCriticalFailure) logType = 'crit';
    else if (result.isRaise) logType = 'raise';
    else if (result.isSuccess) logType = 'success';
    else logType = 'fail';

    addTerminalLog(
      `🎲 ${attrName} Check: ${result.finalTotal} ${result.isCriticalFailure ? '💥 CRITICAL FAILURE!' : (result.isRaise ? '✨ RAISE!' : (result.isSuccess ? '✓ SUCCESS' : '✕ FAILED'))} (${result.details})`,
      logType
    );
  };

  const poolStr = ['Base 9'];
  if (pointPools.hindranceAttrBonus > 0) poolStr.push(`Hind +${pointPools.hindranceAttrBonus}`);
  if (pointPools.advAttrBonus > 0) poolStr.push(`Adv +${pointPools.advAttrBonus}`);

  return (
    <div className="hud-inner-card" style={{ flex: 1 }}>
      <div className="hud-card-header">
        <span className="hud-card-title">⚡ ATTRIBUTES ({pointPools.totalAttrPointsPool} Points)</span>
        <span className={pointPools.remAttrPoints < 0 ? 'tag tag-crimson' : 'tag tag-cyan'}>
          {pointPools.spentAttrPoints} / {pointPools.totalAttrPointsPool} pts ({poolStr.join(' + ')}) ({pointPools.remAttrPoints} left)
        </span>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
        gap: '0.6rem'
      }}>
        {attributesList.map(attr => {
          const baseDie = activeCharacter.attributes[attr.id] || 4;
          const effDie = effectiveState.effectiveAttributes[attr.id] || baseDie;
          const stepDelta = effectiveState.attributeSteps[attr.id] || 0;
          const rollBonus = effectiveState.attributeRollMods[attr.id] || 0;
          const boostTag = formatTraitBoost(attr.short, stepDelta);

          return (
            <div
              key={attr.id}
              style={{
                background: stepDelta !== 0 ? 'rgba(0, 229, 255, 0.06)' : 'rgba(8, 14, 26, 0.8)',
                border: stepDelta !== 0 ? '1px solid var(--border-cyan)' : '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                padding: '0.6rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.35rem'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-hud)', fontSize: '0.75rem', fontWeight: 700, color: '#fff' }}>
                  {attr.name}
                </span>
                {boostTag && (
                  <span className="tag tag-cyan" style={{ fontSize: '0.65rem' }}>
                    {boostTag}
                  </span>
                )}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', justifyContent: 'space-between' }}>
                <select
                  className="form-select"
                  value={baseDie}
                  onChange={(e) => updateAttribute(attr.id, parseInt(e.target.value, 10))}
                  style={{ padding: '2px 4px', fontSize: '0.8rem', width: '60px' }}
                >
                  {DIE_STEPS.map(d => (
                    <option key={d} value={d}>d{d}</option>
                  ))}
                </select>

                <button
                  onClick={() => handleRoll(attr.name, effDie, rollBonus)}
                  className="btn btn-sm btn-cyan"
                  title={`Roll ${attr.name} (Effective: d${effDie}${rollBonus ? (rollBonus > 0 ? '+' + rollBonus : rollBonus) : ''})`}
                  style={{ padding: '3px 8px', fontSize: '0.78rem' }}
                >
                  <Dices size={13} />
                  <span>d{effDie}{rollBonus > 0 ? `+${rollBonus}` : ''}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
