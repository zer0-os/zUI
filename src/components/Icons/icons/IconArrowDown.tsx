import type { FC } from 'react';
import type { IconProps } from '../Icons.types';

import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

export const IconArrowDown: FC<IconProps> = ({ label = DEFAULT_LABEL, color = DEFAULT_COLOR, size = DEFAULT_SIZE }) => {
  return (
    <AccessibleIcon.Root label={label}>
      <svg viewBox="0 0 32 32" fill="none" height={size} width={size}>
        <path d="M16 5V27" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 18L16 27L25 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </AccessibleIcon.Root>
  );
};
