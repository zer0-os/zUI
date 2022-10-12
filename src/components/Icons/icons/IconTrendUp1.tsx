import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconTrendUp1 = ({
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
              d="M15 6C14.4477 6 14 6.44772 14 7C14 7.55228 14.4477 8 15 8H19.5858L13.4243 14.1615C13.2146 14.3712 13.0993 14.4854 13.0101 14.5611L13 14.5696L12.9899 14.5611C12.9007 14.4854 12.7854 14.3712 12.5757 14.1615L9.81592 11.4017C9.6375 11.2232 9.4637 11.0494 9.30449 10.9142C9.12964 10.7658 8.90775 10.6062 8.61803 10.5121C8.21635 10.3816 7.78365 10.3816 7.38197 10.5121C7.09225 10.6062 6.87036 10.7658 6.69551 10.9142C6.5363 11.0494 6.36252 11.2232 6.18409 11.4017L1.29289 16.2929C0.902369 16.6834 0.902369 17.3166 1.29289 17.7071C1.68342 18.0976 2.31658 18.0976 2.70711 17.7071L7.57574 12.8385C7.78541 12.6288 7.90069 12.5146 7.98987 12.4389L8 12.4304L8.01013 12.4389C8.09931 12.5146 8.21459 12.6288 8.42426 12.8385L11.1841 15.5983C11.3625 15.7768 11.5363 15.9506 11.6955 16.0858C11.8704 16.2342 12.0922 16.3938 12.382 16.4879C12.7837 16.6184 13.2163 16.6184 13.618 16.4879C13.9078 16.3938 14.1296 16.2342 14.3045 16.0858C14.4637 15.9506 14.6375 15.7768 14.8159 15.5983L21 9.41421V14C21 14.5523 21.4477 15 22 15C22.5523 15 23 14.5523 23 14V7C23 6.44772 22.5523 6 22 6H15Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22 7L14.1314 14.8686C13.7354 15.2646 13.5373 15.4627 13.309 15.5368C13.1082 15.6021 12.8918 15.6021 12.691 15.5368C12.4627 15.4627 12.2646 15.2646 11.8686 14.8686L9.13137 12.1314C8.73535 11.7354 8.53735 11.5373 8.30902 11.4632C8.10817 11.3979 7.89183 11.3979 7.69098 11.4632C7.46265 11.5373 7.26465 11.7354 6.86863 12.1314L2 17M22 7H15M22 7V14"
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
