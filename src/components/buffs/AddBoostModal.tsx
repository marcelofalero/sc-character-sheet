import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useCharacter } from '../../store/useCharacterStore';
import { ActiveBoost, AttributeKey, BoostMutations } from '../../types/character';
import { X, Sparkles, Sliders, Shield, Zap, Target } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ALL_SKILLS = [
  { id: 'athletics', name: 'Athletics (Agility)' },
  { id: 'melee', name: 'Melee (Agility)' },
  { id: 'stealth', name: 'Stealth (Agility)' },
  { id: 'ranged', name: 'Ranged (Instinct)' },
  { id: 'perception', name: 'Perception (Instinct)' },
  { id: 'pilot', name: 'Pilot (Instinct)' },
  { id: 'insight', name: 'Insight (Instinct)' },
  { id: 'survival', name: 'Survival (Instinct)' },
  { id: 'tactics', name: 'Tactics (Instinct)' },
  { id: 'computers', name: 'Computers (Intelligence)' },
  { id: 'engineering', name: 'Engineering (Intelligence)' },
  { id: 'lore', name: 'Lore (Intelligence)' },
  { id: 'medicine', name: 'Medicine (Intelligence)' },
  { id: 'science', name: 'Science (Intelligence)' },
  { id: 'influence', name: 'Influence (Spirit)' },
  { id: 'leadership', name: 'Leadership (Spirit)' },
  { id: 'psionics', name: 'Psionics (Spirit)' }
];

