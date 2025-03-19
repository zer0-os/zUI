import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconPasscode = ({
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
              d="M5.16146 6H18.8385C19.3657 5.99998 19.8205 5.99997 20.195 6.03057C20.5904 6.06287 20.9836 6.13419 21.362 6.32698C21.9265 6.6146 22.3854 7.07355 22.673 7.63803C22.8658 8.01641 22.9371 8.40963 22.9694 8.80498C23 9.17954 23 9.6343 23 10.1614V13.8386C23 14.3657 23 14.8205 22.9694 15.195C22.9371 15.5904 22.8658 15.9836 22.673 16.362C22.3854 16.9265 21.9265 17.3854 21.362 17.673C20.9836 17.8658 20.5904 17.9371 20.195 17.9694C19.8205 18 19.3657 18 18.8385 18H5.16145C4.63431 18 4.17955 18 3.80498 17.9694C3.40963 17.9371 3.01641 17.8658 2.63803 17.673C2.07355 17.3854 1.6146 16.9265 1.32698 16.362C1.13419 15.9836 1.06287 15.5904 1.03057 15.195C0.999971 14.8205 0.999985 14.3657 1 13.8386V10.1614C0.999985 9.6343 0.999971 9.17953 1.03057 8.80498C1.06287 8.40963 1.13419 8.01641 1.32698 7.63803C1.6146 7.07355 2.07355 6.6146 2.63803 6.32698C3.01641 6.13419 3.40963 6.06287 3.80498 6.03057C4.17953 5.99997 4.63434 5.99998 5.16146 6ZM7 10.75C6.30965 10.75 5.75 11.3096 5.75 12C5.75 12.6904 6.30965 13.25 7 13.25C7.69036 13.25 8.25 12.6904 8.25 12C8.25 11.3096 7.69036 10.75 7 10.75ZM10.75 12C10.75 11.3096 11.3096 10.75 12 10.75C12.6904 10.75 13.25 11.3096 13.25 12C13.25 12.6904 12.6904 13.25 12 13.25C11.3096 13.25 10.75 12.6904 10.75 12ZM15.75 12C15.75 11.3096 16.3096 10.75 17 10.75C17.6904 10.75 18.25 11.3096 18.25 12C18.25 12.6904 17.6904 13.25 17 13.25C16.3096 13.25 15.75 12.6904 15.75 12Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 12H12.005M17 12H17.005M7 12H7.005M5.2 7H18.8C19.9201 7 20.4802 7 20.908 7.21799C21.2843 7.40973 21.5903 7.71569 21.782 8.09202C22 8.51984 22 9.0799 22 10.2V13.8C22 14.9201 22 15.4802 21.782 15.908C21.5903 16.2843 21.2843 16.5903 20.908 16.782C20.4802 17 19.9201 17 18.8 17H5.2C4.0799 17 3.51984 17 3.09202 16.782C2.71569 16.5903 2.40973 16.2843 2.21799 15.908C2 15.4802 2 14.9201 2 13.8V10.2C2 9.0799 2 8.51984 2.21799 8.09202C2.40973 7.71569 2.71569 7.40973 3.09202 7.21799C3.51984 7 4.0799 7 5.2 7ZM12.25 12C12.25 12.1381 12.1381 12.25 12 12.25C11.8619 12.25 11.75 12.1381 11.75 12C11.75 11.8619 11.8619 11.75 12 11.75C12.1381 11.75 12.25 11.8619 12.25 12ZM17.25 12C17.25 12.1381 17.1381 12.25 17 12.25C16.8619 12.25 16.75 12.1381 16.75 12C16.75 11.8619 16.8619 11.75 17 11.75C17.1381 11.75 17.25 11.8619 17.25 12ZM7.25 12C7.25 12.1381 7.13807 12.25 7 12.25C6.86193 12.25 6.75 12.1381 6.75 12C6.75 11.8619 6.86193 11.75 7 11.75C7.13807 11.75 7.25 11.8619 7.25 12Z"
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
