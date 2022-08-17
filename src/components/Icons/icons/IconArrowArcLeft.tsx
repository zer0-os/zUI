import type { FC } from 'react';
import type { IconProps } from '../Icons.types';

import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

export const IconArrowArcLeft: FC<IconProps> = ({
  label = DEFAULT_LABEL,
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE
}) => {
  return (
    <AccessibleIcon.Root label={label}>
      <svg viewBox="0 0 32 32" fill="none" height={size} width={size}>
        <path
          d="M11.5125 18.5125H3.5125V10.5125"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28 23C28.0009 20.626 27.2976 18.305 25.979 16.3308C24.6605 14.3566 22.7861 12.8179 20.5928 11.9093C18.3995 11.0006 15.986 10.763 13.6577 11.2264C11.3293 11.6898 9.19074 12.8334 7.5125 14.5125L3.5125 18.5125"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </AccessibleIcon.Root>
  );
};
