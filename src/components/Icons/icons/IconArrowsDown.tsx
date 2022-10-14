import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconArrowsDown = ({
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
              d="M6 17.5858L3.70711 15.2929C3.31658 14.9024 2.68342 14.9024 2.29289 15.2929C1.90237 15.6834 1.90237 16.3166 2.29289 16.7071L6.29289 20.7071C6.68342 21.0976 7.31658 21.0976 7.70711 20.7071L11.7071 16.7071C12.0976 16.3166 12.0976 15.6834 11.7071 15.2929C11.3166 14.9024 10.6834 14.9024 10.2929 15.2929L8 17.5858L8 4C8 3.44771 7.55229 3 7 3C6.44772 3 6 3.44771 6 4L6 17.5858Z"
              fill={color}
            />
            <path
              d="M18 12.5858L20.2929 10.2929C20.6834 9.90237 21.3166 9.90237 21.7071 10.2929C22.0976 10.6834 22.0976 11.3166 21.7071 11.7071L17.7071 15.7071C17.3166 16.0976 16.6834 16.0976 16.2929 15.7071L12.2929 11.7071C11.9024 11.3166 11.9024 10.6834 12.2929 10.2929C12.6834 9.90237 13.3166 9.90237 13.7071 10.2929L16 12.5858L16 4C16 3.44771 16.4477 3 17 3C17.5523 3 18 3.44771 18 4V12.5858Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17 4V15M17 15L13 11M17 15L21 11M7 4V20M7 20L3 16M7 20L11 16"
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
