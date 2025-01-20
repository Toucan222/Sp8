import React from 'react';
import './ToolCard.scss';

export default function ToolCard({
  title,
  description,
  icon,
  onAction
}) {
  return (
    <div className="tool-card" onClick={onAction}>
      <div className="tool-card-content">
        <span className="tool-icon">{icon}</span>
        <h3 className="tool-title">{title}</h3>
        <p className="tool-description">{description}</p>
      </div>
    </div>
  );
}
