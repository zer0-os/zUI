import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconFramer = ({
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
              d="M5.00003 0.5C4.59557 0.5 4.23093 0.743642 4.07615 1.11732C3.92137 1.49099 4.00692 1.92111 4.29292 2.20711L9.58582 7.5H5.00003C4.44774 7.5 4.00003 7.94772 4.00003 8.5V15.5C4.00003 15.7694 4.10659 16.014 4.27986 16.1938C4.28407 16.1983 4.28842 16.2028 4.29291 16.2073L11.2929 23.2073C11.5789 23.4933 12.009 23.5789 12.3827 23.4241C12.7564 23.2693 13 22.9047 13 22.5002V16.5002L19 16.5C19.4045 16.5 19.7691 16.2564 19.9239 15.8827C20.0787 15.509 19.9931 15.0789 19.7071 14.7929L14.4142 9.5H19C19.5523 9.5 20 9.05228 20 8.5V1.5C20 0.947715 19.5523 0.5 19 0.5H5.00003ZM11 16.5H7.41404L11 20.086V16.5ZM18 7.5H12.4142L7.41424 2.5H18V7.5ZM6.00003 9.5H11.5858L16.5858 14.5H6.00003V9.5Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 15.5V22.5L5 15.5M5 15.5V8.5H12M5 15.5H19L12 8.5M12 8.5H19V1.5H5L12 8.5Z"
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
