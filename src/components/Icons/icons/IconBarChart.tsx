import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconBarChart = ({
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
              d="M1.875 22V16.6667C1.875 16.2083 2.20833 15.875 2.66667 15.875C3.125 15.875 3.45833 16.2083 3.45833 16.6667V22C3.45833 22.4583 3.125 22.7917 2.66667 22.7917C2.20833 22.7917 1.875 22.4583 1.875 22ZM10.875 22V7.66667C10.875 7.20833 11.2083 6.875 11.6667 6.875C12.125 6.875 12.4583 7.20833 12.4583 7.66667V22C12.4583 22.4583 12.125 22.7917 11.6667 22.7917C11.2083 22.7917 10.875 22.4583 10.875 22ZM19.875 22V1.66667C19.875 1.20833 20.2083 0.875 20.6667 0.875C21.125 0.875 21.4583 1.20833 21.4583 1.66667V22C21.4583 22.4583 21.125 22.7917 20.6667 22.7917C20.2083 22.7917 19.875 22.4583 19.875 22Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.875 22V16.6667C1.875 16.2083 2.20833 15.875 2.66667 15.875C3.125 15.875 3.45833 16.2083 3.45833 16.6667V22C3.45833 22.4583 3.125 22.7917 2.66667 22.7917C2.20833 22.7917 1.875 22.4583 1.875 22ZM10.875 22V7.66667C10.875 7.20833 11.2083 6.875 11.6667 6.875C12.125 6.875 12.4583 7.20833 12.4583 7.66667V22C12.4583 22.4583 12.125 22.7917 11.6667 22.7917C11.2083 22.7917 10.875 22.4583 10.875 22ZM19.875 22V1.66667C19.875 1.20833 20.2083 0.875 20.6667 0.875C21.125 0.875 21.4583 1.20833 21.4583 1.66667V22C21.4583 22.4583 21.125 22.7917 20.6667 22.7917C20.2083 22.7917 19.875 22.4583 19.875 22Z"
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
