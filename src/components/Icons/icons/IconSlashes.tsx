import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconSlashes = ({
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
          <svg width={size} height={size} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.008 1.85805C13.6388 2.13843 13.923 2.87713 13.6426 3.50799L5.64258 21.508C5.3622 22.1388 4.62349 22.423 3.99264 22.1426C3.36178 21.8622 3.07767 21.1235 3.35805 20.4926L11.358 2.49264C11.6384 1.86178 12.3771 1.57767 13.008 1.85805ZM21.008 1.85805C21.6388 2.13843 21.923 2.87713 21.6426 3.50799L13.6426 21.508C13.3622 22.1388 12.6235 22.423 11.9926 22.1426C11.3618 21.8622 11.0777 21.1235 11.358 20.4926L19.358 2.49264C19.6384 1.86178 20.3771 1.57767 21.008 1.85805Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.8048 2.31483C13.1833 2.48306 13.3538 2.92628 13.1855 3.30479L5.18555 21.3048C5.01732 21.6833 4.5741 21.8538 4.19558 21.6855C3.81707 21.5173 3.6466 21.0741 3.81483 20.6956L11.8148 2.69558C11.9831 2.31707 12.4263 2.1466 12.8048 2.31483Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.8048 2.31483C21.1833 2.48306 21.3538 2.92628 21.1855 3.30479L13.1855 21.3048C13.0173 21.6833 12.5741 21.8538 12.1956 21.6855C11.8171 21.5173 11.6466 21.0741 11.8148 20.6956L19.8148 2.69558C19.9831 2.31707 20.4263 2.1466 20.8048 2.31483Z"
              fill={color}
            />
          </svg>
        )}
      </AccessibleIcon.Root>
    </div>
  );
};
