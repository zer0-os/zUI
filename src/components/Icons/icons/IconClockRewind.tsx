import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconClockRewind = ({
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
              d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C15.7912 20 18.9664 17.3629 19.7914 13.8229L19.407 14.2072C19.0164 14.5977 18.3832 14.5976 17.9927 14.207C17.6023 13.8164 17.6024 13.1833 17.9929 12.7928L19.9935 10.7928C20.1811 10.6053 20.4355 10.5 20.7007 10.5C20.9659 10.5 21.2202 10.6054 21.4078 10.793L23.4072 12.793C23.7976 13.1836 23.7975 13.8167 23.407 14.2072C23.0164 14.5977 22.3832 14.5976 21.9927 14.207L21.7976 14.0118C20.8665 18.5704 16.8338 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C15.67 2 18.8771 3.97759 20.6155 6.92048C20.8964 7.39599 20.7386 8.00919 20.2631 8.29009C19.7876 8.57098 19.1744 8.41322 18.8935 7.9377C17.5 5.57869 14.9338 4 12 4Z"
              fill={color}
            />
            <path
              d="M13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V12C11 12.3344 11.1671 12.6466 11.4453 12.8321L14.4453 14.8321C14.9048 15.1384 15.5257 15.0142 15.8321 14.5547C16.1384 14.0952 16.0142 13.4743 15.5547 13.1679L13 11.4648V7Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22.7 13.5L20.7005 11.5L18.7 13.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C15.3019 3 18.1885 4.77814 19.7545 7.42909M12 7V12L15 14"
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
