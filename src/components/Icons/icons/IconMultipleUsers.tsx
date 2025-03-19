import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconMultipleUsers = ({
  className,
  label = DEFAULT_LABEL,
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE
}: IconProps) => {
  return (
    <div style={{ height: size, width: size }} className={classNames(className, styles.Container)}>
      <AccessibleIcon.Root label={label}>
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.5 3.75C7.70507 3.75 6.25 5.20507 6.25 7C6.25 8.79493 7.70507 10.25 9.5 10.25C11.2949 10.25 12.75 8.79493 12.75 7C12.75 5.20507 11.2949 3.75 9.5 3.75ZM4.75 7C4.75 4.37665 6.87665 2.25 9.5 2.25C12.1234 2.25 14.25 4.37665 14.25 7C14.25 9.62335 12.1234 11.75 9.5 11.75C6.87665 11.75 4.75 9.62335 4.75 7ZM14.8048 3.00935C14.9602 2.6254 15.3975 2.44014 15.7814 2.59556C17.5208 3.29964 18.75 5.00538 18.75 7C18.75 8.99462 17.5208 10.7004 15.7814 11.4044C15.3975 11.5599 14.9602 11.3746 14.8048 10.9907C14.6494 10.6067 14.8346 10.1695 15.2186 10.014C16.411 9.53135 17.25 8.36275 17.25 7C17.25 5.63725 16.411 4.46865 15.2186 3.98596C14.8346 3.83054 14.6494 3.3933 14.8048 3.00935ZM7.97262 14.25H11.0274C11.9361 14.25 12.6562 14.25 13.2397 14.2898C13.8357 14.3305 14.3436 14.4152 14.8177 14.6116C15.9816 15.0937 16.9063 16.0184 17.3884 17.1823C17.5848 17.6564 17.6695 18.1643 17.7102 18.7603C17.75 19.3438 17.75 20.0639 17.75 20.9726V21C17.75 21.4142 17.4142 21.75 17 21.75C16.5858 21.75 16.25 21.4142 16.25 21C16.25 20.0579 16.2496 19.3888 16.2137 18.8624C16.1782 18.3428 16.1107 18.0172 16.0026 17.7563C15.6728 16.9599 15.0401 16.3272 14.2437 15.9974C13.9828 15.8893 13.6572 15.8218 13.1376 15.7863C12.6112 15.7504 11.9421 15.75 11 15.75H8C7.05786 15.75 6.38881 15.7504 5.86243 15.7863C5.34279 15.8218 5.0172 15.8893 4.75628 15.9974C3.95994 16.3272 3.32725 16.9599 2.99739 17.7563C2.88931 18.0172 2.82178 18.3428 2.78632 18.8624C2.75041 19.3888 2.75 20.0579 2.75 21C2.75 21.4142 2.41421 21.75 2 21.75C1.58579 21.75 1.25 21.4142 1.25 21L1.25 20.9726C1.25 20.0639 1.24999 19.3438 1.2898 18.7603C1.33047 18.1643 1.41517 17.6564 1.61157 17.1823C2.09367 16.0184 3.01837 15.0937 4.18225 14.6116C4.65641 14.4152 5.16431 14.3305 5.76032 14.2898C6.34375 14.25 7.06393 14.25 7.97262 14.25ZM18.2737 14.9391C18.3769 14.5379 18.7858 14.2964 19.1869 14.3997C21.2355 14.9269 22.75 16.7857 22.75 19V21C22.75 21.4142 22.4142 21.75 22 21.75C21.5858 21.75 21.25 21.4142 21.25 21V19C21.25 17.4867 20.215 16.2132 18.8131 15.8523C18.4119 15.7491 18.1704 15.3402 18.2737 14.9391Z"
            fill={color}
          />
        </svg>
      </AccessibleIcon.Root>
    </div>
  );
};
