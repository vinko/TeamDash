import React from 'react';

export default function EditItemModal({ 
  isOpen, 
  editType, 
  editData, 
  setEditData, 
  onSave, 
  onCancel, 
  onBackdropClick 
}) {
  if (!isOpen) return null;

  return (
    <div 
      onClick={(e) => onBackdropClick(e, onCancel)}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}
    >
      <div className="card" style={{ width: '90%', maxWidth: '400px', maxHeight: '90vh', overflowY: 'auto' }}>
        <h3 style={{ marginTop: 0 }}>Edit Item</h3>
        
        {(editType === 'competencies' || editType === 'palette') && (
          <>
            <div className="form-group">
              <label>Rating</label>
              <select value={editData.rating || 'Less Skilled'} onChange={e => setEditData({...editData, rating: e.target.value})}>
                <option value="Less Skilled">Less Skilled</option>
                <option value="Skilled">Skilled</option>
                <option value="Talented">Talented</option>
                <option value="Overused">Overused</option>
              </select>
            </div>
            <div className="form-group"><label>Notes</label><input type="text" value={editData.notes || ''} onChange={e => setEditData({...editData, notes: e.target.value})} /></div>
          </>
        )}

        {editType === 'goals' && (
          <>
            <div className="form-group"><label>Title</label><input type="text" value={editData.title || ''} onChange={e => setEditData({...editData, title: e.target.value})} /></div>
            <div className="form-group"><label>Description</label><textarea rows="3" value={editData.description || ''} onChange={e => setEditData({...editData, description: e.target.value})}></textarea></div>
            <div className="form-group"><label>Target Date</label><input type="date" value={editData.date || ''} onChange={e => setEditData({...editData, date: e.target.value})} /></div>
            <div className="form-group">
              <label>Status</label>
              <select value={editData.status || 'Not Started'} onChange={e => setEditData({...editData, status: e.target.value})}>
                <option value="Not Started">Not Started</option>
                <option value="In Progress">In Progress</option>
                <option value="Complete">Complete</option>
              </select>
            </div>
          </>
        )}

        {editType === 'checkIns' && (
          <>
            <div className="form-group"><label>Date</label><input type="date" value={editData.date || ''} onChange={e => setEditData({...editData, date: e.target.value})} /></div>
            <div className="form-group"><label>Summary</label><input type="text" value={editData.summary || ''} onChange={e => setEditData({...editData, summary: e.target.value})} /></div>
            <div className="form-group"><label>Observations</label><textarea rows="2" value={editData.observations || ''} onChange={e => setEditData({...editData, observations: e.target.value})}></textarea></div>
            <div className="form-group"><label>Agreed Actions</label><textarea rows="2" value={editData.actions || ''} onChange={e => setEditData({...editData, actions: e.target.value})}></textarea></div>
          </>
        )}

        {editType === 'meetings' && (
          <>
            <div className="form-group"><label>Date</label><input type="date" value={editData.date || ''} onChange={e => setEditData({...editData, date: e.target.value})} /></div>
            <div className="form-group">
              <label>Meeting Type</label>
              <select value={editData.type || '1:1'} onChange={e => setEditData({...editData, type: e.target.value})}>
                <option value="1:1">1:1</option>
                <option value="Development">Development</option>
                <option value="Performance">Performance</option>
              </select>
            </div>
            <div className="form-group"><label>Notes</label><textarea rows="2" value={editData.notes || ''} onChange={e => setEditData({...editData, notes: e.target.value})}></textarea></div>
            <div className="form-group"><label>Follow-up Actions</label><textarea rows="2" value={editData.actions || ''} onChange={e => setEditData({...editData, actions: e.target.value})}></textarea></div>
          </>
        )}

        <div className="button-group" style={{ marginTop: '20px' }}>
          <button className="btn-secondary" onClick={onCancel}>Cancel</button>
          <button className="btn-primary" onClick={onSave}>Save Changes</button>
        </div>
      </div>
    </div>
  );
}