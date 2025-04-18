import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconCrop1 = ({
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
              d="M7 2C7 1.44772 6.55229 1 6 1C5.44772 1 5 1.44772 5 2V5H2C1.44772 5 1 5.44772 1 6C1 6.55229 1.44772 7 2 7H5L5 14.8385C4.99998 15.3657 4.99997 15.8205 5.03057 16.195C5.06287 16.5904 5.13419 16.9836 5.32698 17.362C5.6146 17.9265 6.07354 18.3854 6.63803 18.673C7.01641 18.8658 7.40963 18.9371 7.80497 18.9694C8.17954 19 8.6343 19 9.16144 19L17 19V22C17 22.5523 17.4477 23 18 23C18.5523 23 19 22.5523 19 22V19H22C22.5523 19 23 18.5523 23 18C23 17.4477 22.5523 17 22 17H19V9.16144C19 8.6343 19 8.17954 18.9694 7.80497C18.9371 7.40963 18.8658 7.01641 18.673 6.63803C18.3854 6.07354 17.9265 5.6146 17.362 5.32698C16.9836 5.13419 16.5904 5.06287 16.195 5.03057C15.8205 4.99997 15.3657 4.99998 14.8385 5L7 5L7 2ZM7 7L7 14.8C7 15.3766 7.00078 15.7488 7.02393 16.0322C7.04612 16.3038 7.0838 16.4045 7.109 16.454C7.20487 16.6422 7.35785 16.7951 7.54601 16.891C7.59546 16.9162 7.69617 16.9539 7.96784 16.9761C8.25117 16.9992 8.62345 17 9.2 17L17 17V9.2C17 8.62345 16.9992 8.25117 16.9761 7.96784C16.9539 7.69617 16.9162 7.59546 16.891 7.54601C16.7951 7.35785 16.6422 7.20487 16.454 7.109C16.4045 7.0838 16.3038 7.04612 16.0322 7.02393C15.7488 7.00078 15.3766 7 14.8 7H7Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2 6H14.8C15.9201 6 16.4802 6 16.908 6.21799C17.2843 6.40973 17.5903 6.71569 17.782 7.09202C18 7.51984 18 8.07989 18 9.2V22M22 18L9.2 18C8.07989 18 7.51984 18 7.09202 17.782C6.71569 17.5903 6.40973 17.2843 6.21799 16.908C6 16.4802 6 15.9201 6 14.8V2"
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
