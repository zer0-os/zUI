import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconCurrencyBitcoinCircle = ({
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
              d="M15.5 14.25C15.5 14.9404 14.9404 15.5 14.25 15.5H10.5V13H14.25C14.9404 13 15.5 13.5596 15.5 14.25Z"
              fill={color}
            />
            <path
              d="M13.75 8.5H10.5V11H13.75C14.4404 11 15 10.4404 15 9.75C15 9.05964 14.4404 8.5 13.75 8.5Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM10 5C10.5523 5 11 5.44772 11 6V6.5H12V6C12 5.44772 12.4477 5 13 5C13.5523 5 14 5.44772 14 6V6.50947C15.6781 6.63713 17 8.03919 17 9.75C17 10.5009 16.7454 11.1922 16.3178 11.7425C17.0398 12.3386 17.5 13.2406 17.5 14.25C17.5 16.0449 16.0449 17.5 14.25 17.5H14V18C14 18.5523 13.5523 19 13 19C12.4477 19 12 18.5523 12 18V17.5H11V18C11 18.5523 10.5523 19 10 19C9.44772 19 9 18.5523 9 18V17.5H8C7.44772 17.5 7 17.0523 7 16.5C7 15.9477 7.44772 15.5 8 15.5H8.5V8.5H8C7.44772 8.5 7 8.05228 7 7.5C7 6.94772 7.44772 6.5 8 6.5H9V6C9 5.44772 9.44772 5 10 5Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.5 7.5H13.75C14.9926 7.5 16 8.50736 16 9.75C16 10.9926 14.9926 12 13.75 12H9.5H14.25C15.4926 12 16.5 13.0074 16.5 14.25C16.5 15.4926 15.4926 16.5 14.25 16.5H9.5M9.5 7.5H8M9.5 7.5V16.5M9.5 16.5H8M10 6V7.5M10 16.5V18M13 6V7.5M13 16.5V18M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
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
