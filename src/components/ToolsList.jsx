import React, { useState } from "react";
import SwipeableContainer from "./SwipeableContainer";
import { tools } from "../tools"; 
import CoolCard from "../tools/CoolCard";
import "./ToolsListStyles.scss";

function ToolsList() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipeLeft = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex < tools.length - 1) {
        return prevIndex + 1;
      }
      return prevIndex;
    });
  };

  const handleSwipeRight = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      }
      return prevIndex;
    });
  };

  return (
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
              />
            </div>
          );
        })}
      </div>
    </SwipeableContainer>
  );
}

export default ToolsList;
