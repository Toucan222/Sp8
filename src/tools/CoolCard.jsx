import React from 'react';
import './CoolCardStyles.scss';

/**
 * CoolCard
 * A fixed-size, Gen Z–friendly card for SocialPlug Labs.
 * Dimensions: 320x400
 * Shows how to incorporate theme variables from _theme.scss.
 *
 * Props (optional):
 * - title: string
 * - description: string
 * - onAction: function (called when the main button is clicked)
 */
export default function CoolCard({
  title = 'Untitled Tool',
  description = 'No description available.',
  onAction = () => alert('Action clicked!')
}) {
  return (
    <div className="cool-card">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>

      <button className="card-button" onClick={onAction}>
        Try It
      </button>
    </div>
  );
}
