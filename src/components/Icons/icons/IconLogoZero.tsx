import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconLogoZero = ({
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
            d="M5.15125 18.8515L5.14972 18.8499C2.13412 15.0263 2.3764 9.4557 5.91619 5.91309C9.45674 2.37155 15.0255 2.12949 18.8479 5.14647L18.8494 5.14761C15.3394 0.466947 8.29789 0.0304559 4.19506 4.1915C1.16879 7.14753 0.449562 12.0286 2.4846 15.732C3.14212 16.9487 4.05411 18.0244 5.15125 18.8515Z"
            fill={color}
          />
          <path
            d="M21.5154 8.26754C20.8579 7.05086 19.9466 5.97473 18.8494 5.14761C18.8494 5.14837 18.8503 5.14923 18.851 5.14999C21.8651 8.97367 21.6244 14.5427 18.0846 18.0853C14.5417 21.6265 8.97454 21.8689 5.15285 18.8535C5.15209 18.8531 5.15201 18.8519 5.15125 18.8515L5.15056 18.8531C8.65987 23.5349 15.7029 23.9676 19.8057 19.8096C22.8304 16.852 23.5504 11.9724 21.5154 8.26754Z"
            fill={color}
          />
        </svg>
      </AccessibleIcon.Root>
    </div>
  );
};
