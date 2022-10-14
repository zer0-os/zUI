import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconInfinity = ({
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
              d="M5.43875 7C3.96386 7 2.81684 7.65911 2.06512 8.64282C1.33456 9.59885 1 10.824 1 12C1 13.176 1.33456 14.4012 2.06512 15.3572C2.81684 16.3409 3.96386 17 5.43875 17C8.30812 17 10.3425 15.2064 11.9999 13.4658C13.6573 15.2064 15.6916 17 18.561 17C20.0359 17 21.1829 16.3409 21.9346 15.3572C22.6652 14.4012 22.9998 13.176 22.9998 12C22.9998 10.824 22.6652 9.59885 21.9346 8.64282C21.1829 7.65911 20.0359 7 18.561 7C15.6916 7 13.6573 8.7936 11.9999 10.5343C10.3425 8.7936 8.30816 7 5.43875 7ZM5.43875 15C4.62114 15 4.04879 14.6591 3.65425 14.1428C3.23857 13.5988 3 12.824 3 12C3 11.176 3.23857 10.4012 3.65425 9.85718C4.04879 9.34089 4.62114 9 5.43875 9C7.47809 9 8.98648 10.2728 10.6308 12C8.98642 13.7272 7.47805 15 5.43875 15ZM18.561 15C19.3786 15 19.951 14.6591 20.3455 14.1428C20.7612 13.5988 20.9998 12.824 20.9998 12C20.9998 11.176 20.7612 10.4012 20.3455 9.85718C19.951 9.34089 19.3786 9 18.561 9C16.5217 9 15.0133 10.2728 13.369 12C15.0133 13.7272 16.5217 15 18.561 15Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.1777 8C23.2737 8 23.2737 16 18.1777 16C13.0827 16 11.0447 8 5.43875 8C0.85375 8 0.85375 16 5.43875 16C11.0447 16 13.0828 8 18.1788 8H18.1777Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </AccessibleIcon.Root>
    </div>
  );
};
