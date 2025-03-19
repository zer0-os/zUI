import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconUsers1 = ({
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
              d="M18.0316 14.8768C18.1693 14.3419 18.7144 14.0199 19.2493 14.1576C21.4056 14.7126 23 16.6688 23 19V21C23 21.5523 22.5523 22 22 22C21.4478 22 21 21.5523 21 21V19C21 17.6035 20.0449 16.4275 18.7508 16.0945C18.2159 15.9568 17.8939 15.4116 18.0316 14.8768Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.5731 2.91554C14.7803 2.40361 15.3633 2.1566 15.8753 2.36382C17.7058 3.10481 19 4.90006 19 7C19 9.09994 17.7058 10.8952 15.8753 11.6362C15.3633 11.8434 14.7803 11.5964 14.5731 11.0845C14.3659 10.5725 14.6129 9.98953 15.1248 9.7823C16.2261 9.33652 17 8.25744 17 7C17 5.74256 16.2261 4.66348 15.1248 4.2177C14.6129 4.01047 14.3659 3.42748 14.5731 2.91554Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.17898 14C8.72635 14.0005 10.2737 14.0005 11.8211 14C12.9117 13.9996 13.6559 13.9994 14.2941 14.1704C16.0196 14.6327 17.3673 15.9804 17.8297 17.7059C18.0599 18.5652 17.9933 19.4836 18.0002 20.3641C18.0011 20.471 18.0028 20.6872 17.9489 20.8882C17.8102 21.4059 17.4059 21.8102 16.8883 21.9489C16.6873 22.0028 16.471 22.001 16.3641 22.0002C11.7891 21.9637 7.21096 21.9637 2.63595 22.0002C2.52904 22.001 2.31282 22.0028 2.11181 21.9489C1.59417 21.8102 1.18985 21.4059 1.05115 20.8882C0.997286 20.6872 0.99901 20.471 0.999862 20.3641C1.00686 19.4858 0.940521 18.5639 1.17041 17.7059C1.63274 15.9804 2.98048 14.6327 4.70594 14.1704C5.34416 13.9994 6.08836 13.9996 7.17898 14Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.50004 7C4.50004 4.23858 6.73861 2 9.50004 2C12.2615 2 14.5 4.23858 14.5 7C14.5 9.76142 12.2615 12 9.50004 12C6.73861 12 4.50004 9.76142 4.50004 7Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22 21V19C22 17.1362 20.7252 15.5701 19 15.126M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7C18 8.67869 16.9659 10.1159 15.5 10.7092M17 21C17 19.1362 17 18.2044 16.6955 17.4693C16.2895 16.4892 15.5108 15.7105 14.5307 15.3045C13.7956 15 12.8638 15 11 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z"
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
