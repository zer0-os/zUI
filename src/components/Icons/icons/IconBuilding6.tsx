import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconBuilding6 = ({
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
              d="M14.1615 2H17.8385C18.3657 1.99998 18.8205 1.99997 19.195 2.03057C19.5904 2.06287 19.9836 2.13419 20.362 2.32698C20.9265 2.6146 21.3854 3.07355 21.673 3.63803C21.8658 4.01641 21.9371 4.40963 21.9694 4.80498C22 5.17955 22 5.63431 22 6.16146V20C22.5523 20 23 20.4477 23 21C23 21.5523 22.5523 22 22 22H2C1.44771 22 1 21.5523 1 21C1 20.4477 1.44771 20 2 20V14.1615C1.99998 13.6343 1.99997 13.1796 2.03057 12.805C2.06287 12.4096 2.13419 12.0164 2.32698 11.638C2.6146 11.0735 3.07354 10.6146 3.63803 10.327C4.01641 10.1342 4.40963 10.0629 4.80497 10.0306C5.17954 9.99997 5.63431 9.99998 6.16146 10L10 10V6.16145C9.99998 5.63431 9.99996 5.17955 10.0306 4.80498C10.0629 4.40963 10.1342 4.01641 10.327 3.63803C10.6146 3.07355 11.0735 2.6146 11.638 2.32698C12.0164 2.13419 12.4096 2.06287 12.805 2.03057C13.1795 1.99997 13.6343 1.99998 14.1615 2ZM19 7C19 6.44772 18.5523 6 18 6H14C13.4477 6 13 6.44772 13 7C13 7.55229 13.4477 8 14 8H18C18.5523 8 19 7.55229 19 7ZM19 11C19 10.4477 18.5523 10 18 10H14C13.4477 10 13 10.4477 13 11C13 11.5523 13.4477 12 14 12H18C18.5523 12 19 11.5523 19 11ZM18 14C18.5523 14 19 14.4477 19 15C19 15.5523 18.5523 16 18 16H14C13.4477 16 13 15.5523 13 15C13 14.4477 13.4477 14 14 14H18Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 11H6.2C5.07989 11 4.51984 11 4.09202 11.218C3.71569 11.4097 3.40973 11.7157 3.21799 12.092C3 12.5198 3 13.0799 3 14.2V21M21 21V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3H14.2C13.0799 3 12.5198 3 12.092 3.21799C11.7157 3.40973 11.4097 3.71569 11.218 4.09202C11 4.51984 11 5.0799 11 6.2V21M22 21H2M14.5 7H17.5M14.5 11H17.5M14.5 15H17.5"
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
