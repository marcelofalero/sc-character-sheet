import React, { useState } from 'react';
import { useCharacter } from '../../store/useCharacterStore';
import { AddBoostModal } from './AddBoostModal';
import { Zap, Plus, X, Info } from 'lucide-react';

export const ActiveBuffsPanel: React.FC = () => {
  const { activeCharacter, toggleBoostState, deleteBoost } = useCharacter();
  const [modalOpen, setModalOpen] = useState(false);

  const boosts = activeCharacter.activeBoosts || [];
  const activeCount = boosts.filter(b => b.state && b.state !== 'off').length;

  const shortCodes: Record<string, string> = {
    agility: 'Agi', strength: 'Str', vigor: 'Vig', instinct: 'Inst', intelligence: 'Int', spirit: 'Spi'
  };

  return (
    <div className="hud-inner-card" style={{
      border: '1px solid var(--border-amber)',
      background: 'rgba(16, 26, 44, 0.95)',
      marginTop: '1rem',
      marginBottom: '1rem'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Zap size={16} color="var(--amber)" />
          <span className="hud-card-title amber" style={{ fontSize: '0.85rem' }}>
            ACTIVE COMBAT BUFFS & MODIFIERS
          </span>
          <span className={activeCount > 0 ? 'tag tag-emerald' : 'tag tag-amber'}>
            {activeCount} Active
          </span>
        </div>

        <button onClick={() => setModalOpen(true)} className="btn btn-sm btn-cyan">
          <Plus size={13} /> Add Boost / Modifier
        </button>
      </div>

      {boosts.length === 0 ? (
        <div style={{
          padding: '0.85rem',
          textAlign: 'center',
          color: 'var(--text-dim)',
          fontSize: '0.82rem',
          border: '1px dashed var(--border-subtle)',
          borderRadius: 'var(--radius-sm)',
          background: 'rgba(8, 14, 26, 0.5)'
        }}>
          No active boosts or combat modifiers applied. Click <strong style={{ color: 'var(--cyan)' }}>+ Add Boost / Modifier</strong> above to apply powers, gear buffs, or ally stance bonuses.
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '0.65rem'
        }}>
          {boosts.map((b, idx) => {
            const isActive = b.state && b.state !== 'off';
            const isRaise = b.state === 'raise';
            const catLower = (b.category || '').toLowerCase();
            const badgeColor = catLower.includes('psion') ? 'violet' : (catLower.includes('gear') ? 'cyan' : (catLower.includes('chem') ? 'emerald' : 'amber'));

            let targetNotation = '';
            if (b.type === 'enhance-abilities' && b.targetAttr) {
              const sc = shortCodes[b.targetAttr] || b.targetAttr;
              if (b.state === 'raise') targetNotation = `${sc}++`;
              else if (b.state === 'success' || b.state === 'active') targetNotation = `${sc}+`;
              else targetNotation = sc;
            } else if (b.targetAttr) {
              targetNotation = shortCodes[b.targetAttr] || b.targetAttr;
            } else if (b.targetSkill) {
              targetNotation = b.targetSkill.charAt(0).toUpperCase() + b.targetSkill.slice(1);
            }

            return (
              <div
                key={b.id || idx}
                style={{
                  background: isRaise
                    ? 'rgba(0, 230, 118, 0.08)'
                    : (isActive ? 'rgba(0, 229, 255, 0.08)' : 'rgba(10, 18, 32, 0.85)'),
                  border: isRaise
                    ? '1px solid var(--emerald)'
                    : (isActive ? '1px solid var(--cyan)' : '1px solid var(--border-subtle)'),
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.65rem 0.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.45rem',
                  boxShadow: isActive ? (isRaise ? '0 0 10px rgba(0,230,118,0.2)' : '0 0 10px rgba(0,229,255,0.2)') : 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.4rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', flexWrap: 'wrap' }}>
                      <strong style={{ fontSize: '0.85rem', color: '#fff' }}>{b.name}</strong>
                      {targetNotation && (
                        <span className={`tag ${isRaise ? 'tag-emerald' : (isActive ? 'tag-cyan' : 'tag-outline')}`} style={{ fontSize: '0.68rem' }}>
                          {targetNotation}
                        </span>
                      )}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      {b.category && <span className={`tag tag-${badgeColor}`} style={{ fontSize: '0.65rem' }}>{b.category}</span>}
                      {b.desc && (
                        <span style={{ cursor: 'help', color: 'var(--text-dim)', display: 'inline-flex' }} title={b.desc}>
                          <Info size={12} />
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => deleteBoost(idx)}
                    className="btn btn-sm btn-crimson"
                    title="Remove Boost"
                    style={{ padding: '2px 5px', fontSize: '0.7rem' }}
                  >
                    <X size={12} />
                  </button>
                </div>

                {b.desc && (
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', lineHeight: '1.3' }}>
                    {b.desc}
                  </div>
                )}

                {/* Tri-state Controls */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.2rem' }}>
                  {b.hasRaise ? (
                    <div className="tri-state-group">
                      <button
                        className={`tri-btn ${b.state === 'off' ? 'active off-active' : ''}`}
                        onClick={() => toggleBoostState(idx, 'off')}
                      >
                        Off
                      </button>
                      <button
                        className={`tri-btn ${b.state === 'success' ? 'active' : ''}`}
                        onClick={() => toggleBoostState(idx, 'success')}
                      >
                        Success
                      </button>
                      <button
                        className={`tri-btn ${b.state === 'raise' ? 'active raise-active' : ''}`}
                        onClick={() => toggleBoostState(idx, 'raise')}
                      >
                        Raise
                      </button>
                    </div>
                  ) : (
                    <div className="tri-state-group">
                      <button
                        className={`tri-btn ${b.state === 'off' ? 'active off-active' : ''}`}
                        onClick={() => toggleBoostState(idx, 'off')}
                      >
                        Off
                      </button>
                      <button
                        className={`tri-btn ${b.state === 'active' ? 'active' : ''}`}
                        onClick={() => toggleBoostState(idx, 'active')}
                      >
                        Active
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      <AddBoostModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};
