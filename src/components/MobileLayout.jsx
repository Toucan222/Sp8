import React, { useState } from 'react';
import './MobileLayoutStyles.scss';
import CoolCard from '../tools/CoolCard';
import { tools } from '../tools';
import { useAnalytics } from '../analytics/AnalyticsContext';

export default function MobileLayout() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { trackEvent } = useAnalytics();

  const goNext = () => {
    trackEvent('mobile_navigation', { action: 'next' });
    setActiveIndex((prev) => (prev + 1) % tools.length);
  };

  const goPrev = () => {
    trackEvent('mobile_navigation', { action: 'previous' });
    setActiveIndex((prev) => (prev - 1 + tools.length) % tools.length);
  };

  const currentTool = tools[activeIndex];

  return (
    <div className="mobile-layout-container">
      <div className="card-wrapper">
        <CoolCard
          key={currentTool.id}
          title={currentTool.title}
          description={currentTool.description}
          icon={currentTool.icon}
          onAction={() => {
            trackEvent('tool_selected_mobile', { toolId: currentTool.id });
          }}
        />
      </div>

      <div className="controls-row">
        <button className="btn btn-outline" onClick={goPrev}>← Previous</button>
        <span className="page-indicator">{activeIndex + 1} / {tools.length}</span>
        <button className="btn btn-outline" onClick={goNext}>Next →</button>
      </div>
    </div>
  );
}
