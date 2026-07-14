import React, { useState, useRef } from 'react';
import AddMemberForm from './AddMemberForm';
import ProfileView from './ProfileView';
import { useTeamData } from './useTeamData';

export default function App() {
  const { 
    teamMembers, 
    isLoading, 
    addMember, 
    updateMember, 
    clearMembers, 
    exportMembers, 
    importMembers 
  } = useTeamData();

  const [view, setView] = useState('dashboard'); // 'dashboard', 'form', 'profile'
  const [currentMemberId, setCurrentMemberId] = useState(null);
  const fileInputRef = useRef(null);

  const handleClearStorage = () => {
    if (window.confirm("Are you sure you want to clear all team members? This cannot be undone.")) {
      clearMembers();
    }
  };

  const handleImportClick = () => {
    fileInputRef.current.click();
  };

  const handleImportFile = (event) => {
    importMembers(event.target.files[0]);
    // Reset input so the same file can be selected again if needed
    event.target.value = null;
  };

  if (isLoading) {
    return <div style={{ textAlign: 'center', marginTop: '50px' }}>Loading...</div>;
  }

  return (
    <div className="app-container">
      <header>
        <h1>Team Development Dashboard</h1>
      </header>
      <main id="app-content">
        
        {/* DASHBOARD VIEW */}
        {view === 'dashboard' && (
          <div id="dashboard-view">
            <div className="dashboard-header">
              <h2>My Team</h2>
              <button className="btn-primary" onClick={() => setView('form')}>+ Add Team Member</button>
            </div>
            
            <div className="team-grid">
              {teamMembers.length === 0 ? (
                <p>No team members yet. Click the button above to add someone!</p>
              ) : (
                teamMembers.map(member => (
                  <div key={member.id} className="card clickable-card" onClick={() => {
                    setCurrentMemberId(member.id);
                    setView('profile');
                  }}>
                    <div className="member-card-header">
                      <div className="member-emoji">{member.emoji}</div>
                      <div className="member-info">
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                      </div>
                    </div>
                    <div className="badges">
                      <span className={`badge badge-${member.devLevel.toLowerCase()}`}>{member.devLevel}</span>
                      <span className="badge badge-style">{member.leadStyle}</span>
                    </div>
                    <div className="card-stats">
                      Active Goals: {member.goals ? member.goals.length : 0}
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="data-management-container">
              <button className="btn-secondary" onClick={exportMembers}>⬇️ Export Data</button>
              <input type="file" ref={fileInputRef} accept=".json" className="hidden" onChange={handleImportFile} />
              <button className="btn-secondary" onClick={handleImportClick}>⬆️ Import Data</button>
              <button className="btn-secondary" style={{color: 'red'}} onClick={handleClearStorage}>🗑️ Clear Storage</button>
            </div>
          </div>
        )}
        
        {/* ADD MEMBER FORM VIEW */}
        {view === 'form' && (
          <AddMemberForm 
            onSave={(newMember) => {
              addMember(newMember);
              setView('dashboard');
            }} 
            onCancel={() => setView('dashboard')} 
          />
        )}

        {/* PROFILE VIEW */}
        {view === 'profile' && currentMemberId && (
          <ProfileView 
            member={teamMembers.find(m => m.id === currentMemberId)}
            onBack={() => {
              setView('dashboard');
              setCurrentMemberId(null);
            }}
            onUpdateMember={updateMember}
          />
        )}
        
      </main>
    </div>
  );
}