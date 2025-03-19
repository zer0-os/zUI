import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconChevronSelectorHorizontal = ({
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
              d="M9.70711 6.29289C10.0976 6.68342 10.0976 7.31658 9.70711 7.70711L5.41421 12L9.70711 16.2929C10.0976 16.6834 10.0976 17.3166 9.70711 17.7071C9.31658 18.0976 8.68342 18.0976 8.29289 17.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L8.29289 6.29289C8.68342 5.90237 9.31658 5.90237 9.70711 6.29289Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.2929 6.29289C14.6834 5.90237 15.3166 5.90237 15.7071 6.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L15.7071 17.7071C15.3166 18.0976 14.6834 18.0976 14.2929 17.7071C13.9024 17.3166 13.9024 16.6834 14.2929 16.2929L18.5858 12L14.2929 7.70711C13.9024 7.31658 13.9024 6.68342 14.2929 6.29289Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 7L4 12L9 17M15 7L20 12L15 17" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </AccessibleIcon.Root>
    </div>
  );
};
