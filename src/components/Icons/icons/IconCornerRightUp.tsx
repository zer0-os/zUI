import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconCornerRightUp = ({
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
              d="M16.7071 3.29289C16.3166 2.90237 15.6834 2.90237 15.2929 3.29289L10.2929 8.29289C9.90237 8.68342 9.90237 9.31658 10.2929 9.70711C10.6834 10.0976 11.3166 10.0976 11.7071 9.70711L15 6.41421L15 10.4C15 12.0967 14.9992 13.309 14.9216 14.2594C14.8449 15.198 14.6982 15.7927 14.455 16.27C13.9757 17.2108 13.2108 17.9757 12.27 18.455C11.7927 18.6982 11.198 18.8449 10.2594 18.9216C9.30901 18.9992 8.09666 19 6.4 19H3C2.44772 19 2 19.4477 2 20C2 20.5523 2.44772 21 3 21H6.44449C8.087 21 9.38092 21 10.4222 20.9149C11.4846 20.8281 12.3717 20.6478 13.1779 20.237C14.4951 19.5659 15.5659 18.4951 16.237 17.1779C16.6478 16.3717 16.8281 15.4846 16.9149 14.4222C17 13.3809 17 12.087 17 10.4444L17 6.41421L20.2929 9.70711C20.6834 10.0976 21.3166 10.0976 21.7071 9.70711C22.0976 9.31658 22.0976 8.68342 21.7071 8.29289L16.7071 3.29289Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 20H6.4C9.76031 20 11.4405 20 12.7239 19.346C13.8529 18.7708 14.7708 17.8529 15.346 16.7239C16 15.4405 16 13.7603 16 10.4L16 4M16 4L11 9M16 4L21 9"
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
