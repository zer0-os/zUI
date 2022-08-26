import React from 'react';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import './styles/main.scss';

export const ZUIProvider: React.FC = ({ children }) => {
  return <TooltipProvider>{children}</TooltipProvider>;
};
