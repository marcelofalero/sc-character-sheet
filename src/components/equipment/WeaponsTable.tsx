import React, { useState } from 'react';
import { useCharacter } from '../../store/useCharacterStore';
import { CharacterWeapon } from '../../types/character';
import { SC_DATA } from '../../data/scData';
import { Swords, Plus, X, Dices } from 'lucide-react';
import { rollExplodingDie } from '../../utils/diceEngine';
import soundFx from '../../utils/soundFx';

export const WeaponsTable: React.FC = () => {
  const { activeCharacter, addWeapon, deleteWeapon, addTerminalLog } = useCharacter();
  const [showAddForm, setShowAddForm] = useState(false);
  const [name, setName] = useState('');
  const [range, setRange] = useState('12/24/48');
  const [damage, setDamage] = useState('2d6+1');
  const [rof, setRof] = useState('1');
  const [ap, setAp] = useState(0);
  const [notes, setNotes] = useState('');

  const weapons = activeCharacter.weapons || [];

  const handleRollAttack = (w: CharacterWeapon) => {
    soundFx.roll();
    // Roll damage dice (e.g. 2d12+4, 2d6+1, Str+d4)
    let total = 0;
    const rollsDesc: string[] = [];
    
    // Parse simple damage strings like 2d12+4 or 2d6
    const match = w.damage.match(/(\d+)d(\d+)(?:([+-]\d+))?/i);
    if (match) {
      const count = parseInt(match[1], 10);
      const sides = parseInt(match[2], 10);
      const mod = match[3] ? parseInt(match[3], 10) : 0;
      for (let i = 0; i < count; i++) {
        const roll = rollExplodingDie(sides);
        total += roll.total;
        rollsDesc.push(`d${sides}: ${roll.rolls.join('+')}`);
      }
      total += mod;
      if (mod !== 0) rollsDesc.push(`mod ${mod > 0 ? '+' + mod : mod}`);
    } else {
      // Fallback
      const roll = rollExplodingDie(8);
      total = roll.total;
      rollsDesc.push(`d8: ${roll.rolls.join('+')}`);
    }

    addTerminalLog(
      `⚔️ ${w.name} Damage: ${total} (AP ${w.ap}) [${rollsDesc.join(' + ')}]`,
      'info'
    );
  };

  const handleAddCustom = () => {
    if (!name.trim()) return;
    addWeapon({
      name: name.trim(),
      range: range.trim() || '12/24/48',
      damage: damage.trim() || '2d6',
      rof: rof.trim() || '1',
      ap: Number(ap) || 0,
      notes: notes.trim()
    });
    setName('');
    setShowAddForm(false);
  };

  const handleSelectArmoryPreset = (presetName: string) => {
    const preset = SC_DATA?.weapons?.find((w: any) => w.name === presetName);
    if (preset) {
      addWeapon({
        name: preset.name,
        range: preset.range || '12/24/48',
        damage: preset.damage || '2d6',
        rof: String(preset.rof || '1'),
        ap: Number(preset.ap) || 0,
        notes: preset.notes || preset.desc || ''
      });
    }
  };

  return (
    <div className="hud-inner-card" style={{ marginTop: '1.25rem' }}>
      <div className="hud-card-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Swords size={16} color="var(--cyan)" />
          <span className="hud-card-title">EQUIPPED WEAPONS & COMBAT ARSENAL</span>
        </div>
        <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
          <select
            className="form-select"
            style={{ padding: '2px 6px', fontSize: '0.75rem', maxWidth: '180px' }}
            onChange={(e) => {
              if (e.target.value) {
                handleSelectArmoryPreset(e.target.value);
                e.target.value = '';
              }
            }}
            defaultValue=""
          >
            <option value="" disabled>+ Add from Armory...</option>
            {(SC_DATA?.weapons || []).map((w: any) => (
              <option key={w.name} value={w.name}>{w.name} ({w.damage})</option>
            ))}
          </select>
          <button onClick={() => setShowAddForm(prev => !prev)} className="btn btn-sm btn-cyan">
            <Plus size={12} /> Custom
          </button>
        </div>
      </div>

      {showAddForm && (
        <div style={{ background: 'rgba(8,16,32,0.9)', border: '1px solid var(--border-cyan)', borderRadius: 'var(--radius-sm)', padding: '0.75rem', marginBottom: '0.75rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <input type="text" className="form-input" placeholder="Weapon Name" value={name} onChange={e => setName(e.target.value)} />
            <input type="text" className="form-input" placeholder="Range (e.g. 24/48/96)" value={range} onChange={e => setRange(e.target.value)} />
            <input type="text" className="form-input" placeholder="Damage (e.g. 2d12+4)" value={damage} onChange={e => setDamage(e.target.value)} />
            <input type="text" className="form-input" placeholder="RoF (e.g. 1)" value={rof} onChange={e => setRof(e.target.value)} />
            <input type="number" className="form-input" placeholder="AP (e.g. 4)" value={ap} onChange={e => setAp(Number(e.target.value))} />
            <input type="text" className="form-input" placeholder="Special Notes" value={notes} onChange={e => setNotes(e.target.value)} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.4rem' }}>
            <button onClick={() => setShowAddForm(false)} className="btn btn-sm btn-outline">Cancel</button>
            <button onClick={handleAddCustom} className="btn btn-sm btn-emerald">Save Weapon</button>
          </div>
        </div>
      )}

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.84rem' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-subtle)', textAlign: 'left', color: 'var(--text-muted)', fontFamily: 'var(--font-hud)', fontSize: '0.72rem' }}>
              <th style={{ padding: '6px 8px' }}>WEAPON NAME</th>
              <th style={{ padding: '6px 8px' }}>RANGE</th>
              <th style={{ padding: '6px 8px' }}>DAMAGE</th>
              <th style={{ padding: '6px 8px' }}>ROF</th>
              <th style={{ padding: '6px 8px' }}>AP</th>
              <th style={{ padding: '6px 8px' }}>SPECIAL NOTES</th>
              <th style={{ padding: '6px 8px', textAlign: 'right' }}>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {weapons.map((w, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '6px 8px', fontWeight: 700, color: '#fff' }}>{w.name}</td>
                <td style={{ padding: '6px 8px', fontFamily: 'var(--font-mono)', color: 'var(--cyan)' }}>{w.range}</td>
                <td style={{ padding: '6px 8px', fontFamily: 'var(--font-mono)', color: 'var(--amber)', fontWeight: 700 }}>{w.damage}</td>
                <td style={{ padding: '6px 8px', fontFamily: 'var(--font-mono)' }}>{w.rof}</td>
                <td style={{ padding: '6px 8px', fontFamily: 'var(--font-mono)', color: 'var(--crimson)' }}>{w.ap}</td>
                <td style={{ padding: '6px 8px', color: 'var(--text-muted)', fontSize: '0.78rem' }}>{w.notes || '-'}</td>
                <td style={{ padding: '6px 8px', textAlign: 'right', whiteSpace: 'nowrap' }}>
                  <button onClick={() => handleRollAttack(w)} className="btn btn-sm btn-cyan" title="Roll Weapon Damage" style={{ marginRight: '4px', padding: '2px 6px' }}>
                    <Dices size={12} /> Roll
                  </button>
                  <button onClick={() => deleteWeapon(idx)} className="btn btn-sm btn-crimson" title="Remove" style={{ padding: '2px 6px' }}>
                    <X size={12} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
