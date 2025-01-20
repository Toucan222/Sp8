import React, { useState, useEffect } from 'react';
import { useToast } from '../components/ToastContext';
import './CoolCardStyles.scss';

export default function CoolCard({
  title = 'Untitled Tool',
  description = 'No description available.',
  onAction = () => {}
}) {
  const [isMounted, setIsMounted] = useState(false);
  const { showToast } = useToast();

  // We'll set isMounted to true after the component mounts,
  // so we can trigger a slide-in animation via CSS.
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Example "Share" handler that copies a link or text
  const handleShare = () => {
    const sampleLink = 'https://sp8.netlify.app';
    navigator.clipboard.writeText(sampleLink);
    showToast('Link copied to clipboard!');
  };

  return (
    <div className={`cool-card ${isMounted ? 'mounted' : ''}`}>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>

      <div className="button-row">
        <button
          className="card-button"
          onMouseDown={(e) => e.currentTarget.classList.add('pressed')}
          onMouseUp={(e) => e.currentTarget.classList.remove('pressed')}
          onMouseLeave={(e) => e.currentTarget.classList.remove('pressed')}
          onTouchStart={(e) => e.currentTarget.classList.add('pressed')}
          onTouchEnd={(e) => e.currentTarget.classList.remove('pressed')}
          onClick={onAction}
        >
          Try It
        </button>
        <button
          className="card-button share-button"
          onMouseDown={(e) => e.currentTarget.classList.add('pressed')}
          onMouseUp={(e) => e.currentTarget.classList.remove('pressed')}
          onMouseLeave={(e) => e.currentTarget.classList.remove('pressed')}
          onTouchStart={(e) => e.currentTarget.classList.add('pressed')}
          onTouchEnd={(e) => e.currentTarget.classList.remove('pressed')}
          onClick={handleShare}
        >
          Share
        </button>
      </div>
    </div>
  );
}
