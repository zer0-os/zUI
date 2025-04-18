import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconReverseLeft = ({
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
              d="M8.70711 3.70711C9.09763 3.31658 9.09763 2.68342 8.70711 2.29289C8.31658 1.90237 7.68342 1.90237 7.29289 2.29289L3.29289 6.29289C2.90237 6.68342 2.90237 7.31658 3.29289 7.70711L7.29289 11.7071C7.68342 12.0976 8.31658 12.0976 8.70711 11.7071C9.09763 11.3166 9.09763 10.6834 8.70711 10.2929L6.41421 8L14 8C16.7614 8 19 10.2386 19 13C19 15.7614 16.7614 18 14 18H4C3.44772 18 3 18.4477 3 19C3 19.5523 3.44772 20 4 20H14C17.866 20 21 16.866 21 13C21 9.13401 17.866 6 14 6L6.41421 6L8.70711 3.70711Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 7H14C17.3137 7 20 9.68629 20 13C20 16.3137 17.3137 19 14 19H4M4 7L8 3M4 7L8 11"
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
