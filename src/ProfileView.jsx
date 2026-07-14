import React, { useState, useRef, useEffect } from 'react';
import { appleRoles, fyiCompetencies, leadershipPalette, roleCategories } from './data.js';
import TrackerAccordion from './components/TrackerAccordion.jsx';
import EditItemModal from './components/EditItemModal.jsx';

export default function ProfileView({ member, onBack, onUpdateMember }) {
  // --- ACCORDION REFS FOR EXPAND/COLLAPSE ALL ---
  const accordionRefs = useRef([]);
  const addToRefs = (el) => {
    if (el && !accordionRefs.current.includes(el)) {
      accordionRefs.current.push(el);
    }
  };

  const expandAll = () => accordionRefs.current.forEach(el => el.open = true);
  const collapseAll = () => accordionRefs.current.forEach(el => el.open = false);
  const defaultView = () => {
    accordionRefs.current.forEach(el => {
      el.open = el.classList.contains('default-open');
    });
  };

  // --- ADD FORM STATES ---
  const [fyiName, setFyiName] = useState('');
  const [fyiRating, setFyiRating] = useState('Less Skilled');
  const [fyiNotes, setFyiNotes] = useState('');

  const [palName, setPalName] = useState('');
  const [palRating, setPalRating] = useState('Less Skilled');
  const [palNotes, setPalNotes] = useState('');

  const [goalTitle, setGoalTitle] = useState('');
  const [goalDesc, setGoalDesc] = useState('');
  const [goalDate, setGoalDate] = useState('');
  const [goalStatus, setGoalStatus] = useState('Not Started');

  const [checkDate, setCheckDate] = useState('');
  const [checkSummary, setCheckSummary] = useState('');
  const [checkObs, setCheckObs] = useState('');
  const [checkActions, setCheckActions] = useState('');

  const [meetDate, setMeetDate] = useState('');
  const [meetType, setMeetType] = useState('1:1');
  const [meetNotes, setMeetNotes] = useState('');
  const [meetActions, setMeetActions] = useState('');

  // --- EDIT MODAL STATES ---
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editType, setEditType] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({});

  // --- PROFILE EDIT MODAL STATES ---
  const [profileEditOpen, setProfileEditOpen] = useState(false);
  const [profileEditData, setProfileEditData] = useState({});

  const roleData = appleRoles[member.role] || { description: "Role description not found.", criticalCompetencies: "Competencies not found." };

  // --- HELPER TO GET DISPLAY RATING ---
  const getDisplayRating = (rating) => {
    if (rating === "1") return "Less Skilled";
    if (rating === "2") return "Skilled";
    if (rating === "3") return "Talented";
    if (rating === "4" || rating === "5") return "Overused";
    return rating;
  };

  // --- ADD HANDLERS ---
  const handleAddItem = (type, newItem, closeAccordion) => {
    const updatedMember = { ...member, [type]: [...member[type], newItem] };
    onUpdateMember(updatedMember);
    if(closeAccordion) closeAccordion();
  };

  // --- EDIT HANDLERS ---
  const openEditModal = (type, index) => {
    setEditType(type);
    setEditIndex(index);
    setEditData({ ...member[type][index] });
    setEditModalOpen(true);
  };

  const saveEditModal = () => {
    const updatedArray = [...member[editType]];
    updatedArray[editIndex] = editData;
    onUpdateMember({ ...member, [editType]: updatedArray });
    setEditModalOpen(false);
  };

  const deleteItem = (type, index) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      const updatedArray = member[type].filter((_, i) => i !== index);
      onUpdateMember({ ...member, [type]: updatedArray });
    }
  };

  // --- PROFILE EDIT HANDLERS ---
  const openProfileEdit = () => {
    setProfileEditData({
      name: member.name, role: member.role, startDate: member.startDate,
      emoji: member.emoji, devLevel: member.devLevel, leadStyle: member.leadStyle
    });
    setProfileEditOpen(true);
  };

  const saveProfileEdit = (e) => {
    e.preventDefault();
    onUpdateMember({ ...member, ...profileEditData });
    setProfileEditOpen(false);
  };

  // --- MODAL CLICK-OUTSIDE HANDLERS ---
  const handleModalBackdropClick = (e, closeFunction) => {
    if (e.target === e.currentTarget) {
      closeFunction();
    }
  };

  // Handle Escape key to close modals
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setEditModalOpen(false);
        setProfileEditOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div id="profile-view">
      <div className="dashboard-header">
        <button className="btn-secondary" onClick={onBack}>← Back to Dashboard</button>
        <h2>{member.name}</h2>
        <button className="btn-secondary" onClick={openProfileEdit}>✏️ Edit Profile</button>
      </div>

      {/* Profile Header Card */}
      <div className="card profile-header-card">
        <div className="profile-header-content">
          <div className="profile-emoji-large">{member.emoji}</div>
          <div className="member-info">
            <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>{member.role}</h3>
            <div className="badges">
              <span className={`badge badge-${member.devLevel.toLowerCase()}`}>{member.devLevel}</span>
              <span className="badge badge-style">{member.leadStyle}</span>
            </div>
            <p style={{ marginTop: '10px' }}><strong>Start Date:</strong> {member.startDate}</p>
          </div>
        </div>
      </div>

      {/* EXPAND / COLLAPSE BUTTONS */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '20px', marginBottom: '-5px' }}>
        <button className="btn-small" onClick={defaultView}>Default View</button>
        <button className="btn-small" onClick={expandAll}>Expand All</button>
        <button className="btn-small" onClick={collapseAll}>Collapse All</button>
      </div>

      {/* Job Description */}
      <details ref={addToRefs} className="profile-section-accordion bg-pastel-gray default-open" style={{ marginTop: '20px' }} open>
        <summary>Job Description & Critical Competencies</summary>
        <div className="accordion-content card-no-border">
          <h3 className="section-title" style={{ marginTop: 0 }}>Job Description</h3>
          <div style={{ color: '#1d1d1f', lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: roleData.description }}></div>
          <h3 className="section-title" style={{ marginTop: '30px' }}>Critical Competencies & Attributes</h3>
          <div style={{ color: '#1d1d1f', lineHeight: 1.5, fontSize: '14px', backgroundColor: '#f5f5f7', padding: '15px', borderRadius: '10px' }} dangerouslySetInnerHTML={{ __html: roleData.criticalCompetencies }}></div>
        </div>
      </details>

      {/* FYI Competencies */}
      <TrackerAccordion 
        accordionRef={addToRefs}
        title="FYI Focus Competencies (Max 3)"
        items={member.competencies}
        type="competencies"
        colorClass="bg-pastel-blue"
        defaultOpen={true}
        onEdit={openEditModal}
        onDelete={deleteItem}
        onAdd={(e, close) => {
          if(!fyiName) return alert("Select a competency");
          handleAddItem('competencies', { name: fyiName, rating: fyiRating, notes: fyiNotes }, close);
          setFyiName(''); setFyiNotes('');
        }}
        renderItemContent={(item) => (
          <>
            <div className="item-header">
              <p className="item-title">{item.name}</p>
              <span className="rating-badge">{getDisplayRating(item.rating)}</span>
            </div>
            <p className="item-notes">{item.notes}</p>
          </>
        )}
        renderAddForm={() => (
          <>
            <div className="form-group">
              <select value={fyiName} onChange={e=>setFyiName(e.target.value)} required>
                <option value="">-- Select Competency --</option>
                {fyiCompetencies.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="form-group">
              <select value={fyiRating} onChange={e=>setFyiRating(e.target.value)}>
                <option value="Less Skilled">Less Skilled</option>
                <option value="Skilled">Skilled</option>
                <option value="Talented">Talented</option>
                <option value="Overused">Overused</option>
              </select>
            </div>
            <div className="form-group"><input type="text" placeholder="Add notes or context..." value={fyiNotes} onChange={e=>setFyiNotes(e.target.value)} /></div>
            <button type="submit" className="btn-secondary">Save Competency</button>
          </>
        )}
      />

      {/* Leadership Palette */}
      <TrackerAccordion 
        accordionRef={addToRefs}
        title="Leadership Palette"
        items={member.palette}
        type="palette"
        colorClass="bg-pastel-purple"
        defaultOpen={true}
        onEdit={openEditModal}
        onDelete={deleteItem}
        onAdd={(e, close) => {
          if(!palName) return alert("Select an attribute");
          handleAddItem('palette', { name: palName, rating: palRating, notes: palNotes }, close);
          setPalName(''); setPalNotes('');
        }}
        renderItemContent={(item) => (
          <>
            <div className="item-header">
              <p className="item-title">{item.name}</p>
              <span className="rating-badge">{getDisplayRating(item.rating)}</span>
            </div>
            <p className="item-notes">{item.notes}</p>
          </>
        )}
        renderAddForm={() => (
          <>
            <div className="form-group">
              <select value={palName} onChange={e=>setPalName(e.target.value)} required>
                <option value="">-- Select Attribute --</option>
                {Object.keys(leadershipPalette).map(a => <option key={a} value={a}>{a}</option>)}
              </select>
            </div>
            <div className="form-group">
              <select value={palRating} onChange={e=>setPalRating(e.target.value)}>
                <option value="Less Skilled">Less Skilled</option>
                <option value="Skilled">Skilled</option>
                <option value="Talented">Talented</option>
                <option value="Overused">Overused</option>
              </select>
            </div>
            <div className="form-group"><input type="text" placeholder="Add notes or context..." value={palNotes} onChange={e=>setPalNotes(e.target.value)} /></div>
            <button type="submit" className="btn-secondary">Save Attribute</button>
          </>
        )}
      />

      {/* Goals */}
      <TrackerAccordion 
        accordionRef={addToRefs}
        title="Development Goals"
        items={member.goals}
        type="goals"
        colorClass="bg-pastel-green"
        defaultOpen={false}
        onEdit={openEditModal}
        onDelete={deleteItem}
        onAdd={(e, close) => {
          handleAddItem('goals', { title: goalTitle, description: goalDesc, date: goalDate, status: goalStatus }, close);
          setGoalTitle(''); setGoalDesc(''); setGoalDate(''); setGoalStatus('Not Started');
        }}
        renderItemContent={(goal) => (
          <>
            <div className="item-header">
              <p className="item-title">{goal.title}</p>
              <span className={`badge status-${goal.status.replace(' ', '-')}`}>{goal.status}</span>
            </div>
            <p className="goal-desc">{goal.description}</p>
            <div className="goal-meta"><span><strong>Target Date:</strong> {goal.date}</span></div>
          </>
        )}
        renderAddForm={() => (
          <>
            <div className="form-group"><input type="text" placeholder="Goal Title" value={goalTitle} onChange={e=>setGoalTitle(e.target.value)} required /></div>
            <div className="form-group"><textarea placeholder="Goal Description..." rows="3" value={goalDesc} onChange={e=>setGoalDesc(e.target.value)}></textarea></div>
            <div className="form-group"><label>Target Date</label><input type="date" value={goalDate} onChange={e=>setGoalDate(e.target.value)} required /></div>
            <div className="form-group">
              <label>Status</label>
              <select value={goalStatus} onChange={e=>setGoalStatus(e.target.value)}>
                <option value="Not Started">Not Started</option>
                <option value="In Progress">In Progress</option>
                <option value="Complete">Complete</option>
              </select>
            </div>
            <button type="submit" className="btn-secondary">Save Goal</button>
          </>
        )}
      />

      {/* Check-ins */}
      <TrackerAccordion 
        accordionRef={addToRefs}
        title="Check-in Notes"
        items={[...member.checkIns].sort((a,b) => new Date(b.date) - new Date(a.date))}
        type="checkIns"
        colorClass="bg-pastel-yellow"
        defaultOpen={false}
        onEdit={(type, sortedIndex) => {
          // Find original index since we sorted the array for display
          const sortedItem = [...member.checkIns].sort((a,b) => new Date(b.date) - new Date(a.date))[sortedIndex];
          const originalIndex = member.checkIns.indexOf(sortedItem);
          openEditModal(type, originalIndex);
        }}
        onDelete={(type, sortedIndex) => {
          const sortedItem = [...member.checkIns].sort((a,b) => new Date(b.date) - new Date(a.date))[sortedIndex];
          const originalIndex = member.checkIns.indexOf(sortedItem);
          deleteItem(type, originalIndex);
        }}
        onAdd={(e, close) => {
          handleAddItem('checkIns', { date: checkDate, summary: checkSummary, observations: checkObs, actions: checkActions }, close);
          setCheckDate(''); setCheckSummary(''); setCheckObs(''); setCheckActions('');
        }}
        renderItemContent={(checkin) => (
          <>
            <div className="item-header">
              <p className="item-title">{checkin.summary}</p>
              <span className="badge badge-style">{checkin.date}</span>
            </div>
            <p className="goal-desc"><strong>Observations:</strong><br/>{checkin.observations}</p>
            <p className="goal-desc" style={{marginTop:'10px'}}><strong>Agreed Actions:</strong><br/>{checkin.actions}</p>
          </>
        )}
        renderAddForm={() => (
          <>
            <div className="form-group"><label>Date</label><input type="date" value={checkDate} onChange={e=>setCheckDate(e.target.value)} required /></div>
            <div className="form-group"><input type="text" placeholder="Summary" value={checkSummary} onChange={e=>setCheckSummary(e.target.value)} required /></div>
            <div className="form-group"><textarea placeholder="Key Observations..." rows="2" value={checkObs} onChange={e=>setCheckObs(e.target.value)}></textarea></div>
            <div className="form-group"><textarea placeholder="Agreed Actions..." rows="2" value={checkActions} onChange={e=>setCheckActions(e.target.value)}></textarea></div>
            <button type="submit" className="btn-secondary">Save Check-in</button>
          </>
        )}
      />

      {/* Meetings */}
      <TrackerAccordion 
        accordionRef={addToRefs}
        title="Meeting History"
        items={[...member.meetings].sort((a,b) => new Date(b.date) - new Date(a.date))}
        type="meetings"
        colorClass="bg-pastel-orange"
        defaultOpen={false}
        onEdit={(type, sortedIndex) => {
          const sortedItem = [...member.meetings].sort((a,b) => new Date(b.date) - new Date(a.date))[sortedIndex];
          const originalIndex = member.meetings.indexOf(sortedItem);
          openEditModal(type, originalIndex);
        }}
        onDelete={(type, sortedIndex) => {
          const sortedItem = [...member.meetings].sort((a,b) => new Date(b.date) - new Date(a.date))[sortedIndex];
          const originalIndex = member.meetings.indexOf(sortedItem);
          deleteItem(type, originalIndex);
        }}
        onAdd={(e, close) => {
          handleAddItem('meetings', { date: meetDate, type: meetType, notes: meetNotes, actions: meetActions }, close);
          setMeetDate(''); setMeetType('1:1'); setMeetNotes(''); setMeetActions('');
        }}
        renderItemContent={(meeting) => (
          <>
            <div className="item-header">
              <p className="item-title">{meeting.type} Meeting</p>
              <span className="badge badge-style">{meeting.date}</span>
            </div>
            <p className="goal-desc"><strong>Notes:</strong><br/>{meeting.notes}</p>
            <p className="goal-desc" style={{marginTop:'10px'}}><strong>Follow-up Actions:</strong><br/>{meeting.actions}</p>
          </>
        )}
        renderAddForm={() => (
          <>
            <div className="form-group"><label>Date</label><input type="date" value={meetDate} onChange={e=>setMeetDate(e.target.value)} required /></div>
            <div className="form-group">
              <label>Meeting Type</label>
              <select value={meetType} onChange={e=>setMeetType(e.target.value)}>
                <option value="1:1">1:1</option>
                <option value="Development">Development</option>
                <option value="Performance">Performance</option>
              </select>
            </div>
            <div className="form-group"><textarea placeholder="Meeting Notes..." rows="2" value={meetNotes} onChange={e=>setMeetNotes(e.target.value)}></textarea></div>
            <div className="form-group"><textarea placeholder="Follow-up Actions..." rows="2" value={meetActions} onChange={e=>setMeetActions(e.target.value)}></textarea></div>
            <button type="submit" className="btn-secondary">Save Meeting</button>
          </>
        )}
      />

      {/* --- ITEM EDIT MODAL --- */}
      <EditItemModal 
        isOpen={editModalOpen}
        editType={editType}
        editData={editData}
        setEditData={setEditData}
        onSave={saveEditModal}
        onCancel={() => setEditModalOpen(false)}
        onBackdropClick={handleModalBackdropClick}
      />

      {/* --- PROFILE EDIT MODAL --- */}
      {profileEditOpen && (
        <div 
          onClick={(e) => handleModalBackdropClick(e, () => setProfileEditOpen(false))}
          style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}
        >
          <div className="card" style={{ width: '90%', maxWidth: '500px', maxHeight: '90vh', overflowY: 'auto' }}>
            <h3 style={{ marginTop: 0 }}>Edit Team Member</h3>
            <form onSubmit={saveProfileEdit}>
              <div className="form-group"><label>Full Name</label><input type="text" value={profileEditData.name} onChange={e=>setProfileEditData({...profileEditData, name: e.target.value})} required /></div>
              <div className="form-group">
                <label>Apple Retail Role</label>
                <select value={profileEditData.role} onChange={e=>setProfileEditData({...profileEditData, role: e.target.value})} required>
                  {Object.entries(roleCategories).map(([category, roles]) => (
                    <optgroup key={category} label={`${category} Level`}>
                      {roles.map(r => <option key={r} value={r}>{r}</option>)}
                    </optgroup>
                  ))}
                </select>
              </div>
              <div className="form-group"><label>Start Date</label><input type="date" value={profileEditData.startDate} onChange={e=>setProfileEditData({...profileEditData, startDate: e.target.value})} required /></div>
              <div className="form-group"><label>Profile Emoji</label><input type="text" value={profileEditData.emoji} onChange={e=>setProfileEditData({...profileEditData, emoji: e.target.value})} required /></div>
              <div className="form-group">
                <label>Development Level</label>
                <select value={profileEditData.devLevel} onChange={e=>{
                    const level = e.target.value;
                    let style = profileEditData.leadStyle;
                    if (level === 'D1') style = 'S1';
                    if (level === 'D2') style = 'S2';
                    if (level === 'D3') style = 'S3';
                    if (level === 'D4') style = 'S4';
                    setProfileEditData({...profileEditData, devLevel: level, leadStyle: style});
                }} required>
                  <option value="D1">D1 - Enthusiastic Beginner</option>
                  <option value="D2">D2 - Disillusioned Learner</option>
                  <option value="D3">D3 - Capable but Cautious</option>
                  <option value="D4">D4 - Self-Reliant Achiever</option>
                </select>
              </div>
              <div className="form-group">
                <label>Leadership Style</label>
                <select value={profileEditData.leadStyle} onChange={e=>setProfileEditData({...profileEditData, leadStyle: e.target.value})} required>
                  <option value="S1">S1 - Directing</option>
                  <option value="S2">S2 - Coaching</option>
                  <option value="S3">S3 - Supporting</option>
                  <option value="S4">S4 - Delegating</option>
                </select>
              </div>
              <div className="button-group" style={{ marginTop: '20px' }}>
                <button type="button" className="btn-secondary" onClick={() => setProfileEditOpen(false)}>Cancel</button>
                <button type="submit" className="btn-primary">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}