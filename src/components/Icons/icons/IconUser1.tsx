import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconUser1 = ({
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
              d="M8.78633 14.5C10.929 14.5005 13.0717 14.5005 15.2143 14.5C15.941 14.4998 16.4362 14.4997 16.8686 14.576C18.9386 14.941 20.5594 16.5617 20.9244 18.6318C21.0006 19.0642 21.0005 19.5593 21.0003 20.286C21.0003 20.4444 21.0052 20.6038 20.9775 20.7605C20.868 21.3815 20.3818 21.8677 19.7608 21.9772C19.6246 22.0012 19.4812 22.0005 19.4098 22.0001C14.4707 21.9736 9.52999 21.9736 4.59084 22.0001C4.51947 22.0005 4.37602 22.0012 4.23985 21.9772C3.61883 21.8677 3.13261 21.3815 3.02311 20.7605C2.99549 20.6038 3.00034 20.4444 3.00031 20.286C3.00015 19.5593 3.00004 19.0642 3.07628 18.6318C3.44129 16.5617 5.06202 14.941 7.13208 14.576C7.56449 14.4997 8.05965 14.4998 8.78633 14.5Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.50032 7.5C6.50032 4.46243 8.96276 2 12.0003 2C15.0379 2 17.5003 4.46243 17.5003 7.5C17.5003 10.5376 15.0379 13 12.0003 13C8.96276 13 6.50032 10.5376 6.50032 7.5Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z"
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
