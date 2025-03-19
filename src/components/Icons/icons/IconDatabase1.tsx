import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconDatabase1 = ({
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
              d="M2.41485 13.5C2.53486 13.5 2.64799 13.553 2.73191 13.6387C2.84321 13.7525 2.96138 13.8572 3.08206 13.9528C3.66091 14.4115 4.43712 14.7802 5.30833 15.071C7.06109 15.6562 9.42324 16 12 16C14.5768 16 16.9389 15.6562 18.6917 15.071C19.5629 14.7802 20.3391 14.4115 20.9179 13.9528C21.0386 13.8572 21.1568 13.7525 21.2681 13.6387C21.352 13.553 21.4651 13.5 21.5851 13.5C21.8143 13.5 22 13.6857 22 13.9149V19C22 19.8494 21.4868 20.502 20.9179 20.9528C20.3391 21.4115 19.5629 21.7802 18.6917 22.071C16.9389 22.6562 14.5768 23 12 23C9.42324 23 7.06109 22.6562 5.30833 22.071C4.43712 21.7802 3.66091 21.4115 3.08206 20.9528C2.51319 20.502 2 19.8494 2 19V13.9149C2 13.6857 2.18574 13.5 2.41485 13.5Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.9117 3.04685C21.4811 3.49559 22 4.14805 22 5V10C22 10.8494 21.4868 11.502 20.9179 11.9528C20.3391 12.4115 19.5629 12.7802 18.6917 13.071C16.9389 13.6562 14.5768 14 12 14C9.42324 14 7.06109 13.6562 5.30833 13.071C4.43712 12.7802 3.66091 12.4115 3.08206 11.9528C2.51319 11.502 2 10.8494 2 10V5C2 4.14805 2.51889 3.49559 3.08829 3.04685C3.66896 2.58923 4.44724 2.22085 5.31981 1.93C7.07541 1.3448 9.43715 1 12 1C14.5629 1 16.9246 1.3448 18.6802 1.93C19.5528 2.22085 20.331 2.58923 20.9117 3.04685ZM4 4.99994C4 4.99994 3.99998 4.99479 4.00305 4.98471C4.00645 4.97356 4.01483 4.95155 4.03507 4.91857C4.07752 4.84943 4.16408 4.74547 4.32624 4.61768C4.65642 4.35747 5.19616 4.0794 5.95227 3.82736C7.45402 3.32678 9.59229 3 12 3C14.4077 3 16.546 3.32678 18.0477 3.82736C18.8038 4.0794 19.3436 4.35747 19.6738 4.61768C19.8359 4.74547 19.9225 4.84943 19.9649 4.91857C19.9852 4.95155 19.9935 4.97356 19.9969 4.98471C20 4.99479 20 5.00022 20 5.00022C20 5.00022 19.9999 5.00571 19.9969 5.01529C19.9935 5.02644 19.9852 5.04845 19.9649 5.08143C19.9225 5.15057 19.8359 5.25453 19.6738 5.38232C19.3436 5.64253 18.8038 5.9206 18.0477 6.17264C16.546 6.67322 14.4077 7 12 7C9.59229 7 7.45402 6.67322 5.95227 6.17264C5.19616 5.9206 4.65642 5.64253 4.32624 5.38232C4.16408 5.25453 4.07752 5.15057 4.03507 5.08143C4.01483 5.04845 4.00645 5.02644 4.00305 5.01529C4.00018 5.00584 4 4.99994 4 4.99994Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21 5C21 6.65685 16.9706 8 12 8C7.02944 8 3 6.65685 3 5M21 5C21 3.34315 16.9706 2 12 2C7.02944 2 3 3.34315 3 5M21 5V19C21 20.66 17 22 12 22C7 22 3 20.66 3 19V5M21 12C21 13.66 17 15 12 15C7 15 3 13.66 3 12"
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
