import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconTablet2 = ({
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
              d="M7.16146 1H16.8385C17.3657 0.999985 17.8205 0.999971 18.195 1.03057C18.5904 1.06287 18.9836 1.13419 19.362 1.32698C19.9265 1.6146 20.3854 2.07355 20.673 2.63803C20.8658 3.01641 20.9371 3.40963 20.9694 3.80498C21 4.17954 21 4.6343 21 5.16144V18.8386C21 19.3657 21 19.8205 20.9694 20.195C20.9371 20.5904 20.8658 20.9836 20.673 21.362C20.3854 21.9265 19.9265 22.3854 19.362 22.673C18.9836 22.8658 18.5904 22.9371 18.195 22.9694C17.8205 23 17.3657 23 16.8386 23H7.16144C6.6343 23 6.17954 23 5.80498 22.9694C5.40963 22.9371 5.01641 22.8658 4.63803 22.673C4.07355 22.3854 3.6146 21.9265 3.32698 21.362C3.13419 20.9836 3.06287 20.5904 3.03057 20.195C2.99997 19.8205 2.99998 19.3657 3 18.8386V5.16142C2.99998 4.63431 2.99997 4.17953 3.03057 3.80498C3.06287 3.40963 3.13419 3.01641 3.32698 2.63803C3.6146 2.07355 4.07355 1.6146 4.63803 1.32698C5.01641 1.13419 5.40963 1.06287 5.80498 1.03057C6.17953 0.999971 6.63434 0.999985 7.16146 1ZM15 3V3.4C15 3.96005 15 4.24008 14.891 4.45399C14.7951 4.64215 14.6422 4.79513 14.454 4.89101C14.2401 5 13.9601 5 13.4 5H10.6C10.0399 5 9.75992 5 9.54601 4.89101C9.35785 4.79513 9.20487 4.64215 9.10899 4.45399C9 4.24008 9 3.96005 9 3.4V3H15Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 2V3.4C15 3.96005 15 4.24008 14.891 4.45399C14.7951 4.64215 14.6422 4.79513 14.454 4.89101C14.2401 5 13.9601 5 13.4 5H10.6C10.0399 5 9.75992 5 9.54601 4.89101C9.35785 4.79513 9.20487 4.64215 9.10899 4.45399C9 4.24008 9 3.96005 9 3.4V2M7.2 22H16.8C17.9201 22 18.4802 22 18.908 21.782C19.2843 21.5903 19.5903 21.2843 19.782 20.908C20 20.4802 20 19.9201 20 18.8V5.2C20 4.07989 20 3.51984 19.782 3.09202C19.5903 2.71569 19.2843 2.40973 18.908 2.21799C18.4802 2 17.9201 2 16.8 2H7.2C6.0799 2 5.51984 2 5.09202 2.21799C4.71569 2.40973 4.40973 2.71569 4.21799 3.09202C4 3.51984 4 4.0799 4 5.2V18.8C4 19.9201 4 20.4802 4.21799 20.908C4.40973 21.2843 4.71569 21.5903 5.09202 21.782C5.51984 22 6.07989 22 7.2 22Z"
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