export const AddBoostModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const { addBoost } = useCharacter();

  const [activeTab, setActiveTab] = useState<'presets' | 'custom'>('presets');

  // Preset configuration state
  const [presetType, setPresetType] = useState<string>('enhance-abilities');
  const [presetAttr, setPresetAttr] = useState<AttributeKey>('agility');
  const [presetScope, setPresetScope] = useState<'attr-only' | 'attr-and-skills' | 'flat-bonus'>('attr-only');
  const [presetStance, setPresetStance] = useState<'active' | 'success' | 'raise'>('success');

  // Custom Builder state
  const [customName, setCustomName] = useState('');
  const [customCategory, setCustomCategory] = useState('Psionics');
  const [customHasRaise, setCustomHasRaise] = useState(true);
  const [customTargetType, setCustomTargetType] = useState<'attribute' | 'skill' | 'derived'>('attribute');
  
  // Custom Attribute Target
  const [customAttr, setCustomAttr] = useState<AttributeKey>('agility');
  const [customAttrModType, setCustomAttrModType] = useState<'step' | 'flat'>('step');
  const [customAttrSuccessVal, setCustomAttrSuccessVal] = useState(1);
  const [customAttrRaiseVal, setCustomAttrRaiseVal] = useState(2);
  const [customAttrIncludeSkills, setCustomAttrIncludeSkills] = useState<'none' | 'flat' | 'step'>('none');

  // Custom Skill Target
  const [customSkill, setCustomSkill] = useState('stealth');
  const [customSkillModType, setCustomSkillModType] = useState<'flat' | 'step'>('flat');
  const [customSkillSuccessVal, setCustomSkillSuccessVal] = useState(2);
  const [customSkillRaiseVal, setCustomSkillRaiseVal] = useState(4);

  // Custom Derived Stat Target
  const [customDerivedStat, setCustomDerivedStat] = useState<'armor' | 'defMod' | 'toughnessMod' | 'disciplineMod' | 'resolveMod' | 'speedMod'>('armor');
  const [customDerivedVal, setCustomDerivedVal] = useState(4);

  if (!isOpen) return null;

  const handleApplyPreset = () => {
    let newBoost: ActiveBoost;

    if (presetType === 'enhance-abilities') {
      const attrLabel = presetAttr.charAt(0).toUpperCase() + presetAttr.slice(1);
      const mutations: BoostMutations = {};
      const raiseMutations: BoostMutations = {};
      let desc = '';

      if (presetScope === 'attr-only') {
        mutations.attrSteps = { [presetAttr]: 1 };
        raiseMutations.attrSteps = { [presetAttr]: 2 };
        desc = `+1 die step on Success, +2 on Raise to ${attrLabel} attribute only.`;
      } else if (presetScope === 'attr-and-skills') {
        mutations.attrSteps = { [presetAttr]: 1 };
        mutations.linkedAttrSkillMods = { [presetAttr]: 1 };
        raiseMutations.attrSteps = { [presetAttr]: 2 };
        raiseMutations.linkedAttrSkillMods = { [presetAttr]: 2 };
        desc = `+1 die step on Success, +2 on Raise to ${attrLabel} and linked skills.`;
      } else {
        mutations.attrRollMods = { [presetAttr]: 1 };
        raiseMutations.attrRollMods = { [presetAttr]: 2 };
        desc = `+1 on Success, +2 on Raise to ${attrLabel} trait check rolls.`;
      }

      newBoost = {
        id: `boost_ea_${presetAttr}_${Date.now()}`,
        name: `Enhance Abilities (${attrLabel}${presetScope === 'attr-only' ? ' Attr' : ''})`,
        category: 'Psionics (PL 3)',
        type: 'enhance-abilities',
        targetAttr: presetAttr,
        state: presetStance,
        hasRaise: true,
        desc,
        mutations,
        raiseMutations
      };
    } else if (presetType === 'muscular-enh') {
      newBoost = {
        id: `boost_musc_${Date.now()}`,
        name: 'Muscular Enhancement',
        category: 'Psionics (PL 4)',
        type: 'muscular-enh',
        state: presetStance,
        hasRaise: true,
        desc: '+1 (+2 on Raise) to Strength checks, Athletics, and Stealth rolls.',
        mutations: {
          attrRollMods: { strength: 1 },
          skillRollMods: { athletics: 1, stealth: 1 }
        },
        raiseMutations: {
          attrRollMods: { strength: 2 },
          skillRollMods: { athletics: 2, stealth: 2 }
        }
      };
    } else if (presetType === 'thought-block') {
      newBoost = {
        id: `boost_tb_${Date.now()}`,
        name: 'Thought Blocking',
        category: 'Psionics',
        type: 'thought-block',
        state: presetStance,
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
    } else if (presetType === 'targeting-scope') {
      newBoost = {
        id: `boost_scope_${Date.now()}`,
        name: 'Targeting HUD / Scope',
        category: 'Gear / Cybernetics',
        type: 'gear',
        targetSkill: 'ranged',
        state: 'active',
        hasRaise: false,
        desc: '+2 to Ranged weapon attack rolls.',
        mutations: {
          skillRollMods: { ranged: 2 }
        }
      };
    } else if (presetType === 'chameleon-cloak') {
      newBoost = {
        id: `boost_cloak_${Date.now()}`,
        name: 'Chameleon Cloak / Stealth Field',
        category: 'Gear / Psionics',
        type: 'stealth-field',
        targetSkill: 'stealth',
        state: presetStance,
        hasRaise: true,
        desc: '+2 (+4 on Raise) to Stealth rolls.',
        mutations: {
          skillRollMods: { stealth: 2 }
        },
        raiseMutations: {
          skillRollMods: { stealth: 4 }
        }
      };
    } else if (presetType === 'stimpack') {
      newBoost = {
        id: `boost_stim_${Date.now()}`,
        name: 'Military Stimpack',
        category: 'Chemical',
        type: 'stimpack',
        state: 'active',
        hasRaise: false,
        desc: '+2 Speed and Agility die step (+1 step).',
        mutations: {
          attrSteps: { agility: 1 },
          speedMod: 2
        }
      };
    } else {
      // HES Suit
      newBoost = {
        id: `boost_hes_${Date.now()}`,
        name: 'Hostile Environment Suit (HES)',
        category: 'Gear',
        type: 'hes-suit',
        state: 'active',
        hasRaise: false,
        desc: 'Hermetic Ghost combat armor providing +8 Armor.',
        mutations: {
          armor: 8
        }
      };
    }

    addBoost(newBoost);
    onClose();
  };

  const handleApplyCustom = () => {
    const name = customName.trim() || 'Custom Modifier';
    const mutations: BoostMutations = {};
    const raiseMutations: BoostMutations = {};
    let desc = '';

    if (customTargetType === 'attribute') {
      const attrLabel = customAttr.charAt(0).toUpperCase() + customAttr.slice(1);
      if (customAttrModType === 'step') {
        mutations.attrSteps = { [customAttr]: customAttrSuccessVal };
        if (customHasRaise) raiseMutations.attrSteps = { [customAttr]: customAttrRaiseVal };
        
        if (customAttrIncludeSkills === 'flat') {
          mutations.linkedAttrSkillMods = { [customAttr]: customAttrSuccessVal };
          if (customHasRaise) raiseMutations.linkedAttrSkillMods = { [customAttr]: customAttrRaiseVal };
          desc = `+${customAttrSuccessVal}${customHasRaise ? ` (+${customAttrRaiseVal} on Raise)` : ''} die steps to ${attrLabel} and linked skills.`;
        } else if (customAttrIncludeSkills === 'step') {
          mutations.linkedAttrSkillSteps = { [customAttr]: customAttrSuccessVal };
          if (customHasRaise) raiseMutations.linkedAttrSkillSteps = { [customAttr]: customAttrRaiseVal };
          desc = `+${customAttrSuccessVal}${customHasRaise ? ` (+${customAttrRaiseVal} on Raise)` : ''} die steps to ${attrLabel} & linked skills.`;
        } else {
          desc = `+${customAttrSuccessVal}${customHasRaise ? ` (+${customAttrRaiseVal} on Raise)` : ''} die step to ${attrLabel} attribute only.`;
        }
      } else {
        // Flat roll bonus
        mutations.attrRollMods = { [customAttr]: customAttrSuccessVal };
        if (customHasRaise) raiseMutations.attrRollMods = { [customAttr]: customAttrRaiseVal };
        desc = `+${customAttrSuccessVal}${customHasRaise ? ` (+${customAttrRaiseVal} on Raise)` : ''} to ${attrLabel} trait rolls.`;
      }
    } else if (customTargetType === 'skill') {
      const skillName = ALL_SKILLS.find(s => s.id === customSkill)?.name || customSkill;
      if (customSkillModType === 'flat') {
        mutations.skillRollMods = { [customSkill]: customSkillSuccessVal };
        if (customHasRaise) raiseMutations.skillRollMods = { [customSkill]: customSkillRaiseVal };
        desc = `+${customSkillSuccessVal}${customHasRaise ? ` (+${customSkillRaiseVal} on Raise)` : ''} flat bonus to ${skillName} rolls.`;
      } else {
        mutations.skillSteps = { [customSkill]: customSkillSuccessVal };
        if (customHasRaise) raiseMutations.skillSteps = { [customSkill]: customSkillRaiseVal };
        desc = `+${customSkillSuccessVal}${customHasRaise ? ` (+${customSkillRaiseVal} on Raise)` : ''} die step increase to ${skillName}.`;
      }
    } else {
      // Derived Stat
      mutations[customDerivedStat] = customDerivedVal;
      desc = `+${customDerivedVal} to ${customDerivedStat}.`;
    }

    const newBoost: ActiveBoost = {
      id: `boost_custom_${Date.now()}`,
      name,
      category: customCategory || 'Custom',
      type: 'custom',
      targetAttr: customTargetType === 'attribute' ? customAttr : undefined,
      targetSkill: customTargetType === 'skill' ? customSkill : undefined,
      state: customHasRaise ? 'success' : 'active',
      hasRaise: customHasRaise,
      desc,
      mutations,
      raiseMutations: customHasRaise ? raiseMutations : undefined
    };

    addBoost(newBoost);
    onClose();
  };

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.6rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={18} color="var(--cyan)" />
            <strong style={{ color: 'var(--cyan)', fontFamily: 'var(--font-hud)', fontSize: '0.95rem' }}>
              Combat Modifier & Boost Engine
            </strong>
          </div>
          <button onClick={onClose} className="btn btn-sm btn-outline" style={{ padding: '2px 6px' }}>
            <X size={14} />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
          <button
            type="button"
            className={`btn btn-sm ${activeTab === 'presets' ? 'btn-cyan' : 'btn-outline'}`}
            onClick={() => setActiveTab('presets')}
          >
            <Zap size={13} /> Quick Presets & Powers
          </button>
          <button
            type="button"
            className={`btn btn-sm ${activeTab === 'custom' ? 'btn-cyan' : 'btn-outline'}`}
            onClick={() => setActiveTab('custom')}
          >
            <Sliders size={13} /> Custom Boost Builder
          </button>
        </div>

        {/* TAB 1: PRESETS */}
        {activeTab === 'presets' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <div className="form-group">
              <label className="form-label">Select Power / Equipment Preset</label>
              <select
                className="form-select"
                value={presetType}
                onChange={(e) => setPresetType(e.target.value)}
              >
                <option value="enhance-abilities">✨ Enhance Abilities (Augmentation Psionic Power)</option>
                <option value="muscular-enh">💪 Muscular Enhancement (Strength & Athletics/Stealth)</option>
                <option value="thought-block">🧠 Thought Blocking (Discipline & Resolve)</option>
                <option value="targeting-scope">🎯 Targeting HUD / Laser Scope (+2 Ranged)</option>
                <option value="chameleon-cloak">🦎 Chameleon Cloak / Stealth Field (+2/+4 Stealth)</option>
                <option value="stimpack">💉 Military Stimpack (+2 Speed, +1 Agi Step)</option>
                <option value="hes-suit">🛡️ Hostile Environment Suit (+8 Armor)</option>
              </select>
            </div>

            {presetType === 'enhance-abilities' && (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                  <div className="form-group">
                    <label className="form-label">Target Attribute</label>
                    <select
                      className="form-select"
                      value={presetAttr}
                      onChange={(e) => setPresetAttr(e.target.value as AttributeKey)}
                    >
                      <option value="agility">Agility (Agi)</option>
                      <option value="instinct">Instinct (Inst)</option>
                      <option value="strength">Strength (Str)</option>
                      <option value="vigor">Vigor (Vig)</option>
                      <option value="intelligence">Intelligence (Int)</option>
                      <option value="spirit">Spirit (Spi)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Boost Scope</label>
                    <select
                      className="form-select"
                      value={presetScope}
                      onChange={(e) => setPresetScope(e.target.value as any)}
                    >
                      <option value="attr-only">Attribute Die Step Only (d6 → d8)</option>
                      <option value="attr-and-skills">Attribute + Linked Skills (d6 → d8 & +1/+2 skills)</option>
                      <option value="flat-bonus">Flat Roll Bonus (+1/+2 to checks)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Initial Roll Result</label>
                  <select
                    className="form-select"
                    value={presetStance}
                    onChange={(e) => setPresetStance(e.target.value as any)}
                  >
                    <option value="success">Success (+1 Step / +1 Bonus)</option>
                    <option value="raise">Raise (+2 Steps / +2 Bonus)</option>
                  </select>
                </div>
              </>
            )}

            {(presetType === 'muscular-enh' || presetType === 'thought-block' || presetType === 'chameleon-cloak') && (
              <div className="form-group">
                <label className="form-label">Initial Activation State</label>
                <select
                  className="form-select"
                  value={presetStance}
                  onChange={(e) => setPresetStance(e.target.value as any)}
                >
                  <option value="success">Success State</option>
                  <option value="raise">Raise State (Max Effect)</option>
                </select>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '0.5rem' }}>
              <button onClick={onClose} className="btn btn-outline">Cancel</button>
              <button onClick={handleApplyPreset} className="btn btn-emerald">✓ Apply Preset</button>
            </div>
          </div>
        )}

        {/* TAB 2: CUSTOM BUILDER */}
        {activeTab === 'custom' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '0.6rem' }}>
              <div className="form-group">
                <label className="form-label">Modifier / Buff Name</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Adrenaline Overdrive, Targeting Beacon"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Category</label>
                <select
                  className="form-select"
                  value={customCategory}
                  onChange={(e) => setCustomCategory(e.target.value)}
                >
                  <option value="Psionics">Psionic Power</option>
                  <option value="Cybernetics">Cybernetic Implant</option>
                  <option value="Chemical">Chemical / Stim</option>
                  <option value="Tactical">Tactical Stance / Maneuver</option>
                  <option value="Gear">Gear / Weapon Mod</option>
                  <option value="Ally Buff">Ally Aura / Command</option>
                  <option value="Custom">Other Custom</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
              <div className="form-group">
                <label className="form-label">What Does It Boost?</label>
                <select
                  className="form-select"
                  value={customTargetType}
                  onChange={(e) => setCustomTargetType(e.target.value as any)}
                >
                  <option value="attribute">⚡ Attribute (Agility, Strength, etc.)</option>
                  <option value="skill">🎯 Specific Skill (Stealth, Melee, Ranged, etc.)</option>
                  <option value="derived">🛡️ Derived Stat (Armor, Defense, Toughness, Speed)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Activation Control Type</label>
                <select
                  className="form-select"
                  value={customHasRaise ? 'raise' : 'toggle'}
                  onChange={(e) => setCustomHasRaise(e.target.value === 'raise')}
                >
                  <option value="raise">Tri-State Roll (Off / Success / Raise)</option>
                  <option value="toggle">Simple Toggle (Off / Active)</option>
                </select>
              </div>
            </div>

            {/* Target Details: Attribute */}
            {customTargetType === 'attribute' && (
              <div style={{ background: 'rgba(0, 229, 255, 0.04)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                  <div className="form-group">
                    <label className="form-label">Select Attribute</label>
                    <select
                      className="form-select"
                      value={customAttr}
                      onChange={(e) => setCustomAttr(e.target.value as AttributeKey)}
                    >
                      <option value="agility">Agility</option>
                      <option value="strength">Strength</option>
                      <option value="vigor">Vigor</option>
                      <option value="instinct">Instinct</option>
                      <option value="intelligence">Intelligence</option>
                      <option value="spirit">Spirit</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Modifier Format</label>
                    <select
                      className="form-select"
                      value={customAttrModType}
                      onChange={(e) => setCustomAttrModType(e.target.value as any)}
                    >
                      <option value="step">Die Step Increase (d6 → d8)</option>
                      <option value="flat">Flat Check Bonus (+1, +2 to rolls)</option>
                    </select>
                  </div>
                </div>

                {customAttrModType === 'step' && (
                  <div className="form-group">
                    <label className="form-label">Affect Linked Skills?</label>
                    <select
                      className="form-select"
                      value={customAttrIncludeSkills}
                      onChange={(e) => setCustomAttrIncludeSkills(e.target.value as any)}
                    >
                      <option value="none">No — Boost Attribute Only</option>
                      <option value="flat">Yes — Add Flat Roll Bonus (+1/+2) to Linked Skills</option>
                      <option value="step">Yes — Add Die Step (+1/+2 steps) to Linked Skills</option>
                    </select>
                  </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: customHasRaise ? '1fr 1fr' : '1fr', gap: '0.6rem' }}>
                  <div className="form-group">
                    <label className="form-label">{customHasRaise ? 'Success Value' : 'Active Value'}</label>
                    <input
                      type="number"
                      className="form-input"
                      value={customAttrSuccessVal}
                      onChange={(e) => setCustomAttrSuccessVal(parseInt(e.target.value, 10) || 0)}
                    />
                  </div>
                  {customHasRaise && (
                    <div className="form-group">
                      <label className="form-label">Raise Value</label>
                      <input
                        type="number"
                        className="form-input"
                        value={customAttrRaiseVal}
                        onChange={(e) => setCustomAttrRaiseVal(parseInt(e.target.value, 10) || 0)}
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Target Details: Skill */}
            {customTargetType === 'skill' && (
              <div style={{ background: 'rgba(0, 230, 118, 0.04)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                  <div className="form-group">
                    <label className="form-label">Select Target Skill</label>
                    <select
                      className="form-select"
                      value={customSkill}
                      onChange={(e) => setCustomSkill(e.target.value)}
                    >
                      {ALL_SKILLS.map(s => (
                        <option key={s.id} value={s.id}>{s.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Skill Modifier Format</label>
                    <select
                      className="form-select"
                      value={customSkillModType}
                      onChange={(e) => setCustomSkillModType(e.target.value as any)}
                    >
                      <option value="flat">Flat Roll Bonus (+1, +2, +3 to check)</option>
                      <option value="step">Die Step Increase (+1, +2 die steps)</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: customHasRaise ? '1fr 1fr' : '1fr', gap: '0.6rem' }}>
                  <div className="form-group">
                    <label className="form-label">{customHasRaise ? 'Success Bonus' : 'Active Bonus'}</label>
                    <input
                      type="number"
                      className="form-input"
                      value={customSkillSuccessVal}
                      onChange={(e) => setCustomSkillSuccessVal(parseInt(e.target.value, 10) || 0)}
                    />
                  </div>
                  {customHasRaise && (
                    <div className="form-group">
                      <label className="form-label">Raise Bonus</label>
                      <input
                        type="number"
                        className="form-input"
                        value={customSkillRaiseVal}
                        onChange={(e) => setCustomSkillRaiseVal(parseInt(e.target.value, 10) || 0)}
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Target Details: Derived Stat */}
            {customTargetType === 'derived' && (
              <div style={{ background: 'rgba(255, 171, 0, 0.04)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                  <div className="form-group">
                    <label className="form-label">Target Combat Stat</label>
                    <select
                      className="form-select"
                      value={customDerivedStat}
                      onChange={(e) => setCustomDerivedStat(e.target.value as any)}
                    >
                      <option value="armor">🛡️ Armor Rating</option>
                      <option value="defMod">⚔️ Defense / Parry</option>
                      <option value="toughnessMod">💪 Toughness (Direct)</option>
                      <option value="disciplineMod">🧠 Discipline</option>
                      <option value="resolveMod">✨ Resolve</option>
                      <option value="speedMod">🏃 Speed</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Modifier Amount</label>
                    <input
                      type="number"
                      className="form-input"
                      value={customDerivedVal}
                      onChange={(e) => setCustomDerivedVal(parseInt(e.target.value, 10) || 0)}
                    />
                  </div>
                </div>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '0.5rem' }}>
              <button onClick={onClose} className="btn btn-outline">Cancel</button>
              <button onClick={handleApplyCustom} className="btn btn-emerald">✓ Create & Apply Custom Boost</button>
            </div>

          </div>
        )}

      </div>
    </div>,
    document.body
  );
};
