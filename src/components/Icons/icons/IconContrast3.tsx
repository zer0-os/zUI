import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconContrast3 = ({
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
              d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM6.57337 17.3933C12.5491 17.3933 17.3933 12.5491 17.3933 6.57337C17.3933 5.68662 17.2867 4.82479 17.0855 4C19.4559 5.70179 21 8.48192 21 11.6227C21 16.8016 16.8016 21 11.6227 21C8.48192 21 5.70179 19.4559 4 17.0855C4.82479 17.2867 5.68662 17.3933 6.57337 17.3933Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 8.5C16 12.6421 12.6421 16 8.5 16C7.88534 16 7.28795 15.9261 6.71623 15.7866C7.89585 17.4297 9.82294 18.5 12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 9.82294 17.4297 7.89585 15.7866 6.71623C15.9261 7.28795 16 7.88534 16 8.5Z"
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
