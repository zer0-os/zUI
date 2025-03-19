import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconDistributeSpacingHorizontal = ({
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
              d="M21 2C21.5523 2 22 2.44772 22 3V21C22 21.5523 21.5523 22 21 22C20.4477 22 20 21.5523 20 21V3C20 2.44772 20.4477 2 21 2Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 2C3.55229 2 4 2.44772 4 3L4 21C4 21.5523 3.55228 22 3 22C2.44772 22 2 21.5523 2 21L2 3C2 2.44772 2.44772 2 3 2Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.968 4H12.032C12.4706 3.99999 12.8491 3.99998 13.1624 4.02135C13.4922 4.04385 13.8221 4.09336 14.1481 4.22836C14.8831 4.53284 15.4672 5.11687 15.7716 5.85195C15.9066 6.17788 15.9561 6.50779 15.9787 6.83762C16 7.15088 16 7.52936 16 7.96801V16.032C16 16.4706 16 16.8491 15.9787 17.1624C15.9561 17.4922 15.9066 17.8221 15.7716 18.1481C15.4672 18.8831 14.8831 19.4672 14.1481 19.7716C13.8221 19.9066 13.4922 19.9561 13.1624 19.9786C12.8491 20 12.4706 20 12.032 20H11.968C11.5294 20 11.1509 20 10.8376 19.9786C10.5078 19.9561 10.1779 19.9066 9.85195 19.7716C9.11687 19.4672 8.53284 18.8831 8.22836 18.148C8.09336 17.8221 8.04385 17.4922 8.02135 17.1624C7.99998 16.8491 7.99999 16.4706 8 16.032V7.96802C7.99999 7.52937 7.99998 7.15088 8.02135 6.83762C8.04385 6.50779 8.09336 6.17788 8.22836 5.85195C8.53284 5.11687 9.11687 4.53284 9.85195 4.22836C10.1779 4.09336 10.5078 4.04385 10.8376 4.02135C11.1509 3.99998 11.5294 3.99999 11.968 4Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21 21V3M3 21V3M9 8V16C9 16.9319 9 17.3978 9.15224 17.7654C9.35523 18.2554 9.74458 18.6448 10.2346 18.8478C10.6022 19 11.0681 19 12 19C12.9319 19 13.3978 19 13.7654 18.8478C14.2554 18.6448 14.6448 18.2554 14.8478 17.7654C15 17.3978 15 16.9319 15 16V8C15 7.06812 15 6.60218 14.8478 6.23463C14.6448 5.74458 14.2554 5.35523 13.7654 5.15224C13.3978 5 12.9319 5 12 5C11.0681 5 10.6022 5 10.2346 5.15224C9.74458 5.35523 9.35523 5.74458 9.15224 6.23463C9 6.60218 9 7.06812 9 8Z"
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
