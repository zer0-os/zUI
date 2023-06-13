import React from 'react';

import './ScrollbarContainer.scss';

interface ScrollbarContainerProps {
  children: React.ReactNode;
  variant?: 'on-hover' | 'fixed';
}

export const ScrollbarContainer: React.FC<ScrollbarContainerProps> = ({ children, variant = 'fixed' }) => {
  return (
    <div className="scrollbar-container" data-variant={variant}>
      {children}
    </div>
  );
};
