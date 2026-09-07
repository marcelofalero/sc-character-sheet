import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useCharacter } from '../../store/useCharacterStore';
import { getRankForAdvancements } from '../../utils/calculations';
import { X, TrendingUp } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const AddAdvancementModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const { activeCharacter, addAdvancement } = useCharacter();

  const advList = activeCharacter.advancementsList || [];
  const nextIdx = advList.length;
  const nextRank = getRankForAdvancements(nextIdx + 1);

  const [advType, setAdvType] = useState<'skills' | 'attribute' | 'edge' | 'other'>('skills');
  const [attrTarget, setAttrTarget] = useState('agility');
  const [skillDesc, setSkillDesc] = useState('Athletics d6, Melee d8, Stealth d8');
  const [edgeDesc, setEdgeDesc] = useState('');
  const [otherDesc, setOtherDesc] = useState('');

  if (!isOpen) return null;

  const handleConfirm = () => {
    let desc = '';
    let target = undefined;

    if (advType === 'skills') {
      desc = `+3 Skill Points: ${skillDesc.trim() || 'Custom skills'}`;
    } else if (advType === 'attribute') {
      const cap = attrTarget.charAt(0).toUpperCase() + attrTarget.slice(1);
      desc = `${cap} Attribute die step increase (+1 step)`;
      target = attrTarget;
    } else if (advType === 'edge') {
      desc = `New Edge / Power / PL: ${edgeDesc.trim() || 'Selected Edge'}`;
    } else {
      desc = otherDesc.trim() || 'Career Advancement';
    }

    addAdvancement({
      rank: nextRank,
      type: advType,
      target,
      desc
    });

    onClose();
  };

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.6rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <TrendingUp size={18} color="var(--emerald)" />
            <strong style={{ color: 'var(--emerald)', fontFamily: 'var(--font-hud)', fontSize: '0.95rem' }}>
              Record Career Advancement #{nextIdx + 1} ({nextRank} Rank)
            </strong>
          </div>
          <button onClick={onClose} className="btn btn-sm btn-outline" style={{ padding: '2px 6px' }}>
            <X size={14} />
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          
          <div className="form-group">
            <label className="form-label">Advancement Category</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '0.4rem' }}>
              <button
                type="button"
                className={`btn btn-sm ${advType === 'skills' ? 'btn-emerald' : 'btn-outline'}`}
                onClick={() => setAdvType('skills')}
              >
                +3 Skill Points
              </button>
              <button
                type="button"
                className={`btn btn-sm ${advType === 'attribute' ? 'btn-emerald' : 'btn-outline'}`}
                onClick={() => setAdvType('attribute')}
              >
                +1 Attribute Step
              </button>
              <button
                type="button"
                className={`btn btn-sm ${advType === 'edge' ? 'btn-emerald' : 'btn-outline'}`}
                onClick={() => setAdvType('edge')}
              >
                New Edge / Power
              </button>
              <button
                type="button"
                className={`btn btn-sm ${advType === 'other' ? 'btn-emerald' : 'btn-outline'}`}
                onClick={() => setAdvType('other')}
              >
                Other / Lore
              </button>
            </div>
          </div>

          {advType === 'skills' && (
            <div className="form-group">
              <label className="form-label">Skill Allocation Details</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Athletics d6, Melee d8, Stealth d8"
                value={skillDesc}
                onChange={e => setSkillDesc(e.target.value)}
              />
            </div>
          )}

          {advType === 'attribute' && (
            <div className="form-group">
              <label className="form-label">Target Attribute to Step Up</label>
              <select
                className="form-select"
                value={attrTarget}
                onChange={e => setAttrTarget(e.target.value)}
              >
                <option value="agility">Agility</option>
                <option value="strength">Strength</option>
                <option value="vigor">Vigor</option>
                <option value="instinct">Instinct</option>
                <option value="intelligence">Intelligence</option>
                <option value="spirit">Spirit</option>
              </select>
            </div>
          )}

          {advType === 'edge' && (
            <div className="form-group">
              <label className="form-label">Edge or Power Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Combat Reflexes, Marksman, Power Level Increase"
                value={edgeDesc}
                onChange={e => setEdgeDesc(e.target.value)}
              />
            </div>
          )}

          {advType === 'other' && (
            <div className="form-group">
              <label className="form-label">Custom Advancement Notes</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Special Operative clearance, C.O.T. Rank promotion"
                value={otherDesc}
                onChange={e => setOtherDesc(e.target.value)}
              />
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '0.5rem' }}>
            <button onClick={onClose} className="btn btn-outline">Cancel</button>
            <button onClick={handleConfirm} className="btn btn-emerald">✓ Confirm & Apply</button>
          </div>

        </div>
      </div>
    </div>,
    document.body
  );
};
