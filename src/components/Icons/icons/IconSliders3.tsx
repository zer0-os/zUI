import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconSliders3 = ({
  className,
  label = DEFAULT_LABEL,
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE
}: IconProps) => {
  return (
    <div style={{ height: size, width: size }} className={classNames(className, styles.Container)}>
      <AccessibleIcon.Root label={label}>
        <svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.5 0.9375C7.81066 0.9375 8.0625 1.18934 8.0625 1.5V3.74955C8.0625 3.7494 8.0625 3.7497 8.0625 3.74955C8.0625 3.7497 8.0625 3.7503 8.0625 3.75045V6C8.0625 6.31066 7.81066 6.5625 7.5 6.5625C7.18934 6.5625 6.9375 6.31066 6.9375 6V4.3125H2.25C1.93934 4.3125 1.6875 4.06066 1.6875 3.75C1.6875 3.43934 1.93934 3.1875 2.25 3.1875L6.9375 3.1875V1.5C6.9375 1.18934 7.18934 0.9375 7.5 0.9375ZM9.9375 3.75C9.9375 3.43934 10.1893 3.1875 10.5 3.1875L15.75 3.1875C16.0607 3.1875 16.3125 3.43934 16.3125 3.75C16.3125 4.06066 16.0607 4.3125 15.75 4.3125H10.5C10.1893 4.3125 9.9375 4.06066 9.9375 3.75ZM12 6.1875C12.3107 6.1875 12.5625 6.43934 12.5625 6.75V8.4375H15.75C16.0607 8.4375 16.3125 8.68934 16.3125 9C16.3125 9.31066 16.0607 9.5625 15.75 9.5625H12.5625V11.25C12.5625 11.5607 12.3107 11.8125 12 11.8125C11.6893 11.8125 11.4375 11.5607 11.4375 11.25V6.75C11.4375 6.43934 11.6893 6.1875 12 6.1875ZM1.6875 9C1.6875 8.68934 1.93934 8.4375 2.25 8.4375H9C9.31066 8.4375 9.5625 8.68934 9.5625 9C9.5625 9.31066 9.31066 9.5625 9 9.5625H2.25C1.93934 9.5625 1.6875 9.31066 1.6875 9ZM6 11.4375C6.31066 11.4375 6.5625 11.6893 6.5625 12L6.5625 16.5C6.5625 16.8107 6.31066 17.0625 6 17.0625C5.68934 17.0625 5.4375 16.8107 5.4375 16.5V14.8125H2.25C1.93934 14.8125 1.6875 14.5607 1.6875 14.25C1.6875 13.9393 1.93934 13.6875 2.25 13.6875H5.4375V12C5.4375 11.6893 5.68934 11.4375 6 11.4375ZM8.4375 14.25C8.4375 13.9393 8.68934 13.6875 9 13.6875H15.75C16.0607 13.6875 16.3125 13.9393 16.3125 14.25C16.3125 14.5607 16.0607 14.8125 15.75 14.8125H9C8.68934 14.8125 8.4375 14.5607 8.4375 14.25Z"
            fill={color}
          />
        </svg>
      </AccessibleIcon.Root>
    </div>
  );
};
