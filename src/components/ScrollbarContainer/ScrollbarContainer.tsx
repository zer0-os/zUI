import React, { useState, useRef, useEffect, useCallback } from 'react';

import './ScrollbarContainer.scss';

export interface ScrollbarContainerProps {
  children: React.ReactNode;
  variant?: 'on-hover' | 'fixed';
}

export const ScrollbarContainer: React.FC<ScrollbarContainerProps> = ({ children, variant = 'fixed' }) => {
  const [showPanel, setShowPanel] = useState(true);
  const scrollContainerRef = useRef(null);

  const checkScrollBottom = useCallback(() => {
    if (variant === 'on-hover') {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
      const atBottom = scrollHeight - scrollTop === clientHeight;
      setShowPanel(!atBottom);
    }
  }, [variant]);

  useEffect(() => {
    const currentRef = scrollContainerRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', checkScrollBottom);
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', checkScrollBottom);
      }
    };
  }, [checkScrollBottom]);

  return (
    <div className="scrollbar-container">
      <div className="scrollbar-container__content" data-variant={variant} ref={scrollContainerRef}>
        {children}
      </div>
      {variant === 'on-hover' && showPanel && <div className="scrollbar-container__panel"></div>}
    </div>
  );
};
