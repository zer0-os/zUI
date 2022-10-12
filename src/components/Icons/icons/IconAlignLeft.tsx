import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconAlignLeft = ({
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
              d="M2 10C2 9.44772 2.44772 9 3 9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H3C2.44772 11 2 10.5523 2 10Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 6C2 5.44772 2.44772 5 3 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H3C2.44772 7 2 6.55228 2 6Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 14C2 13.4477 2.44772 13 3 13H20C20.5523 13 21 13.4477 21 14C21 14.5523 20.5523 15 20 15H3C2.44772 15 2 14.5523 2 14Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 18C2 17.4477 2.44772 17 3 17H16C16.5523 17 17 17.4477 17 18C17 18.5523 16.5523 19 16 19H3C2.44772 19 2 18.5523 2 18Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 10H3M20 6H3M20 14H3M16 18H3" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </AccessibleIcon.Root>
    </div>
  );
};
