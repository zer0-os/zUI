import React from 'react';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import './styles/main.scss';

const ZUIProvider: React.FC = ({ children }) => {
  return <TooltipProvider>{children}</TooltipProvider>;
};

export default ZUIProvider;
