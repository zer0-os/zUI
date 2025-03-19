import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconQrCode2 = ({
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
              d="M15.5681 2C15.3157 1.99997 15.0699 1.99994 14.8618 2.01695C14.6332 2.03563 14.3634 2.07969 14.092 2.21799C13.7157 2.40974 13.4097 2.7157 13.218 3.09202C13.0797 3.36345 13.0356 3.63318 13.017 3.86178C12.9999 4.06991 13 4.31567 13 4.56803V8.4319C13 8.68426 12.9999 8.9301 13.017 9.13824C13.0356 9.36683 13.0797 9.63656 13.218 9.90799C13.4097 10.2843 13.7157 10.5903 14.092 10.782C14.3634 10.9203 14.6332 10.9644 14.8618 10.9831C15.0699 11.0001 15.3157 11 15.5681 11H19.4319C19.6843 11 19.9301 11.0001 20.1382 10.9831C20.3668 10.9644 20.6366 10.9203 20.908 10.782C21.2843 10.5903 21.5903 10.2843 21.782 9.90799C21.9203 9.63656 21.9644 9.36683 21.9831 9.13824C22.0001 8.93012 22 8.68439 22 8.43206V4.56813C22 4.3158 22.0001 4.06989 21.9831 3.86178C21.9644 3.63318 21.9203 3.36345 21.782 3.09202C21.5903 2.7157 21.2843 2.40974 20.908 2.21799C20.6366 2.07969 20.3668 2.03563 20.1382 2.01695C19.9301 1.99994 19.6843 1.99997 19.4319 2H15.5681ZM16.5 6.5C16.5 5.94772 16.9477 5.5 17.5 5.5H17.51C18.0623 5.5 18.51 5.94772 18.51 6.5C18.51 7.05228 18.0623 7.5 17.51 7.5H17.5C16.9477 7.5 16.5 7.05228 16.5 6.5Z"
              fill={color}
            />
            <path
              d="M13 12C12.4477 12 12 12.4477 12 13C12 13.5523 12.4477 14 13 14H13.01C13.5623 14 14.01 13.5523 14.01 13C14.01 12.4477 13.5623 12 13.01 12H13Z"
              fill={color}
            />
            <path
              d="M17.5 16.5C16.9477 16.5 16.5 16.9477 16.5 17.5C16.5 18.0523 16.9477 18.5 17.5 18.5H17.51C18.0623 18.5 18.51 18.0523 18.51 17.5C18.51 16.9477 18.0623 16.5 17.51 16.5H17.5Z"
              fill={color}
            />
            <path
              d="M14 15.5C14.5523 15.5 15 15.9477 15 16.5V21C15 21.5523 14.5523 22 14 22C13.4477 22 13 21.5523 13 21V16.5C13 15.9477 13.4477 15.5 14 15.5Z"
              fill={color}
            />
            <path
              d="M16.5 13C15.9477 13 15.5 13.4477 15.5 14C15.5 14.5523 15.9477 15 16.5 15H21C21.5523 15 22 14.5523 22 14C22 13.4477 21.5523 13 21 13H16.5Z"
              fill={color}
            />
            <path
              d="M21 16C21.5523 16 22 16.4477 22 17V21C22 21.5523 21.5523 22 21 22H17C16.4477 22 16 21.5523 16 21C16 20.4477 16.4477 20 17 20H20V17C20 16.4477 20.4477 16 21 16Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.56811 2H8.4319C8.68428 1.99997 8.93008 1.99994 9.13824 2.01695C9.36683 2.03563 9.63656 2.07969 9.90799 2.21799C10.2843 2.40974 10.5903 2.7157 10.782 3.09202C10.9203 3.36345 10.9644 3.63318 10.9831 3.86178C11.0001 4.06994 11 4.31574 11 4.56813V8.43189C11 8.68427 11.0001 8.93007 10.9831 9.13824C10.9644 9.36683 10.9203 9.63656 10.782 9.90799C10.5903 10.2843 10.2843 10.5903 9.90799 10.782C9.63656 10.9203 9.36683 10.9644 9.13824 10.9831C8.93007 11.0001 8.68427 11 8.43189 11H4.56812C4.31574 11 4.06994 11.0001 3.86178 10.9831C3.63318 10.9644 3.36345 10.9203 3.09202 10.782C2.7157 10.5903 2.40974 10.2843 2.21799 9.90799C2.07969 9.63656 2.03563 9.36683 2.01695 9.13824C1.99994 8.93008 1.99997 8.68429 2 8.43192L2 4.56811C1.99997 4.31573 1.99994 4.06993 2.01695 3.86178C2.03563 3.63318 2.07969 3.36345 2.21799 3.09202C2.40974 2.7157 2.7157 2.40974 3.09202 2.21799C3.36345 2.07969 3.63318 2.03563 3.86178 2.01695C4.06993 1.99994 4.31573 1.99997 4.56811 2ZM5.5 6.5C5.5 5.94772 5.94772 5.5 6.5 5.5H6.51C7.06228 5.5 7.51 5.94772 7.51 6.5C7.51 7.05228 7.06228 7.5 6.51 7.5H6.5C5.94772 7.5 5.5 7.05228 5.5 6.5Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.56811 13C4.31575 13 4.06991 12.9999 3.86178 13.017C3.63318 13.0356 3.36345 13.0797 3.09202 13.218C2.7157 13.4097 2.40974 13.7157 2.21799 14.092C2.07969 14.3634 2.03563 14.6332 2.01695 14.8618C1.99994 15.0699 1.99997 15.3157 2 15.5681L2 19.4319C1.99997 19.6843 1.99994 19.9301 2.01695 20.1382C2.03563 20.3668 2.07969 20.6366 2.21799 20.908C2.40974 21.2843 2.7157 21.5903 3.09202 21.782C3.36345 21.9203 3.63318 21.9644 3.86178 21.9831C4.06991 22.0001 4.31567 22 4.56802 22H8.43189C8.68424 22 8.9301 22.0001 9.13824 21.9831C9.36683 21.9644 9.63656 21.9203 9.90799 21.782C10.2843 21.5903 10.5903 21.2843 10.782 20.908C10.9203 20.6366 10.9644 20.3668 10.9831 20.1382C11.0001 19.9301 11 19.6843 11 19.4319V15.5681C11 15.3157 11.0001 15.0699 10.9831 14.8618C10.9644 14.6332 10.9203 14.3634 10.782 14.092C10.5903 13.7157 10.2843 13.4097 9.90799 13.218C9.63656 13.0797 9.36683 13.0356 9.13824 13.017C8.9301 12.9999 8.68434 13 8.43198 13H4.56811ZM6.5 16.5C5.94772 16.5 5.5 16.9477 5.5 17.5C5.5 18.0523 5.94772 18.5 6.5 18.5H6.51C7.06228 18.5 7.51 18.0523 7.51 17.5C7.51 16.9477 7.06228 16.5 6.51 16.5H6.5Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.5 6.5H6.51M17.5 6.5H17.51M6.5 17.5H6.51M13 13H13.01M17.5 17.5H17.51M17 21H21V17M14 16.5V21M21 14H16.5M15.6 10H19.4C19.9601 10 20.2401 10 20.454 9.89101C20.6422 9.79513 20.7951 9.64215 20.891 9.45399C21 9.24008 21 8.96005 21 8.4V4.6C21 4.03995 21 3.75992 20.891 3.54601C20.7951 3.35785 20.6422 3.20487 20.454 3.10899C20.2401 3 19.9601 3 19.4 3H15.6C15.0399 3 14.7599 3 14.546 3.10899C14.3578 3.20487 14.2049 3.35785 14.109 3.54601C14 3.75992 14 4.03995 14 4.6V8.4C14 8.96005 14 9.24008 14.109 9.45399C14.2049 9.64215 14.3578 9.79513 14.546 9.89101C14.7599 10 15.0399 10 15.6 10ZM4.6 10H8.4C8.96005 10 9.24008 10 9.45399 9.89101C9.64215 9.79513 9.79513 9.64215 9.89101 9.45399C10 9.24008 10 8.96005 10 8.4V4.6C10 4.03995 10 3.75992 9.89101 3.54601C9.79513 3.35785 9.64215 3.20487 9.45399 3.10899C9.24008 3 8.96005 3 8.4 3H4.6C4.03995 3 3.75992 3 3.54601 3.10899C3.35785 3.20487 3.20487 3.35785 3.10899 3.54601C3 3.75992 3 4.03995 3 4.6V8.4C3 8.96005 3 9.24008 3.10899 9.45399C3.20487 9.64215 3.35785 9.79513 3.54601 9.89101C3.75992 10 4.03995 10 4.6 10ZM4.6 21H8.4C8.96005 21 9.24008 21 9.45399 20.891C9.64215 20.7951 9.79513 20.6422 9.89101 20.454C10 20.2401 10 19.9601 10 19.4V15.6C10 15.0399 10 14.7599 9.89101 14.546C9.79513 14.3578 9.64215 14.2049 9.45399 14.109C9.24008 14 8.96005 14 8.4 14H4.6C4.03995 14 3.75992 14 3.54601 14.109C3.35785 14.2049 3.20487 14.3578 3.10899 14.546C3 14.7599 3 15.0399 3 15.6V19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7951 3.54601 20.891C3.75992 21 4.03995 21 4.6 21Z"
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
