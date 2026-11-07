import React, { useEffect } from 'react';

export default function DeleteMemberModal({ isOpen, memberName, onConfirm, onCancel }) {
  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onCancel();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onCancel]);

  if (!isOpen) return null;

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onCancel(); }}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}
    >
      <div className="card" style={{ width: '90%', maxWidth: '400px', textAlign: 'center' }}>
        <h3 style={{ marginTop: 0 }}>Delete Team Member?</h3>
        <p>
          Are you sure you want to delete <strong>{memberName}</strong>? This permanently removes their profile,
          goals, check-ins, meetings, and all notes. This cannot be undone.
        </p>
        <div className="button-group" style={{ marginTop: '20px', justifyContent: 'center' }}>
          <button className="btn-secondary" style={{ minHeight: '44px' }} onClick={onCancel}>Cancel</button>
          <button className="btn-primary" style={{ backgroundColor: '#ff3b30', minHeight: '44px' }} onClick={onConfirm}>Delete</button>
        </div>
      </div>
    </div>
  );
}
