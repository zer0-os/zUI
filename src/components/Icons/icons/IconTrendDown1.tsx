import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconTrendDown1 = ({
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
              d="M2.70711 6.29289C2.31658 5.90237 1.68342 5.90237 1.29289 6.29289C0.902369 6.68342 0.902369 7.31658 1.29289 7.70711L6.18407 12.5983C6.36251 12.7768 6.53629 12.9506 6.69551 13.0858C6.87036 13.2342 7.09225 13.3938 7.38197 13.4879C7.78365 13.6184 8.21635 13.6184 8.61803 13.4879C8.90775 13.3938 9.12964 13.2342 9.30449 13.0858C9.4637 12.9506 9.63748 12.7768 9.81592 12.5983L12.5757 9.83848C12.7854 9.6288 12.9007 9.51462 12.9899 9.43892L13 9.4304L13.0101 9.43892C13.0993 9.51462 13.2146 9.6288 13.4243 9.83848L19.5858 16H15C14.4477 16 14 16.4477 14 17C14 17.5523 14.4477 18 15 18H22C22.5523 18 23 17.5523 23 17V10C23 9.44772 22.5523 9 22 9C21.4477 9 21 9.44772 21 10V14.5858L14.8159 8.40171C14.6375 8.22323 14.4637 8.0494 14.3045 7.91424C14.1296 7.76581 13.9078 7.60624 13.618 7.5121C13.2163 7.38158 12.7837 7.38158 12.382 7.5121C12.0922 7.60624 11.8704 7.76581 11.6955 7.91424C11.5363 8.04939 11.3625 8.2232 11.1841 8.40166L8.42426 11.1615C8.21459 11.3712 8.09931 11.4854 8.01013 11.5611L8 11.5696L7.98987 11.5611C7.90069 11.4854 7.78541 11.3712 7.57574 11.1615L2.70711 6.29289Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22 17L14.1314 9.13137C13.7354 8.73535 13.5373 8.53735 13.309 8.46316C13.1082 8.3979 12.8918 8.3979 12.691 8.46316C12.4627 8.53735 12.2646 8.73535 11.8686 9.13137L9.13137 11.8686C8.73535 12.2646 8.53735 12.4627 8.30902 12.5368C8.10817 12.6021 7.89183 12.6021 7.69098 12.5368C7.46265 12.4627 7.26465 12.2646 6.86863 11.8686L2 7M22 17H15M22 17V10"
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
