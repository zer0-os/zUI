import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconChevronLeftDouble = ({
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
              d="M18.7071 6.29289C19.0976 6.68342 19.0976 7.31658 18.7071 7.70711L14.4142 12L18.7071 16.2929C19.0976 16.6834 19.0976 17.3166 18.7071 17.7071C18.3166 18.0976 17.6834 18.0976 17.2929 17.7071L12.2929 12.7071C11.9024 12.3166 11.9024 11.6834 12.2929 11.2929L17.2929 6.29289C17.6834 5.90237 18.3166 5.90237 18.7071 6.29289Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.7071 6.29289C12.0976 6.68342 12.0976 7.31658 11.7071 7.70711L7.41421 12L11.7071 16.2929C12.0976 16.6834 12.0976 17.3166 11.7071 17.7071C11.3166 18.0976 10.6834 18.0976 10.2929 17.7071L5.29289 12.7071C4.90237 12.3166 4.90237 11.6834 5.29289 11.2929L10.2929 6.29289C10.6834 5.90237 11.3166 5.90237 11.7071 6.29289Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 17L13 12L18 7M11 17L6 12L11 7" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </AccessibleIcon.Root>
    </div>
  );
};
