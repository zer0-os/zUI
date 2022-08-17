import type { FC } from 'react';
import type { IconProps } from '../Icons.types';

import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

export const IconArrowBendDoubleUpRight: FC<IconProps> = ({
  label = DEFAULT_LABEL,
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE
}) => {
  return (
    <AccessibleIcon.Root label={label}>
      <svg viewBox="0 0 32 32" fill="none" height={size} width={size}>
        <path d="M22 19L28 13L22 7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 19L22 13L16 7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M4 25C4 21.8174 5.26428 18.7652 7.51472 16.5147C9.76516 14.2643 12.8174 13 16 13H22"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </AccessibleIcon.Root>
  );
};
