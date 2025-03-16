import React, { PropsWithChildren } from 'react';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import './styles/main.scss';

interface ZUIProviderProps {}

export const ZUIProvider: React.FC<PropsWithChildren<ZUIProviderProps>> = ({ children }) => {
  return <TooltipProvider>{children}</TooltipProvider>;
};
