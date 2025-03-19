import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconFourDots = ({
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.6665 7.33332C4.6665 5.86056 5.86041 4.66666 7.33317 4.66666C8.80593 4.66666 9.99984 5.86056 9.99984 7.33332C9.99984 8.80608 8.80593 9.99999 7.33317 9.99999C5.86041 9.99999 4.6665 8.80608 4.6665 7.33332ZM13.9998 7.33332C13.9998 5.86056 15.1937 4.66666 16.6665 4.66666C18.1393 4.66666 19.3332 5.86056 19.3332 7.33332C19.3332 8.80608 18.1393 9.99999 16.6665 9.99999C15.1937 9.99999 13.9998 8.80608 13.9998 7.33332ZM4.6665 16.6667C4.6665 15.1939 5.86041 14 7.33317 14C8.80593 14 9.99984 15.1939 9.99984 16.6667C9.99984 18.1394 8.80593 19.3333 7.33317 19.3333C5.86041 19.3333 4.6665 18.1394 4.6665 16.6667ZM13.9998 16.6667C13.9998 15.1939 15.1937 14 16.6665 14C18.1393 14 19.3332 15.1939 19.3332 16.6667C19.3332 18.1394 18.1393 19.3333 16.6665 19.3333C15.1937 19.3333 13.9998 18.1394 13.9998 16.6667Z"
            fill={color}
          />
        </svg>
      </AccessibleIcon.Root>
    </div>
  );
};
