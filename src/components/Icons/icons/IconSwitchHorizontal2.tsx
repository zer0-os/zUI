import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconSwitchHorizontal2 = ({
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
              d="M8.70711 3.70711C9.09763 3.31658 9.09763 2.68342 8.70711 2.29289C8.31658 1.90237 7.68342 1.90237 7.29289 2.29289L3.29289 6.29289C2.90237 6.68342 2.90237 7.31658 3.29289 7.70711L7.29289 11.7071C7.68342 12.0976 8.31658 12.0976 8.70711 11.7071C9.09763 11.3166 9.09763 10.6834 8.70711 10.2929L6.41421 8L20 8C20.5523 8 21 7.55228 21 7C21 6.44771 20.5523 6 20 6L6.41421 6L8.70711 3.70711Z"
              fill={color}
            />
            <path
              d="M16.7071 12.2929C16.3166 11.9024 15.6834 11.9024 15.2929 12.2929C14.9024 12.6834 14.9024 13.3166 15.2929 13.7071L17.5858 16H4C3.44772 16 3 16.4477 3 17C3 17.5523 3.44772 18 4 18H17.5858L15.2929 20.2929C14.9024 20.6834 14.9024 21.3166 15.2929 21.7071C15.6834 22.0976 16.3166 22.0976 16.7071 21.7071L20.7071 17.7071C21.0976 17.3166 21.0976 16.6834 20.7071 16.2929L16.7071 12.2929Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 17H20M20 17L16 13M20 17L16 21M20 7H4M4 7L8 3M4 7L8 11"
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
