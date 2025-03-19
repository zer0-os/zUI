import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconGitBranch2 = ({
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
              d="M7 3C7 2.44772 6.55228 2 6 2C5.44772 2 5 2.44772 5 3V14.126C3.27477 14.5701 2 16.1362 2 18C2 20.2091 3.79086 22 6 22C7.8779 22 9.45354 20.7059 9.88383 18.9609C12.212 18.7544 14.4052 17.737 16.0711 16.0711C17.737 14.4052 18.7544 12.212 18.9609 9.88383C20.7059 9.45354 22 7.8779 22 6C22 3.79086 20.2091 2 18 2C15.7909 2 14 3.79086 14 6C14 7.84705 15.2519 9.4017 16.9535 9.86171C16.758 11.6666 15.9526 13.3611 14.6569 14.6569C13.3611 15.9526 11.6666 16.758 9.86171 16.9535C9.48769 15.57 8.39006 14.4838 7 14.126V3Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 3V15M6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21C7.65685 21 9 19.6569 9 18M6 15C7.65685 15 9 16.3431 9 18M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 7.65685 16.3431 9 18 9ZM18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18"
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
