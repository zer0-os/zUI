import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconGrid1 = ({
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
              d="M4.56811 2C5.85605 2.00016 7.1465 2.00016 8.4319 2C8.68429 1.99997 8.93008 1.99994 9.13824 2.01695C9.36683 2.03563 9.63656 2.07969 9.90799 2.21799C10.2843 2.40974 10.5903 2.7157 10.782 3.09202C10.9203 3.36345 10.9644 3.63318 10.9831 3.86178C11.0001 4.06994 11 4.31574 11 4.56813V8.43189C11 8.68427 11.0001 8.93007 10.9831 9.13824C10.9644 9.36683 10.9203 9.63656 10.782 9.90799C10.5903 10.2843 10.2843 10.5903 9.90799 10.782C9.63656 10.9203 9.36683 10.9644 9.13824 10.9831C8.93007 11.0001 8.68427 11 8.43189 11H4.56812C4.31574 11 4.06994 11.0001 3.86178 10.9831C3.63318 10.9644 3.36345 10.9203 3.09202 10.782C2.7157 10.5903 2.40974 10.2843 2.21799 9.90799C2.07969 9.63656 2.03563 9.36683 2.01695 9.13824C1.99994 8.93008 1.99997 8.68429 2 8.4319C2 8.42128 2.00001 8.41065 2.00001 8.40001V4.60001C2.00001 4.58936 2 4.57873 2 4.56811C1.99997 4.31572 1.99994 4.06993 2.01695 3.86178C2.03563 3.63318 2.07969 3.36345 2.21799 3.09202C2.40974 2.7157 2.7157 2.40974 3.09202 2.21799C3.36345 2.07969 3.63318 2.03563 3.86178 2.01695C4.06993 1.99994 4.31572 1.99997 4.56811 2Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.56811 13C5.85605 13.0002 7.1465 13.0002 8.4319 13C8.68429 13 8.93008 12.9999 9.13824 13.017C9.36683 13.0356 9.63656 13.0797 9.90799 13.218C10.2843 13.4097 10.5903 13.7157 10.782 14.092C10.9203 14.3634 10.9644 14.6332 10.9831 14.8618C11.0001 15.0699 11 15.3157 11 15.5681V19.4319C11 19.6843 11.0001 19.9301 10.9831 20.1382C10.9644 20.3668 10.9203 20.6366 10.782 20.908C10.5903 21.2843 10.2843 21.5903 9.90799 21.782C9.63656 21.9203 9.36683 21.9644 9.13824 21.9831C8.93007 22.0001 8.68427 22 8.43189 22H4.56812C4.31574 22 4.06994 22.0001 3.86178 21.9831C3.63318 21.9644 3.36345 21.9203 3.09202 21.782C2.7157 21.5903 2.40974 21.2843 2.21799 20.908C2.07969 20.6366 2.03563 20.3668 2.01695 20.1382C1.99994 19.9301 1.99997 19.6843 2 19.4319C2 19.4213 2.00001 19.4106 2.00001 19.4V15.6C2.00001 15.5894 2 15.5787 2 15.5681C1.99997 15.3157 1.99994 15.0699 2.01695 14.8618C2.03563 14.6332 2.07969 14.3634 2.21799 14.092C2.40974 13.7157 2.7157 13.4097 3.09202 13.218C3.36345 13.0797 3.63318 13.0356 3.86178 13.017C4.06993 12.9999 4.31572 13 4.56811 13Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.5681 2C16.856 2.00016 18.1465 2.00016 19.4319 2C19.6843 1.99997 19.9301 1.99994 20.1382 2.01695C20.3668 2.03563 20.6366 2.07969 20.908 2.21799C21.2843 2.40974 21.5903 2.7157 21.782 3.09202C21.9203 3.36345 21.9644 3.63318 21.9831 3.86178C22.0001 4.06994 22 4.31574 22 4.56813V8.43189C22 8.68427 22.0001 8.93007 21.9831 9.13824C21.9644 9.36683 21.9203 9.63656 21.782 9.90799C21.5903 10.2843 21.2843 10.5903 20.908 10.782C20.6366 10.9203 20.3668 10.9644 20.1382 10.9831C19.9301 11.0001 19.6843 11 19.4319 11H15.5681C15.3157 11 15.0699 11.0001 14.8618 10.9831C14.6332 10.9644 14.3634 10.9203 14.092 10.782C13.7157 10.5903 13.4097 10.2843 13.218 9.90799C13.0797 9.63656 13.0356 9.36683 13.017 9.13824C12.9999 8.93008 13 8.68429 13 8.4319C13 8.42128 13 8.41065 13 8.40001V4.60001C13 4.58936 13 4.57873 13 4.56811C13 4.31572 12.9999 4.06993 13.017 3.86178C13.0356 3.63318 13.0797 3.36345 13.218 3.09202C13.4097 2.7157 13.7157 2.40974 14.092 2.21799C14.3634 2.07969 14.6332 2.03563 14.8618 2.01695C15.0699 1.99994 15.3157 1.99997 15.5681 2Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.5681 13C16.856 13.0002 18.1465 13.0002 19.4319 13C19.6843 13 19.9301 12.9999 20.1382 13.017C20.3668 13.0356 20.6366 13.0797 20.908 13.218C21.2843 13.4097 21.5903 13.7157 21.782 14.092C21.9203 14.3634 21.9644 14.6332 21.9831 14.8618C22.0001 15.0699 22 15.3157 22 15.5681V19.4319C22 19.6843 22.0001 19.9301 21.9831 20.1382C21.9644 20.3668 21.9203 20.6366 21.782 20.908C21.5903 21.2843 21.2843 21.5903 20.908 21.782C20.6366 21.9203 20.3668 21.9644 20.1382 21.9831C19.9301 22.0001 19.6843 22 19.4319 22H15.5681C15.3157 22 15.0699 22.0001 14.8618 21.9831C14.6332 21.9644 14.3634 21.9203 14.092 21.782C13.7157 21.5903 13.4097 21.2843 13.218 20.908C13.0797 20.6366 13.0356 20.3668 13.017 20.1382C12.9999 19.9301 13 19.6843 13 19.4319C13 19.4213 13 19.4106 13 19.4V15.6C13 15.5894 13 15.5787 13 15.5681C13 15.3157 12.9999 15.0699 13.017 14.8618C13.0356 14.6332 13.0797 14.3634 13.218 14.092C13.4097 13.7157 13.7157 13.4097 14.092 13.218C14.3634 13.0797 14.6332 13.0356 14.8618 13.017C15.0699 12.9999 15.3157 13 15.5681 13Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.4 3H4.6C4.03995 3 3.75992 3 3.54601 3.10899C3.35785 3.20487 3.20487 3.35785 3.10899 3.54601C3 3.75992 3 4.03995 3 4.6V8.4C3 8.96005 3 9.24008 3.10899 9.45399C3.20487 9.64215 3.35785 9.79513 3.54601 9.89101C3.75992 10 4.03995 10 4.6 10H8.4C8.96005 10 9.24008 10 9.45399 9.89101C9.64215 9.79513 9.79513 9.64215 9.89101 9.45399C10 9.24008 10 8.96005 10 8.4V4.6C10 4.03995 10 3.75992 9.89101 3.54601C9.79513 3.35785 9.64215 3.20487 9.45399 3.10899C9.24008 3 8.96005 3 8.4 3Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.4 3H15.6C15.0399 3 14.7599 3 14.546 3.10899C14.3578 3.20487 14.2049 3.35785 14.109 3.54601C14 3.75992 14 4.03995 14 4.6V8.4C14 8.96005 14 9.24008 14.109 9.45399C14.2049 9.64215 14.3578 9.79513 14.546 9.89101C14.7599 10 15.0399 10 15.6 10H19.4C19.9601 10 20.2401 10 20.454 9.89101C20.6422 9.79513 20.7951 9.64215 20.891 9.45399C21 9.24008 21 8.96005 21 8.4V4.6C21 4.03995 21 3.75992 20.891 3.54601C20.7951 3.35785 20.6422 3.20487 20.454 3.10899C20.2401 3 19.9601 3 19.4 3Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.4 14H15.6C15.0399 14 14.7599 14 14.546 14.109C14.3578 14.2049 14.2049 14.3578 14.109 14.546C14 14.7599 14 15.0399 14 15.6V19.4C14 19.9601 14 20.2401 14.109 20.454C14.2049 20.6422 14.3578 20.7951 14.546 20.891C14.7599 21 15.0399 21 15.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7951 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V15.6C21 15.0399 21 14.7599 20.891 14.546C20.7951 14.3578 20.6422 14.2049 20.454 14.109C20.2401 14 19.9601 14 19.4 14Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.4 14H4.6C4.03995 14 3.75992 14 3.54601 14.109C3.35785 14.2049 3.20487 14.3578 3.10899 14.546C3 14.7599 3 15.0399 3 15.6V19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7951 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H8.4C8.96005 21 9.24008 21 9.45399 20.891C9.64215 20.7951 9.79513 20.6422 9.89101 20.454C10 20.2401 10 19.9601 10 19.4V15.6C10 15.0399 10 14.7599 9.89101 14.546C9.79513 14.3578 9.64215 14.2049 9.45399 14.109C9.24008 14 8.96005 14 8.4 14Z"
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
