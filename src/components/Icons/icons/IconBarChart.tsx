import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconBarChart = ({
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
              d="M3 20C3 19.4477 3.44772 19 4 19C4.55228 19 5 19.4477 5 20V16C5 16.5523 4.55228 17 4 17C3.44772 17 3 16.5523 3 16V20ZM9 20C9 19.4477 9.44772 19 10 19C10.5523 19 11 19.4477 11 20V10C11 10.5523 10.5523 11 10 11C9.44772 11 9 10.5523 9 10V20ZM15 20C15 19.4477 15.4477 19 16 19C16.5523 19 17 19.4477 17 20V4C17 4.55228 16.5523 5 16 5C15.4477 5 15 4.55228 15 4V20ZM21 20C21 19.4477 21.4477 19 22 19C22.5523 19 23 19.4477 23 20V7C23 7.55228 22.5523 8 22 8C21.4477 8 21 7.55228 21 7V20Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 20V16C3 15.4477 3.44772 15 4 15C4.55228 15 5 15.4477 5 16V20C5 20.5523 4.55228 21 4 21C3.44772 21 3 20.5523 3 20ZM9 20V10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10V20C11 20.5523 10.5523 21 10 21C9.44772 21 9 20.5523 9 20ZM15 20V4C15 3.44772 15.4477 3 16 3C16.5523 3 17 3.44772 17 4V20C17 20.5523 16.5523 21 16 21C15.4477 21 15 20.5523 15 20ZM21 20V7C21 6.44772 21.4477 6 22 6C22.5523 6 23 6.44772 23 7V20C23 20.5523 22.5523 21 22 21C21.4477 21 21 20.5523 21 20Z"
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
