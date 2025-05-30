import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconChevronSelectorVertical = ({
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
              d="M6.29289 14.2929C6.68342 13.9024 7.31658 13.9024 7.70711 14.2929L12 18.5858L16.2929 14.2929C16.6834 13.9024 17.3166 13.9024 17.7071 14.2929C18.0976 14.6834 18.0976 15.3166 17.7071 15.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L6.29289 15.7071C5.90237 15.3166 5.90237 14.6834 6.29289 14.2929Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.29289 9.70711C6.68342 10.0976 7.31658 10.0976 7.70711 9.70711L12 5.41421L16.2929 9.70711C16.6834 10.0976 17.3166 10.0976 17.7071 9.70711C18.0976 9.31658 18.0976 8.68342 17.7071 8.29289L12.7071 3.29289C12.3166 2.90237 11.6834 2.90237 11.2929 3.29289L6.29289 8.29289C5.90237 8.68342 5.90237 9.31658 6.29289 9.70711Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 15L12 20L17 15M7 9L12 4L17 9" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </AccessibleIcon.Root>
    </div>
  );
};
