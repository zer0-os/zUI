import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconShield1 = ({
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
              d="M12.2863 1.08843C12.0966 1.06102 11.9039 1.06102 11.7142 1.08843C11.4956 1.12002 11.2922 1.19688 11.1306 1.2579L11.0873 1.27422L5.59491 3.33374C4.97712 3.56439 4.43457 3.76695 4.01675 4.13517C3.65124 4.45729 3.36968 4.86358 3.19641 5.31893C2.99834 5.83944 2.99918 6.41856 3.00013 7.078L3.00026 11.9999C3.00026 14.8265 4.53756 17.1831 6.19932 18.9143C7.87222 20.6571 9.78626 21.888 10.7984 22.4785L10.8393 22.5025C11.024 22.611 11.2638 22.7517 11.5809 22.8198C11.8404 22.8754 12.1602 22.8754 12.4196 22.8198C12.7368 22.7517 12.9765 22.611 13.1612 22.5025L13.2022 22.4785C14.2143 21.888 16.1283 20.6571 17.8012 18.9143C19.463 17.1831 21.0003 14.8265 21.0003 11.9999L21.0004 7.07799C21.0014 6.41855 21.0022 5.83944 20.8041 5.31893C20.6309 4.86358 20.3493 4.45729 19.9838 4.13517C19.566 3.76694 19.0234 3.56439 18.4056 3.33374L12.9132 1.27422L12.8699 1.2579C12.7084 1.19688 12.5049 1.12002 12.2863 1.08843Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.302 21.6149C11.5234 21.744 11.6341 21.8086 11.7903 21.8421C11.9116 21.8681 12.0884 21.8681 12.2097 21.8421C12.3659 21.8086 12.4766 21.744 12.698 21.6149C14.646 20.4784 20 16.9084 20 12V7.21759C20 6.41808 20 6.01833 19.8692 5.6747C19.7537 5.37113 19.566 5.10027 19.3223 4.88552C19.0465 4.64243 18.6722 4.50207 17.9236 4.22134L12.5618 2.21067C12.3539 2.13271 12.25 2.09373 12.143 2.07827C12.0482 2.06457 11.9518 2.06457 11.857 2.07827C11.75 2.09373 11.6461 2.13271 11.4382 2.21067L6.0764 4.22134C5.3278 4.50207 4.9535 4.64243 4.67766 4.88552C4.43398 5.10027 4.24627 5.37113 4.13076 5.6747C4 6.01833 4 6.41808 4 7.21759V12C4 16.9084 9.35396 20.4784 11.302 21.6149Z"
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
