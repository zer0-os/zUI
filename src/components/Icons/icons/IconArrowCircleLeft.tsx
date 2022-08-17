import type { FC } from 'react';
import type { IconProps } from '../Icons.types';

import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

export const IconArrowCircleLeft: FC<IconProps> = ({
  label = DEFAULT_LABEL,
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE
}) => {
  return (
    <AccessibleIcon.Root label={label}>
      <svg viewBox="0 0 32 32" fill="none" height={size} width={size}>
        <path
          d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
          stroke={color}
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M15.2375 20.2375L11 16L15.2375 11.7625"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M11 16H21" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </AccessibleIcon.Root>
  );
};
