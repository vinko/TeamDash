import React, { useState, useEffect } from 'react';
import localforage from 'localforage';

export default function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [view, setView] = useState('dashboard'); // 'dashboard', 'form', 'profile'
  
  // Load data from IndexedDB on startup
  useEffect(() => {
    localforage.getItem('teamMembersData').then(data => {
      if (data) {
        setTeamMembers(typeof data === 'string' ? JSON.parse(data) : data);
      }
    });
  }, []);

  const clearStorage = async () => {
    if (window.confirm("Are you sure you want to clear all team members? This cannot be undone.")) {
      await localforage.removeItem('teamMembersData');
      setTeamMembers([]);
    }
  };

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
              <h2>My Team (React Version)</h2>
              <button className="btn-primary" onClick={() => setView('form')}>+ Add Team Member</button>
            </div>
            
            <div className="team-grid">
              {teamMembers.length === 0 ? (
                <p>No team members yet. Click the button above to add someone!</p>
              ) : (
                teamMembers.map(member => (
                  <div key={member.id} className="card clickable-card" onClick={() => setView('profile')}>
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
              <button className="btn-secondary">⬇️ Export Data</button>
              <button className="btn-secondary">⬆️ Import Data</button>
              <button className="btn-secondary" style={{color: 'red'}} onClick={clearStorage}>🗑️ Clear Storage</button>
            </div>
          </div>
        )}
        
        {/* ADD MEMBER FORM VIEW (Placeholder) */}
        {view === 'form' && (
          <div id="form-view">
             <div className="dashboard-header"><h2>Add New Team Member</h2></div>
             <div className="card">
                <p>React Form Component will be built here...</p>
                <div className="button-group">
                  <button className="btn-secondary" onClick={() => setView('dashboard')}>Cancel</button>
                </div>
             </div>
          </div>
        )}

        {/* PROFILE VIEW (Placeholder) */}
        {view === 'profile' && (
          <div id="profile-view">
             <div className="dashboard-header">
                <button className="btn-secondary" onClick={() => setView('dashboard')}>← Back to Dashboard</button>
                <h2>Profile View</h2>
             </div>
             <div className="card">
                <p>React Profile Component will be built here...</p>
             </div>
          </div>
        )}
        
      </main>
    </div>
  );
}