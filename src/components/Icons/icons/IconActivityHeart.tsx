import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconActivityHeart = ({
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
              d="M3.50521 3.54965C6.19252 1.25356 9.65298 1.67202 11.9929 3.71691C14.3301 1.67124 17.7537 1.28246 20.4709 3.54088C23.4445 6.01238 23.8016 10.2275 21.5118 13.1739C20.7168 14.197 19.2374 15.6827 17.7545 17.0968C16.255 18.5268 14.6963 19.9356 13.7042 20.8209L13.6823 20.8405C13.5197 20.9856 13.3571 21.1308 13.2072 21.2444C13.0387 21.3722 12.8318 21.5037 12.5679 21.5828C12.1958 21.6945 11.7907 21.6945 11.4186 21.5828C11.1547 21.5037 10.9478 21.3722 10.7793 21.2444C10.6295 21.1308 10.4669 20.9857 10.3043 20.8406L10.2823 20.8209C9.2902 19.9356 7.73154 18.5268 6.23203 17.0968C4.74915 15.6827 3.26977 14.197 2.47471 13.1739C0.176093 10.2161 0.598423 6.03328 3.50521 3.54965ZM11.9488 8.18372C11.8209 7.80002 11.4745 7.53114 11.071 7.50247C10.6676 7.4738 10.2866 7.69098 10.1057 8.05274L8.88209 10.5H8.50012C7.94784 10.5 7.50012 10.9477 7.50012 11.5C7.50012 12.0522 7.94784 12.5 8.50012 12.5H9.50012C9.87889 12.5 10.2252 12.2859 10.3945 11.9472L10.8149 11.1065L12.0514 14.8162C12.1793 15.1999 12.5258 15.4688 12.9292 15.4974C13.3327 15.5261 13.7137 15.3089 13.8945 14.9472L15.1182 12.5H15.5001C16.0524 12.5 16.5001 12.0522 16.5001 11.5C16.5001 10.9477 16.0524 10.5 15.5001 10.5H14.5001C14.1213 10.5 13.7751 10.714 13.6057 11.0527L13.1854 11.8934L11.9488 8.18372Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.5 11.5H14.5L13 14.5L11 8.5L9.5 11.5H8.5M11.9932 5.13581C9.9938 2.7984 6.65975 2.16964 4.15469 4.31001C1.64964 6.45038 1.29697 10.029 3.2642 12.5604C4.75009 14.4724 8.97129 18.311 10.948 20.0749C11.3114 20.3991 11.4931 20.5613 11.7058 20.6251C11.8905 20.6805 12.0958 20.6805 12.2805 20.6251C12.4932 20.5613 12.6749 20.3991 13.0383 20.0749C15.015 18.311 19.2362 14.4724 20.7221 12.5604C22.6893 10.029 22.3797 6.42787 19.8316 4.31001C17.2835 2.19216 13.9925 2.7984 11.9932 5.13581Z"
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
