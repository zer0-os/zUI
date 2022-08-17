import type { FC } from 'react';
import type { IconProps } from '../Icons.types';

import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

export const IconArrowCounterClockwise: FC<IconProps> = ({
  label = DEFAULT_LABEL,
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE
}) => {
  return (
    <AccessibleIcon.Root label={label}>
      <svg viewBox="0 0 32 32" fill="none" height={size} width={size}>
        <path
          d="M9.975 12.4625H3.975V6.4625"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.225 23.775C9.76302 25.3143 11.723 26.3628 13.8571 26.788C15.9911 27.2131 18.2033 26.9958 20.2138 26.1635C22.2243 25.3312 23.9428 23.9213 25.1519 22.1122C26.361 20.3031 27.0063 18.176 27.0063 16C27.0063 13.824 26.361 11.6969 25.1519 9.88779C23.9428 8.07866 22.2243 6.66877 20.2138 5.83647C18.2033 5.00417 15.9911 4.78685 13.8571 5.21202C11.723 5.63718 9.76302 6.68572 8.225 8.225L3.975 12.4625"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </AccessibleIcon.Root>
  );
};
