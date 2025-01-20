import React from 'react';
import './HeroSectionStyles.scss';

export default function HeroSection() {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to SocialPlug Labs</h1>

        <ul className="hero-bullets">
          <li>100+ Free Tools for Content Creation</li>
          <li>Instant AI Capabilities & Ideas</li>
          <li>Optional Login for Personalization</li>
        </ul>

        <p className="hero-tagline">
          Supercharge your socials and boost creativity—no signups needed!
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
