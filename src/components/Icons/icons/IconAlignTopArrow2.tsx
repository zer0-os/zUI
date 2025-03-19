import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconAlignTopArrow2 = ({
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
              d="M16.968 18H17.032C17.4706 18 17.8491 18 18.1624 17.9787C18.4922 17.9561 18.8221 17.9066 19.1481 17.7716C19.8831 17.4672 20.4672 16.8831 20.7716 16.1481C20.9066 15.8221 20.9561 15.4922 20.9787 15.1624C21 14.8491 21 14.4706 21 14.032V5.96801C21 5.52936 21 5.15088 20.9787 4.83762C20.9561 4.50779 20.9066 4.17788 20.7716 3.85195C20.4672 3.11687 19.8831 2.53284 19.1481 2.22836C18.8221 2.09336 18.4922 2.04386 18.1624 2.02135C17.8491 1.99998 17.4706 1.99999 17.032 2L16.968 2C16.5294 1.99999 16.1509 1.99998 15.8376 2.02135C15.5078 2.04386 15.1779 2.09336 14.852 2.22836C14.1169 2.53285 13.5328 3.11687 13.2284 3.85195C13.0934 4.17788 13.0439 4.50779 13.0214 4.83762C13 5.15088 13 5.52937 13 5.96802L13 14.032C13 14.4706 13 14.8491 13.0214 15.1624C13.0439 15.4922 13.0934 15.8221 13.2284 16.1481C13.5328 16.8831 14.1169 17.4672 14.852 17.7716C15.1779 17.9066 15.5078 17.9561 15.8376 17.9787C16.1509 18 16.5294 18 16.968 18Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.96802 22H7.03199C7.47064 22 7.84913 22 8.16239 21.9787C8.49221 21.9561 8.82212 21.9066 9.14805 21.7716C9.88314 21.4672 10.4672 20.8831 10.7716 20.1481C10.9066 19.8221 10.9561 19.4922 10.9787 19.1624C11 18.8491 11 18.4706 11 18.032L11 5.96801C11 5.52936 11 5.15088 10.9787 4.83762C10.9561 4.50779 10.9066 4.17788 10.7716 3.85195C10.4672 3.11687 9.88314 2.53284 9.14805 2.22836C8.82212 2.09336 8.49221 2.04386 8.16238 2.02135C7.84913 1.99998 7.47064 1.99999 7.03199 2L6.96801 2C6.52936 1.99999 6.15088 1.99998 5.83762 2.02135C5.50779 2.04386 5.17788 2.09336 4.85195 2.22836C4.11687 2.53284 3.53284 3.11687 3.22836 3.85195C3.09336 4.17788 3.04385 4.50779 3.02135 4.83762C2.99998 5.15088 2.99999 5.52937 3 5.96802L3 18.032C2.99999 18.4706 2.99998 18.8491 3.02135 19.1624C3.04386 19.4922 3.09336 19.8221 3.22836 20.1481C3.53285 20.8831 4.11687 21.4672 4.85195 21.7716C5.17788 21.9066 5.50779 21.9561 5.83762 21.9787C6.15088 22 6.52937 22 6.96802 22Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 18V6C10 5.06812 10 4.60218 9.84776 4.23463C9.64477 3.74458 9.25542 3.35523 8.76537 3.15224C8.39782 3 7.93188 3 7 3C6.06812 3 5.60218 3 5.23463 3.15224C4.74458 3.35523 4.35523 3.74458 4.15224 4.23463C4 4.60218 4 5.06812 4 6V18C4 18.9319 4 19.3978 4.15224 19.7654C4.35523 20.2554 4.74458 20.6448 5.23463 20.8478C5.60218 21 6.06812 21 7 21C7.93188 21 8.39782 21 8.76537 20.8478C9.25542 20.6448 9.64477 20.2554 9.84776 19.7654C10 19.3978 10 18.9319 10 18Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 14V6C20 5.06812 20 4.60218 19.8478 4.23463C19.6448 3.74458 19.2554 3.35523 18.7654 3.15224C18.3978 3 17.9319 3 17 3C16.0681 3 15.6022 3 15.2346 3.15224C14.7446 3.35523 14.3552 3.74458 14.1522 4.23463C14 4.60218 14 5.06812 14 6V14C14 14.9319 14 15.3978 14.1522 15.7654C14.3552 16.2554 14.7446 16.6448 15.2346 16.8478C15.6022 17 16.0681 17 17 17C17.9319 17 18.3978 17 18.7654 16.8478C19.2554 16.6448 19.6448 16.2554 19.8478 15.7654C20 15.3978 20 14.9319 20 14Z"
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
