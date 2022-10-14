import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconGitCommit = ({
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
              d="M16.8998 11C16.4365 8.71776 14.4188 7 11.9998 7C9.58086 7 7.56311 8.71776 7.09983 11H2C1.44772 11 1 11.4477 1 12C1 12.5523 1.44772 13 2 13H7.09983C7.56311 15.2822 9.58086 17 11.9998 17C14.4188 17 16.4365 15.2822 16.8998 13H21.9998C22.5521 13 22.9998 12.5523 22.9998 12C22.9998 11.4477 22.5521 11 21.9998 11H16.8998Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.9998 12C15.9998 14.2091 14.2089 16 11.9998 16C9.79067 16 7.9998 14.2091 7.9998 12M15.9998 12C15.9998 9.79086 14.2089 8 11.9998 8C9.79067 8 7.9998 9.79086 7.9998 12M15.9998 12H21.9998M7.9998 12H2"
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
