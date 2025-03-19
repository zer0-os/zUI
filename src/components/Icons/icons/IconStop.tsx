import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconStop = ({
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
              d="M6.16146 2H17.8385C18.3657 1.99998 18.8205 1.99997 19.195 2.03057C19.5904 2.06287 19.9836 2.13419 20.362 2.32698C20.9265 2.6146 21.3854 3.07354 21.673 3.63803C21.8658 4.01641 21.9371 4.40963 21.9694 4.80497C22 5.17954 22 5.6343 22 6.16144V17.8386C22 18.3657 22 18.8205 21.9694 19.195C21.9371 19.5904 21.8658 19.9836 21.673 20.362C21.3854 20.9265 20.9265 21.3854 20.362 21.673C19.9836 21.8658 19.5904 21.9371 19.195 21.9694C18.8205 22 18.3657 22 17.8386 22H6.16144C5.6343 22 5.17954 22 4.80497 21.9694C4.40963 21.9371 4.01641 21.8658 3.63803 21.673C3.07354 21.3854 2.6146 20.9265 2.32698 20.362C2.13419 19.9836 2.06287 19.5904 2.03057 19.195C1.99997 18.8205 1.99998 18.3657 2 17.8385V6.16146C1.99998 5.63431 1.99997 5.17955 2.03057 4.80497C2.06287 4.40963 2.13419 4.01641 2.32698 3.63803C2.6146 3.07354 3.07354 2.6146 3.63803 2.32698C4.01641 2.13419 4.40963 2.06287 4.80497 2.03057C5.17955 1.99997 5.63431 1.99998 6.16146 2Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z"
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
