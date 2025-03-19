import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconMusic = ({
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
              d="M16.2779 2.80076C16.5517 2.90772 16.8743 3.06907 17.2259 3.24492L20.9472 5.10555C21.4412 5.35254 21.6414 5.95322 21.3944 6.4472C21.1474 6.94117 20.5468 7.1414 20.0528 6.89441L16.3683 5.05218C15.9675 4.85178 15.7281 4.73319 15.5502 4.66369L15.5215 4.65274L15.5184 4.68335C15.501 4.87355 15.5 5.14072 15.5 5.58884V18L15.5 18.0032C15.4983 20.2109 13.7081 22 11.5 22C9.29086 22 7.5 20.2091 7.5 18C7.5 15.7909 9.29086 14 11.5 14C12.2286 14 12.9117 14.1948 13.5 14.5351L13.5 5.54767C13.5 5.15455 13.4999 4.7938 13.5267 4.50105C13.5543 4.19955 13.6199 3.81652 13.8611 3.47173C14.1764 3.02093 14.6635 2.7199 15.2077 2.63949C15.6239 2.578 15.9959 2.69061 16.2779 2.80076Z"
              fill={color}
            />
            <path
              d="M6.5 3C7.05228 3 7.5 3.44772 7.5 4V6H9.5C10.0523 6 10.5 6.44772 10.5 7C10.5 7.55228 10.0523 8 9.5 8H7.5V10C7.5 10.5523 7.05228 11 6.5 11C5.94772 11 5.5 10.5523 5.5 10V8H3.5C2.94772 8 2.5 7.55228 2.5 7C2.5 6.44772 2.94772 6 3.5 6H5.5V4C5.5 3.44772 5.94772 3 6.5 3Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.5 18V5.58888C14.5 4.73166 14.5 4.30306 14.6805 4.04492C14.8382 3.81952 15.0817 3.669 15.3538 3.6288C15.6655 3.58276 16.0488 3.77444 16.8155 4.1578L20.5 6.00003M14.5 18C14.5 19.6569 13.1569 21 11.5 21C9.84315 21 8.5 19.6569 8.5 18C8.5 16.3432 9.84315 15 11.5 15C13.1569 15 14.5 16.3432 14.5 18ZM6.5 10V4.00003M3.5 7.00003H9.5"
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
