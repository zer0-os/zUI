import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconSlider = ({
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
            d="M10 1.25C10.4142 1.25 10.75 1.58579 10.75 2V4.9994C10.75 4.99919 10.75 4.9996 10.75 4.9994C10.75 4.9996 10.75 5.0004 10.75 5.0006V8C10.75 8.41421 10.4142 8.75 10 8.75C9.58579 8.75 9.25 8.41421 9.25 8V5.75H3C2.58579 5.75 2.25 5.41421 2.25 5C2.25 4.58579 2.58579 4.25 3 4.25L9.25 4.25V2C9.25 1.58579 9.58579 1.25 10 1.25ZM13.25 5C13.25 4.58579 13.5858 4.25 14 4.25L21 4.25C21.4142 4.25 21.75 4.58579 21.75 5C21.75 5.41421 21.4142 5.75 21 5.75H14C13.5858 5.75 13.25 5.41421 13.25 5ZM16 8.25C16.4142 8.25 16.75 8.58579 16.75 9V11.25H21C21.4142 11.25 21.75 11.5858 21.75 12C21.75 12.4142 21.4142 12.75 21 12.75H16.75V15C16.75 15.4142 16.4142 15.75 16 15.75C15.5858 15.75 15.25 15.4142 15.25 15V9C15.25 8.58579 15.5858 8.25 16 8.25ZM2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H12C12.4142 11.25 12.75 11.5858 12.75 12C12.75 12.4142 12.4142 12.75 12 12.75H3C2.58579 12.75 2.25 12.4142 2.25 12ZM8 15.25C8.41421 15.25 8.75 15.5858 8.75 16L8.75 22C8.75 22.4142 8.41421 22.75 8 22.75C7.58579 22.75 7.25 22.4142 7.25 22V19.75H3C2.58579 19.75 2.25 19.4142 2.25 19C2.25 18.5858 2.58579 18.25 3 18.25H7.25V16C7.25 15.5858 7.58579 15.25 8 15.25ZM11.25 19C11.25 18.5858 11.5858 18.25 12 18.25H21C21.4142 18.25 21.75 18.5858 21.75 19C21.75 19.4142 21.4142 19.75 21 19.75H12C11.5858 19.75 11.25 19.4142 11.25 19Z"
            fill={color}
          />
        </svg>
      </AccessibleIcon.Root>
    </div>
  );
};
