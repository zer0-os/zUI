import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconChevronDownDouble = ({
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
              d="M6.29289 12.2929C6.68342 11.9024 7.31658 11.9024 7.70711 12.2929L12 16.5858L16.2929 12.2929C16.6834 11.9024 17.3166 11.9024 17.7071 12.2929C18.0976 12.6834 18.0976 13.3166 17.7071 13.7071L12.7071 18.7071C12.3166 19.0976 11.6834 19.0976 11.2929 18.7071L6.29289 13.7071C5.90237 13.3166 5.90237 12.6834 6.29289 12.2929Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.29289 5.29289C6.68342 4.90237 7.31658 4.90237 7.70711 5.29289L12 9.58579L16.2929 5.29289C16.6834 4.90237 17.3166 4.90237 17.7071 5.29289C18.0976 5.68342 18.0976 6.31658 17.7071 6.70711L12.7071 11.7071C12.3166 12.0976 11.6834 12.0976 11.2929 11.7071L6.29289 6.70711C5.90237 6.31658 5.90237 5.68342 6.29289 5.29289Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 13L12 18L17 13M7 6L12 11L17 6" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </AccessibleIcon.Root>
    </div>
  );
};
