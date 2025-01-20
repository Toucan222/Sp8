import React from 'react';
import './HeroSectionStyles.scss';

export default function HeroSection() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to SocialPlug Labs</h1>
        <p className="hero-tagline">
          Your free suite of creative tools, AI ideas, and more
        </p>
        <button
          className="hero-cta"
          onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
        >
          Explore the Tools
        </button>
      </div>
    </section>
  );
}
