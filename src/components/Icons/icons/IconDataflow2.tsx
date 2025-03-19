import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconDataflow2 = ({
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
              d="M7.82929 3C7.41746 1.83481 6.30622 1 5 1C3.34315 1 2 2.34315 2 4C2 5.65685 3.34315 7 5 7C6.30622 7 7.41746 6.16519 7.82929 5L11 5L11 15.2413C11 16.0462 11 16.7106 11.0442 17.2518C11.0901 17.8139 11.1887 18.3306 11.436 18.816C11.8195 19.5686 12.4314 20.1805 13.184 20.564C13.6694 20.8113 14.1861 20.9099 14.7482 20.9558C15.1515 20.9888 15.6232 20.9971 16.1705 20.9993C16.5821 22.1648 17.6935 23 19 23C20.6569 23 22 21.6569 22 20C22 18.3431 20.6569 17 19 17C17.6941 17 16.5831 17.8344 16.171 18.9992C15.6425 18.997 15.2412 18.9894 14.911 18.9624C14.4726 18.9266 14.2484 18.8617 14.092 18.782C13.7157 18.5903 13.4097 18.2843 13.218 17.908C13.1383 17.7516 13.0734 17.5274 13.0376 17.089C13.0008 16.6389 13 16.0566 13 15.2V13L16.1707 13C16.5825 14.1652 17.6938 15 19 15C20.6569 15 22 13.6569 22 12C22 10.3431 20.6569 9 19 9C17.6938 9 16.5825 9.83481 16.1707 11L13 11V5L16.1707 5C16.5825 6.16519 17.6938 7 19 7C20.6569 7 22 5.65685 22 4C22 2.34315 20.6569 1 19 1C17.6938 1 16.5825 1.83481 16.1707 3L7.82929 3Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 4V15.2C12 16.8802 12 17.7202 12.327 18.362C12.6146 18.9265 13.0735 19.3854 13.638 19.673C14.2798 20 15.1198 20 16.8 20H17M17 20C17 21.1046 17.8954 22 19 22C20.1046 22 21 21.1046 21 20C21 18.8954 20.1046 18 19 18C17.8954 18 17 18.8954 17 20ZM7 4L17 4M7 4C7 5.10457 6.10457 6 5 6C3.89543 6 3 5.10457 3 4C3 2.89543 3.89543 2 5 2C6.10457 2 7 2.89543 7 4ZM17 4C17 5.10457 17.8954 6 19 6C20.1046 6 21 5.10457 21 4C21 2.89543 20.1046 2 19 2C17.8954 2 17 2.89543 17 4ZM12 12H17M17 12C17 13.1046 17.8954 14 19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12Z"
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
