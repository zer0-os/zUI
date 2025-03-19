import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconVerticalLayout = ({
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
            d="M3.25 5C3.25 4.0335 4.0335 3.25 5 3.25H19C19.9665 3.25 20.75 4.0335 20.75 5V19C20.75 19.9665 19.9665 20.75 19 20.75H5C4.0335 20.75 3.25 19.9665 3.25 19V5ZM5 4.75C4.86193 4.75 4.75 4.86193 4.75 5V9.75H11.25V4.75H5ZM12.75 4.75V12.75H19.25V5C19.25 4.86193 19.1381 4.75 19 4.75H12.75ZM19.25 14.25H12.75V19.25H19C19.1381 19.25 19.25 19.1381 19.25 19V14.25ZM11.25 19.25V11.25H4.75V19C4.75 19.1381 4.86193 19.25 5 19.25H11.25Z"
            fill={color}
          />
        </svg>
      </AccessibleIcon.Root>
    </div>
  );
};
