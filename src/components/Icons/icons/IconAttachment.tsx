import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconAttachment = ({
  className,
  label = DEFAULT_LABEL,
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE
}: IconProps) => {
  return (
    <div style={{ height: size, width: size }} className={classNames(className, styles.Container)}>
      <AccessibleIcon.Root label={label}>
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_929_10110)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.1472 4.00519C17.0732 2.93125 15.332 2.93125 14.2581 4.0052L5.24248 13.0208C3.48512 14.7782 3.48512 17.6274 5.24248 19.3848C6.99984 21.1421 9.84908 21.1421 11.6064 19.3848L20.6221 10.3692C20.9149 10.0763 21.3898 10.0763 21.6827 10.3692C21.9756 10.662 21.9756 11.1369 21.6827 11.4298L12.6671 20.4454C10.324 22.7886 6.52497 22.7886 4.18182 20.4454C1.83868 18.1023 1.83868 14.3033 4.18182 11.9601L13.1974 2.94454C14.8572 1.28481 17.5481 1.28481 19.2078 2.94453C20.8676 4.60426 20.8676 7.29521 19.2078 8.95494L10.5458 17.617C9.56947 18.5933 7.98656 18.5933 7.01025 17.617C6.03394 16.6407 6.03394 15.0578 7.01025 14.0815L14.6116 6.48007C14.9045 6.18718 15.3794 6.18718 15.6723 6.48007C15.9652 6.77296 15.9652 7.24784 15.6723 7.54073L8.07091 15.1421C7.68038 15.5327 7.68038 16.1658 8.07091 16.5563C8.46143 16.9469 9.0946 16.9469 9.48512 16.5563L18.1472 7.89428C19.2211 6.82034 19.2211 5.07914 18.1472 4.00519Z"
              fill={color}
            />
          </g>
          <defs>
            <clipPath id="clip0_929_10110">
              <rect width={size} height={size} fill="white" />
            </clipPath>
          </defs>
        </svg>
      </AccessibleIcon.Root>
    </div>
  );
};
