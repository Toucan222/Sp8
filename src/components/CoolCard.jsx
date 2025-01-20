import React from 'react';
import './CoolCard.css';

export default function CoolCard({ title, description, icon, onAction }) {
  return (
    <div className="cool-card">
      <div className="card-header">
        <span className="card-icon">{icon}</span>
        <h3 className="card-title">{title}</h3>
      </div>
      <p className="card-description">{description}</p>
      <button className="btn btn-primary" onClick={onAction}>
        Try It
      </button>
    </div>
  );
}
