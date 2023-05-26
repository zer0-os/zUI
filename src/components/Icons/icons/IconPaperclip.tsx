import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconPaperclip = ({
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
              d="M17.9707 4.18194C16.9944 3.20563 15.4115 3.20563 14.4352 4.18194L5.4196 13.1976C3.75987 14.8573 3.75987 17.5482 5.4196 19.208C7.07933 20.8677 9.77028 20.8677 11.43 19.208L20.4456 10.1923C20.8361 9.80182 21.4693 9.80182 21.8598 10.1923C22.2504 10.5829 22.2504 11.216 21.8598 11.6066L12.8442 20.6222C10.4034 23.0629 6.44616 23.0629 4.00539 20.6222C1.56461 18.1814 1.56461 14.2241 4.00539 11.7833L13.021 2.76773C14.7784 1.01037 17.6276 1.01037 19.385 2.76773C21.1423 4.52509 21.1423 7.37433 19.385 9.13169L10.7229 17.7937C9.64896 18.8677 7.90776 18.8677 6.83381 17.7937C5.75987 16.7198 5.75987 14.9786 6.83381 13.9047L14.4352 6.30326C14.8257 5.91274 15.4589 5.91274 15.8494 6.30326C16.24 6.69378 16.24 7.32695 15.8494 7.71747L8.24803 15.3189C7.95513 15.6118 7.95513 16.0866 8.24803 16.3795C8.54092 16.6724 9.0158 16.6724 9.30869 16.3795L17.9707 7.71747C18.9471 6.74116 18.9471 5.15825 17.9707 4.18194Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21.1527 10.8995L12.1371 19.9151C10.0869 21.9653 6.76275 21.9653 4.71249 19.9151C2.66224 17.8648 2.66224 14.5407 4.71249 12.4904L13.7281 3.47483C15.0949 2.108 17.311 2.108 18.6779 3.47483C20.0447 4.84167 20.0447 7.05775 18.6779 8.42458L10.0158 17.0866C9.33238 17.7701 8.22434 17.7701 7.54092 17.0866C6.8575 16.4032 6.8575 15.2952 7.54092 14.6118L15.1423 7.01037"
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
