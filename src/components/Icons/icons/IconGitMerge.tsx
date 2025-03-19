import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconGitMerge = ({
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
              d="M7.04652 9.86171C8.74809 9.4017 10 7.84705 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 7.86384 3.27477 9.42994 5 9.87398V21C5 21.5523 5.44772 22 6 22C6.55228 22 7 21.5523 7 21V15.0001C7.28228 15.3764 7.59237 15.7345 7.92893 16.0711C9.59483 17.737 11.788 18.7544 14.1162 18.9609C14.5465 20.7059 16.1221 22 18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C16.153 14 14.5983 15.2519 14.1383 16.9535C12.3334 16.758 10.6389 15.9526 9.34315 14.6569C8.04737 13.3611 7.24201 11.6666 7.04652 9.86171Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18ZM15 18C12.6131 18 10.3239 17.0518 8.63604 15.364C6.94821 13.6761 6 11.3869 6 9M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9ZM6 9V21"
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
