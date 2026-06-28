import React, { useState } from 'react';
import { roleCategories } from './data.js';

export default function AddMemberForm({ onSave, onCancel }) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [startDate, setStartDate] = useState('');
  const [emoji, setEmoji] = useState('👤');
  const [devLevel, setDevLevel] = useState('D1');
  const [leadStyle, setLeadStyle] = useState('S1');

  const handleDevLevelChange = (e) => {
    const level = e.target.value;
    setDevLevel(level);
    if (level === 'D1') setLeadStyle('S1');
    if (level === 'D2') setLeadStyle('S2');
    if (level === 'D3') setLeadStyle('S3');
    if (level === 'D4') setLeadStyle('S4');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMember = {
      id: Date.now(),
      name, role, startDate, emoji, devLevel, leadStyle,
      goals: [], checkIns: [], competencies: [], palette: [], meetings: []
    };
    onSave(newMember);
  };

  return (
    <div id="form-view">
      <div className="dashboard-header"><h2>Add New Team Member</h2></div>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" value={name} onChange={e=>setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Apple Retail Role</label>
            <select value={role} onChange={e=>setRole(e.target.value)} required>
              <option value="">-- Select a Role --</option>
              {Object.entries(roleCategories).map(([category, roles]) => (
                <optgroup key={category} label={`${category} Level`}>
                  {roles.map(r => <option key={r} value={r}>{r}</option>)}
                </optgroup>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Start Date</label>
            <input type="date" value={startDate} onChange={e=>setStartDate(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Profile Emoji</label>
            <input type="text" value={emoji} onChange={e=>setEmoji(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Development Level</label>
            <select value={devLevel} onChange={handleDevLevelChange} required>
              <option value="D1">D1 - Enthusiastic Beginner</option>
              <option value="D2">D2 - Disillusioned Learner</option>
              <option value="D3">D3 - Capable but Cautious</option>
              <option value="D4">D4 - Self-Reliant Achiever</option>
            </select>
          </div>
          <div className="form-group">
            <label>Leadership Style</label>
            <select value={leadStyle} onChange={e=>setLeadStyle(e.target.value)} required>
              <option value="S1">S1 - Directing</option>
              <option value="S2">S2 - Coaching</option>
              <option value="S3">S3 - Supporting</option>
              <option value="S4">S4 - Delegating</option>
            </select>
          </div>
          <div className="button-group">
            <button type="button" className="btn-secondary" onClick={onCancel}>Cancel</button>
            <button type="submit" className="btn-primary">Save Team Member</button>
          </div>
        </form>
      </div>
    </div>
  );
}