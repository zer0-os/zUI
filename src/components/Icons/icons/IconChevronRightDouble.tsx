import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconChevronRightDouble = ({
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
              d="M5.29289 6.29289C5.68342 5.90237 6.31658 5.90237 6.70711 6.29289L11.7071 11.2929C12.0976 11.6834 12.0976 12.3166 11.7071 12.7071L6.70711 17.7071C6.31658 18.0976 5.68342 18.0976 5.29289 17.7071C4.90237 17.3166 4.90237 16.6834 5.29289 16.2929L9.58579 12L5.29289 7.70711C4.90237 7.31658 4.90237 6.68342 5.29289 6.29289Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.2929 6.29289C12.6834 5.90237 13.3166 5.90237 13.7071 6.29289L18.7071 11.2929C19.0976 11.6834 19.0976 12.3166 18.7071 12.7071L13.7071 17.7071C13.3166 18.0976 12.6834 18.0976 12.2929 17.7071C11.9024 17.3166 11.9024 16.6834 12.2929 16.2929L16.5858 12L12.2929 7.70711C11.9024 7.31658 11.9024 6.68342 12.2929 6.29289Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 17L11 12L6 7M13 17L18 12L13 7" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </AccessibleIcon.Root>
    </div>
  );
};
