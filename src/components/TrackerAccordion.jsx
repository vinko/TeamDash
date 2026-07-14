import React, { useState } from 'react';

export default function TrackerAccordion({ 
  title, 
  items, 
  type, 
  colorClass, 
  defaultOpen, 
  onEdit, 
  onDelete, 
  onAdd, 
  accordionRef,
  renderItemContent,
  renderAddForm
}) {
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);

  const handleAddSubmit = (e) => {
    e.preventDefault();
    onAdd(e, () => setIsAddFormOpen(false));
  };

  return (
    <details 
      ref={accordionRef} 
      className={`profile-section-accordion ${defaultOpen ? 'default-open' : ''} ${colorClass}`} 
      open={defaultOpen}
    >
      <summary>{title}</summary>
      <div className="accordion-content card-no-border">
        <div>
          {items.map((item, index) => (
            <div key={index} className="item-card">
              {renderItemContent(item)}
              <div className="card-actions">
                <button className="btn-small" onClick={() => onEdit(type, index)}>Edit</button>
                <button className="btn-small btn-delete" onClick={() => onDelete(type, index)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Only show Add Form if we haven't hit the limit (e.g. 3 for FYI) */}
        {(!type.includes('competencies') || items.length < 3) && (
          <details 
            className="add-item-details" 
            open={isAddFormOpen} 
            onToggle={(e) => setIsAddFormOpen(e.target.open)}
          >
            <summary className="add-item-summary">+ Add New</summary>
            <form className="add-form-box" onSubmit={handleAddSubmit}>
              {renderAddForm()}
            </form>
          </details>
        )}
      </div>
    </details>
  );
}