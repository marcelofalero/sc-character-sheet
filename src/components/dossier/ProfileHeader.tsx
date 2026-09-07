import React from 'react';
import { useCharacter } from '../../store/useCharacterStore';
import { SC_DATA } from '../../data/scData';

export const ProfileHeader: React.FC = () => {
  const { activeCharacter, effectivePsi, updateProfile } = useCharacter();

  const homeworldOptions = SC_DATA?.homeworlds || [
    { id: 'moria', name: 'Moria (Kel-Morian Combine)' },
    { id: 'tarsonis', name: 'Tarsonis (Old Confederacy)' },
    { id: 'korhal', name: 'Korhal IV (Dominion)' },
    { id: 'antiga', name: 'Antiga Prime' },
    { id: 'mar-sara', name: 'Mar Sara' },
    { id: 'chau-sara', name: 'Chau Sara' },
    { id: 'braxis', name: 'Braxis' },
    { id: 'typhon', name: 'Typhon XI' },
    { id: 'shiloh', name: 'Shiloh' },
    { id: 'umoja', name: 'Umoja (Protectorate)' }
  ];

  const cotOptions = [
    { rank: 'Novice', cot: 'Recruit' },
    { rank: 'Seasoned', cot: 'Operative' },
    { rank: 'Veteran', cot: 'Specialist' },
    { rank: 'Heroic', cot: 'Lieutenant' },
    { rank: 'Legendary', cot: 'Captain' }
  ];

  return (
    <div className="profile-header-panel" style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
      
      {/* Row 1: Primary Identity & Training */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '0.75rem'
      }}>
        <div className="form-group">
          <label className="form-label">Operative Name</label>
          <input
            type="text"
            className="form-input"
            value={activeCharacter.name}
            onChange={(e) => updateProfile({ name: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Callsign / Codename</label>
          <input
            type="text"
            className="form-input"
            value={activeCharacter.codename || ''}
            onChange={(e) => updateProfile({ codename: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Home World</label>
          <select
            className="form-select"
            value={activeCharacter.homeworld}
            onChange={(e) => updateProfile({ homeworld: e.target.value })}
          >
            {homeworldOptions.map((hw: any) => (
              <option key={hw.id || hw.name} value={hw.id || hw.name.toLowerCase()}>
                {hw.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Rank / C.O.T. Level</label>
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            <select
              className="form-select"
              value={activeCharacter.rank || 'Seasoned'}
              onChange={(e) => {
                const r = e.target.value;
                const match = cotOptions.find(o => o.rank === r);
                updateProfile({ rank: r, cotLevel: match?.cot || activeCharacter.cotLevel });
              }}
              style={{ flex: 1 }}
            >
              <option value="Novice">Novice</option>
              <option value="Seasoned">Seasoned</option>
              <option value="Veteran">Veteran</option>
              <option value="Heroic">Heroic</option>
              <option value="Legendary">Legendary</option>
            </select>

            <select
              className="form-select"
              value={activeCharacter.cotLevel || 'Operative'}
              onChange={(e) => updateProfile({ cotLevel: e.target.value })}
              style={{ flex: 1 }}
            >
              <option value="Recruit">Recruit</option>
              <option value="Operative">Operative</option>
              <option value="Specialist">Specialist</option>
              <option value="Lieutenant">Lieutenant</option>
              <option value="Captain">Captain</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Combat Training</label>
          <select
            className="form-select"
            value={activeCharacter.trainingPath || 'ghost'}
            onChange={(e) => updateProfile({ trainingPath: e.target.value })}
          >
            <option value="ghost">Ghost Combat Training (Terran)</option>
            <option value="shadowguard">Shadowguard Training (Umojan)</option>
          </select>
        </div>
      </div>

      {/* Row 2: Psi Rating, Advancements & Credits */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        gap: '0.75rem'
      }}>
        <div className="form-group">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label className="form-label" style={{ marginBottom: 0 }}>Psi Rating (PL)</label>
            <span
              className="tag tag-violet"
              style={{ fontSize: '0.7rem', cursor: 'help' }}
              title={`Base PL: ${effectivePsi.basePL} + C.O.T. Rank (${activeCharacter.rank}): +${effectivePsi.cotBonus} + PL Edges: +${effectivePsi.plEdgeCount} (Max Rank PL: ${effectivePsi.maxPlForRank})`}
            >
              PL {effectivePsi.effectivePL}
            </span>
          </div>
          <input
            type="number"
            className="form-input"
            min={1}
            max={10}
            value={activeCharacter.psiRating || effectivePsi.calculatedPL}
            onChange={(e) => updateProfile({ psiRating: parseInt(e.target.value, 10) || 1 })}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Advancements (Total)</label>
          <input
            type="number"
            className="form-input"
            min={0}
            value={(activeCharacter.advancementsList && activeCharacter.advancementsList.length) !== undefined ? activeCharacter.advancementsList.length : (activeCharacter.advancements || 0)}
            onChange={(e) => updateProfile({ advancements: parseInt(e.target.value, 10) || 0 })}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Credits (₢)</label>
          <input
            type="number"
            className="form-input"
            value={activeCharacter.credits !== undefined ? activeCharacter.credits : 11325}
            onChange={(e) => updateProfile({ credits: parseInt(e.target.value, 10) || 0 })}
          />
        </div>
      </div>

      {/* Row 3: Concept & Background */}
      <div className="form-group">
        <label className="form-label">Operative Concept & Background</label>
        <input
          type="text"
          className="form-input"
          value={activeCharacter.concept || ''}
          onChange={(e) => updateProfile({ concept: e.target.value })}
          placeholder="e.g. Psionic Human operative from Moria channeling Void energy."
        />
      </div>

    </div>
  );
};
