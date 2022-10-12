import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconCurrencyEthereumCircle = ({
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
            <path d="M8.1174 11.1367L12.0002 12.9015L15.8827 11.1367L12.0002 6.54813L8.1174 11.1367Z" fill={color} />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM12.0002 4C12.2944 4.00001 12.5736 4.12952 12.7636 4.35407L18.2634 10.8541C18.4658 11.0933 18.5444 11.4135 18.4757 11.7192C18.407 12.0249 18.1991 12.2807 17.9138 12.4104L12.414 14.9104C12.1511 15.0299 11.8493 15.0299 11.5864 14.9104L6.08622 12.4104C5.80098 12.2807 5.59299 12.0249 5.52432 11.7192C5.45565 11.4135 5.53424 11.0932 5.73664 10.854L11.2368 4.35404C11.4268 4.1295 11.7061 3.99999 12.0002 4ZM5.58963 15.086C5.81816 14.5832 6.41101 14.3609 6.91379 14.5894L12.0002 16.9013L17.0862 14.5894C17.589 14.3609 18.1818 14.5832 18.4104 15.0859C18.6389 15.5887 18.4166 16.1816 17.9138 16.4101L12.414 18.9101C12.1511 19.0296 11.8493 19.0296 11.5864 18.9101L6.08621 16.4101C5.58343 16.1816 5.3611 15.5887 5.58963 15.086Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.5 15.5L12.0002 18L17.5 15.5M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM6.5 11.5L12.0002 14L17.5 11.5L12.0002 5L6.5 11.5Z"
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
