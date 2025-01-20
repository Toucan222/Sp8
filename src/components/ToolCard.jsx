import React from 'react';
import { useToast } from '../components/ToastContext';
import { useAnalytics } from '../analytics/AnalyticsContext';
import './ToolCard.scss';

export default function ToolCard({
  title,
  description,
  icon,
  tags = [],
  isNew = false,
  usageCount = 0,
  onAction
}) {
  const { showToast } = useToast();
  const { trackEvent } = useAnalytics();

  const handleShare = (e) => {
    e.stopPropagation();
    const shareText = `🚀 Check out ${title} on SocialPlug Labs! Create viral content instantly ✨`;
    navigator.clipboard.writeText(shareText);
    showToast('Share text copied! 🔗');
    trackEvent('tool_shared', { toolName: title });
  };

  return (
    <div className="tool-card" onClick={onAction}>
      <div className="tool-card-content">
        {isNew && <span className="new-badge">New ✨</span>}
        
        <div className="tool-header">
          <span className="tool-icon">{icon}</span>
          <button className="share-button" onClick={handleShare}>
            Share 📤
          </button>
        </div>
        
        <h3 className="tool-title">{title}</h3>
        <p className="tool-description">{description}</p>
        
        <div className="tool-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag.icon} {tag.name}
            </span>
          ))}
        </div>

        <div className="card-footer">
          <span className="usage-count">
            🔥 {usageCount.toLocaleString()} uses
          </span>
          <span className="try-it">Try it</span>
        </div>
      </div>
      
      <div className="card-shine"></div>
    </div>
  );
}
