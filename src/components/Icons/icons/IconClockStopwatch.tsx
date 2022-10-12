import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconClockStopwatch = ({
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
              d="M10 1C9.44772 1 9 1.44772 9 2C9 2.55228 9.44772 3 10 3H11V4.052C6.22334 4.5517 2.5 8.59103 2.5 13.5C2.5 18.7467 6.75329 23 12 23C17.2467 23 21.5 18.7467 21.5 13.5C21.5 8.59103 17.7767 4.5517 13 4.052V3H14C14.5523 3 15 2.55228 15 2C15 1.44772 14.5523 1 14 1H10ZM13 9.5C13 8.94772 12.5523 8.5 12 8.5C11.4477 8.5 11 8.94772 11 9.5V13.5C11 13.8513 11.1843 14.1768 11.4855 14.3575L13.9855 15.8575C14.4591 16.1416 15.0733 15.9881 15.3575 15.5145C15.6416 15.0409 15.4881 14.4267 15.0145 14.1425L13 12.9338V9.5Z"
              fill={color}
            />
            <path
              d="M18.122 3.38469C18.5125 2.99417 19.1457 2.99417 19.5362 3.38469L21.0362 4.88469C21.4267 5.27521 21.4267 5.90838 21.0362 6.2989C20.6457 6.68943 20.0125 6.68943 19.622 6.2989L18.122 4.7989C17.7315 4.40838 17.7315 3.77521 18.122 3.38469Z"
              fill={color}
            />
            <path
              d="M5.87801 3.38469C6.26853 3.77521 6.26853 4.40838 5.87801 4.7989L4.37801 6.2989C3.98748 6.68943 3.35432 6.68943 2.96379 6.2989C2.57327 5.90838 2.57327 5.27521 2.96379 4.88469L4.46379 3.38469C4.85432 2.99417 5.48748 2.99417 5.87801 3.38469Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 9.5V13.5L14.5 15M12 5C7.30558 5 3.5 8.80558 3.5 13.5C3.5 18.1944 7.30558 22 12 22C16.6944 22 20.5 18.1944 20.5 13.5C20.5 8.80558 16.6944 5 12 5ZM12 5V2M10 2H14M20.329 5.59204L18.829 4.09204L19.579 4.84204M3.67102 5.59204L5.17102 4.09204L4.42102 4.84204"
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
