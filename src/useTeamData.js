import { useState, useEffect } from 'react';
import localforage from 'localforage';

export function useTeamData() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load data from IndexedDB on startup
  useEffect(() => {
    localforage.getItem('teamMembersData').then(data => {
      if (data) {
        setTeamMembers(typeof data === 'string' ? JSON.parse(data) : data);
      }
      setIsLoading(false);
    }).catch(err => {
      console.error("Error loading data", err);
      setIsLoading(false);
    });
  }, []);

  const saveTeamData = async (newMembers) => {
    setTeamMembers(newMembers);
    await localforage.setItem('teamMembersData', newMembers);
  };

  const addMember = async (newMember) => {
    const updated = [...teamMembers, newMember];
    await saveTeamData(updated);
  };

  const updateMember = async (updatedMember) => {
    const updated = teamMembers.map(m => m.id === updatedMember.id ? updatedMember : m);
    await saveTeamData(updated);
  };

  const clearMembers = async () => {
    await localforage.removeItem('teamMembersData');
    setTeamMembers([]);
  };

  const exportMembers = () => {
    if (teamMembers.length === 0) {
      alert("You don't have any team members to export yet!");
      return;
    }
    const dataString = JSON.stringify(teamMembers);
    const blob = new Blob([dataString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = "team-dashboard-backup.json";
    downloadLink.click();
    URL.revokeObjectURL(url);
  };

  const importMembers = async (file) => {
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

  return {
    teamMembers,
    isLoading,
    addMember,
    updateMember,
    clearMembers,
    exportMembers,
    importMembers
  };
}