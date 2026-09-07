import React, { useState } from 'react';
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

  return (
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
            <label className="form-label">Advancement Type / Choice</label>
            <select
              className="form-select"
              value={advType}
              onChange={e => setAdvType(e.target.value as any)}
            >
              <option value="skills">🎯 +3 Skill Points (Increases 3 skills below linked attr or 1-2 skills above)</option>
              <option value="attribute">⚡ +1 Physical/Mental Attribute Die Step (Max 1 per Rank)</option>
              <option value="edge">⭐ Gain 1 New Edge, Power, or +1 Psionic Level (PL)</option>
              <option value="other">📜 Other Career Milestone / Special Reward</option>
            </select>
          </div>

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

          {advType === 'skills' && (
            <div className="form-group">
              <label className="form-label">Skills Allocation Details</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Athletics d6, Melee d8, Stealth d8 (+3 pts total)"
                value={skillDesc}
                onChange={e => setSkillDesc(e.target.value)}
              />
            </div>
          )}

          {advType === 'edge' && (
            <div className="form-group">
              <label className="form-label">Edge / Power / PL Details</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Psionic Level +1 (Psi Rating to PL 5) or Marksman Edge"
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
    </div>
  );
};
