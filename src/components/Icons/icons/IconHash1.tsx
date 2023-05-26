import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconHash1 = ({
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
              d="M8 2C8.55228 2 9 2.44772 9 3V7H15V3C15 2.44772 15.4477 2 16 2C16.5523 2 17 2.44772 17 3V7H20C20.5523 7 21 7.44772 21 8C21 8.55228 20.5523 9 20 9H17V15H20C20.5523 15 21 15.4477 21 16C21 16.5523 20.5523 17 20 17H17V21C17 21.5523 16.5523 22 16 22C15.4477 22 15 21.5523 15 21V17H9V21C9 21.5523 8.55228 22 8 22C7.44772 22 7 21.5523 7 21V17H4C3.44772 17 3 16.5523 3 16C3 15.4477 3.44772 15 4 15H7V9H4C3.44772 9 3 8.55228 3 8C3 7.44772 3.44772 7 4 7H7V3C7 2.44772 7.44772 2 8 2ZM15 15V9H9V15H15Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 8H20M4 16H20M8 3V21M16 3V21" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </AccessibleIcon.Root>
    </div>
  );
};
