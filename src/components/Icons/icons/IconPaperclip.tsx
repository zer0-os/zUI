import type { FC } from 'react';
import type { IconProps } from '../Icons.types';

import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

export const IconPaperclip: FC<IconProps> = ({
  label = DEFAULT_LABEL,
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE
}) => {
  return (
    <AccessibleIcon.Root label={label}>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M21.4398 11.05L12.2498 20.24C11.124 21.3659 9.59699 21.9984 8.0048 21.9984C6.41262 21.9984 4.88565 21.3659 3.7598 20.24C2.63396 19.1142 2.00146 17.5872 2.00146 15.995C2.00146 14.4029 2.63396 12.8759 3.7598 11.75L12.9498 2.56004C13.7004 1.80948 14.7183 1.38782 15.7798 1.38782C16.8413 1.38782 17.8592 1.80948 18.6098 2.56004C19.3604 3.3106 19.782 4.32859 19.782 5.39004C19.782 6.4515 19.3604 7.46948 18.6098 8.22004L9.4098 17.41C9.03452 17.7853 8.52553 17.9962 7.9948 17.9962C7.46407 17.9962 6.95508 17.7853 6.5798 17.41C6.20452 17.0348 5.99369 16.5258 5.99369 15.995C5.99369 15.4643 6.20452 14.9553 6.5798 14.58L15.0698 6.10004"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </AccessibleIcon.Root>
  );
};
