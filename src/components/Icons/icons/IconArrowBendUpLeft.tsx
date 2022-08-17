import type { FC } from 'react';
import type { IconProps } from '../Icons.types';

import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

export const IconArrowBendUpLeft: FC<IconProps> = ({
  label = DEFAULT_LABEL,
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE
}) => {
  return (
    <AccessibleIcon.Root label={label}>
      <svg viewBox="0 0 32 32" fill="none" height={size} width={size}>
        <path d="M10 19L4 13L10 7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M28 25C28 21.8174 26.7357 18.7652 24.4853 16.5147C22.2348 14.2643 19.1826 13 16 13H4"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </AccessibleIcon.Root>
  );
};
