import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconPencilLine = ({
  className,
  label = DEFAULT_LABEL,
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE,
  isFilled = false
}: IconProps) => {
  return (
    <div style={{ height: size, width: size }} className={classNames(className, styles.Container)}>
      <AccessibleIcon.Root label={label}>
        {isFilled ? (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.2929 2.2927C17.788 0.797613 20.2121 0.797615 21.7072 2.29271C23.2023 3.7878 23.2023 6.21183 21.7072 7.70692L10.3906 19.0235C10.1572 19.257 9.98059 19.4337 9.78113 19.5885C9.60481 19.7253 9.41735 19.8471 9.2207 19.9527C8.99825 20.0721 8.76513 20.1617 8.45696 20.2801L8.33177 20.3283C8.30046 20.3404 8.26937 20.3523 8.23883 20.3641L2.85901 22.4332C2.49016 22.5751 2.07236 22.4864 1.79292 22.207C1.60189 22.016 1.50002 21.7603 1.5 21.4998C1.49998 21.3792 1.52179 21.2576 1.56668 21.1408L3.7197 15.543C3.83815 15.2348 3.92775 15.0016 4.04718 14.7791C4.15273 14.5825 4.27456 14.395 4.41139 14.2187C4.56618 14.0192 4.74283 13.8427 4.97635 13.6093L16.2929 2.2927ZM5.38099 16.7951L4.24108 19.7588L7.20481 18.6189L5.38099 16.7951Z"
              fill={color}
            />
            <path
              d="M13 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H13C12.4477 22 12 21.5523 12 21C12 20.4477 12.4477 20 13 20Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21 21.0001H13M2.5 21.5001L8.04927 19.3657C8.40421 19.2292 8.58168 19.161 8.74772 19.0718C8.8952 18.9927 9.0358 18.9013 9.16804 18.7987C9.31692 18.6831 9.45137 18.5487 9.72028 18.2798L21 7.00006C22.1046 5.89549 22.1046 4.10463 21 3.00006C19.8955 1.89549 18.1046 1.89549 17 3.00006L5.72028 14.2798C5.45138 14.5487 5.31692 14.6831 5.20139 14.832C5.09877 14.9643 5.0074 15.1049 4.92823 15.2523C4.83911 15.4184 4.77085 15.5959 4.63433 15.9508L2.5 21.5001ZM2.5 21.5001L4.55812 16.149C4.7054 15.7661 4.77903 15.5746 4.90534 15.4869C5.01572 15.4103 5.1523 15.3813 5.2843 15.4065C5.43533 15.4354 5.58038 15.5804 5.87048 15.8705L8.12957 18.1296C8.41967 18.4197 8.56472 18.5648 8.59356 18.7158C8.61877 18.8478 8.58979 18.9844 8.51314 19.0947C8.42545 19.2211 8.23399 19.2947 7.85107 19.442L2.5 21.5001Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </AccessibleIcon.Root>
    </div>
  );
};
