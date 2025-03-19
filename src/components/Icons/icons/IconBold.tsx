import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconBold = ({
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.25 4C5.25 3.58579 5.58579 3.25 6 3.25H14C16.6234 3.25 18.75 5.37665 18.75 8C18.75 9.48828 18.0655 10.8167 16.9942 11.6876C18.6213 12.4413 19.75 14.0889 19.75 16C19.75 18.6234 17.6234 20.75 15 20.75H6C5.58579 20.75 5.25 20.4142 5.25 20V4ZM6.75 12.75V19.25H15C16.7949 19.25 18.25 17.7949 18.25 16C18.25 14.2051 16.7949 12.75 15 12.75H6.75ZM6.75 11.25H14C15.7949 11.25 17.25 9.79493 17.25 8C17.25 6.20507 15.7949 4.75 14 4.75H6.75V11.25Z"
            fill={color}
          />
        </svg>
      </AccessibleIcon.Root>
    </div>
  );
};
