import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconCurrencyBitcoin = ({
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
              d="M9.5 1C10.0523 1 10.5 1.44772 10.5 2V3H12.5V2C12.5 1.44772 12.9477 1 13.5 1C14.0523 1 14.5 1.44772 14.5 2V3.02469C17.0267 3.27555 19 5.40733 19 8C19 9.43071 18.3991 10.7211 17.4359 11.6325C18.9657 12.4875 20 14.123 20 16C20 18.7614 17.7614 21 15 21H14.5V22C14.5 22.5523 14.0523 23 13.5 23C12.9477 23 12.5 22.5523 12.5 22V21H10.5V22C10.5 22.5523 10.0523 23 9.5 23C8.94772 23 8.5 22.5523 8.5 22V21H5.5C4.94772 21 4.5 20.5523 4.5 20C4.5 19.4477 4.94772 19 5.5 19H6.5V5H5.5C4.94772 5 4.5 4.55228 4.5 4C4.5 3.44772 4.94772 3 5.5 3H8.5V2C8.5 1.44772 8.94772 1 9.5 1ZM8.5 5V11H14C15.6569 11 17 9.65685 17 8C17 6.34315 15.6569 5 14 5H8.5ZM8.5 13V19H15C16.6569 19 18 17.6569 18 16C18 14.3431 16.6569 13 15 13H8.5Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.5 2V4M9.5 20V22M13.5 2V4M13.5 20V22M7.5 4H14C16.2091 4 18 5.79086 18 8C18 10.2091 16.2091 12 14 12H7.5H15C17.2091 12 19 13.7909 19 16C19 18.2091 17.2091 20 15 20H7.5M7.5 4H5.5M7.5 4V20M7.5 20H5.5"
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
