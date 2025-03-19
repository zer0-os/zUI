import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconExpand6 = ({
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
              d="M8 4L5.41421 4L8.70711 7.29289C9.09763 7.68342 9.09763 8.31658 8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L4 5.41421L4 8C4 8.55228 3.55228 9 3 9C2.44772 9 2 8.55228 2 8V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H8C8.55228 2 9 2.44772 9 3C9 3.55228 8.55228 4 8 4Z"
              fill={color}
            />
            <path
              d="M15 3C15 2.44772 15.4477 2 16 2H21C21.5523 2 22 2.44772 22 3V8C22 8.55228 21.5523 9 21 9C20.4477 9 20 8.55228 20 8V5.41421L16.7071 8.70711C16.3166 9.09763 15.6834 9.09763 15.2929 8.70711C14.9024 8.31658 14.9024 7.68342 15.2929 7.29289L18.5858 4H16C15.4477 4 15 3.55228 15 3Z"
              fill={color}
            />
            <path
              d="M8.70711 16.7071L5.41421 20H8C8.55228 20 9 20.4477 9 21C9 21.5523 8.55228 22 8 22H3C2.44772 22 2 21.5523 2 21V16C2 15.4477 2.44772 15 3 15C3.55229 15 4 15.4477 4 16L4 18.5858L7.29289 15.2929C7.68342 14.9024 8.31658 14.9024 8.70711 15.2929C9.09763 15.6834 9.09763 16.3166 8.70711 16.7071Z"
              fill={color}
            />
            <path
              d="M20 18.5858V16C20 15.4477 20.4477 15 21 15C21.5523 15 22 15.4477 22 16V21C22 21.2652 21.8946 21.5196 21.7071 21.7071C21.5196 21.8946 21.2652 22 21 22H16C15.4477 22 15 21.5523 15 21C15 20.4477 15.4477 20 16 20H18.5858L15.2929 16.7071C14.9024 16.3166 14.9024 15.6834 15.2929 15.2929C15.6834 14.9024 16.3166 14.9024 16.7071 15.2929L20 18.5858Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16 8L21 3M21 3H16M21 3V8M8 8L3 3M3 3L3 8M3 3L8 3M8 16L3 21M3 21H8M3 21L3 16M16 16L21 21M21 21V16M21 21H16"
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
