import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconSpacingWidth1 = ({
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
              d="M3 2C3.55229 2 4 2.44772 4 3L4 21C4 21.5523 3.55228 22 3 22C2.44772 22 2 21.5523 2 21V3C2 2.44772 2.44772 2 3 2Z"
              fill={color}
            />
            <path
              d="M21 2C21.5523 2 22 2.44772 22 3V21C22 21.5523 21.5523 22 21 22C20.4477 22 20 21.5523 20 21V3C20 2.44772 20.4477 2 21 2Z"
              fill={color}
            />
            <path
              d="M7.86845 13L8.83205 14.4454C9.1384 14.9049 9.01423 15.5258 8.5547 15.8322C8.09517 16.1385 7.4743 16.0143 7.16795 15.5548L5.16795 12.5548C4.94402 12.2189 4.94402 11.7813 5.16795 11.4454L7.16795 8.44541C7.4743 7.98588 8.09517 7.8617 8.5547 8.16806C9.01423 8.47441 9.1384 9.09528 8.83205 9.55481L7.86859 11H16.1314L15.1679 9.55481C14.8616 9.09528 14.9858 8.47441 15.4453 8.16806C15.9048 7.8617 16.5257 7.98588 16.832 8.44541L18.832 11.4454C19.056 11.7813 19.056 12.2189 18.832 12.5548L16.832 15.5548C16.5257 16.0143 15.9048 16.1385 15.4453 15.8322C14.9858 15.5258 14.8616 14.9049 15.1679 14.4454L16.1315 13H7.86845Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 12H18M6 12L8 9M6 12L8 15M18 12L16 9M18 12L16 15M21 21V3M3 21V3"
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
