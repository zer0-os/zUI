import type { FC } from 'react';
import type { IconProps } from '../Icons.types';

import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

export const IconArrowCircleDownLeft: FC<IconProps> = ({
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
        <path d="M12.5 13.5V19.5H18.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.5 12.5L12.5 19.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </AccessibleIcon.Root>
  );
};
