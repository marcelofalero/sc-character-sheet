import React, { useState } from 'react';
import { useCharacter } from '../../store/useCharacterStore';
import { ActiveBoost, AttributeKey } from '../../types/character';
import { X, Sparkles } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const AddBoostModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const { addBoost } = useCharacter();

  const [template, setTemplate] = useState<string>('enhance-abilities');
  const [targetAttr, setTargetAttr] = useState<AttributeKey>('agility');
  const [stance, setStance] = useState<'active' | 'success' | 'raise'>('success');
  const [customName, setCustomName] = useState<string>('');
  const [customEffect, setCustomEffect] = useState<string>('attr-step');

  if (!isOpen) return null;

  const handleApply = () => {
    let newBoost: ActiveBoost;

    if (template === 'enhance-abilities') {
      const attrLabel = targetAttr.charAt(0).toUpperCase() + targetAttr.slice(1);
      newBoost = {
        id: `boost_ea_${targetAttr}_${Date.now()}`,
        name: `Enhance Abilities (${attrLabel})`,
        category: 'Psionics (PL 3)',
        type: 'enhance-abilities',
        targetAttr,
        state: stance,
        hasRaise: true,
        desc: `+1 die step on Success, +2 on Raise to ${attrLabel} and linked skills.`,
        mutations: {
          attrSteps: { [targetAttr]: 1 },
          linkedAttrSkillMods: { [targetAttr]: 1 }
        },
        raiseMutations: {
          attrSteps: { [targetAttr]: 2 },
          linkedAttrSkillMods: { [targetAttr]: 2 }
        }
      };
    } else if (template === 'muscular-enh') {
      newBoost = {
        id: `boost_musc_${Date.now()}`,
        name: 'Muscular Enhancement',
        category: 'Psionics (PL 4)',
        type: 'muscular-enh',
        state: stance,
        hasRaise: true,
        desc: '+1 (+2 on Raise) to Strength checks, Athletics, and Stealth.',
        mutations: {
          attrRollMods: { strength: 1 },
          skillRollMods: { athletics: 1, stealth: 1 }
        },
        raiseMutations: {
          attrRollMods: { strength: 2 },
          skillRollMods: { athletics: 2, stealth: 2 }
        }
      };
    } else if (template === 'thought-block') {
      newBoost = {
        id: `boost_tb_${Date.now()}`,
        name: 'Thought Blocking',
        category: 'Psionics',
        type: 'thought-block',
        state: stance,
        hasRaise: true,
        desc: '+1 (+3 on Raise) to Discipline and Resolve.',
        mutations: {
          disciplineMod: 1,
          resolveMod: 1
        },
        raiseMutations: {
          disciplineMod: 3,
          resolveMod: 3
        }
      };
    } else if (template === 'stimpack') {
      newBoost = {
        id: `boost_stim_${Date.now()}`,
        name: 'Military Stimpack',
        category: 'Chemical',
        type: 'stimpack',
        state: 'active',
        hasRaise: false,
        desc: '+2 Speed and Agi+ for the combat encounter.',
        mutations: {
          attrSteps: { agility: 1 },
          speedMod: 2
        }
      };
    } else if (template === 'hes-suit') {
      newBoost = {
        id: `boost_hes_${Date.now()}`,
        name: 'Hostile Environment Suit',
        category: 'Gear',
        type: 'hes-suit',
        targetAttr: 'strength',
        state: 'active',
        hasRaise: false,
        desc: 'Hermetic Ghost suit granting Str+ and +8 Armor to Toughness.',
        mutations: {
          attrSteps: { strength: 1 },
          armor: 8
        }
      };
    } else {
      // Custom
      const name = customName.trim() || 'Custom Stance / Buff';
      const mutations: any = {};
      if (customEffect === 'attr-step') mutations.attrSteps = { [targetAttr]: 1 };
      else if (customEffect === 'attr-step-2') mutations.attrSteps = { [targetAttr]: 2 };
      else if (customEffect === 'roll-1') mutations.attrRollMods = { [targetAttr]: 1 };
      else if (customEffect === 'roll-2') mutations.attrRollMods = { [targetAttr]: 2 };
      else if (customEffect === 'armor-4') mutations.armor = 4;
      else if (customEffect === 'def-2') mutations.defMod = 2;
      else if (customEffect === 'speed-2') mutations.speedMod = 2;

      newBoost = {
        id: `boost_custom_${Date.now()}`,
        name,
        category: 'Custom Stance',
        type: 'custom',
        state: 'active',
        hasRaise: false,
        desc: `Custom applied combat modifier (${customEffect}).`,
        mutations
      };
    }

    addBoost(newBoost);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.6rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={18} color="var(--cyan)" />
            <strong style={{ color: 'var(--cyan)', fontFamily: 'var(--font-hud)', fontSize: '0.95rem' }}>
              Apply New Combat Boost or Stance
            </strong>
          </div>
          <button onClick={onClose} className="btn btn-sm btn-outline" style={{ padding: '2px 6px' }}>
            <X size={14} />
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          
          <div className="form-group">
            <label className="form-label">Boost Template / Preset</label>
            <select
              className="form-select"
              value={template}
              onChange={(e) => setTemplate(e.target.value)}
            >
              <option value="enhance-abilities">✨ Enhance Abilities (Augmentation Power)</option>
              <option value="muscular-enh">💪 Muscular Enhancement (Augmentation Power)</option>
              <option value="thought-block">🧠 Thought Blocking (Telepathy Power)</option>
              <option value="stimpack">💉 Military Stimpack (Chemical)</option>
              <option value="hes-suit">🛡️ Hostile Environment Suit (Heavy Armor & Str+)</option>
              <option value="custom">⚙️ Custom Trait Boost / Ally Stance</option>
            </select>
          </div>

          {(template === 'enhance-abilities' || template === 'custom') && (
            <div className="form-group">
              <label className="form-label">Target Trait / Attribute</label>
              <select
                className="form-select"
                value={targetAttr}
                onChange={(e) => setTargetAttr(e.target.value as AttributeKey)}
              >
                <option value="agility">Agility (Athletics, Melee, Stealth)</option>
                <option value="instinct">Instinct (Perception, Pilot, Ranged, Survival, Tactics, Insight)</option>
                <option value="strength">Strength (Physical force & Melee damage)</option>
                <option value="vigor">Vigor (Endurance & Toughness)</option>
                <option value="intelligence">Intelligence (Computers, Engineering, Lore, Med, Sci)</option>
                <option value="spirit">Spirit (Influence, Leadership, Psionics)</option>
              </select>
            </div>
          )}

          {template !== 'stimpack' && template !== 'hes-suit' && template !== 'custom' && (
            <div className="form-group">
              <label className="form-label">Activation Stance / Roll Level</label>
              <select
                className="form-select"
                value={stance}
                onChange={(e) => setStance(e.target.value as any)}
              >
                <option value="success">Success (+1 Die Step / +1 Bonus)</option>
                <option value="raise">Raise (+2 Die Steps / +2 Bonus)</option>
              </select>
            </div>
          )}

          {template === 'custom' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
              <div className="form-group">
                <label className="form-label">Custom Stance Name</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Squad Leader Inspire"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Effect Type</label>
                <select
                  className="form-select"
                  value={customEffect}
                  onChange={(e) => setCustomEffect(e.target.value)}
                >
                  <option value="attr-step">+1 Die Step to Target</option>
                  <option value="attr-step-2">+2 Die Steps to Target</option>
                  <option value="roll-1">+1 Flat Roll Bonus</option>
                  <option value="roll-2">+2 Flat Roll Bonus</option>
                  <option value="armor-4">+4 Armor / Toughness</option>
                  <option value="def-2">+2 Defense</option>
                  <option value="speed-2">+2 Speed</option>
                </select>
              </div>
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '0.5rem' }}>
            <button onClick={onClose} className="btn btn-outline">Cancel</button>
            <button onClick={handleApply} className="btn btn-emerald">✓ Apply Boost to Sheet</button>
          </div>

        </div>
      </div>
    </div>
  );
};
