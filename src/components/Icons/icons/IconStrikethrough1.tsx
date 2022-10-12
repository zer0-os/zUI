import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconStrikethrough1 = ({
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
              d="M5 8C5 5.23858 7.23858 3 10 3H14C16.7614 3 19 5.23858 19 8C19 8.55228 18.5523 9 18 9C17.4477 9 17 8.55228 17 8C17 6.34315 15.6569 5 14 5H10C8.34315 5 7 6.34315 7 8C7 8.55228 6.55228 9 6 9C5.44772 9 5 8.55228 5 8Z"
              fill={color}
            />
            <path
              d="M18.0004 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H3C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H14C15.6569 13 17 14.3431 17 16C17 17.6569 15.6569 19 14 19H10C8.34315 19 7 17.6569 7 16C7 15.4477 6.55228 15 6 15C5.44772 15 5 15.4477 5 16C5 18.7614 7.23858 21 10 21H14C16.7614 21 19 18.7614 19 16C19 14.8744 18.6281 13.8357 18.0004 13Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 16C6 18.2091 7.79086 20 10 20H14C16.2091 20 18 18.2091 18 16C18 13.7909 16.2091 12 14 12M18 8C18 5.79086 16.2091 4 14 4H10C7.79086 4 6 5.79086 6 8M3 12H21"
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
