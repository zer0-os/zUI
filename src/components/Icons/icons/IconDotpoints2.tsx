import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconDotpoints2 = ({
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
              d="M4.5 2.5C3.11929 2.5 2 3.61929 2 5C2 6.38071 3.11929 7.5 4.5 7.5C5.88071 7.5 7 6.38071 7 5C7 3.61929 5.88071 2.5 4.5 2.5Z"
              fill={color}
            />
            <path
              d="M10 4L21 4C21.5523 4 22 4.44772 22 5C22 5.55229 21.5523 6 21 6H10C9.44772 6 9 5.55229 9 5C9 4.44772 9.44772 4 10 4Z"
              fill={color}
            />
            <path
              d="M10 18H21C21.5523 18 22 18.4477 22 19C22 19.5523 21.5523 20 21 20H10C9.44772 20 9 19.5523 9 19C9 18.4477 9.44772 18 10 18Z"
              fill={color}
            />
            <path
              d="M21 11H10C9.44772 11 9 11.4477 9 12C9 12.5523 9.44772 13 10 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11Z"
              fill={color}
            />
            <path
              d="M4.5 16.5C3.11929 16.5 2 17.6193 2 19C2 20.3807 3.11929 21.5 4.5 21.5C5.88071 21.5 7 20.3807 7 19C7 17.6193 5.88071 16.5 4.5 16.5Z"
              fill={color}
            />
            <path
              d="M4.5 9.5C3.11929 9.5 2 10.6193 2 12C2 13.3807 3.11929 14.5 4.5 14.5C5.88071 14.5 7 13.3807 7 12C7 10.6193 5.88071 9.5 4.5 9.5Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21 5L10 5M21 19L10 19M21 12L10 12M6 5C6 5.82843 5.32843 6.5 4.5 6.5C3.67157 6.5 3 5.82843 3 5C3 4.17157 3.67157 3.5 4.5 3.5C5.32843 3.5 6 4.17157 6 5ZM6 19C6 19.8284 5.32843 20.5 4.5 20.5C3.67157 20.5 3 19.8284 3 19C3 18.1716 3.67157 17.5 4.5 17.5C5.32843 17.5 6 18.1716 6 19ZM6 12C6 12.8284 5.32843 13.5 4.5 13.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5C5.32843 10.5 6 11.1716 6 12Z"
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
