import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconDistributeSpacingVertical = ({
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
              d="M2 3C2 2.44772 2.44772 2 3 2H21C21.5523 2 22 2.44772 22 3C22 3.55228 21.5523 4 21 4H3C2.44772 4 2 3.55228 2 3Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 21C2 20.4477 2.44772 20 3 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.96802 8L16.032 8C16.4706 7.99999 16.8491 7.99998 17.1624 8.02135C17.4922 8.04385 17.8221 8.09336 18.1481 8.22836C18.8831 8.53284 19.4672 9.11687 19.7716 9.85195C19.9066 10.1779 19.9561 10.5078 19.9787 10.8376C20 11.1509 20 11.5294 20 11.968V12.032C20 12.4706 20 12.8491 19.9787 13.1624C19.9561 13.4922 19.9066 13.8221 19.7716 14.1481C19.4672 14.8831 18.8831 15.4672 18.1481 15.7716C17.8221 15.9066 17.4922 15.9561 17.1624 15.9787C16.8491 16 16.4706 16 16.032 16H7.96804C7.52938 16 7.15088 16 6.83762 15.9786C6.50779 15.9561 6.17788 15.9066 5.85195 15.7716C5.11687 15.4672 4.53284 14.8831 4.22836 14.148C4.09336 13.8221 4.04385 13.4922 4.02135 13.1624C3.99998 12.8491 3.99999 12.4706 4 12.032V11.968C3.99999 11.5294 3.99998 11.1509 4.02135 10.8376C4.04385 10.5078 4.09336 10.1779 4.22836 9.85195C4.53284 9.11687 5.11687 8.53284 5.85195 8.22836C6.17788 8.09336 6.50779 8.04385 6.83762 8.02135C7.15088 7.99998 7.52937 7.99999 7.96802 8Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21 3H3M21 21H3M5 12C5 11.0681 5 10.6022 5.15224 10.2346C5.35523 9.74458 5.74458 9.35523 6.23463 9.15224C6.60218 9 7.06812 9 8 9L16 9C16.9319 9 17.3978 9 17.7654 9.15224C18.2554 9.35523 18.6448 9.74458 18.8478 10.2346C19 10.6022 19 11.0681 19 12C19 12.9319 19 13.3978 18.8478 13.7654C18.6448 14.2554 18.2554 14.6448 17.7654 14.8478C17.3978 15 16.9319 15 16 15L8 15C7.06812 15 6.60218 15 6.23463 14.8478C5.74458 14.6448 5.35523 14.2554 5.15224 13.7654C5 13.3978 5 12.9319 5 12Z"
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
