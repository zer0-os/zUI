import React from 'react';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { ToastProvider } from '@radix-ui/react-toast';
import './styles/main.scss';

export const ZUIProvider: React.FC = ({ children }) => {
  return (
    <TooltipProvider>
      <ToastProvider>{children}</ToastProvider>
    </TooltipProvider>
  );
};
