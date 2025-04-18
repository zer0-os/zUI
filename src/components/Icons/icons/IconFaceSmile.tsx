import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconFaceSmile = ({
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
              d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM7.5 9C7.5 8.17157 8.17157 7.5 9 7.5C9.82843 7.5 10.5 8.17157 10.5 9C10.5 9.82843 9.82843 10.5 9 10.5C8.17157 10.5 7.5 9.82843 7.5 9ZM13.5 9C13.5 8.17157 14.1716 7.5 15 7.5C15.8284 7.5 16.5 8.17157 16.5 9C16.5 9.82843 15.8284 10.5 15 10.5C14.1716 10.5 13.5 9.82843 13.5 9ZM7.40006 13.2001C7.84049 12.8697 8.46474 12.9577 8.79692 13.3959L8.80156 13.4018C8.80751 13.4093 8.81883 13.4234 8.83537 13.4431C8.86852 13.4826 8.92225 13.5442 8.99548 13.6207C9.14278 13.7744 9.36413 13.9829 9.65073 14.1913C10.2278 14.611 11.0256 15.0001 12.0001 15.0001C12.9745 15.0001 13.7723 14.611 14.3494 14.1913C14.636 13.9829 14.8573 13.7744 15.0046 13.6207C15.0779 13.5442 15.1316 13.4826 15.1647 13.4431C15.1813 13.4234 15.1926 13.4093 15.1986 13.4018L15.2032 13.3959C15.5354 12.9577 16.1596 12.8697 16.6001 13.2001C17.0419 13.5314 17.1314 14.1582 16.8001 14.6001L16.6967 14.7289C16.6381 14.7987 16.5551 14.8934 16.4486 15.0045C16.2365 15.2258 15.9266 15.5172 15.5257 15.8088C14.7278 16.3891 13.5256 17.0001 12.0001 17.0001C10.4745 17.0001 9.27233 16.3891 8.47439 15.8088C8.07349 15.5172 7.76358 15.2258 7.55151 15.0045C7.44506 14.8934 7.36207 14.7987 7.30342 14.7289C7.26801 14.6867 7.23377 14.6436 7.20006 14.6001C6.86869 14.1582 6.95823 13.5314 7.40006 13.2001Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14M15 9H15.01M9 9H9.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15.5 9C15.5 9.27614 15.2761 9.5 15 9.5C14.7239 9.5 14.5 9.27614 14.5 9C14.5 8.72386 14.7239 8.5 15 8.5C15.2761 8.5 15.5 8.72386 15.5 9ZM9.5 9C9.5 9.27614 9.27614 9.5 9 9.5C8.72386 9.5 8.5 9.27614 8.5 9C8.5 8.72386 8.72386 8.5 9 8.5C9.27614 8.5 9.5 8.72386 9.5 9Z"
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
