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
      console.error("Error loading data from IndexedDB", err);
      setIsLoading(false);
    });
  }, []);

  // Internal helper to save state and DB simultaneously
  const saveTeamData = async (newMembers) => {
    setTeamMembers(newMembers);
    try {
      await localforage.setItem('teamMembersData', newMembers);
    } catch (err) {
      console.error("Error saving data to IndexedDB", err);
    }
  };

  const addMember = async (newMember) => {
    const updated = [...teamMembers, newMember];
    await saveTeamData(updated);
  };

  const updateMember = async (updatedMember) => {
    const updated = teamMembers.map(m => m.id === updatedMember.id ? updatedMember : m);
    await saveTeamData(updated);
  };

  const clearStorage = async () => {
    if (window.confirm("Are you sure you want to clear all team members? This cannot be undone.")) {
      await localforage.removeItem('teamMembersData');
      setTeamMembers([]);
    }
  };

  const exportData = async () => {
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

  const importData = async (file) => {
    if (!file) return; 
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async function(e) {
          try {
              const importedData = JSON.parse(e.target.result);
              await saveTeamData(importedData);
              alert("Data imported successfully!");
              resolve();
          } catch (error) {
              alert("Oops! There was an error reading that file. Make sure it's the correct backup file.");
              reject(error);
          }
      };
      reader.readAsText(file);
    });
  };

  return {
    teamMembers,
    isLoading,
    addMember,
    updateMember,
    clearStorage,
    exportData,
    importData
  };
}