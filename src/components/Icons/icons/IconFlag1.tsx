import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconFlag1 = ({
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
              d="M3 2.99683C3.00081 2.74196 3.09844 2.48735 3.29289 2.29289C3.29289 2.29289 3.24894 2.33097 3.33929 2.24883C3.35926 2.23068 3.38378 2.20926 3.41312 2.1851C3.47183 2.13675 3.54962 2.07757 3.64842 2.0117C3.8464 1.87972 4.12656 1.72234 4.50361 1.57152C5.25949 1.26917 6.38728 1 8 1C9.69345 1 11.0967 1.56148 12.3157 2.04923L12.3714 2.07152C13.6395 2.57876 14.7193 3 16 3C17.3873 3 18.2595 2.76917 18.7536 2.57152C19.0016 2.47234 19.1589 2.37972 19.2422 2.3242C19.2835 2.29663 19.3072 2.2778 19.3152 2.27126C19.7072 1.90251 20.3239 1.90972 20.7071 2.29289C20.9024 2.48816 21 2.74408 21 3V14.999C21.0002 15.2553 20.9026 15.5116 20.7071 15.7071L20.7061 15.7082C20.6682 15.7458 20.6281 15.781 20.5869 15.8149C20.5282 15.8632 20.4504 15.9224 20.3516 15.9883C20.1536 16.1203 19.8734 16.2777 19.4964 16.4285C18.7405 16.7308 17.6127 17 16 17C14.3066 17 12.9033 16.4385 11.6843 15.9508L11.6286 15.9285C10.3605 15.4212 9.28069 15 8 15C6.61272 15 5.74051 15.2308 5.24639 15.4285C5.15123 15.4665 5.06941 15.5036 5 15.5381L5 22C5 22.5523 4.55229 23 4 23C3.44772 23 3 22.5523 3 22L3 15.0002C3 15.0003 3 15.0002 3 15.0002L3 3C3 2.999 3 2.99783 3 2.99683Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 15C4 15 5 14 8 14C11 14 13 16 16 16C19 16 20 15 20 15V3C20 3 19 4 16 4C13 4 11 2 8 2C5 2 4 3 4 3L4 22"
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
