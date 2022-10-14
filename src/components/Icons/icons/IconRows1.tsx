import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconRows1 = ({
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
              d="M22 17.1615V17.8385C22 18.3657 22 18.8205 21.9694 19.195C21.9371 19.5904 21.8658 19.9836 21.673 20.362C21.3854 20.9265 20.9265 21.3854 20.362 21.673C19.9836 21.8658 19.5904 21.9371 19.195 21.9694C18.8205 22 18.3657 22 17.8385 22H6.16148C5.63432 22 5.17955 22 4.80497 21.9694C4.40963 21.9371 4.01641 21.8658 3.63803 21.673C3.07354 21.3854 2.6146 20.9265 2.32698 20.362C2.13419 19.9836 2.06287 19.5904 2.03057 19.195C1.99997 18.8205 1.99998 18.3657 2 17.8386L2 17.1614C1.99998 16.6343 1.99997 16.1795 2.03057 15.805C2.06287 15.4096 2.13419 15.0164 2.32698 14.638C2.6146 14.0735 3.07354 13.6146 3.63803 13.327C4.01641 13.1342 4.40963 13.0629 4.80497 13.0306C5.17955 13 5.63431 13 6.16146 13L17.8385 13C18.3657 13 18.8205 13 19.195 13.0306C19.5904 13.0629 19.9836 13.1342 20.362 13.327C20.9265 13.6146 21.3854 14.0735 21.673 14.638C21.8658 15.0164 21.9371 15.4096 21.9694 15.805C22 16.1795 22 16.6343 22 17.1615Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22 6.16146V6.83855C22 7.36569 22 7.82046 21.9694 8.19503C21.9371 8.59038 21.8658 8.98359 21.673 9.36197C21.3854 9.92646 20.9265 10.3854 20.362 10.673C19.9836 10.8658 19.5904 10.9371 19.195 10.9694C18.8205 11 18.3657 11 17.8385 11L6.16148 11C5.63432 11 5.17955 11 4.80497 10.9694C4.40963 10.9371 4.01641 10.8658 3.63803 10.673C3.07354 10.3854 2.6146 9.92646 2.32698 9.36197C2.13419 8.98359 2.06287 8.59037 2.03057 8.19503C1.99997 7.82046 1.99998 7.36571 2 6.83857L2 6.16144C1.99998 5.6343 1.99997 5.17954 2.03057 4.80497C2.06287 4.40963 2.13419 4.01641 2.32698 3.63803C2.6146 3.07354 3.07354 2.6146 3.63803 2.32698C4.01641 2.13419 4.40963 2.06287 4.80497 2.03057C5.17955 1.99997 5.63431 1.99998 6.16146 2L17.8385 2C18.3657 1.99998 18.8205 1.99997 19.195 2.03057C19.5904 2.06287 19.9836 2.13419 20.362 2.32698C20.9265 2.6146 21.3854 3.07354 21.673 3.63803C21.8658 4.01641 21.9371 4.40963 21.9694 4.80497C22 5.17955 22 5.63431 22 6.16146Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.8 10C18.9201 10 19.4802 10 19.908 9.78201C20.2843 9.59027 20.5903 9.28431 20.782 8.90798C21 8.48016 21 7.92011 21 6.8V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.7157 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3L6.2 3C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.07989 3 6.2L3 6.8C3 7.9201 3 8.48016 3.21799 8.90798C3.40973 9.28431 3.71569 9.59027 4.09202 9.78201C4.51984 10 5.07989 10 6.2 10L17.8 10Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.8 21C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V17.2C21 16.0799 21 15.5198 20.782 15.092C20.5903 14.7157 20.2843 14.4097 19.908 14.218C19.4802 14 18.9201 14 17.8 14L6.2 14C5.0799 14 4.51984 14 4.09202 14.218C3.71569 14.4097 3.40973 14.7157 3.21799 15.092C3 15.5198 3 16.0799 3 17.2L3 17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H17.8Z"
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
