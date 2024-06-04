import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconCheckDouble = ({
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
              d="M15.409 7.29482C15.7985 7.68641 15.7968 8.31957 15.4052 8.70903L7.36143 16.709C6.97135 17.097 6.34115 17.097 5.95107 16.709L2.29482 13.0727C1.90324 12.6832 1.90151 12.05 2.29097 11.6585C2.68043 11.2669 3.31359 11.2651 3.70518 11.6546L6.65625 14.5896L13.9948 7.29097C14.3864 6.90151 15.0196 6.90324 15.409 7.29482ZM21.7035 7.28935C22.096 7.67791 22.0992 8.31106 21.7107 8.70354L13.7907 16.7035C13.6028 16.8933 13.347 17 13.08 17C12.813 17 12.5572 16.8933 12.3693 16.7035L11.2893 15.6126C10.9008 15.2202 10.904 14.587 11.2965 14.1984C11.6889 13.8099 12.3221 13.8131 12.7107 14.2055L13.08 14.5786L20.2893 7.29646C20.6779 6.90397 21.3111 6.90079 21.7035 7.28935Z"
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21 8L13.08 16L12 14.9091M14.7 8L6.65625 16L3 12.3636"
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
