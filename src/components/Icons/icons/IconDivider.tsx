import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconDivider = ({
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
              d="M2.00021 12C2.00021 11.4477 2.44793 11 3.00021 11H3.01021C3.5625 11 4.01021 11.4477 4.01021 12C4.01021 12.5523 3.5625 13 3.01021 13H3.00021C2.44793 13 2.00021 12.5523 2.00021 12Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.50021 12C6.50021 11.4477 6.94793 11 7.50021 11H7.51021C8.0625 11 8.51021 11.4477 8.51021 12C8.51021 12.5523 8.0625 13 7.51021 13H7.50021C6.94793 13 6.50021 12.5523 6.50021 12Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.5002 12C15.5002 11.4477 15.9479 11 16.5002 11H16.5102C17.0625 11 17.5102 11.4477 17.5102 12C17.5102 12.5523 17.0625 13 16.5102 13H16.5002C15.9479 13 15.5002 12.5523 15.5002 12Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.0002 12C11.0002 11.4477 11.4479 11 12.0002 11H12.0102C12.5625 11 13.0102 11.4477 13.0102 12C13.0102 12.5523 12.5625 13 12.0102 13H12.0002C11.4479 13 11.0002 12.5523 11.0002 12Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.0002 12C20.0002 11.4477 20.4479 11 21.0002 11H21.0102C21.5625 11 22.0102 11.4477 22.0102 12C22.0102 12.5523 21.5625 13 21.0102 13H21.0002C20.4479 13 20.0002 12.5523 20.0002 12Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.7344 1.99984C19.9693 1.99913 20.2571 1.99825 20.5179 2.06813C21.208 2.25306 21.7471 2.79216 21.9321 3.48234C22.0019 3.74313 22.0011 4.03095 22.0004 4.26577C21.9988 4.76818 22.0292 5.28669 21.898 5.77644C21.6206 6.81172 20.8119 7.62036 19.7767 7.89776C19.3911 8.00106 18.9531 8.0006 18.4454 8.00006C14.1486 7.99551 9.8518 7.99551 5.55504 8.00006C5.04731 8.0006 4.60928 8.00106 4.22376 7.89776C3.18848 7.62036 2.37984 6.81172 2.10244 5.77644C1.97121 5.2867 2.00161 4.76817 2.00007 4.26577C1.99936 4.03094 1.99848 3.74313 2.06836 3.48235C2.2533 2.79216 2.79239 2.25307 3.48258 2.06813C3.74337 1.99825 4.03118 1.99913 4.266 1.99984C9.42197 2.01555 14.5785 2.01555 19.7344 1.99984Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.7344 22.0001C19.9692 22.0008 20.2571 22.0017 20.5178 21.9318C21.208 21.7469 21.7471 21.2078 21.9321 20.5176C22.0019 20.2568 22.0011 19.969 22.0003 19.7341C21.9988 19.2317 22.0292 18.7132 21.898 18.2235C21.6206 17.1882 20.8119 16.3796 19.7767 16.1022C19.3911 15.9989 18.9531 15.9993 18.4454 15.9999C14.1486 16.0044 9.85179 16.0044 5.55503 15.9999C5.0473 15.9993 4.60927 15.9989 4.22375 16.1022C3.18847 16.3796 2.37983 17.1882 2.10243 18.2235C1.9712 18.7132 2.0016 19.2317 2.00006 19.7341C1.99935 19.969 1.99847 20.2568 2.06835 20.5176C2.25329 21.2078 2.79238 21.7469 3.48257 21.9318C3.74336 22.0017 4.03117 22.0008 4.26599 22.0001C9.42196 21.9844 14.5784 21.9844 19.7344 22.0001Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 12H3.01M7.5 12H7.51M16.5 12H16.51M12 12H12.01M21 12H21.01M21 21V20.2C21 19.0799 21 18.5198 20.782 18.092C20.5903 17.7157 20.2843 17.4097 19.908 17.218C19.4802 17 18.9201 17 17.8 17H6.2C5.0799 17 4.51984 17 4.09202 17.218C3.7157 17.4097 3.40973 17.7157 3.21799 18.092C3 18.5198 3 19.0799 3 20.2V21M21 3V3.8C21 4.9201 21 5.48016 20.782 5.90798C20.5903 6.28431 20.2843 6.59027 19.908 6.78201C19.4802 7 18.9201 7 17.8 7H6.2C5.0799 7 4.51984 7 4.09202 6.78201C3.71569 6.59027 3.40973 6.28431 3.21799 5.90798C3 5.48016 3 4.92011 3 3.8V3"
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
