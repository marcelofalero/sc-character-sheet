import React, { useState } from 'react';
import { useCharacter } from '../../store/useCharacterStore';
import { AddAdvancementModal } from './AddAdvancementModal';
import { TrendingUp, Plus, X } from 'lucide-react';

export const AdvancementsLedger: React.FC = () => {
  const { activeCharacter, deleteAdvancement } = useCharacter();
  const [modalOpen, setModalOpen] = useState(false);

  const advList = activeCharacter.advancementsList || [];
  const totalAdv = advList.length;

  const typeBadges = {
    skills: <span className="tag tag-emerald">🎯 Skills (+3 pts)</span>,
    attribute: <span className="tag tag-cyan">⚡ Attribute (+1 step)</span>,
    edge: <span className="tag tag-amber">⭐ Edge / Power</span>,
    other: <span className="tag tag-violet">📜 Other</span>
  };

  return (
    <div className="hud-inner-card" style={{ marginTop: '1.25rem' }}>
      <div className="hud-card-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <TrendingUp size={16} color="var(--emerald)" />
          <span className="hud-card-title" style={{ color: 'var(--emerald)' }}>
            CAREER ADVANCEMENTS & PROGRESSION LOG
          </span>
          <span className="tag tag-cyan">
            {totalAdv} Advancement{totalAdv === 1 ? '' : 's'}
          </span>
          <span className="tag tag-violet">
            {activeCharacter.rank || 'Seasoned'} Rank
          </span>
        </div>

        <button onClick={() => setModalOpen(true)} className="btn btn-sm btn-emerald">
          <Plus size={13} /> Add Advancement
        </button>
      </div>

      {advList.length === 0 ? (
        <div style={{
          padding: '0.85rem',
          textAlign: 'center',
          color: 'var(--text-dim)',
          fontSize: '0.85rem',
          border: '1px dashed var(--border-subtle)',
          borderRadius: 'var(--radius-sm)',
          background: 'rgba(8,16,28,0.5)'
        }}>
          No advancements recorded yet. Click <strong style={{ color: 'var(--cyan)' }}>+ Add Advancement</strong> above to record character career progression.
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {advList.map((adv, idx) => (
            <div
              key={adv.id || idx}
              style={{
                background: 'rgba(14, 24, 42, 0.9)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                padding: '0.65rem 0.85rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '0.6rem'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
                  <strong style={{ color: '#fff', fontSize: '0.86rem' }}>Advancement #{idx + 1}</strong>
                  <span className="tag tag-violet" style={{ fontSize: '0.68rem' }}>{adv.rank}</span>
                  {typeBadges[adv.type] || <span className="tag tag-outline">Advancement</span>}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {adv.desc}
                </div>
              </div>

              <button
                onClick={() => deleteAdvancement(idx)}
                className="btn btn-sm btn-crimson"
                title="Delete Advancement"
                style={{ padding: '2px 6px' }}
              >
                <X size={12} />
              </button>
            </div>
          ))}
        </div>
      )}

      <AddAdvancementModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};
