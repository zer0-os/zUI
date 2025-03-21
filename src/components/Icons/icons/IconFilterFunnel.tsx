import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconFilterFunnel = ({
  className,
  label = DEFAULT_LABEL,
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE
}: IconProps) => {
  return (
    <div style={{ height: size, width: size }} className={classNames(className, styles.Container)}>
      <AccessibleIcon.Root label={label}>
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.7679 2.25H14.2321C15.0449 2.24999 15.7006 2.24999 16.2315 2.29336C16.7781 2.33803 17.2582 2.43239 17.7025 2.65873C18.4081 3.01825 18.9817 3.59193 19.3413 4.29754C19.5676 4.74175 19.662 5.2219 19.7066 5.76853C19.75 6.29944 19.75 6.95505 19.75 7.76788V21C19.75 21.2674 19.6077 21.5145 19.3764 21.6487C19.1452 21.7829 18.86 21.7838 18.6279 21.6512L12 17.8638L5.3721 21.6512C5.13998 21.7838 4.85479 21.7829 4.62356 21.6487C4.39232 21.5145 4.25 21.2674 4.25 21L4.25 7.7679C4.24999 6.95506 4.24999 6.29944 4.29336 5.76853C4.33803 5.2219 4.43239 4.74175 4.65873 4.29754C5.01825 3.59193 5.59193 3.01825 6.29754 2.65873C6.74175 2.43239 7.2219 2.33803 7.76853 2.29336C8.29944 2.24999 8.95506 2.24999 9.7679 2.25ZM7.89068 3.78838C7.4368 3.82547 7.17604 3.8946 6.97852 3.99524C6.55516 4.21095 6.21095 4.55516 5.99524 4.97852C5.8946 5.17604 5.82547 5.4368 5.78838 5.89068C5.75058 6.35331 5.75 6.94755 5.75 7.8V19.7076L11.6279 16.3488C11.8585 16.2171 12.1415 16.2171 12.3721 16.3488L18.25 19.7076V7.8C18.25 6.94755 18.2494 6.35331 18.2116 5.89068C18.1745 5.4368 18.1054 5.17604 18.0048 4.97852C17.789 4.55516 17.4448 4.21095 17.0215 3.99524C16.824 3.8946 16.5632 3.82547 16.1093 3.78838C15.6467 3.75058 15.0525 3.75 14.2 3.75H9.8C8.94755 3.75 8.35331 3.75058 7.89068 3.78838Z"
            fill={color}
          />
        </svg>
      </AccessibleIcon.Root>
    </div>
  );
};
