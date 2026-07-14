import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import localforage from 'localforage';
import AddMemberForm from './AddMemberForm';
import ProfileView from './ProfileView';

export default function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  
  // Load data from IndexedDB on startup
  useEffect(() => {
    localforage.getItem('teamMembersData').then(data => {
      if (data) {
        setTeamMembers(typeof data === 'string' ? JSON.parse(data) : data);
      }
    });
  }, []);

  const saveTeamData = async (newMembers) => {
    setTeamMembers(newMembers);
    await localforage.setItem('teamMembersData', newMembers);
  };

  const clearStorage = async () => {
    if (window.confirm("Are you sure you want to clear all team members? This cannot be undone.")) {
      await localforage.removeItem('teamMembersData');
      setTeamMembers([]);
    }
  };

  const handleAddMember = async (newMember) => {
    const updated = [...teamMembers, newMember];
    await saveTeamData(updated);
    navigate('/');
  };

  const handleUpdateMember = async (updatedMember) => {
    const updated = teamMembers.map(m => m.id === updatedMember.id ? updatedMember : m);
    await saveTeamData(updated);
  };

  const handleExport = async () => {
    try {
      if (teamMembers.length === 0) return alert("You don't have any team members to export yet!");
      const dataString = JSON.stringify(teamMembers);
      const blob = new Blob([dataString], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const downloadLink = document.createElement('a');
      downloadLink.href = url;
      downloadLink.download = "team-dashboard-backup.json";
      downloadLink.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Error exporting data", err);
      alert("There was an issue exporting your data.");
    }
  };

  const handleImportClick = () => {
    fileInputRef.current.click();
  };

  const handleImportFile = async (event) => {
    const file = event.target.files[0];
    if (!file) return; 
    const reader = new FileReader();
    reader.onload = async function(e) {
        try {
            const importedData = JSON.parse(e.target.result);
            await saveTeamData(importedData);
            alert("Data imported successfully!");
        } catch (error) {
            alert("Oops! There was an error reading that file. Make sure it's the correct backup file.");
        }
    };
    reader.readAsText(file);
  };

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
                <button className="btn-secondary" onClick={handleExport}>⬇️ Export Data</button>
                <input type="file" ref={fileInputRef} accept=".json" className="hidden" onChange={handleImportFile} />
                <button className="btn-secondary" onClick={handleImportClick}>⬆️ Import Data</button>
                <button className="btn-secondary" style={{color: 'red'}} onClick={clearStorage}>🗑️ Clear Storage</button>
              </div>
            </div>
          } />

          {/* ADD MEMBER ROUTE */}
          <Route path="/add" element={
            <AddMemberForm 
              onSave={handleAddMember} 
              onCancel={() => navigate('/')} 
            />
          } />

          {/* PROFILE ROUTE */}
          <Route path="/profile/:id" element={
            <ProfileViewWrapper 
              teamMembers={teamMembers} 
              onBack={() => navigate('/')} 
              onUpdateMember={handleUpdateMember} 
            />
          } />
        </Routes>
      </main>
    </div>
  );
}

// A small wrapper component to extract the ID from the URL and find the correct member
import { useParams } from 'react-router-dom';
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