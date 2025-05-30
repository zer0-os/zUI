import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconGridDotsLeft = ({
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
              d="M6.5 3C6.5 2.44772 6.94772 2 7.5 2H7.51C8.06228 2 8.51 2.44772 8.51 3C8.51 3.55228 8.06228 4 7.51 4H7.5C6.94772 4 6.5 3.55228 6.5 3Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.5 12C6.5 11.4477 6.94772 11 7.5 11H7.51C8.06228 11 8.51 11.4477 8.51 12C8.51 12.5523 8.06228 13 7.51 13H7.5C6.94772 13 6.5 12.5523 6.5 12Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.5 21C6.5 20.4477 6.94772 20 7.5 20H7.51C8.06228 20 8.51 20.4477 8.51 21C8.51 21.5523 8.06228 22 7.51 22H7.5C6.94772 22 6.5 21.5523 6.5 21Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.5 3C15.5 2.44772 15.9477 2 16.5 2H16.51C17.0623 2 17.51 2.44772 17.51 3C17.51 3.55228 17.0623 4 16.51 4H16.5C15.9477 4 15.5 3.55228 15.5 3Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.5 12C15.5 11.4477 15.9477 11 16.5 11H16.51C17.0623 11 17.51 11.4477 17.51 12C17.51 12.5523 17.0623 13 16.51 13H16.5C15.9477 13 15.5 12.5523 15.5 12Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.5 21C15.5 20.4477 15.9477 20 16.5 20H16.51C17.0623 20 17.51 20.4477 17.51 21C17.51 21.5523 17.0623 22 16.51 22H16.5C15.9477 22 15.5 21.5523 15.5 21Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11 3C11 2.44772 11.4477 2 12 2H12.01C12.5623 2 13.01 2.44772 13.01 3C13.01 3.55228 12.5623 4 12.01 4H12C11.4477 4 11 3.55228 11 3Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11 12C11 11.4477 11.4477 11 12 11H12.01C12.5623 11 13.01 11.4477 13.01 12C13.01 12.5523 12.5623 13 12.01 13H12C11.4477 13 11 12.5523 11 12Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11 21C11 20.4477 11.4477 20 12 20H12.01C12.5623 20 13.01 20.4477 13.01 21C13.01 21.5523 12.5623 22 12.01 22H12C11.4477 22 11 21.5523 11 21Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11 16.5C11 15.9477 11.4477 15.5 12 15.5H12.01C12.5623 15.5 13.01 15.9477 13.01 16.5C13.01 17.0523 12.5623 17.5 12.01 17.5H12C11.4477 17.5 11 17.0523 11 16.5Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11 7.5C11 6.94772 11.4477 6.5 12 6.5H12.01C12.5623 6.5 13.01 6.94772 13.01 7.5C13.01 8.05228 12.5623 8.5 12.01 8.5H12C11.4477 8.5 11 8.05228 11 7.5Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 3C20 2.44772 20.4477 2 21 2H21.01C21.5623 2 22.01 2.44772 22.01 3C22.01 3.55228 21.5623 4 21.01 4H21C20.4477 4 20 3.55228 20 3Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 12C20 11.4477 20.4477 11 21 11H21.01C21.5623 11 22.01 11.4477 22.01 12C22.01 12.5523 21.5623 13 21.01 13H21C20.4477 13 20 12.5523 20 12Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 21C20 20.4477 20.4477 20 21 20H21.01C21.5623 20 22.01 20.4477 22.01 21C22.01 21.5523 21.5623 22 21.01 22H21C20.4477 22 20 21.5523 20 21Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 16.5C20 15.9477 20.4477 15.5 21 15.5H21.01C21.5623 15.5 22.01 15.9477 22.01 16.5C22.01 17.0523 21.5623 17.5 21.01 17.5H21C20.4477 17.5 20 17.0523 20 16.5Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 7.5C20 6.94772 20.4477 6.5 21 6.5H21.01C21.5623 6.5 22.01 6.94772 22.01 7.5C22.01 8.05228 21.5623 8.5 21.01 8.5H21C20.4477 8.5 20 8.05228 20 7.5Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 2C3.55229 2 4 2.44772 4 3L4 21C4 21.5523 3.55228 22 3 22C2.44772 22 2 21.5523 2 21L2 3C2 2.44772 2.44772 2 3 2Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.5 3H7.51M7.5 12H7.51M7.5 21H7.51M16.5 3H16.51M16.5 12H16.51M16.5 21H16.51M12 3H12.01M12 12H12.01M12 21H12.01M12 16.5H12.01M12 7.5H12.01M21 3H21.01M21 12H21.01M21 21H21.01M21 16.5H21.01M21 7.5H21.01M3 21V3"
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
