import React, { useState } from 'react';
import { useCharacter } from '../../store/useCharacterStore';
import { SC_DATA } from '../../data/scData';
import { Shield, Package, Plus, X } from 'lucide-react';

export const ArmorGearSection: React.FC = () => {
  const { activeCharacter, updateProfile, addGear, deleteGear } = useCharacter();
  const [gearName, setGearName] = useState('');
  const [gearCount, setGearCount] = useState(1);
  const [gearNotes, setGearNotes] = useState('');
  const [showAddGear, setShowAddGear] = useState(false);

  const armor = activeCharacter.armor || {
    name: 'Hostile Environment Suit',
    value: 8,
    class: 'Heavy',
    boost: 'Str+',
    notes: 'Hermetic full-body pressure suit (+8 Armor, life-support, +1 Strength die step)'
  };

  const gear = activeCharacter.gear || [];

  const handleAddGear = () => {
    if (!gearName.trim()) return;
    addGear({
      name: gearName.trim(),
      count: gearCount || 1,
      notes: gearNotes.trim()
    });
    setGearName('');
    setGearNotes('');
    setShowAddGear(false);
  };

  const handleSelectArmoryGear = (itemName: string) => {
    const item = SC_DATA?.gear?.find((g: any) => g.name === itemName);
    if (item) {
      addGear({
        name: item.name,
        count: 1,
        notes: item.notes || item.desc || ''
      });
    }
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem', marginTop: '1.25rem' }}>
      
      {/* EQUIPPED ARMOR */}
      <div className="hud-inner-card">
        <div className="hud-card-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Shield size={16} color="var(--amber)" />
            <span className="hud-card-title amber">PROTECTIVE SUIT & ARMOR</span>
          </div>
          <span className="tag tag-amber">Armor +{armor.value || 0}</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '0.5rem' }}>
            <div className="form-group">
              <label className="form-label">Armor Name</label>
              <input
                type="text"
                className="form-input"
                value={armor.name || ''}
                onChange={e => updateProfile({ armor: { ...armor, name: e.target.value } })}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Armor Bonus</label>
              <input
                type="number"
                className="form-input"
                value={armor.value || 0}
                onChange={e => updateProfile({ armor: { ...armor, value: Number(e.target.value) || 0 } })}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Class</label>
              <input
                type="text"
                className="form-input"
                value={armor.class || 'Heavy'}
                onChange={e => updateProfile({ armor: { ...armor, class: e.target.value } })}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Suit Traits & Mounted Modules</label>
            <input
              type="text"
              className="form-input"
              value={armor.notes || ''}
              onChange={e => updateProfile({ armor: { ...armor, notes: e.target.value } })}
              placeholder="e.g. Life-support, Radiation Shielding, Cloaking integration"
            />
          </div>
        </div>
      </div>

      {/* FIELD GEAR */}
      <div className="hud-inner-card">
        <div className="hud-card-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Package size={16} color="var(--cyan)" />
            <span className="hud-card-title">FIELD GEAR & INVENTORY</span>
          </div>
          <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
            <select
              className="form-select"
              style={{ padding: '2px 6px', fontSize: '0.75rem', maxWidth: '160px' }}
              onChange={(e) => {
                if (e.target.value) {
                  handleSelectArmoryGear(e.target.value);
                  e.target.value = '';
                }
              }}
              defaultValue=""
            >
              <option value="" disabled>+ Add from Gear...</option>
              {(SC_DATA?.gear || []).map((g: any) => (
                <option key={g.name} value={g.name}>{g.name}</option>
              ))}
            </select>
            <button onClick={() => setShowAddGear(prev => !prev)} className="btn btn-sm btn-cyan">
              <Plus size={12} />
            </button>
          </div>
        </div>

        {showAddGear && (
          <div style={{ background: 'rgba(8,16,32,0.9)', border: '1px solid var(--border-cyan)', borderRadius: 'var(--radius-sm)', padding: '0.6rem', marginBottom: '0.6rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '0.4rem', marginBottom: '0.4rem' }}>
              <input type="text" className="form-input" placeholder="Gear Item Name" value={gearName} onChange={e => setGearName(e.target.value)} />
              <input type="number" className="form-input" placeholder="Qty" value={gearCount} onChange={e => setGearCount(Number(e.target.value))} />
            </div>
            <input type="text" className="form-input" placeholder="Notes / Description" value={gearNotes} onChange={e => setGearNotes(e.target.value)} style={{ marginBottom: '0.4rem' }} />
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.4rem' }}>
              <button onClick={() => setShowAddGear(false)} className="btn btn-sm btn-outline">Cancel</button>
              <button onClick={handleAddGear} className="btn btn-sm btn-emerald">Add</button>
            </div>
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', maxHeight: '200px', overflowY: 'auto' }}>
          {gear.map((g, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'rgba(8,14,26,0.8)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                padding: '0.35rem 0.6rem',
                fontSize: '0.82rem'
              }}
            >
              <div>
                <strong style={{ color: '#fff' }}>{g.name}</strong>
                {g.count > 1 && <span className="tag tag-cyan" style={{ marginLeft: '4px', fontSize: '0.65rem' }}>x{g.count}</span>}
                {g.notes && <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginLeft: '6px' }}>— {g.notes}</span>}
              </div>
              <button onClick={() => deleteGear(idx)} className="btn btn-sm btn-crimson" style={{ padding: '1px 5px' }}>
                <X size={11} />
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
