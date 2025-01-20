import React from 'react';
import './CategoryTabs.css';

export default function CategoryTabs({ categories, currentCategory, onCategoryChange }) {
  return (
    <div className="category-tabs">
      {categories.map(category => (
        <button
          key={category}
          className={`tab-button ${category === currentCategory ? 'active' : ''}`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
