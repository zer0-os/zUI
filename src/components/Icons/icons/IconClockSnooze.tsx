import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconClockSnooze = ({
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
              d="M18 19C17.4477 19 17 18.5523 17 18C17 17.4477 17.4477 17 18 17H22C22.4045 17 22.7691 17.2436 22.9239 17.6173C23.0787 17.991 22.9931 18.4211 22.7071 18.7071L20.4142 21H22C22.5523 21 23 21.4477 23 22C23 22.5523 22.5523 23 22 23H18C17.5955 23 17.2309 22.7564 17.0761 22.3827C16.9213 22.009 17.0069 21.5789 17.2929 21.2929L19.5858 19H18Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C12.805 23 13.5897 22.9135 14.3455 22.7494C14.5732 22.6999 14.687 22.6752 14.7685 22.6189C14.8504 22.5623 14.8929 22.5123 14.9356 22.4224C14.9782 22.3329 14.9868 22.1694 15.0041 21.8424C15.0396 21.1706 15.3005 20.5178 15.7639 20C15.2889 19.4692 15 18.7684 15 18C15 16.3431 16.3431 15 18 15H22C22.1629 15 22.2443 15 22.2867 14.9927C22.4725 14.9605 22.5885 14.8683 22.6619 14.6946C22.6786 14.655 22.6907 14.6031 22.7148 14.4993C22.9014 13.6964 23 12.8597 23 12C23 5.92487 18.0751 1 12 1ZM12 5C12.5523 5 13 5.44772 13 6V11.382L16.4472 13.1056C16.9412 13.3526 17.1414 13.9532 16.8944 14.4472C16.6474 14.9412 16.0468 15.1414 15.5528 14.8944L11.5528 12.8944C11.214 12.725 11 12.3788 11 12V6C11 5.44772 11.4477 5 12 5Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.5 17H21.5L16.5 22H21.5M21.9506 13C21.9833 12.6711 22 12.3375 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C12.1677 22 12.3344 21.9959 12.5 21.9877C12.6678 21.9795 12.8345 21.9671 13 21.9506M12 6V12L15.7384 13.8692"
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
