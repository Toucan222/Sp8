import React, { useState } from 'react';
import './NavBarStyles.scss';
import { useTheme } from '../theme/ThemeContext';

export default function NavBar() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [navOpen, setNavOpen] = useState(false);

  const handleMenuToggle = () => setNavOpen(!navOpen);

  return (
    <header className="navbar-container">
      <div className="navbar-brand">
        <span className="brand-name">SocialPlug Labs</span>
      </div>

      <nav className={`navbar-links ${navOpen ? 'open' : ''}`}>
        <a href="#hero">Home</a>
        <a href="#tools">Tools</a>
        <a href="#contact">Contact</a>

        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>

      <button className="hamburger-button" onClick={handleMenuToggle}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>
    </header>
  );
}
