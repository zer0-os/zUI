import type { FC } from 'react';
import type { IconProps } from '../Icons.types';

import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

export const IconArrowBendLeftUp: FC<IconProps> = ({
  label = DEFAULT_LABEL,
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE
}) => {
  return (
    <AccessibleIcon.Root label={label}>
      <svg viewBox="0 0 32 32" fill="none" height={size} width={size}>
        <path d="M19 10L13 4L7 10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M25 28C21.8174 28 18.7652 26.7357 16.5147 24.4853C14.2643 22.2348 13 19.1826 13 16V4"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </AccessibleIcon.Root>
  );
};
