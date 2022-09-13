import type { FC } from 'react';
import type { IconProps } from '../Icons.types';

import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { DEFAULT_LABEL, DEFAULT_COLOR } from '../Icons.constants';

export const IconQuestionMark: FC<IconProps> = ({ label = DEFAULT_LABEL, color = DEFAULT_COLOR }) => {
  return (
    <AccessibleIcon.Root label={label}>
      <svg width={5} height={9} viewBox="0 0 5 9" fill="none">
        <path
          d="M1.75169 6.45316H2.77209V6.40153C2.78909 5.33461 3.0612 4.86998 3.80949 4.39675C4.55779 3.93642 4.99996 3.2739 4.99996 2.32314C4.99996 0.98088 4.03058 0 2.53399 0C1.15645 0 0.063775 0.860421 0 2.32314H1.07142C1.1352 1.30784 1.83672 0.894837 2.53399 0.894837C3.33331 0.894837 3.97956 1.4283 3.97956 2.27151C3.97956 2.95555 3.59266 3.44598 3.09521 3.75143C2.26189 4.26338 1.76444 4.76243 1.75169 6.40153V6.45316ZM2.2959 9C2.71682 9 3.0612 8.65153 3.0612 8.22562C3.0612 7.79971 2.71682 7.45124 2.2959 7.45124C1.87499 7.45124 1.5306 7.79971 1.5306 8.22562C1.5306 8.65153 1.87499 9 2.2959 9Z"
          fill={color}
        />
      </svg>
    </AccessibleIcon.Root>
  );
};
