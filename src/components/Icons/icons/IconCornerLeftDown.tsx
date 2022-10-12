import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconCornerLeftDown = ({
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
              d="M21 3H17.5556C15.913 2.99999 14.6191 2.99999 13.5778 3.08507C12.5154 3.17186 11.6283 3.35217 10.8221 3.76295C9.50493 4.43407 8.43407 5.50493 7.76296 6.82207C7.35217 7.62827 7.17187 8.51543 7.08507 9.57778C6.99999 10.6191 6.99999 11.913 7 13.5556L7 17.5858L3.70711 14.2929C3.31658 13.9024 2.68342 13.9024 2.29289 14.2929C1.90237 14.6834 1.90237 15.3166 2.29289 15.7071L7.29289 20.7071C7.68342 21.0976 8.31658 21.0976 8.70711 20.7071L13.7071 15.7071C14.0976 15.3166 14.0976 14.6834 13.7071 14.2929C13.3166 13.9024 12.6834 13.9024 12.2929 14.2929L9 17.5858L9 13.6C9 11.9033 9.00078 10.691 9.07843 9.74064C9.15512 8.80197 9.30179 8.20731 9.54497 7.73005C10.0243 6.78924 10.7892 6.02433 11.73 5.54497C12.2073 5.30179 12.802 5.15512 13.7406 5.07842C14.691 5.00078 15.9033 5 17.6 5L21 5C21.5523 5 22 4.55229 22 4C22 3.44772 21.5523 3 21 3Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21 4H17.6C14.2397 4 12.5595 4 11.2761 4.65396C10.1471 5.2292 9.2292 6.14708 8.65396 7.27606C8 8.55953 8 10.2397 8 13.6V20M8 20L13 15M8 20L3 15"
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
