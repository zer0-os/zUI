import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconHeading1 = ({
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
              d="M4 3C3.44772 3 3 3.44772 3 4C3 4.55228 3.44772 5 4 5H5V19H4C3.44772 19 3 19.4477 3 20C3 20.5523 3.44772 21 4 21H8C8.55229 21 9 20.5523 9 20C9 19.4477 8.55229 19 8 19H7V13L17 13V19H16C15.4477 19 15 19.4477 15 20C15 20.5523 15.4477 21 16 21H20C20.5523 21 21 20.5523 21 20C21 19.4477 20.5523 19 20 19H19V5H20C20.5523 5 21 4.55228 21 4C21 3.44772 20.5523 3 20 3H16C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5H17V11L7 11V5H8C8.55229 5 9 4.55228 9 4C9 3.44772 8.55229 3 8 3H4Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 4V20M18 4V20M8 4H4M18 12L6 12M8 20H4M20 20H16M20 4H16"
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
