import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconCornerDownRight = ({
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
              d="M5 4C5 3.44772 4.55229 3 4 3C3.44772 3 3 3.44772 3 4V5.44441C2.99999 7.08694 2.99999 8.38091 3.08507 9.42222C3.17186 10.4846 3.35217 11.3717 3.76295 12.1779C4.43407 13.4951 5.50493 14.5659 6.82207 15.237C7.62827 15.6478 8.51543 15.8281 9.57778 15.9149C10.6191 16 11.913 16 13.5556 16H17.5858L14.2929 19.2929C13.9024 19.6834 13.9024 20.3166 14.2929 20.7071C14.6834 21.0976 15.3166 21.0976 15.7071 20.7071L20.7071 15.7071C21.0976 15.3166 21.0976 14.6834 20.7071 14.2929L15.7071 9.29289C15.3166 8.90237 14.6834 8.90237 14.2929 9.29289C13.9024 9.68342 13.9024 10.3166 14.2929 10.7071L17.5858 14H13.6C11.9033 14 10.691 13.9992 9.74064 13.9216C8.80197 13.8449 8.20732 13.6982 7.73005 13.455C6.78924 12.9757 6.02433 12.2108 5.54497 11.27C5.30179 10.7927 5.15512 10.198 5.07842 9.25936C5.00078 8.30901 5 7.09666 5 5.4V4Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 4V5.4C4 8.76031 4 10.4405 4.65396 11.7239C5.2292 12.8529 6.14708 13.7708 7.27606 14.346C8.55953 15 10.2397 15 13.6 15H20M20 15L15 10M20 15L15 20"
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
