import React, { useState } from 'react';
import './NavBarStyles.scss';
import { useTheme } from '../theme/ThemeContext';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar-container">
      <div className="navbar-brand">
        <span className="brand-text">SocialPlug Labs</span>
      </div>
      <button className="hamburger-button" onClick={handleToggle}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      <nav className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <a href="/">Home</a>
        <a href="#tools">Tools</a>
        <a href="#contact">Contact</a>
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>
    </header>
  );
}
