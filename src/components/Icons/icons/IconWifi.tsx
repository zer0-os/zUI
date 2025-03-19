import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconWifi = ({
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
              d="M11 19.5C11 18.9477 11.4477 18.5 12 18.5H12.01C12.5623 18.5 13.01 18.9477 13.01 19.5C13.01 20.0523 12.5623 20.5 12.01 20.5H12C11.4477 20.5 11 20.0523 11 19.5Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.9999 5.5C8.09395 5.5 4.53867 6.99161 1.86897 9.43803C1.46179 9.81115 0.829225 9.78355 0.4561 9.37636C0.0829746 8.96918 0.110582 8.33662 0.517762 7.9635C3.5418 5.19237 7.57436 3.5 11.9999 3.5C16.4254 3.5 20.458 5.19237 23.482 7.9635C23.8892 8.33662 23.9168 8.96918 23.5437 9.37636C23.1706 9.78355 22.538 9.81115 22.1308 9.43803C19.4611 6.99161 15.9058 5.5 11.9999 5.5Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 10.5C9.46665 10.5 7.15548 11.4407 5.39295 12.9933C4.97853 13.3584 4.34663 13.3184 3.98156 12.904C3.6165 12.4896 3.65651 11.8577 4.07093 11.4926C6.18465 9.6306 8.9615 8.5 12 8.5C15.0385 8.5 17.8153 9.6306 19.929 11.4926C20.3435 11.8577 20.3835 12.4896 20.0184 12.904C19.6533 13.3184 19.0214 13.3584 18.607 12.9933C16.8445 11.4407 14.5333 10.5 12 10.5Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.9999 15.5C10.8186 15.5 9.73541 15.9084 8.87994 16.5926C8.44862 16.9375 7.81934 16.8675 7.4744 16.4361C7.12947 16.0048 7.1995 15.3755 7.63082 15.0306C8.82805 14.0732 10.3484 13.5 11.9999 13.5C13.6267 13.5 15.1264 14.0562 16.3153 14.9881C16.7499 15.3288 16.8261 15.9574 16.4854 16.392C16.1446 16.8267 15.5161 16.9028 15.0814 16.5621C14.2321 15.8964 13.1637 15.5 11.9999 15.5Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 19.5H12.01M22.8064 8.70076C19.9595 6.09199 16.1656 4.5 11.9999 4.5C7.83414 4.5 4.04023 6.09199 1.19336 8.70076M4.73193 12.243C6.67006 10.5357 9.21407 9.5 12 9.5C14.7859 9.5 17.3299 10.5357 19.268 12.243M15.6983 15.7751C14.6792 14.9763 13.3952 14.5 11.9999 14.5C10.5835 14.5 9.28172 14.9908 8.25537 15.8116"
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
