import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconClockPlus = ({
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
              d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 12.583 22.9546 13.1555 22.8673 13.714C22.7945 14.1789 22.7581 14.4114 22.6659 14.5191C22.5671 14.6346 22.4996 14.671 22.3488 14.69C22.2081 14.7078 21.8857 14.5612 21.2408 14.2678C20.8627 14.0958 20.4425 14 20 14C18.3431 14 17 15.3431 17 17C15.3431 17 14 18.3431 14 20C14 20.4425 14.0958 20.8627 14.2678 21.2408C14.5612 21.8857 14.7078 22.2081 14.69 22.3488C14.671 22.4996 14.6346 22.5671 14.5191 22.6659C14.4114 22.7581 14.1789 22.7945 13.714 22.8673C13.1555 22.9546 12.583 23 12 23C5.92487 23 1 18.0751 1 12ZM13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V12C11 12.3788 11.214 12.725 11.5528 12.8944L15.5528 14.8944C16.0468 15.1414 16.6474 14.9412 16.8944 14.4472C17.1414 13.9532 16.9412 13.3526 16.4472 13.1056L13 11.382V6Z"
              fill={color}
            />
            <path
              d="M21 17C21 16.4477 20.5523 16 20 16C19.4477 16 19 16.4477 19 17V19H17C16.4477 19 16 19.4477 16 20C16 20.5523 16.4477 21 17 21H19V23C19 23.5523 19.4477 24 20 24C20.5523 24 21 23.5523 21 23V21H23C23.5523 21 24 20.5523 24 20C24 19.4477 23.5523 19 23 19H21V17Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21.9208 13.265C21.9731 12.8507 22 12.4285 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C12.4354 22 12.8643 21.9722 13.285 21.9182M12 6V12L15.7384 13.8692M19 22V16M16 19H22"
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
