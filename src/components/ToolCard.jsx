import React from 'react';
import { useToast } from '../components/ToastContext';
import { useAnalytics } from '../analytics/AnalyticsContext';
import './ToolCard.scss';

export default function ToolCard({
  title,
  description,
  icon,
  tags = [],
  rank,
  upvotes,
  onAction,
  onUpvote
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

  const handleUpvote = (e) => {
    e.stopPropagation();
    onUpvote();
    trackEvent('tool_upvoted', { toolName: title });
  };

  return (
    <div className="tool-card" onClick={onAction}>
      <div className="rank-badge">#{rank}</div>
      
      <div className="tool-card-content">
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
          <button className="upvote-button" onClick={handleUpvote}>
            ⬆️ {upvotes.toLocaleString()}
          </button>
          <span className="try-it">Try it</span>
        </div>
      </div>
      
      <div className="card-shine"></div>
    </div>
  );
}
