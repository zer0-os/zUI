import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconImageIndentRight = ({
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
              d="M3 3C2.44772 3 2 3.44772 2 4C2 4.55228 2.44772 5 3 5H21C21.5523 5 22 4.55228 22 4C22 3.44772 21.5523 3 21 3H3Z"
              fill={color}
            />
            <path
              d="M3 19C2.44772 19 2 19.4477 2 20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20C22 19.4477 21.5523 19 21 19H3Z"
              fill={color}
            />
            <path
              d="M2 9.25C2 8.69772 2.44772 8.25 3 8.25H9C9.55228 8.25 10 8.69772 10 9.25C10 9.80228 9.55228 10.25 9 10.25H3C2.44772 10.25 2 9.80228 2 9.25Z"
              fill={color}
            />
            <path
              d="M3 13.75C2.44772 13.75 2 14.1977 2 14.75C2 15.3023 2.44772 15.75 3 15.75H9C9.55228 15.75 10 15.3023 10 14.75C10 14.1977 9.55228 13.75 9 13.75H3Z"
              fill={color}
            />
            <path
              d="M14.5681 7C14.3157 6.99997 14.0699 6.99994 13.8618 7.01695C13.6332 7.03563 13.3634 7.07969 13.092 7.21799C12.7157 7.40974 12.4097 7.7157 12.218 8.09202C12.0797 8.36345 12.0356 8.63318 12.017 8.86178C11.9999 9.06993 12 9.31572 12 9.56811V14.4319C12 14.6843 11.9999 14.9301 12.017 15.1382C12.0356 15.3668 12.0797 15.6366 12.218 15.908C12.4097 16.2843 12.7157 16.5903 13.092 16.782C13.3634 16.9203 13.6332 16.9644 13.8618 16.9831C14.0699 17.0001 14.3157 17 14.5681 17H19.4319C19.6843 17 19.9301 17.0001 20.1382 16.9831C20.3668 16.9644 20.6366 16.9203 20.908 16.782C21.2843 16.5903 21.5903 16.2843 21.782 15.908C21.9203 15.6366 21.9644 15.3668 21.9831 15.1382C22.0001 14.9301 22 14.6843 22 14.4319V9.56812C22 9.31574 22.0001 9.06994 21.9831 8.86178C21.9644 8.63318 21.9203 8.36345 21.782 8.09202C21.5903 7.7157 21.2843 7.40974 20.908 7.21799C20.6366 7.07969 20.3668 7.03563 20.1382 7.01695C19.9301 6.99994 19.6843 6.99997 19.4319 7H14.5681Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21 4H3M21 20H3M9 9.25H3M9 14.75H3M14.6 16H19.4C19.9601 16 20.2401 16 20.454 15.891C20.6422 15.7951 20.7951 15.6422 20.891 15.454C21 15.2401 21 14.9601 21 14.4V9.6C21 9.03995 21 8.75992 20.891 8.54601C20.7951 8.35785 20.6422 8.20487 20.454 8.10899C20.2401 8 19.9601 8 19.4 8H14.6C14.0399 8 13.7599 8 13.546 8.10899C13.3578 8.20487 13.2049 8.35785 13.109 8.54601C13 8.75992 13 9.03995 13 9.6V14.4C13 14.9601 13 15.2401 13.109 15.454C13.2049 15.6422 13.3578 15.7951 13.546 15.891C13.7599 16 14.0399 16 14.6 16Z"
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
