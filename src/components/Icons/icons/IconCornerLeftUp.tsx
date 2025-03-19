import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconCornerLeftUp = ({
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
              d="M8.70711 3.29289C8.31658 2.90237 7.68342 2.90237 7.29289 3.29289L2.29289 8.29289C1.90237 8.68342 1.90237 9.31658 2.29289 9.70711C2.68342 10.0976 3.31658 10.0976 3.70711 9.70711L7 6.41421L7 10.4444C6.99999 12.087 6.99999 13.3809 7.08507 14.4222C7.17187 15.4846 7.35217 16.3717 7.76296 17.1779C8.43407 18.4951 9.50493 19.5659 10.8221 20.237C11.6283 20.6478 12.5154 20.8281 13.5778 20.9149C14.6191 21 15.913 21 17.5554 21H21C21.5523 21 22 20.5523 22 20C22 19.4477 21.5523 19 21 19H17.6C15.9033 19 14.691 18.9992 13.7406 18.9216C12.802 18.8449 12.2073 18.6982 11.73 18.455C10.7892 17.9757 10.0243 17.2108 9.54497 16.27C9.30179 15.7927 9.15512 15.198 9.07843 14.2594C9.00078 13.309 9 12.0967 9 10.4L9 6.41421L12.2929 9.70711C12.6834 10.0976 13.3166 10.0976 13.7071 9.70711C14.0976 9.31658 14.0976 8.68342 13.7071 8.29289L8.70711 3.29289Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21 20H17.6C14.2397 20 12.5595 20 11.2761 19.346C10.1471 18.7708 9.2292 17.8529 8.65396 16.7239C8 15.4405 8 13.7603 8 10.4V4M8 4L13 9M8 4L3 9"
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
