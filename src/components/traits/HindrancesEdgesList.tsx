import React, { useState } from 'react';
import { useCharacter } from '../../store/useCharacterStore';
import { SC_DATA } from '../../data/scData';
import { Award, AlertTriangle, Plus, X } from 'lucide-react';

export const HindrancesEdgesList: React.FC = () => {
  const { activeCharacter, addEdge, deleteEdge, addHindrance, deleteHindrance } = useCharacter();

  const [edgeName, setEdgeName] = useState('');
  const [edgeCat, setEdgeCat] = useState('Combat');
  const [edgeNotes, setEdgeNotes] = useState('');
  const [showAddEdge, setShowAddEdge] = useState(false);

  const [hindName, setHindName] = useState('');
  const [hindType, setHindType] = useState<'Major' | 'Minor'>('Minor');
  const [hindNotes, setHindNotes] = useState('');
  const [showAddHind, setShowAddHind] = useState(false);

  const edges = activeCharacter.edges || [];
  const hindrances = activeCharacter.hindrances || [];

  const handleSelectArmoryEdge = (name: string) => {
    const item = SC_DATA?.edges?.find((e: any) => e.name === name);
    if (item) {
      addEdge({
        name: item.name,
        category: item.category || 'General',
        notes: item.desc || item.notes || ''
      });
    }
  };

  const handleSelectArmoryHindrance = (name: string) => {
    const item = SC_DATA?.hindrances?.find((h: any) => h.name === name);
    if (item) {
      addHindrance({
        name: item.name,
        type: (item.type === 'Major' ? 'Major' : 'Minor'),
        notes: item.desc || item.notes || ''
      });
    }
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem', marginTop: '1.25rem' }}>
      
      {/* EDGES */}
      <div className="hud-inner-card">
        <div className="hud-card-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Award size={16} color="var(--amber)" />
            <span className="hud-card-title amber">EDGES & SPECIAL PERKS</span>
          </div>
          <div style={{ display: 'flex', gap: '0.35rem', alignItems: 'center' }}>
            <select
              className="form-select"
              style={{ padding: '2px 6px', fontSize: '0.75rem', maxWidth: '150px' }}
              onChange={(e) => {
                if (e.target.value) {
                  handleSelectArmoryEdge(e.target.value);
                  e.target.value = '';
                }
              }}
              defaultValue=""
            >
              <option value="" disabled>+ Add Edge...</option>
              {(SC_DATA?.edges || []).map((e: any) => (
                <option key={e.name} value={e.name}>{e.name} ({e.category})</option>
              ))}
            </select>
            <button onClick={() => setShowAddEdge(prev => !prev)} className="btn btn-sm btn-cyan">
              <Plus size={12} />
            </button>
          </div>
        </div>

        {showAddEdge && (
          <div style={{ background: 'rgba(8,16,32,0.9)', border: '1px solid var(--border-amber)', borderRadius: 'var(--radius-sm)', padding: '0.6rem', marginBottom: '0.6rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '0.4rem', marginBottom: '0.4rem' }}>
              <input type="text" className="form-input" placeholder="Edge Name" value={edgeName} onChange={e => setEdgeName(e.target.value)} />
              <input type="text" className="form-input" placeholder="Category" value={edgeCat} onChange={e => setEdgeCat(e.target.value)} />
            </div>
            <input type="text" className="form-input" placeholder="Description / Rule" value={edgeNotes} onChange={e => setEdgeNotes(e.target.value)} style={{ marginBottom: '0.4rem' }} />
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.4rem' }}>
              <button onClick={() => setShowAddEdge(false)} className="btn btn-sm btn-outline">Cancel</button>
              <button
                onClick={() => {
                  if (!edgeName.trim()) return;
                  addEdge({ name: edgeName.trim(), category: edgeCat.trim(), notes: edgeNotes.trim() });
                  setEdgeName('');
                  setShowAddEdge(false);
                }}
                className="btn btn-sm btn-emerald"
              >
                Add Edge
              </button>
            </div>
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', maxHeight: '240px', overflowY: 'auto' }}>
          {edges.map((e, idx) => {
            const entryName = typeof e === 'string' ? e : e.name;
            const entryCat = typeof e === 'string' ? 'Edge' : (e.category || 'General');
            const entryNotes = typeof e === 'string' ? '' : e.notes;

            return (
              <div
                key={idx}
                style={{
                  background: 'rgba(10, 18, 32, 0.85)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.5rem 0.65rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.2rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <strong style={{ color: '#fff', fontSize: '0.85rem' }}>{entryName}</strong>
                    <span className="tag tag-amber" style={{ fontSize: '0.65rem' }}>{entryCat}</span>
                  </div>
                  <button onClick={() => deleteEdge(idx)} className="btn btn-sm btn-crimson" style={{ padding: '1px 5px' }}>
                    <X size={11} />
                  </button>
                </div>
                {entryNotes && (
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {entryNotes}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* HINDRANCES */}
      <div className="hud-inner-card">
        <div className="hud-card-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <AlertTriangle size={16} color="var(--crimson)" />
            <span className="hud-card-title" style={{ color: 'var(--crimson)' }}>HINDRANCES & FLAWS</span>
          </div>
          <div style={{ display: 'flex', gap: '0.35rem', alignItems: 'center' }}>
            <select
              className="form-select"
              style={{ padding: '2px 6px', fontSize: '0.75rem', maxWidth: '150px' }}
              onChange={(e) => {
                if (e.target.value) {
                  handleSelectArmoryHindrance(e.target.value);
                  e.target.value = '';
                }
              }}
              defaultValue=""
            >
              <option value="" disabled>+ Add Hindrance...</option>
              {(SC_DATA?.hindrances || []).map((h: any) => (
                <option key={h.name} value={h.name}>{h.name} ({h.type})</option>
              ))}
            </select>
            <button onClick={() => setShowAddHind(prev => !prev)} className="btn btn-sm btn-cyan">
              <Plus size={12} />
            </button>
          </div>
        </div>

        {showAddHind && (
          <div style={{ background: 'rgba(8,16,32,0.9)', border: '1px solid var(--border-crimson)', borderRadius: 'var(--radius-sm)', padding: '0.6rem', marginBottom: '0.6rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '0.4rem', marginBottom: '0.4rem' }}>
              <input type="text" className="form-input" placeholder="Hindrance Name" value={hindName} onChange={e => setHindName(e.target.value)} />
              <select className="form-select" value={hindType} onChange={e => setHindType(e.target.value as any)}>
                <option value="Minor">Minor (1 pt)</option>
                <option value="Major">Major (2 pts)</option>
              </select>
            </div>
            <input type="text" className="form-input" placeholder="Description / Flaw Details" value={hindNotes} onChange={e => setHindNotes(e.target.value)} style={{ marginBottom: '0.4rem' }} />
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.4rem' }}>
              <button onClick={() => setShowAddHind(false)} className="btn btn-sm btn-outline">Cancel</button>
              <button
                onClick={() => {
                  if (!hindName.trim()) return;
                  addHindrance({ name: hindName.trim(), type: hindType, notes: hindNotes.trim() });
                  setHindName('');
                  setShowAddHind(false);
                }}
                className="btn btn-sm btn-emerald"
              >
                Add Hindrance
              </button>
            </div>
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', maxHeight: '240px', overflowY: 'auto' }}>
          {hindrances.map((h, idx) => {
            const entryName = typeof h === 'string' ? h : h.name;
            const entryType = typeof h === 'string' ? (h.includes('Major') ? 'Major' : 'Minor') : (h.type || 'Minor');
            const entryNotes = typeof h === 'string' ? '' : h.notes;

            return (
              <div
                key={idx}
                style={{
                  background: 'rgba(10, 18, 32, 0.85)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.5rem 0.65rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.2rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <strong style={{ color: '#fff', fontSize: '0.85rem' }}>{entryName}</strong>
                    <span className={entryType === 'Major' ? 'tag tag-crimson' : 'tag tag-amber'} style={{ fontSize: '0.65rem' }}>
                      {entryType}
                    </span>
                  </div>
                  <button onClick={() => deleteHindrance(idx)} className="btn btn-sm btn-crimson" style={{ padding: '1px 5px' }}>
                    <X size={11} />
                  </button>
                </div>
                {entryNotes && (
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {entryNotes}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
