import React from "react";
import './CategoryTabsStyles.scss';

function CategoryTabs({ categories, currentCategory, onCategoryChange }) {
  return (
    <div className="category-tabs">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          className={`tab-button ${cat === currentCategory ? 'active' : ''}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryTabs;
