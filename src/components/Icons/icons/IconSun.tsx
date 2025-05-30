import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconSun = ({
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
              d="M13 2C13 1.44772 12.5523 1 12 1C11.4477 1 11 1.44772 11 2V4C11 4.55228 11.4477 5 12 5C12.5523 5 13 4.55228 13 4V2Z"
              fill={color}
            />
            <path
              d="M13 20C13 19.4477 12.5523 19 12 19C11.4477 19 11 19.4477 11 20V22C11 22.5523 11.4477 23 12 23C12.5523 23 13 22.5523 13 22V20Z"
              fill={color}
            />
            <path
              d="M1 12C1 11.4477 1.44772 11 2 11H4C4.55228 11 5 11.4477 5 12C5 12.5523 4.55228 13 4 13H2C1.44772 13 1 12.5523 1 12Z"
              fill={color}
            />
            <path
              d="M5.60701 4.1928C5.21649 3.80227 4.58332 3.80227 4.1928 4.1928C3.80227 4.58332 3.80227 5.21649 4.1928 5.60701L5.60701 7.02122C5.99753 7.41175 6.6307 7.41175 7.02122 7.02122C7.41175 6.6307 7.41175 5.99753 7.02122 5.60701L5.60701 4.1928Z"
              fill={color}
            />
            <path
              d="M19.8072 4.1928C20.1978 4.58332 20.1978 5.21649 19.8072 5.60701L18.393 7.02122C18.0025 7.41175 17.3693 7.41175 16.9788 7.02122C16.5883 6.6307 16.5883 5.99753 16.9788 5.60701L18.393 4.1928C18.7835 3.80227 19.4167 3.80227 19.8072 4.1928Z"
              fill={color}
            />
            <path
              d="M7.02122 18.397C7.41175 18.0065 7.41175 17.3734 7.02122 16.9828C6.6307 16.5923 5.99753 16.5923 5.60701 16.9828L4.1928 18.397C3.80227 18.7876 3.80227 19.4207 4.1928 19.8113C4.58332 20.2018 5.21649 20.2018 5.60701 19.8113L7.02122 18.397Z"
              fill={color}
            />
            <path
              d="M16.9788 16.9828C17.3693 16.5923 18.0025 16.5923 18.393 16.9828L19.8072 18.397C20.1978 18.7876 20.1978 19.4207 19.8072 19.8113C19.4167 20.2018 18.7835 20.2018 18.393 19.8113L16.9788 18.397C16.5883 18.0065 16.5883 17.3734 16.9788 16.9828Z"
              fill={color}
            />
            <path
              d="M20 11C19.4477 11 19 11.4477 19 12C19 12.5523 19.4477 13 20 13H22C22.5523 13 23 12.5523 23 12C23 11.4477 22.5523 11 22 11H20Z"
              fill={color}
            />
            <path
              d="M12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
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
