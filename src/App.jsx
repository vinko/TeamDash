import React, { useRef } from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { useTeamData } from './hooks/useTeamData';
import AddMemberForm from './AddMemberForm';
import ProfileView from './ProfileView';

// A small wrapper component to extract the ID from the URL and find the correct member
function ProfileViewWrapper({ teamMembers, onBack, onUpdateMember }) {
  const { id } = useParams();
  const member = teamMembers.find(m => m.id.toString() === id);

  if (!member) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Member not found</h2>
        <button className="btn-primary" onClick={onBack}>Return to Dashboard</button>
      </div>
    );
  }

  return <ProfileView member={member} onBack={onBack} onUpdateMember={onUpdateMember} />;
}

export default function App() {
  const { 
    teamMembers, 
    isLoading, 
    addMember, 
    updateMember, 
    clearStorage, 
    exportData, 
    importData 
  } = useTeamData();
  
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleImportClick = () => {
    fileInputRef.current.click();
  };

  const handleImportFile = async (event) => {
    await importData(event.target.files[0]);
    // Reset the input so the same file can be imported again if needed
    event.target.value = null; 
  };

  if (isLoading) {
    return <div style={{ textAlign: 'center', marginTop: '50px' }}>Loading Dashboard...</div>;
  }

  return (
    <div className="app-container">
      <header>
        <h1>Team Development Dashboard</h1>
      </header>
      <main id="app-content">
        <Routes>
          {/* DASHBOARD ROUTE */}
          <Route path="/" element={
            <div id="dashboard-view">
              <div className="dashboard-header">
                <h2>My Team</h2>
                <button className="btn-primary" onClick={() => navigate('/add')}>+ Add Team Member</button>
              </div>
              
              <div className="team-grid">
                {teamMembers.length === 0 ? (
                  <p>No team members yet. Click the button above to add someone!</p>
                ) : (
                  teamMembers.map(member => (
                    <div key={member.id} className="card clickable-card" onClick={() => navigate(`/profile/${member.id}`)}>
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
                <button className="btn-secondary" onClick={exportData}>⬇️ Export Data</button>
                <input type="file" ref={fileInputRef} accept=".json" className="hidden" onChange={handleImportFile} />
                <button className="btn-secondary" onClick={handleImportClick}>⬆️ Import Data</button>
                <button className="btn-secondary" style={{color: 'red'}} onClick={clearStorage}>🗑️ Clear Storage</button>
              </div>
            </div>
          } />

          {/* ADD MEMBER ROUTE */}
          <Route path="/add" element={
            <AddMemberForm 
              onSave={async (newMember) => {
                await addMember(newMember);
                navigate('/');
              }} 
              onCancel={() => navigate('/')} 
            />
          } />

          {/* PROFILE ROUTE */}
          <Route path="/profile/:id" element={
            <ProfileViewWrapper 
              teamMembers={teamMembers} 
              onBack={() => navigate('/')} 
              onUpdateMember={updateMember} 
            />
          } />
        </Routes>
      </main>
    </div>
  );
}