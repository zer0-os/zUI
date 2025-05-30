import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconArrowsRight = ({
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
              d="M11.7071 2.29289C11.3166 1.90237 10.6834 1.90237 10.2929 2.29289C9.90237 2.68342 9.90237 3.31658 10.2929 3.70711L12.5858 6H4C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8H12.5858L10.2929 10.2929C9.90237 10.6834 9.90237 11.3166 10.2929 11.7071C10.6834 12.0976 11.3166 12.0976 11.7071 11.7071L15.7071 7.70711C16.0976 7.31658 16.0976 6.68342 15.7071 6.29289L11.7071 2.29289Z"
              fill={color}
            />
            <path
              d="M3 17C3 16.4477 3.44772 16 4 16H17.5858L15.2929 13.7071C14.9024 13.3166 14.9024 12.6834 15.2929 12.2929C15.6834 11.9024 16.3166 11.9024 16.7071 12.2929L20.7071 16.2929C21.0976 16.6834 21.0976 17.3166 20.7071 17.7071L16.7071 21.7071C16.3166 22.0976 15.6834 22.0976 15.2929 21.7071C14.9024 21.3166 14.9024 20.6834 15.2929 20.2929L17.5858 18H4C3.44772 18 3 17.5523 3 17Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 7H15M15 7L11 11M15 7L11 3M4 17H20M20 17L16 21M20 17L16 13"
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
