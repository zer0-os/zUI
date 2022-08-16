import type { FC } from 'react';
import type { IconProps } from '../Icoons.types';

import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icoons.constants';

export const IconArrowClockwise: FC<IconProps> = ({
  label = DEFAULT_LABEL,
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE
}) => {
  return (
    <AccessibleIcon.Root label={label}>
      <svg viewBox="0 0 32 32" fill="none" height={size} width={size}>
        <path
          d="M22.025 12.4625H28.025V6.4625"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.775 23.775C22.237 25.3143 20.277 26.3628 18.1429 26.788C16.0089 27.2131 13.7967 26.9958 11.7862 26.1635C9.7757 25.3312 8.0572 23.9213 6.84811 22.1122C5.63902 20.3031 4.99365 18.176 4.99365 16C4.99365 13.824 5.63902 11.6969 6.84811 9.88779C8.0572 8.07866 9.7757 6.66877 11.7862 5.83647C13.7967 5.00417 16.0089 4.78685 18.1429 5.21202C20.277 5.63718 22.237 6.68572 23.775 8.225L28.025 12.4625"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </AccessibleIcon.Root>
  );
};
