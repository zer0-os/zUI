import type { FC } from 'react';
import type { IconProps } from '../Icoons.types';

import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icoons.constants';

export const IconArrowArcRight: FC<IconProps> = ({
  label = DEFAULT_LABEL,
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE
}) => {
  return (
    <AccessibleIcon.Root label={label}>
      <svg viewBox="0 0 32 32" fill="none" height={size} width={size}>
        <path
          d="M20.4875 18.5125H28.4875V10.5125"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 23C3.99912 20.626 4.70243 18.305 6.02095 16.3308C7.33947 14.3566 9.21394 12.8179 11.4072 11.9093C13.6005 11.0006 16.0139 10.763 18.3423 11.2264C20.6707 11.6898 22.8093 12.8334 24.4875 14.5125L28.4875 18.5125"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </AccessibleIcon.Root>
  );
};
