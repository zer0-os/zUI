import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconCornerRightDown = ({
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
              d="M6.4 5C8.09666 5 9.30901 5.00078 10.2594 5.07842C11.198 5.15512 11.7927 5.30179 12.27 5.54497C13.2108 6.02433 13.9757 6.78924 14.455 7.73005C14.6982 8.20731 14.8449 8.80197 14.9216 9.74064C14.9992 10.691 15 11.9033 15 13.6L15 17.5858L11.7071 14.2929C11.3166 13.9024 10.6834 13.9024 10.2929 14.2929C9.90237 14.6834 9.90237 15.3166 10.2929 15.7071L15.2929 20.7071C15.6834 21.0976 16.3166 21.0976 16.7071 20.7071L21.7071 15.7071C22.0976 15.3166 22.0976 14.6834 21.7071 14.2929C21.3166 13.9024 20.6834 13.9024 20.2929 14.2929L17 17.5858L17 13.5556C17 11.913 17 10.6191 16.9149 9.57778C16.8281 8.51543 16.6478 7.62827 16.237 6.82207C15.5659 5.50493 14.4951 4.43407 13.1779 3.76295C12.3717 3.35217 11.4846 3.17186 10.4222 3.08507C9.38091 2.99999 8.08696 2.99999 6.44441 3H3C2.44772 3 2 3.44772 2 4C2 4.55229 2.44772 5 3 5L6.4 5Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 4H6.4C9.76031 4 11.4405 4 12.7239 4.65396C13.8529 5.2292 14.7708 6.14708 15.346 7.27606C16 8.55953 16 10.2397 16 13.6L16 20M16 20L11 15M16 20L21 15"
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
