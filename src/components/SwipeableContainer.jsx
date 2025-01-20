import React from "react";
import { useSwipeable } from "react-swipeable";

/**
 * SwipeableContainer
 * 
 * Wraps child elements with touch/mouse swipe detection. 
 * Example usage:
 *   <SwipeableContainer
 *     onSwipeLeft={() => console.log("swiped left")}
 *     onSwipeRight={() => console.log("swiped right")}
 *   >
 *     <MyContent />
 *   </SwipeableContainer>
 */

function SwipeableContainer({ children, onSwipeLeft, onSwipeRight }) {
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (onSwipeLeft) onSwipeLeft();
    },
    onSwipedRight: () => {
      if (onSwipeRight) onSwipeRight();
    },
    trackMouse: true,
  });

  return (
    <div {...handlers} style={{ touchAction: "pan-y" }}>
      {children}
    </div>
  );
}

export default SwipeableContainer;
