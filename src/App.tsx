import React from 'react';
import { useCharacter } from './store/useCharacterStore';
import { HeaderHud } from './components/layout/HeaderHud';
import { SidebarNav } from './components/layout/SidebarNav';
import { ProfileHeader } from './components/dossier/ProfileHeader';
import { ActiveBuffsPanel } from './components/buffs/ActiveBuffsPanel';
import { DerivedStatsGrid } from './components/stats/DerivedStatsGrid';
import { AttributesGrid } from './components/traits/AttributesGrid';
import { SkillsGrid } from './components/traits/SkillsGrid';
import { WeaponsTable } from './components/equipment/WeaponsTable';
import { ArmorGearSection } from './components/equipment/ArmorGearSection';
import { PowersList } from './components/powers/PowersList';
import { HindrancesEdgesList } from './components/traits/HindrancesEdgesList';
import { AdvancementsLedger } from './components/advancements/AdvancementsLedger';
import { BattleNetTerminal } from './components/terminal/BattleNetTerminal';
import { CompendiumViewer } from './components/compendium/CompendiumViewer';
import { User, BookOpen, Terminal } from 'lucide-react';

export const App: React.FC = () => {
  const { activeTab, setActiveTab } = useCharacter();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Top Header & Live Telemetry HUD */}
      <HeaderHud />

      {/* Collapsible Sidebar */}
      <SidebarNav />

      {/* Main Content Area */}
      <main style={{ flex: 1, maxWidth: '1400px', width: '100%', margin: '0 auto', padding: '1rem' }}>
        
        {/* Tab Navigation */}
        <div style={{
          display: 'flex',
          gap: '0.4rem',
          borderBottom: '1px solid var(--border-subtle)',
          paddingBottom: '0.6rem',
          marginBottom: '1rem',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={() => setActiveTab('dossier')}
            className={`btn ${activeTab === 'dossier' ? 'btn-cyan' : 'btn-outline'}`}
            style={{ fontSize: '0.84rem' }}
          >
            <User size={15} />
            <span>OPERATIVE DOSSIER</span>
          </button>

          <button
            onClick={() => setActiveTab('compendium')}
            className={`btn ${activeTab === 'compendium' ? 'btn-cyan' : 'btn-outline'}`}
            style={{ fontSize: '0.84rem' }}
          >
            <BookOpen size={15} />
            <span>RULEBOOK COMPENDIUM</span>
          </button>

          <button
            onClick={() => setActiveTab('terminal')}
            className={`btn ${activeTab === 'terminal' ? 'btn-cyan' : 'btn-outline'}`}
            style={{ fontSize: '0.84rem' }}
          >
            <Terminal size={15} />
            <span>TACTICAL BATTLE-NET</span>
          </button>
        </div>

        {/* Tab 1: Operative Dossier */}
        {activeTab === 'dossier' && (
          <div className="dossier-view" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            
            <div className="hud-panel">
              {/* Profile Header Inputs */}
              <ProfileHeader />

              {/* Active Combat Buffs & Stances */}
              <ActiveBuffsPanel />

              {/* Derived Combat Stats & Clickable Damage Pips */}
              <DerivedStatsGrid />

              {/* Attributes (Full width side-to-side) */}
              <AttributesGrid />

              {/* Skills Grid */}
              <SkillsGrid />

              {/* Equipped Arsenal */}
              <WeaponsTable />

              {/* Armor & Field Gear */}
              <ArmorGearSection />

              {/* Psionic Powers */}
              <PowersList />

              {/* Hindrances & Edges */}
              <HindrancesEdgesList />

              {/* Advancements Ledger */}
              <AdvancementsLedger />
            </div>

            {/* Battle-Net Terminal Log */}
            <BattleNetTerminal />

          </div>
        )}

        {/* Tab 2: Rulebook Compendium */}
        {activeTab === 'compendium' && (
          <div className="compendium-view">
            <CompendiumViewer />
          </div>
        )}

        {/* Tab 3: Tactical Battle-Net */}
        {activeTab === 'terminal' && (
          <div className="terminal-view">
            <BattleNetTerminal />
          </div>
        )}

      </main>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid var(--border-subtle)',
        padding: '1rem',
        textAlign: 'center',
        fontSize: '0.75rem',
        color: 'var(--text-dim)',
        fontFamily: 'var(--font-mono)'
      }}>
        StarCraft RPG // Ghost Operations Living Compendium • Built with React + TypeScript + Vite
      </footer>

    </div>
  );
};
