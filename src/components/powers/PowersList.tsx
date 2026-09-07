import React, { useState } from 'react';
import { useCharacter } from '../../store/useCharacterStore';
import { SC_DATA } from '../../data/scData';
import { Sparkles, Plus, X, Dices } from 'lucide-react';
import { rollTraitCheck } from '../../utils/diceEngine';
import soundFx from '../../utils/soundFx';

export const PowersList: React.FC = () => {
  const { activeCharacter, effectiveState, addPower, deletePower, addTerminalLog } = useCharacter();
  const [showAddForm, setShowAddForm] = useState(false);
  const [name, setName] = useState('');
  const [cost, setCost] = useState('2');
  const [range, setRange] = useState('Self');
  const [duration, setDuration] = useState('Instant');
  const [notes, setNotes] = useState('');

  const powers = activeCharacter.powers || [];

  const handleCastPower = (p: any) => {
    soundFx.roll();
    const psionicsDie = activeCharacter.skills.psionics || 4;
    const bonus = effectiveState.effectiveSkillBonuses.psionics || 0;
    const result = rollTraitCheck(`Psionics: ${p.name}`, psionicsDie, bonus);

    let logType: any = 'info';
    if (result.isCriticalFailure) logType = 'crit';
    else if (result.isRaise) logType = 'raise';
    else if (result.isSuccess) logType = 'success';
    else logType = 'fail';

    addTerminalLog(
      `✨ Manifest Power [${p.name}] (Cost: ${p.cost || '2'} Energy): ${result.finalTotal} ${result.isCriticalFailure ? '💥 CRITICAL BACKLASH!' : (result.isRaise ? '✨ RAISE!' : (result.isSuccess ? '✓ MANIFESTED' : '✕ FAILED'))} (${result.details})`,
      logType
    );
  };

  const handleAddCustom = () => {
    if (!name.trim()) return;
    addPower({
      name: name.trim(),
      cost: cost.trim() || '2',
      range: range.trim() || 'Self',
      duration: duration.trim() || 'Instant',
      notes: notes.trim()
    });
    setName('');
    setShowAddForm(false);
  };

  const handleSelectPreset = (pName: string) => {
    const preset = SC_DATA?.powers?.find((p: any) => p.name === pName);
    if (preset) {
      addPower({
        name: preset.name,
        cost: String(preset.cost || '2'),
        range: preset.range || 'Self',
        duration: preset.duration || 'Instant',
        discipline: preset.discipline || '',
        notes: preset.desc || preset.notes || ''
      });
    }
  };

  return (
    <div className="hud-inner-card" style={{ marginTop: '1.25rem' }}>
      <div className="hud-card-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Sparkles size={16} color="var(--violet)" />
          <span className="hud-card-title" style={{ color: 'var(--violet)' }}>
            PSIONIC POWERS & DISCIPLINE ARSENAL
          </span>
        </div>
        <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
          <select
            className="form-select"
            style={{ padding: '2px 6px', fontSize: '0.75rem', maxWidth: '180px' }}
            onChange={(e) => {
              if (e.target.value) {
                handleSelectPreset(e.target.value);
                e.target.value = '';
              }
            }}
            defaultValue=""
          >
            <option value="" disabled>+ Add from Powers...</option>
            {(SC_DATA?.powers || []).map((p: any) => (
              <option key={p.name} value={p.name}>{p.name} ({p.cost} Energy)</option>
            ))}
          </select>
          <button onClick={() => setShowAddForm(prev => !prev)} className="btn btn-sm btn-cyan">
            <Plus size={12} /> Custom
          </button>
        </div>
      </div>

      {showAddForm && (
        <div style={{ background: 'rgba(8,16,32,0.9)', border: '1px solid var(--border-violet)', borderRadius: 'var(--radius-sm)', padding: '0.75rem', marginBottom: '0.75rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <input type="text" className="form-input" placeholder="Power Name" value={name} onChange={e => setName(e.target.value)} />
            <input type="text" className="form-input" placeholder="Cost (Energy)" value={cost} onChange={e => setCost(e.target.value)} />
            <input type="text" className="form-input" placeholder="Range" value={range} onChange={e => setRange(e.target.value)} />
            <input type="text" className="form-input" placeholder="Duration" value={duration} onChange={e => setDuration(e.target.value)} />
            <input type="text" className="form-input" placeholder="Description / Effect" value={notes} onChange={e => setNotes(e.target.value)} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.4rem' }}>
            <button onClick={() => setShowAddForm(false)} className="btn btn-sm btn-outline">Cancel</button>
            <button onClick={handleAddCustom} className="btn btn-sm btn-emerald">Save Power</button>
          </div>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.65rem' }}>
        {powers.map((p, idx) => (
          <div
            key={idx}
            style={{
              background: 'rgba(12, 18, 32, 0.9)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-sm)',
              padding: '0.65rem 0.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <strong style={{ color: '#fff', fontSize: '0.88rem' }}>{p.name}</strong>
              <div style={{ display: 'flex', gap: '0.3rem', alignItems: 'center' }}>
                <span className="tag tag-violet" style={{ fontSize: '0.68rem' }}>{p.cost || '2'} Energy</span>
                <button onClick={() => deletePower(idx)} className="btn btn-sm btn-crimson" style={{ padding: '2px 5px' }}>
                  <X size={11} />
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.72rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
              <span>Range: {p.range || 'Self'}</span>
              <span>•</span>
              <span>Dur: {p.duration || 'Instant'}</span>
              {p.discipline && (
                <>
                  <span>•</span>
                  <span style={{ color: 'var(--violet)' }}>{p.discipline}</span>
                </>
              )}
            </div>

            {p.notes && (
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: '1.3' }}>
                {p.notes}
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.2rem' }}>
              <button onClick={() => handleCastPower(p)} className="btn btn-sm btn-cyan" style={{ padding: '2px 8px' }}>
                <Dices size={12} /> Manifest
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
