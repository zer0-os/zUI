import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconSafe = ({
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
              d="M7.5 10.5C7.5 9.67157 8.17157 9 9 9C9.82843 9 10.5 9.67157 10.5 10.5C10.5 11.3284 9.82843 12 9 12C8.17157 12 7.5 11.3284 7.5 10.5Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.8385 2L6.16146 2C5.63435 1.99998 5.17953 1.99997 4.80498 2.03057C4.40963 2.06287 4.01641 2.13419 3.63803 2.32698C3.07355 2.6146 2.6146 3.07355 2.32698 3.63803C2.13419 4.01641 2.06287 4.40963 2.03057 4.80498C1.99997 5.17953 1.99998 5.63426 2 6.16138V14.8385C1.99998 15.3657 1.99997 15.8205 2.03057 16.195C2.06287 16.5904 2.13419 16.9836 2.32698 17.362C2.6146 17.9265 3.07355 18.3854 3.63803 18.673C4.01641 18.8658 4.40963 18.9371 4.80497 18.9694C5.17951 19 5.63423 19 6.16132 19L17.8385 19C18.3656 19 18.8205 19 19.195 18.9694C19.5904 18.9371 19.9836 18.8658 20.362 18.673C20.9265 18.3854 21.3854 17.9265 21.673 17.362C21.8658 16.9836 21.9371 16.5904 21.9694 16.195C22 15.8205 22 15.3657 22 14.8386V6.16144C22 5.6343 22 5.17954 21.9694 4.80498C21.9371 4.40963 21.8658 4.01641 21.673 3.63803C21.3854 3.07355 20.9265 2.61461 20.362 2.32699C19.9836 2.13419 19.5904 2.06288 19.195 2.03057C18.8205 1.99997 18.3657 1.99999 17.8385 2ZM18.5 6.5C18.5 5.94772 18.0523 5.5 17.5 5.5C16.9477 5.5 16.5 5.94772 16.5 6.5V14.5C16.5 15.0523 16.9477 15.5 17.5 15.5C18.0523 15.5 18.5 15.0523 18.5 14.5V6.5ZM9 7C7.067 7 5.5 8.567 5.5 10.5C5.5 12.433 7.067 14 9 14C10.933 14 12.5 12.433 12.5 10.5C12.5 8.567 10.933 7 9 7Z"
              fill={color}
            />
            <path
              d="M5 21C5 20.4477 5.44772 20 6 20H9C9.55229 20 10 20.4477 10 21C10 21.5523 9.55229 22 9 22H6C5.44772 22 5 21.5523 5 21Z"
              fill={color}
            />
            <path
              d="M14 21C14 20.4477 14.4477 20 15 20H18C18.5523 20 19 20.4477 19 21C19 21.5523 18.5523 22 18 22H15C14.4477 22 14 21.5523 14 21Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 21H9M15 21H18M17.5 6.5V14.5M3 6.2L3 14.8C3 15.9201 3 16.4802 3.21799 16.908C3.40973 17.2843 3.71569 17.5903 4.09202 17.782C4.51984 18 5.07989 18 6.2 18L17.8 18C18.9201 18 19.4802 18 19.908 17.782C20.2843 17.5903 20.5903 17.2843 20.782 16.908C21 16.4802 21 15.9201 21 14.8V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.7157 20.2843 3.40974 19.908 3.21799C19.4802 3 18.9201 3 17.8 3L6.2 3C5.0799 3 4.51984 3 4.09202 3.21799C3.7157 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.07989 3 6.2ZM11.5 10.5C11.5 11.8807 10.3807 13 9 13C7.61929 13 6.5 11.8807 6.5 10.5C6.5 9.11929 7.61929 8 9 8C10.3807 8 11.5 9.11929 11.5 10.5Z"
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