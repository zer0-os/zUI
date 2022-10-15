import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconCalendarMinus2 = ({
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
              d="M15 18C15 17.4477 15.4477 17 16 17H22C22.5523 17 23 17.4477 23 18C23 18.5523 22.5523 19 22 19H16C15.4477 19 15 18.5523 15 18Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17 2C17 1.44772 16.5523 1 16 1C15.4477 1 15 1.44772 15 2V3H9V2C9 1.44772 8.55229 1 8 1C7.44772 1 7 1.44772 7 2V3.00163C6.52454 3.00489 6.10898 3.01472 5.74818 3.04419C5.18608 3.09012 4.66938 3.18868 4.18404 3.43597C3.43139 3.81947 2.81947 4.43139 2.43598 5.18404C2.18868 5.66937 2.09012 6.18608 2.0442 6.74817C1.99998 7.28936 1.99999 7.95373 2 8.75869V17.2413C1.99999 18.0463 1.99998 18.7106 2.0442 19.2518C2.09012 19.8139 2.18868 20.3306 2.43598 20.816C2.81947 21.5686 3.43139 22.1805 4.18404 22.564C4.66938 22.8113 5.18608 22.9099 5.74818 22.9558C6.28937 23 6.95372 23 7.75868 23H16.2413C17.0463 23 17.7106 23 18.2518 22.9558C18.8139 22.9099 19.3306 22.8113 19.816 22.564C20.0906 22.4241 20.3464 22.2538 20.5793 22.0573C20.8154 21.8581 20.9334 21.7585 20.9598 21.5687C20.9792 21.4283 20.9042 21.2229 20.7988 21.1282C20.6562 21 20.4636 21 20.0785 21H16C14.3431 21 13 19.6569 13 18C13 16.3431 14.3431 15 16 15H21.2C21.48 15 21.62 15 21.727 14.9455C21.8211 14.8976 21.8976 14.8211 21.9455 14.727C22 14.62 22 14.48 22 14.2V8.75868C22 7.95372 22 7.28936 21.9558 6.74817C21.9099 6.18608 21.8113 5.66937 21.564 5.18404C21.1805 4.43139 20.5686 3.81947 19.816 3.43597C19.3306 3.18868 18.8139 3.09012 18.2518 3.04419C17.891 3.01472 17.4755 3.00489 17 3.00163V2ZM7 6V5.00176C6.55447 5.00489 6.20463 5.01357 5.91104 5.03755C5.47262 5.07337 5.24842 5.1383 5.09202 5.21799C4.7157 5.40973 4.40974 5.7157 4.21799 6.09202C4.1383 6.24842 4.07337 6.47262 4.03755 6.91104C4.00078 7.36113 4 7.94342 4 8.8V9H20V8.8C20 7.94342 19.9992 7.36113 19.9624 6.91104C19.9266 6.47262 19.8617 6.24842 19.782 6.09202C19.5903 5.7157 19.2843 5.40973 18.908 5.21799C18.7516 5.1383 18.5274 5.07337 18.089 5.03755C17.7954 5.01357 17.4455 5.00489 17 5.00176V6C17 6.55228 16.5523 7 16 7C15.4477 7 15 6.55228 15 6V5H9V6C9 6.55228 8.55229 7 8 7C7.44772 7 7 6.55228 7 6Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 18H21M21 11.5V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22H12.5M21 10H3M16 2V6M8 2V6"
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