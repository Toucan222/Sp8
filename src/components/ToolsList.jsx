import React, { useState } from "react";
import SwipeableContainer from "./SwipeableContainer";
import { tools } from "../tools"; 
import CoolCard from "../tools/CoolCard";
import { useAnalytics } from '../analytics/AnalyticsContext';
import "./ToolsListStyles.scss";

function ToolsList({ onToolSelect }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { trackEvent } = useAnalytics();

  const handleSwipeLeft = () => {
    trackEvent('tool_swipe', { direction: 'left', fromIndex: currentIndex });
    setCurrentIndex((prevIndex) => {
      if (prevIndex < tools.length - 1) {
        return prevIndex + 1;
      }
      return prevIndex;
    });
  };

  const handleSwipeRight = () => {
    trackEvent('tool_swipe', { direction: 'right', fromIndex: currentIndex });
    setCurrentIndex((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      }
      return prevIndex;
    });
  };

  return (
    <div className="tools-list">
      <SwipeableContainer
        onSwipeLeft={handleSwipeLeft}
        onSwipeRight={handleSwipeRight}
      >
        <div className="tools-container">
          {tools.map((tool, index) => {
            const isVisible = index === currentIndex;
            return (
              <div
                key={tool.id}
                className={`tool-card-wrapper ${isVisible ? 'visible' : ''}`}
              >
                <CoolCard
                  title={tool.title}
                  description={tool.description}
                  icon={tool.icon}
                  onAction={() => onToolSelect(tool.id)}
                />
              </div>
            );
          })}
        </div>
      </SwipeableContainer>
      
      <div className="tools-navigation">
        <button 
          className="btn btn-outline"
          onClick={handleSwipeRight}
          disabled={currentIndex === 0}
        >
          ← Previous
        </button>
        <span className="tools-counter">
          {currentIndex + 1} / {tools.length}
        </span>
        <button 
          className="btn btn-outline"
          onClick={handleSwipeLeft}
          disabled={currentIndex === tools.length - 1}
        >
          Next →
        </button>
      </div>
    </div>
  );
}

export default ToolsList;
