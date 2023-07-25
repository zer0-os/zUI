import React from 'react';

import { IconButton, IconButtonProperties } from '../IconButton';
import { IconXClose } from '../Icons';

export interface CloseButtonProps {
  className?: string;
  onClick: IconButtonProperties['onClick'];
}

export const CloseButton = ({ onClick, className }: CloseButtonProps) => {
  return <IconButton Icon={IconXClose} className={className} onClick={onClick} />;
};
