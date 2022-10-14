import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconRightIndent1 = ({
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
              d="M2 9.25C2 8.69772 2.44772 8.25 3 8.25H12C12.5523 8.25 13 8.69772 13 9.25C13 9.80228 12.5523 10.25 12 10.25H3C2.44772 10.25 2 9.80228 2 9.25Z"
              fill={color}
            />
            <path
              d="M3 13.75C2.44772 13.75 2 14.1977 2 14.75C2 15.3023 2.44772 15.75 3 15.75H12C12.5523 15.75 13 15.3023 13 14.75C13 14.1977 12.5523 13.75 12 13.75H3Z"
              fill={color}
            />
            <path
              d="M20.5311 7.00028C20.1429 6.99221 19.8398 7.16314 19.6801 7.2616C19.5159 7.36286 19.3292 7.50292 19.1478 7.639L15.2307 10.5769C15.1061 10.6702 14.9653 10.7758 14.8524 10.8773C14.7278 10.9894 14.5444 11.1755 14.4353 11.4562C14.2992 11.806 14.2992 12.1939 14.4353 12.5437C14.5444 12.8244 14.7278 13.0106 14.8524 13.1226C14.9653 13.2241 15.1061 13.3296 15.2306 13.423L19.1478 16.3609C19.3292 16.497 19.5159 16.637 19.6801 16.7383C19.8398 16.8368 20.1429 17.0077 20.5311 16.9996C20.9812 16.9903 21.4034 16.7792 21.681 16.4247C21.9203 16.119 21.9655 15.7739 21.9825 15.5871C22 15.395 22 15.1616 21.9999 14.9349V9.06505C22 8.8383 22 8.60492 21.9825 8.4128C21.9655 8.22598 21.9203 7.88089 21.681 7.5752C21.4034 7.2207 20.9812 7.00963 20.5311 7.00028Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21 4H3M21 20H3M12 9.25H3M12 14.75H3M19.72 8.46L15.8533 11.36C15.5638 11.5771 15.4191 11.6857 15.3673 11.8188C15.322 11.9353 15.322 12.0647 15.3673 12.1812C15.4191 12.3143 15.5638 12.4229 15.8533 12.64L19.72 15.54C20.132 15.849 20.338 16.0035 20.5104 15.9999C20.6604 15.9968 20.8012 15.9264 20.8937 15.8082C21 15.6725 21 15.415 21 14.9V9.1C21 8.58503 21 8.32754 20.8937 8.19175C20.8012 8.07358 20.6604 8.00323 20.5104 8.00011C20.338 7.99652 20.132 8.15102 19.72 8.46Z"
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
