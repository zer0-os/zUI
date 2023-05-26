import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconHeadphones2 = ({
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
              d="M1 13C1 6.92487 5.92487 2 12 2C18.0751 2 23 6.92487 23 13V17C23 17.5523 22.5523 18 22 18C21.4477 18 21 17.5523 21 17V13C21 8.02944 16.9706 4 12 4C7.02944 4 3 8.02944 3 13V17C3 17.5523 2.55228 18 2 18C1.44772 18 1 17.5523 1 17V13Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 15.5C4 13.567 5.567 12 7.5 12C9.433 12 11 13.567 11 15.5V18.5C11 20.433 9.433 22 7.5 22C5.567 22 4 20.433 4 18.5V15.5Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.5 12C14.567 12 13 13.567 13 15.5V18.5C13 20.433 14.567 22 16.5 22C18.433 22 20 20.433 20 18.5V15.5C20 13.567 18.433 12 16.5 12Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22 17V13C22 7.47715 17.5228 3 12 3C6.47715 3 2 7.47715 2 13V17M7.5 21C6.11929 21 5 19.8807 5 18.5V15.5C5 14.1193 6.11929 13 7.5 13C8.88071 13 10 14.1193 10 15.5V18.5C10 19.8807 8.88071 21 7.5 21ZM16.5 21C15.1193 21 14 19.8807 14 18.5V15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V18.5C19 19.8807 17.8807 21 16.5 21Z"
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
