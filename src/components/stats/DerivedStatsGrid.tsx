import React from 'react';
import { useCharacter } from '../../store/useCharacterStore';

export const DerivedStatsGrid: React.FC = () => {
  const { activeCharacter, effectiveState, setWounds, setFatigue } = useCharacter();

  const currentW = activeCharacter.currentWounds || 0;
  const currentF = activeCharacter.currentFatigue || 0;
  const maxW = effectiveState.maxWounds;
  const maxF = effectiveState.maxFatigue;

  const handleWoundClick = (pipNum: number) => {
    // If clicking the currently checked highest pip, decrement by 1; otherwise set to pipNum
    const nextVal = (currentW === pipNum) ? pipNum - 1 : pipNum;
    setWounds(nextVal);
  };

  const handleFatigueClick = (pipNum: number) => {
    const nextVal = (currentF === pipNum) ? pipNum - 1 : pipNum;
    setFatigue(nextVal);
  };

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
      gap: '0.65rem',
      marginTop: '0.85rem',
      marginBottom: '1.25rem'
    }}>
      
      {/* DEFENSE */}
      <div className="hud-inner-card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'var(--font-hud)', fontSize: '0.72rem', fontWeight: 700, color: 'var(--amber)', letterSpacing: '1px' }}>
          DEFENSE
        </span>
        <span style={{ fontFamily: 'var(--font-hud)', fontSize: '1.6rem', fontWeight: 900, color: 'var(--cyan)', textShadow: '0 0 10px var(--cyan-glow)' }}>
          {effectiveState.defense}
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-dim)' }}>
          ½ Agi ({Math.floor(effectiveState.effectiveAttributes.agility/2)}) + ½ Inst ({Math.floor(effectiveState.effectiveAttributes.instinct/2)}){effectiveState.defMod !== 0 ? ` + Mod (${effectiveState.defMod})` : ''}
        </span>
      </div>

      {/* DISCIPLINE */}
      <div className="hud-inner-card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'var(--font-hud)', fontSize: '0.72rem', fontWeight: 700, color: 'var(--amber)', letterSpacing: '1px' }}>
          DISCIPLINE
        </span>
        <span style={{ fontFamily: 'var(--font-hud)', fontSize: '1.6rem', fontWeight: 900, color: 'var(--cyan)', textShadow: '0 0 10px var(--cyan-glow)' }}>
          {effectiveState.discipline}
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-dim)' }}>
          ½ Spirit ({Math.floor(effectiveState.effectiveAttributes.spirit/2)}) + ½ Intel ({Math.floor(effectiveState.effectiveAttributes.intelligence/2)})
        </span>
      </div>

      {/* TOUGHNESS */}
      <div className="hud-inner-card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'var(--font-hud)', fontSize: '0.72rem', fontWeight: 700, color: 'var(--amber)', letterSpacing: '1px' }}>
          TOUGHNESS
        </span>
        <span style={{ fontFamily: 'var(--font-hud)', fontSize: '1.6rem', fontWeight: 900, color: 'var(--amber)', textShadow: '0 0 10px var(--amber-glow)' }}>
          {effectiveState.armor > 0 ? `${effectiveState.totalToughness} (${effectiveState.armor})` : `${effectiveState.totalToughness}`}
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-dim)' }}>
          {effectiveState.armor > 0
            ? `½ Vig (${Math.floor(effectiveState.effectiveAttributes.vigor/2)}) + ½ Str (${Math.floor(effectiveState.effectiveAttributes.strength/2)}) + Armor (${effectiveState.armor})`
            : `½ Vig (${Math.floor(effectiveState.effectiveAttributes.vigor/2)}) + ½ Str (${Math.floor(effectiveState.effectiveAttributes.strength/2)})`
          }
        </span>
      </div>

      {/* RESOLVE */}
      <div className="hud-inner-card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'var(--font-hud)', fontSize: '0.72rem', fontWeight: 700, color: 'var(--amber)', letterSpacing: '1px' }}>
          RESOLVE
        </span>
        <span style={{ fontFamily: 'var(--font-hud)', fontSize: '1.6rem', fontWeight: 900, color: 'var(--violet)', textShadow: '0 0 10px var(--violet-glow)' }}>
          {effectiveState.resolve}
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-dim)' }}>
          ½ Spi + ½ Inst + Psi ({effectiveState.resolve - Math.floor(effectiveState.effectiveAttributes.spirit/2) - Math.floor(effectiveState.effectiveAttributes.instinct/2)})
        </span>
      </div>

      {/* SPEED */}
      <div className="hud-inner-card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'var(--font-hud)', fontSize: '0.72rem', fontWeight: 700, color: 'var(--amber)', letterSpacing: '1px' }}>
          SPEED
        </span>
        <span style={{ fontFamily: 'var(--font-hud)', fontSize: '1.6rem', fontWeight: 900, color: 'var(--emerald)', textShadow: '0 0 10px var(--emerald-glow)' }}>
          {effectiveState.speed}″
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-dim)' }}>
          Base 6″ + Mods
        </span>
      </div>

      {/* WOUNDS */}
      <div className="hud-inner-card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'var(--font-hud)', fontSize: '0.72rem', fontWeight: 700, color: 'var(--amber)', letterSpacing: '1px' }}>
          WOUNDS
        </span>
        
        <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'center', alignItems: 'center', margin: '0.35rem 0', flexWrap: 'wrap' }}>
          {Array.from({ length: maxW }, (_, i) => i + 1).map((num) => {
            const isChecked = num <= currentW;
            return (
              <button
                key={num}
                onClick={() => handleWoundClick(num)}
                title={`Wound ${num} (Click to toggle)`}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '4px',
                  border: isChecked ? '2px solid var(--crimson)' : '2px solid var(--border-cyan)',
                  background: isChecked ? '#ff1744' : 'rgba(10, 20, 36, 0.95)',
                  color: isChecked ? '#ffffff' : 'var(--cyan)',
                  fontFamily: 'var(--font-hud)',
                  fontSize: '0.88rem',
                  fontWeight: 900,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: isChecked ? '0 0 12px rgba(255, 23, 68, 0.8)' : 'none',
                  transform: isChecked ? 'scale(1.05)' : 'none',
                  transition: 'all 0.15s ease',
                  userSelect: 'none'
                }}
              >
                {isChecked ? '✕' : num}
              </button>
            );
          })}
        </div>

        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-dim)' }}>
          1/3 Strength + 1 ({currentW}/{maxW})
        </span>
      </div>

      {/* FATIGUE */}
      <div className="hud-inner-card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'var(--font-hud)', fontSize: '0.72rem', fontWeight: 700, color: 'var(--amber)', letterSpacing: '1px' }}>
          FATIGUE
        </span>
        
        <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'center', alignItems: 'center', margin: '0.35rem 0', flexWrap: 'wrap' }}>
          {Array.from({ length: maxF }, (_, i) => i + 1).map((num) => {
            const isChecked = num <= currentF;
            return (
              <button
                key={num}
                onClick={() => handleFatigueClick(num)}
                title={`Fatigue ${num} (Click to toggle)`}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '4px',
                  border: isChecked ? '2px solid var(--amber)' : '2px solid var(--border-cyan)',
                  background: isChecked ? '#ffb300' : 'rgba(10, 20, 36, 0.95)',
                  color: isChecked ? '#000000' : 'var(--cyan)',
                  fontFamily: 'var(--font-hud)',
                  fontSize: '0.88rem',
                  fontWeight: 900,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: isChecked ? '0 0 12px rgba(255, 179, 0, 0.8)' : 'none',
                  transform: isChecked ? 'scale(1.05)' : 'none',
                  transition: 'all 0.15s ease',
                  userSelect: 'none'
                }}
              >
                {isChecked ? '⚡' : num}
              </button>
            );
          })}
        </div>

        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-dim)' }}>
          1/3 Vigor ({currentF}/{maxF})
        </span>
      </div>

    </div>
  );
};
