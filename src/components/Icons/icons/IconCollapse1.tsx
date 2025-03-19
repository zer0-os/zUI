import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconCollapse1 = ({
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
              d="M21 10C21 10.5523 20.5523 11 20 11H14C13.4477 11 13 10.5523 13 10V4C13 3.44772 13.4477 3 14 3C14.5523 3 15 3.44772 15 4V7.58579L20.2929 2.29289C20.6834 1.90237 21.3166 1.90237 21.7071 2.29289C22.0976 2.68342 22.0976 3.31658 21.7071 3.70711L16.4142 9H20C20.5523 9 21 9.44772 21 10Z"
              fill={color}
            />
            <path
              d="M7.58579 15L2.29289 20.2929C1.90237 20.6834 1.90237 21.3166 2.29289 21.7071C2.68342 22.0976 3.31658 22.0976 3.70711 21.7071L9 16.4142V20C9 20.5523 9.44771 21 10 21C10.5523 21 11 20.5523 11 20V14C11 13.4477 10.5523 13 10 13H4C3.44772 13 3 13.4477 3 14C3 14.5523 3.44772 15 4 15H7.58579Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19 1L12 8M12 8H18M12 8V2M1 19L8 12M8 12H2M8 12L8 18"
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
