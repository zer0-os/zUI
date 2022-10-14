import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconRightIndent2 = ({
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
              d="M20.5311 1.50028C20.1429 1.49221 19.8398 1.66314 19.6801 1.7616C19.5159 1.86286 19.3292 2.00292 19.1478 2.139L15.2306 5.0769C15.1061 5.17024 14.9653 5.27578 14.8524 5.37735C14.7278 5.48935 14.5444 5.67551 14.4353 5.95624C14.2992 6.30596 14.2992 6.69395 14.4353 7.04366C14.5444 7.32439 14.7278 7.51055 14.8524 7.62255C14.9653 7.72412 15.1061 7.82966 15.2307 7.92301L19.1479 10.8609C19.3292 10.997 19.5159 11.137 19.6801 11.2383C19.8398 11.3368 20.1429 11.5077 20.5311 11.4996C20.9812 11.4903 21.4034 11.2792 21.681 10.9247C21.9203 10.619 21.9655 10.2739 21.9825 10.0871C22 9.89498 22 9.66162 21.9999 9.43488V3.56505C22 3.33831 22 3.10492 21.9825 2.9128C21.9655 2.72598 21.9203 2.38089 21.681 2.0752C21.4034 1.7207 20.9812 1.50963 20.5311 1.50028Z"
              fill={color}
            />
            <path
              d="M3 3C2.44772 3 2 3.44772 2 4C2 4.55228 2.44772 5 3 5L12 5C12.5523 5 13 4.55229 13 4C13 3.44772 12.5523 3 12 3L3 3Z"
              fill={color}
            />
            <path
              d="M3 8.25C2.44772 8.25 2 8.69772 2 9.25C2 9.80229 2.44772 10.25 3 10.25H12C12.5523 10.25 13 9.80229 13 9.25C13 8.69772 12.5523 8.25 12 8.25H3Z"
              fill={color}
            />
            <path
              d="M2 14.75C2 14.1977 2.44772 13.75 3 13.75H21C21.5523 13.75 22 14.1977 22 14.75C22 15.3023 21.5523 15.75 21 15.75H3C2.44772 15.75 2 15.3023 2 14.75Z"
              fill={color}
            />
            <path
              d="M3 19C2.44772 19 2 19.4477 2 20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20C22 19.4477 21.5523 19 21 19H3Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 9.24995H3M12 3.99995L3 3.99995M21 14.75H3M21 20H3M19.72 2.95995L15.8533 5.85995C15.5638 6.07707 15.4191 6.18563 15.3673 6.31872C15.322 6.43529 15.322 6.56462 15.3673 6.68119C15.4191 6.81427 15.5638 6.92283 15.8533 7.13995L19.72 10.04C20.132 10.3489 20.338 10.5034 20.5104 10.4998C20.6604 10.4967 20.8012 10.4264 20.8937 10.3082C21 10.1724 21 9.91493 21 9.39995V3.59995C21 3.08498 21 2.82749 20.8937 2.6917C20.8012 2.57354 20.6604 2.50318 20.5104 2.50006C20.338 2.49648 20.132 2.65097 19.72 2.95995Z"
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
