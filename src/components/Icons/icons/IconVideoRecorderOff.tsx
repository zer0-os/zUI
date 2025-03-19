import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconVideoRecorderOff = ({
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
              d="M21.5351 17.2924C21.9591 17.2826 22.3621 17.0931 22.6406 16.767C22.9198 16.4401 22.9642 16.0468 22.9811 15.8559C23.0001 15.642 23 15.3762 23 15.1059V8.89407C23 8.62371 23.0001 8.35791 22.9811 8.14396C22.9642 7.95307 22.9198 7.55981 22.6406 7.23287C22.3288 6.86775 21.861 6.67399 21.3823 6.71166C20.9537 6.7454 20.6442 6.99211 20.4973 7.11512C20.3326 7.253 20.1447 7.44092 19.9536 7.63212L18 9.58573C17.9998 8.85799 17.9968 8.25011 17.9558 7.74818C17.9099 7.18608 17.8113 6.66938 17.564 6.18404C17.1805 5.43139 16.5686 4.81947 15.816 4.43598C15.3306 4.18868 14.8139 4.09012 14.2518 4.04419C13.7106 3.99998 13.0463 3.99999 12.2413 4H8.24264L21.5351 17.2924Z"
              fill={color}
            />
            <path
              d="M2.70711 1.29289C2.31658 0.902369 1.68342 0.902369 1.29289 1.29289C0.90237 1.68342 0.90237 2.31658 1.29289 2.70711L3.07787 4.49209C2.37384 4.87784 1.80127 5.46709 1.43598 6.18403C1.18869 6.66937 1.09012 7.18607 1.0442 7.74817C0.999979 8.28935 0.999989 8.9537 1 9.75865V14.2413C0.999989 15.0462 0.999979 15.7106 1.0442 16.2518C1.09012 16.8139 1.18869 17.3306 1.43598 17.816C1.81947 18.5686 2.43139 19.1805 3.18404 19.564C3.66938 19.8113 4.18608 19.9099 4.74818 19.9558C5.28936 20 5.95371 20 6.75866 20H12.2413C13.0462 20 13.7106 20 14.2518 19.9558C14.8139 19.9099 15.3306 19.8113 15.816 19.564C16.317 19.3087 16.7557 18.9522 17.1061 18.5203L21.2929 22.7071C21.6834 23.0976 22.3166 23.0976 22.7071 22.7071C23.0976 22.3166 23.0976 21.6834 22.7071 21.2929L2.70711 1.29289Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5 5C3.34315 5 2 6.34315 2 8V16C2 17.6569 3.34315 19 5 19H14C15.3527 19 16.4962 18.1048 16.8705 16.8745M17 12L20.6343 8.36569C21.0627 7.93731 21.2769 7.72312 21.4608 7.70865C21.6203 7.69609 21.7763 7.76068 21.8802 7.88238C22 8.02265 22 8.32556 22 8.93137V15.0686C22 15.6744 22 15.9774 21.8802 16.1176C21.7763 16.2393 21.6203 16.3039 21.4608 16.2914C21.2769 16.2769 21.0627 16.0627 20.6343 15.6343L17 12ZM17 12V9.8C17 8.11984 17 7.27976 16.673 6.63803C16.3854 6.07354 15.9265 5.6146 15.362 5.32698C14.7202 5 13.8802 5 12.2 5H9.5M2 2L22 22"
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
