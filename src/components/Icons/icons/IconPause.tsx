import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconPause = ({
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
            d="M6.6665 5C6.6665 4.44772 7.11422 4 7.6665 4H8.33317C8.88545 4 9.33317 4.44772 9.33317 5V19C9.33317 19.5523 8.88546 20 8.33317 20H7.6665C7.11422 20 6.6665 19.5523 6.6665 19V5Z"
            fill={color}
          />
          <path
            d="M14.6665 5C14.6665 4.44772 15.1142 4 15.6665 4H16.3332C16.8855 4 17.3332 4.44772 17.3332 5V19C17.3332 19.5523 16.8855 20 16.3332 20H15.6665C15.1142 20 14.6665 19.5523 14.6665 19V5Z"
            fill={color}
          />
        </svg>
      </AccessibleIcon.Root>
    </div>
  );
};
