import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconLightbulb1 = ({
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
              d="M3.5 9.5C3.5 4.80558 7.30558 1 12 1C16.6944 1 20.5 4.80558 20.5 9.5C20.5 11.5452 19.7759 13.4727 18.5631 14.9804C18.4282 15.148 18.3608 15.2318 18.2515 15.3108C18.1633 15.3744 18.0358 15.4355 17.9309 15.4643C17.8009 15.5 17.6741 15.5 17.4204 15.5H6.57965C6.32595 15.5 6.1991 15.5 6.06911 15.4643C5.96423 15.4355 5.83671 15.3744 5.74854 15.3108C5.63924 15.2318 5.57181 15.148 5.43694 14.9804C4.22407 13.4727 3.5 11.5452 3.5 9.5Z"
              fill={color}
            />
            <path
              d="M9.53199 17.5C9.03599 17.5 8.788 17.5 8.59423 17.586C8.3677 17.6866 8.18659 17.8677 8.08603 18.0942C8 18.288 8 18.536 8 19.032C7.99999 19.4706 7.99998 19.8491 8.02135 20.1624C8.04386 20.4922 8.09336 20.8221 8.22836 21.1481C8.53284 21.8831 9.11687 22.4672 9.85195 22.7716C10.1779 22.9066 10.5078 22.9561 10.8376 22.9787C11.1509 23 11.5294 23 11.968 23H12.032C12.4706 23 12.8491 23 13.1624 22.9787C13.4922 22.9561 13.8221 22.9066 14.1481 22.7716C14.8831 22.4672 15.4672 21.8831 15.7716 21.1481C15.9066 20.8221 15.9561 20.4922 15.9787 20.1624C16 19.8491 16 19.4706 16 19.032C16 18.536 16 18.288 15.914 18.0942C15.8134 17.8677 15.6323 17.6866 15.4058 17.586C15.212 17.5 14.964 17.5 14.468 17.5H9.53199Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 16.5V19C15 19.9319 15 20.3978 14.8478 20.7654C14.6448 21.2554 14.2554 21.6448 13.7654 21.8478C13.3978 22 12.9319 22 12 22C11.0681 22 10.6022 22 10.2346 21.8478C9.74458 21.6448 9.35523 21.2554 9.15224 20.7654C9 20.3978 9 19.9319 9 19V16.5M15 16.5C17.6489 15.3427 19.5 12.5755 19.5 9.5C19.5 5.35786 16.1421 2 12 2C7.85786 2 4.5 5.35786 4.5 9.5C4.5 12.5755 6.35114 15.3427 9 16.5M15 16.5H9"
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
