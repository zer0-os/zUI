import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconServer2 = ({
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
              d="M5.5 2C3.01472 2 1 4.01472 1 6.5C1 8.98528 3.01472 11 5.5 11H18.5C20.9853 11 23 8.98528 23 6.5C23 4.01472 20.9853 2 18.5 2H5.5ZM4.75 6.5C4.75 5.80964 5.30964 5.25 6 5.25C6.69036 5.25 7.25 5.80964 7.25 6.5C7.25 7.19036 6.69036 7.75 6 7.75C5.30964 7.75 4.75 7.19036 4.75 6.5Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.5 13C3.01472 13 1 15.0147 1 17.5C1 19.9853 3.01472 22 5.5 22H18.5C20.9853 22 23 19.9853 23 17.5C23 15.0147 20.9853 13 18.5 13H5.5ZM6 16.25C5.30964 16.25 4.75 16.8096 4.75 17.5C4.75 18.1904 5.30964 18.75 6 18.75C6.69036 18.75 7.25 18.1904 7.25 17.5C7.25 16.8096 6.69036 16.25 6 16.25Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 8H6.01M6 16H6.01M6 12H18M6 12C3.79086 12 2 10.2091 2 8C2 5.79086 3.79086 4 6 4H18C20.2091 4 22 5.79086 22 8C22 10.2091 20.2091 12 18 12M6 12C3.79086 12 2 13.7909 2 16C2 18.2091 3.79086 20 6 20H18C20.2091 20 22 18.2091 22 16C22 13.7909 20.2091 12 18 12"
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
