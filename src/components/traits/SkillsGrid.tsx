import React from 'react';
import { useCharacter } from '../../store/useCharacterStore';
import { SC_DATA } from '../../data/scData';
import { DIE_STEPS, SKILL_ATTR_MAP } from '../../data/defaultCharacter';
import { AttributeKey } from '../../types/character';
import { formatTraitBoost } from '../../utils/calculations';
import { rollTraitCheck } from '../../utils/diceEngine';
import soundFx from '../../utils/soundFx';
import { Dices } from 'lucide-react';

export const SkillsGrid: React.FC = () => {
  const { activeCharacter, effectiveState, pointPools, updateSkill, addTerminalLog } = useCharacter();

  const skillsData = SC_DATA?.skills || [
    { id: 'athletics', name: 'Athletics', attr: 'Agility', core: true },
    { id: 'computers', name: 'Computers', attr: 'Intelligence' },
    { id: 'engineering', name: 'Engineering', attr: 'Intelligence' },
    { id: 'insight', name: 'Insight', attr: 'Instinct' },
    { id: 'influence', name: 'Influence', attr: 'Spirit', core: true },
    { id: 'leadership', name: 'Leadership', attr: 'Spirit' },
    { id: 'lore', name: 'Lore', attr: 'Intelligence', core: true },
    { id: 'medicine', name: 'Medicine', attr: 'Intelligence' },
    { id: 'melee', name: 'Melee', attr: 'Agility' },
    { id: 'perception', name: 'Perception', attr: 'Instinct', core: true },
    { id: 'pilot', name: 'Pilot', attr: 'Instinct' },
    { id: 'psionics', name: 'Psionics', attr: 'Spirit' },
    { id: 'ranged', name: 'Ranged', attr: 'Instinct' },
    { id: 'science', name: 'Science', attr: 'Intelligence' },
    { id: 'stealth', name: 'Stealth', attr: 'Agility', core: true },
    { id: 'survival', name: 'Survival', attr: 'Instinct' },
    { id: 'tactics', name: 'Tactics', attr: 'Instinct' }
  ];

  const shortCodes: Record<string, string> = {
    agility: 'Agi', strength: 'Str', vigor: 'Vig', instinct: 'Inst', intelligence: 'Int', spirit: 'Spi'
  };

  const handleRoll = (skillName: string, baseDie: number, bonus: number) => {
    soundFx.roll();
    const dieToRoll = baseDie > 0 ? baseDie : 4;
    const effectiveMod = baseDie > 0 ? bonus : (bonus - 2); // Unskilled penalty is -2

    const result = rollTraitCheck(skillName, dieToRoll, effectiveMod);
    let logType: any = 'info';
    if (result.isCriticalFailure) logType = 'crit';
    else if (result.isRaise) logType = 'raise';
    else if (result.isSuccess) logType = 'success';
    else logType = 'fail';

    addTerminalLog(
      `🎯 ${skillName} Check: ${result.finalTotal} ${result.isCriticalFailure ? '💥 CRITICAL FAILURE!' : (result.isRaise ? '✨ RAISE!' : (result.isSuccess ? '✓ SUCCESS' : '✕ FAILED'))} (${result.details})`,
      logType
    );
  };

  const poolParts = [`Base ${pointPools.baseSkillPoints || 15}`];
  if (pointPools.intBonus > 0) poolParts.push(`Int +${pointPools.intBonus}`);
  if (pointPools.advSkillBonus > 0) poolParts.push(`AdvSkills (${pointPools.advSkillCount}x3) +${pointPools.advSkillBonus}`);
  if (pointPools.hindranceSkillBonus > 0) poolParts.push(`Hind +${pointPools.hindranceSkillBonus}`);

  return (
    <div className="hud-inner-card" style={{ flex: 1 }}>
      <div className="hud-card-header">
        <span className="hud-card-title">🎯 SKILLS ({pointPools.totalSkillPointsPool} Points Pool)</span>
        <span className={pointPools.remSkillPoints < 0 ? 'tag tag-crimson' : 'tag tag-emerald'}>
          {pointPools.spentSkillPoints} / {pointPools.totalSkillPointsPool} pts ({poolParts.join(' + ')}) ({pointPools.remSkillPoints} left)
        </span>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '0.5rem'
      }}>
        {skillsData.map((sk: any) => {
          const skillId = (sk.id || sk.name.toLowerCase().replace(/[^a-z0-9]/g, '')).trim();
          const baseDie = activeCharacter.skills[skillId] || 0;
          const effDie = effectiveState.effectiveSkillDice?.[skillId] ?? baseDie;
          const skillStep = effectiveState.effectiveSkillSteps?.[skillId] || 0;
          const bonus = effectiveState.effectiveSkillBonuses?.[skillId] || 0;
          const linkedAttr = (sk.attr || SKILL_ATTR_MAP[skillId] || 'Agility').toLowerCase() as AttributeKey;
          const isCore = sk.core || ['athletics', 'lore', 'perception', 'influence', 'stealth'].includes(skillId);

          return (
            <div
              key={skillId}
              style={{
                background: skillStep > 0 || bonus > 0 ? 'rgba(0, 229, 255, 0.05)' : 'rgba(10, 18, 32, 0.85)',
                border: skillStep > 0 || bonus > 0 
                  ? '1px solid var(--border-cyan)' 
                  : (baseDie > 0 ? '1px solid var(--border-subtle)' : '1px solid rgba(255,255,255,0.06)'),
                borderRadius: 'var(--radius-sm)',
                padding: '0.45rem 0.65rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'var(--font-sub)', fontSize: '0.88rem', fontWeight: 700, color: baseDie > 0 ? '#fff' : 'var(--text-dim)' }}>
                  {sk.name}
                </span>
                {isCore && <span className="tag tag-cyan" style={{ fontSize: '0.62rem', padding: '1px 3px' }}>CORE</span>}
                <span className="tag tag-outline" style={{ fontSize: '0.62rem', padding: '1px 3px' }}>{shortCodes[linkedAttr] || linkedAttr}</span>
                {skillStep > 0 && <span className="tag tag-cyan" style={{ fontSize: '0.62rem', padding: '1px 3px' }}>d{effDie}</span>}
                {bonus !== 0 && <span className="tag tag-emerald" style={{ fontSize: '0.62rem', padding: '1px 3px' }}>{bonus > 0 ? `+${bonus}` : bonus}</span>}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <select
                  className="form-select"
                  value={baseDie}
                  onChange={(e) => updateSkill(skillId, parseInt(e.target.value, 10))}
                  style={{ padding: '2px 4px', fontSize: '0.78rem', width: '58px' }}
                >
                  <option value={0}>-</option>
                  {DIE_STEPS.map(d => (
                    <option key={d} value={d}>d{d}</option>
                  ))}
                </select>

                <button
                  onClick={() => handleRoll(sk.name, effDie, bonus)}
                  className={`btn btn-sm ${effDie > 0 ? (bonus !== 0 || skillStep > 0 ? 'btn-cyan' : 'btn-outline') : 'btn-outline'}`}
                  title={`Roll ${sk.name} (${effDie > 0 ? `d${effDie}` : 'Unskilled d4-2'}${bonus !== 0 ? (bonus > 0 ? ` +${bonus}` : ` ${bonus}`) : ''})`}
                  style={{ padding: '3px 7px', fontSize: '0.75rem' }}
                >
                  <Dices size={12} />
                  <span>{effDie > 0 ? `d${effDie}${bonus > 0 ? `+${bonus}` : (bonus < 0 ? bonus : '')}` : 'Unsk'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
