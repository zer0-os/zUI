import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconLayerSingle = ({
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
              d="M11.7234 6.08474C11.9062 6.05045 12.0938 6.05045 12.2766 6.08474C12.493 6.12535 12.6861 6.22388 12.7794 6.27149C12.789 6.2764 12.7976 6.28076 12.805 6.28446L22.4472 11.1056C22.786 11.275 23 11.6212 23 12C23 12.3788 22.786 12.725 22.4472 12.8944L12.805 17.7155C12.7976 17.7193 12.789 17.7236 12.7794 17.7285C12.6861 17.7761 12.493 17.8747 12.2766 17.9153C12.0938 17.9496 11.9062 17.9496 11.7234 17.9153C11.507 17.8747 11.3139 17.7761 11.2206 17.7285C11.211 17.7236 11.2024 17.7192 11.195 17.7155L1.55279 12.8944C1.214 12.725 1 12.3788 1 12C1 11.6212 1.214 11.275 1.55279 11.1056L11.195 6.28446C11.2024 6.28076 11.211 6.27639 11.2206 6.27149C11.3139 6.22388 11.507 6.12535 11.7234 6.08474Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.3578 7.17889C12.2266 7.1133 12.161 7.0805 12.0922 7.0676C12.0313 7.05616 11.9687 7.05616 11.9078 7.0676C11.839 7.0805 11.7734 7.1133 11.6422 7.17889L2 12L11.6422 16.8211C11.7734 16.8867 11.839 16.9195 11.9078 16.9324C11.9687 16.9438 12.0313 16.9438 12.0922 16.9324C12.161 16.9195 12.2266 16.8867 12.3578 16.8211L22 12L12.3578 7.17889Z"
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
