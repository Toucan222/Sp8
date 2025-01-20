import React, { useState, useEffect } from 'react';
import { useToast } from '../components/ToastContext';
import { useAnalytics } from '../analytics/AnalyticsContext';
import './CoolCardStyles.scss';

export default function CoolCard({
  title = 'Untitled Tool',
  description = 'No description available.',
  onAction = () => {}
}) {
  const [isMounted, setIsMounted] = useState(false);
  const { showToast } = useToast();
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleShare = () => {
    const sampleLink = 'https://sp8.netlify.app';
    navigator.clipboard.writeText(sampleLink);
    showToast('Link copied to clipboard!');
    trackEvent('share_clicked', { cardTitle: title });
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
          onClick={() => {
            onAction();
            trackEvent('tool_action_clicked', { cardTitle: title });
          }}
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
