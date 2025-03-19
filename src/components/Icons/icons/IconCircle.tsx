import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconCircle = ({
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
            d="M12.0001 3.41666C7.25964 3.41666 3.41675 7.25955 3.41675 12C3.41675 16.7404 7.25964 20.5833 12.0001 20.5833C16.7405 20.5833 20.5834 16.7404 20.5834 12C20.5834 7.25955 16.7405 3.41666 12.0001 3.41666ZM1.91675 12C1.91675 6.43112 6.43121 1.91666 12.0001 1.91666C17.569 1.91666 22.0834 6.43112 22.0834 12C22.0834 17.5689 17.569 22.0833 12.0001 22.0833C6.43121 22.0833 1.91675 17.5689 1.91675 12Z"
            fill={color}
          />
        </svg>
      </AccessibleIcon.Root>
    </div>
  );
};
