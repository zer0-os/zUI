import type { FC } from 'react';
import type { IconProps } from '../Icons.types';

import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

export const IconCross: FC<IconProps> = ({ label = DEFAULT_LABEL, color = DEFAULT_COLOR, size = DEFAULT_SIZE }) => {
  return (
    <AccessibleIcon.Root label={label}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
        <path d="M18 6L6 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 6L18 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </AccessibleIcon.Root>
  );
};
