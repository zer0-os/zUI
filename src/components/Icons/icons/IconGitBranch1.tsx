import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconGitBranch1 = ({
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
              d="M4 3C4 2.44772 3.55229 2 3 2C2.44772 2 2 2.44772 2 3V13.2413C1.99999 14.0463 1.99998 14.7106 2.0442 15.2518C2.09012 15.8139 2.18868 16.3306 2.43598 16.816C2.81947 17.5686 3.43139 18.1805 4.18404 18.564C4.66937 18.8113 5.18608 18.9099 5.74818 18.9558C6.28937 19 6.95372 19 7.75868 19H14.126C14.5701 20.7252 16.1362 22 18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C16.1362 14 14.5701 15.2748 14.126 17H7.8C6.94342 17 6.36113 16.9992 5.91104 16.9624C5.47262 16.9266 5.24842 16.8617 5.09202 16.782C4.7157 16.5903 4.40974 16.2843 4.21799 15.908C4.1383 15.7516 4.07337 15.5274 4.03755 15.089C4.00078 14.6389 4 14.0566 4 13.2V9L14.126 9C14.5701 10.7252 16.1362 12 18 12C20.2091 12 22 10.2091 22 8C22 5.79086 20.2091 4 18 4C16.1362 4 14.5701 5.27477 14.126 7L4 7V3Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 3V13.2C3 14.8802 3 15.7202 3.32698 16.362C3.6146 16.9265 4.07354 17.3854 4.63803 17.673C5.27976 18 6.11984 18 7.8 18H15M15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18ZM3 8L15 8M15 8C15 9.65686 16.3431 11 18 11C19.6569 11 21 9.65685 21 8C21 6.34315 19.6569 5 18 5C16.3431 5 15 6.34315 15 8Z"
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
