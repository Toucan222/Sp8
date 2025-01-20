import React from 'react';
import './NavBar.scss';

export default function NavBar() {
  const handleShare = (platform) => {
    const shareText = "🚀 Check out SocialPlug Labs - Free AI tools for content creators!";
    const shareUrl = "https://socialplug-labs.netlify.app";

    const shareLinks = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    };

    if (shareLinks[platform]) {
      window.open(shareLinks[platform], '_blank');
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h1 className="site-logo">⚡ SocialPlug Labs</h1>
        
        <div className="social-links">
          <button onClick={() => handleShare('twitter')} className="social-button">
            𝕏 Twitter
          </button>
          <button onClick={() => handleShare('facebook')} className="social-button">
            📘 Facebook
          </button>
          <button onClick={() => handleShare('linkedin')} className="social-button">
            💼 LinkedIn
          </button>
        </div>
      </div>
    </nav>
  );
}
