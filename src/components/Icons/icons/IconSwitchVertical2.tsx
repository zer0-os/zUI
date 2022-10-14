import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconSwitchVertical2 = ({
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
              d="M17.7071 3.29289C17.3166 2.90237 16.6834 2.90237 16.2929 3.29289L12.2929 7.29289C11.9024 7.68342 11.9024 8.31658 12.2929 8.70711C12.6834 9.09763 13.3166 9.09763 13.7071 8.70711L16 6.41421L16 20C16 20.5523 16.4477 21 17 21C17.5523 21 18 20.5523 18 20V6.41421L20.2929 8.70711C20.6834 9.09763 21.3166 9.09763 21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L17.7071 3.29289Z"
              fill={color}
            />
            <path
              d="M8 4C8 3.44772 7.55228 3 7 3C6.44772 3 6 3.44772 6 4V17.5858L3.70711 15.2929C3.31658 14.9024 2.68342 14.9024 2.29289 15.2929C1.90237 15.6834 1.90237 16.3166 2.29289 16.7071L6.29289 20.7071C6.68342 21.0976 7.31658 21.0976 7.70711 20.7071L11.7071 16.7071C12.0976 16.3166 12.0976 15.6834 11.7071 15.2929C11.3166 14.9024 10.6834 14.9024 10.2929 15.2929L8 17.5858V4Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 4V20M7 20L3 16M7 20L11 16M17 20V4M17 4L13 8M17 4L21 8"
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
