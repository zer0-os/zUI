import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconMap1 = ({
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
              d="M8 2.79822C8 2.34553 8 2.11918 7.9049 1.98792C7.82194 1.87342 7.69439 1.79939 7.55381 1.78417C7.39266 1.76673 7.19614 1.87903 6.80309 2.10363L1.50386 5.13176C1.19229 5.3098 1 5.64114 1 6V22C1 22.3565 1.18976 22.686 1.49807 22.8649C1.80639 23.0438 2.18664 23.0451 2.49614 22.8682L7.19382 20.1839C7.48744 20.0161 7.63425 19.9322 7.74106 19.8143C7.83556 19.71 7.90697 19.5869 7.95064 19.4531C8 19.3019 8 19.1328 8 18.7947L8 2.79822Z"
              fill={color}
            />
            <path
              d="M10 18.7947C10 19.1328 10 19.3019 10.0494 19.4531C10.093 19.5869 10.1644 19.71 10.2589 19.8143C10.3658 19.9322 10.5126 20.0161 10.8062 20.1839L13.8031 21.8964C14.1961 22.121 14.3927 22.2333 14.5538 22.2158C14.6944 22.2006 14.8219 22.1266 14.9049 22.0121C15 21.8808 15 21.6545 15 21.2018L15 5.20534C15 4.86716 15 4.69808 14.9506 4.54686C14.907 4.41306 14.8356 4.29 14.7411 4.1857C14.6342 4.06782 14.4874 3.98393 14.1938 3.81615L11.1969 2.10363C10.8039 1.87903 10.6073 1.76673 10.4462 1.78417C10.3056 1.79939 10.1781 1.87342 10.0951 1.98792C10 2.11918 10 2.34553 10 2.79822L10 18.7947Z"
              fill={color}
            />
            <path
              d="M23 2C23 1.63121 22.797 1.29235 22.4719 1.11833C22.1467 0.944308 21.7522 0.96338 21.4453 1.16795L17.7125 3.6565C17.452 3.83016 17.3217 3.91699 17.2275 4.03171C17.144 4.13327 17.0814 4.25029 17.0431 4.37608C17 4.51817 17 4.67471 17 4.98778L17 21.0404C17 21.526 17 21.7687 17.1012 21.9026C17.1894 22.0192 17.3243 22.0913 17.4702 22.1C17.6377 22.11 17.8397 21.9754 18.2438 21.706L22.5547 18.8321C22.8329 18.6466 23 18.3344 23 18V2Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9 18L2 22V6L9 2M9 18L16 22M9 18V2M16 22L22 18V2L16 6M16 22V6M16 6L9 2"
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
