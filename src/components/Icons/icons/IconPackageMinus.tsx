import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconPackageMinus = ({
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
              d="M16.0004 18C16.0004 17.4477 16.4481 17 17.0004 17H23.0004C23.5527 17 24.0004 17.4477 24.0004 18C24.0004 18.5523 23.5527 19 23.0004 19H17.0004C16.4481 19 16.0004 18.5523 16.0004 18Z"
              fill={color}
            />
            <path
              d="M11.5975 1.18505C11.8633 1.13038 12.1375 1.13038 12.4033 1.18505C12.7105 1.24824 12.9852 1.40207 13.2035 1.52436L13.263 1.55761C15.026 2.53701 18.0083 4.19466 19.6897 5.12926C20.0979 5.35619 20.302 5.46965 20.3702 5.61961C20.4297 5.75034 20.4301 5.90033 20.3713 6.03136C20.3038 6.18166 20.1001 6.29625 19.6927 6.52544L17.3636 7.83555L8.40075 2.85619L10.7377 1.55761L10.7972 1.52436C11.0156 1.40207 11.2902 1.24824 11.5975 1.18505Z"
              fill={color}
            />
            <path
              d="M6.34205 4.00039L15.3173 8.98661L12.3925 10.6318C12.2495 10.7122 12.1779 10.7525 12.1021 10.7683C12.035 10.7822 11.9657 10.7822 11.8986 10.7683C11.8227 10.7525 11.7512 10.7122 11.6081 10.6318L4.30805 6.52545C3.90061 6.29627 3.69689 6.18167 3.62944 6.03137C3.57064 5.90034 3.57102 5.75035 3.63048 5.61962C3.69869 5.46967 3.90282 5.3562 4.31106 5.12928L6.34205 4.00039Z"
              fill={color}
            />
            <path
              d="M21.9963 8.89013C21.9959 8.4418 21.9957 8.21764 21.9012 8.08675C21.8187 7.97256 21.6919 7.89845 21.5519 7.88267C21.3914 7.86457 21.1957 7.97469 20.8041 8.19493L13.4082 12.3552C13.2597 12.4387 13.1855 12.4805 13.1314 12.5395C13.0836 12.5918 13.0475 12.6536 13.0254 12.7209C13.0004 12.7969 13.0004 12.8821 13.0004 13.0524V21.2277C13.0004 21.6749 13.0004 21.8985 13.0944 22.0293C13.1764 22.1434 13.3027 22.2177 13.4423 22.234C13.6023 22.2527 13.7971 22.1445 14.1869 21.9281C14.2781 21.8775 14.3734 21.8246 14.4723 21.7696C14.9717 21.4923 15.2214 21.3537 15.29 21.2419C15.3729 21.107 15.3806 21.0707 15.3596 20.9138C15.3421 20.7839 15.096 20.4575 14.6037 19.8047C14.2249 19.3025 14.0004 18.6775 14.0004 18C14.0004 16.3431 15.3435 15 17.0004 15H21.1999C21.48 15 21.6201 15 21.7271 14.9455C21.8212 14.8975 21.8977 14.821 21.9456 14.7269C22.0001 14.6199 22 14.4799 21.9999 14.1999C21.9991 12.3812 21.9974 10.2465 21.9963 8.89013Z"
              fill={color}
            />
            <path
              d="M9.81387 21.9281C10.2036 22.1445 10.3985 22.2527 10.5584 22.234C10.698 22.2177 10.8243 22.1434 10.9063 22.0293C11.0004 21.8985 11.0004 21.6749 11.0004 21.2277V13.0525C11.0004 12.8821 11.0004 12.797 10.9754 12.7209C10.9533 12.6536 10.9171 12.5918 10.8693 12.5396C10.8153 12.4805 10.741 12.4387 10.5926 12.3552L3.1966 8.19496C2.80507 7.97472 2.6093 7.8646 2.44886 7.88269C2.30889 7.89848 2.18205 7.97259 2.09957 8.08677C2.00503 8.21766 2.00484 8.44183 2.00447 8.89017C2.00291 10.7563 2.00037 14.0956 2.00037 16.0586L2.00019 16.1308C1.99923 16.3946 1.99802 16.7264 2.10134 17.0391C2.19066 17.3095 2.33668 17.5576 2.52964 17.767C2.7528 18.0092 3.0434 18.1692 3.27452 18.2966L3.3377 18.3314C5.11889 19.321 8.14752 21.0028 9.81387 21.9281Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.5 7.27771L12 11.9999M12 11.9999L3.49997 7.27771M12 11.9999L12 21.5M14 20.8889L12.777 21.5683C12.4934 21.7258 12.3516 21.8046 12.2015 21.8355C12.0685 21.8628 11.9315 21.8628 11.7986 21.8355C11.6484 21.8046 11.5066 21.7258 11.223 21.5683L3.82297 17.4572C3.52346 17.2908 3.37368 17.2076 3.26463 17.0892C3.16816 16.9845 3.09515 16.8605 3.05048 16.7253C3 16.5725 3 16.4012 3 16.0585V7.94141C3 7.59877 3 7.42744 3.05048 7.27465C3.09515 7.13947 3.16816 7.01539 3.26463 6.9107C3.37368 6.79236 3.52345 6.70916 3.82297 6.54276L11.223 2.43165C11.5066 2.27409 11.6484 2.19531 11.7986 2.16442C11.9315 2.13709 12.0685 2.13709 12.2015 2.16442C12.3516 2.19531 12.4934 2.27409 12.777 2.43164L20.177 6.54276C20.4766 6.70916 20.6263 6.79236 20.7354 6.9107C20.8318 7.01539 20.9049 7.13947 20.9495 7.27464C21 7.42744 21 7.59876 21 7.94141V13M7.5 4.49996L16.5 9.49996M16 18H22"
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
