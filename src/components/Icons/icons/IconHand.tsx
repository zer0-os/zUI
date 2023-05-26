import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconHand = ({
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
              d="M12 3C11.5946 3 11.3 3.31705 11.3 3.66667V10.8889C11.3 11.4412 10.8523 11.8889 10.3 11.8889C9.74772 11.8889 9.3 11.4412 9.3 10.8889V4.77778C9.3 4.42816 9.00536 4.11111 8.6 4.11111C8.19464 4.11111 7.9 4.42816 7.9 4.77778V14.2222C7.9 14.7745 7.45228 15.2222 6.9 15.2222C6.34772 15.2222 5.9 14.7745 5.9 14.2222V11.4444C5.9 11.0948 5.60536 10.7778 5.2 10.7778C4.79464 10.7778 4.5 11.0948 4.5 11.4444V13.6667C4.5 17.6982 7.8391 21 12 21C16.1609 21 19.5 17.6982 19.5 13.6667V8.11111C19.5 7.7615 19.2054 7.44444 18.8 7.44444C18.3946 7.44444 18.1 7.7615 18.1 8.11111V10.8889C18.1 11.4412 17.6523 11.8889 17.1 11.8889C16.5477 11.8889 16.1 11.4412 16.1 10.8889V4.77778C16.1 4.42816 15.8054 4.11111 15.4 4.11111C14.9946 4.11111 14.7 4.42816 14.7 4.77778V10.8889C14.7 11.4412 14.2523 11.8889 13.7 11.8889C13.1477 11.8889 12.7 11.4412 12.7 10.8889V3.66667C12.7 3.31705 12.4054 3 12 3ZM14.3358 2.32694C13.865 1.52874 12.9876 1 12 1C11.0124 1 10.135 1.52874 9.66422 2.32694C9.33639 2.18783 8.97618 2.11111 8.6 2.11111C7.12759 2.11111 5.9 3.28644 5.9 4.77778V8.86873C5.67613 8.80936 5.44135 8.77778 5.2 8.77778C3.72759 8.77778 2.5 9.95311 2.5 11.4444V13.6667C2.5 18.8399 6.77206 23 12 23C17.2279 23 21.5 18.8399 21.5 13.6667V8.11111C21.5 6.61978 20.2724 5.44444 18.8 5.44444C18.5586 5.44444 18.3239 5.47603 18.1 5.5354V4.77778C18.1 3.28644 16.8724 2.11111 15.4 2.11111C15.0238 2.11111 14.6636 2.18783 14.3358 2.32694Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.9 11.4444V14.2222M6.9 11.4444V4.77778C6.9 3.8573 7.66112 3.11111 8.6 3.11111C9.53888 3.11111 10.3 3.8573 10.3 4.77778M6.9 11.4444C6.9 10.524 6.13888 9.77778 5.2 9.77778C4.26112 9.77778 3.5 10.524 3.5 11.4444V13.6667C3.5 18.269 7.30558 22 12 22C16.6944 22 20.5 18.269 20.5 13.6667V8.11111C20.5 7.19064 19.7389 6.44444 18.8 6.44444C17.8611 6.44444 17.1 7.19064 17.1 8.11111M10.3 4.77778V10.8889M10.3 4.77778V3.66667C10.3 2.74619 11.0611 2 12 2C12.9389 2 13.7 2.74619 13.7 3.66667V4.77778M13.7 4.77778V10.8889M13.7 4.77778C13.7 3.8573 14.4611 3.11111 15.4 3.11111C16.3389 3.11111 17.1 3.8573 17.1 4.77778V8.11111M17.1 8.11111V10.8889"
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
