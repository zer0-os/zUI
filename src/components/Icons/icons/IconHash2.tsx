import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconHash2 = ({
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
              d="M10.4864 3.16443C10.5772 2.61966 10.2091 2.10444 9.66437 2.01364C9.1196 1.92285 8.60437 2.29086 8.51358 2.83564L7.81952 7H3.5C2.94772 7 2.5 7.44772 2.5 8C2.5 8.55228 2.94772 9 3.5 9H7.48619L6.48619 15H2.5C1.94772 15 1.5 15.4477 1.5 16C1.5 16.5523 1.94772 17 2.5 17H6.15285L5.51358 20.8356C5.42278 21.3804 5.7908 21.8956 6.33557 21.9864C6.88034 22.0772 7.39557 21.7092 7.48637 21.1644L8.18044 17H14.1529L13.5136 20.8356C13.4228 21.3804 13.7908 21.8956 14.3356 21.9864C14.8803 22.0772 15.3956 21.7092 15.4864 21.1644L16.1804 17H19.5C20.0523 17 20.5 16.5523 20.5 16C20.5 15.4477 20.0523 15 19.5 15H16.5138L17.5138 9H20.5C21.0523 9 21.5 8.55228 21.5 8C21.5 7.44772 21.0523 7 20.5 7H17.8471L18.4864 3.16443C18.5772 2.61966 18.2091 2.10444 17.6644 2.01364C17.1196 1.92285 16.6044 2.29086 16.5136 2.83564L15.8195 7H9.84711L10.4864 3.16443ZM14.4862 15L15.4862 9H9.51377L8.51377 15H14.4862Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.49999 3L6.49999 21M17.5 3L14.5 21M20.5 8H3.5M19.5 16H2.5"
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
