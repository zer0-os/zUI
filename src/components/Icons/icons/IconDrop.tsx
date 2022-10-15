import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconDrop = ({
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
              d="M11.2943 1.29131C10.9571 1.62174 10.6243 1.95663 10.2937 2.29372C9.68475 2.91478 8.85913 3.77484 7.99468 4.72909C7.13179 5.68162 6.22155 6.7375 5.44728 7.74893C4.68726 8.74175 4.00468 9.75978 3.65458 10.6247C3.23213 11.6683 3 12.8082 3 13.9999C3 18.9705 7.02944 22.9999 12 22.9999C16.9706 22.9999 21 18.9705 21 13.9999C21 12.8082 20.7679 11.6683 20.3454 10.6247C19.9953 9.75978 19.3127 8.74175 18.5527 7.74893C17.7785 6.7375 16.8682 5.68162 16.0053 4.72909C15.1409 3.77484 14.3153 2.91478 13.7063 2.29372C13.3757 1.95663 13.0429 1.62174 12.7057 1.29131C12.6164 1.20234 12.5095 1.1295 12.3888 1.07858C12.2633 1.02562 12.1311 0.999916 12 1C11.8689 0.999916 11.7367 1.02562 11.6112 1.07858C11.4905 1.1295 11.3836 1.20234 11.2943 1.29131Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14C4 12.9391 4.20651 11.9264 4.58152 11C5.76829 8.06817 12 2 12 2C12 2 18.2317 8.06817 19.4185 11C19.7935 11.9264 20 12.9391 20 14Z"
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