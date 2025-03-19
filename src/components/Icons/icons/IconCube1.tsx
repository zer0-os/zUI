import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconCube1 = ({
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
              d="M12.4033 1.18505C12.1375 1.13038 11.8633 1.13038 11.5975 1.18505C11.2902 1.24824 11.0156 1.40207 10.7972 1.52436L10.7377 1.55761C8.97477 2.53701 5.99246 4.19467 4.31106 5.12928C3.90282 5.3562 3.69869 5.46967 3.63048 5.61962C3.57102 5.75035 3.57064 5.90034 3.62944 6.03137C3.69689 6.18167 3.90061 6.29627 4.30805 6.52545L11.6081 10.6318C11.7512 10.7122 11.8227 10.7525 11.8986 10.7683C11.9657 10.7822 12.035 10.7822 12.1021 10.7683C12.1779 10.7525 12.2495 10.7122 12.3925 10.6318L19.6927 6.52544C20.1001 6.29625 20.3038 6.18166 20.3713 6.03136C20.4301 5.90033 20.4297 5.75034 20.3702 5.61961C20.302 5.46965 20.0979 5.35619 19.6897 5.12926C18.0083 4.19465 15.026 2.53701 13.263 1.55761L13.2035 1.52436C12.9852 1.40207 12.7105 1.24824 12.4033 1.18505Z"
              fill={color}
            />
            <path
              d="M21.9963 8.89015C21.9959 8.44181 21.9957 8.21764 21.9012 8.08675C21.8187 7.97256 21.6919 7.89845 21.5519 7.88267C21.3914 7.86457 21.1957 7.97469 20.8041 8.19493L13.4082 12.3552C13.2597 12.4387 13.1855 12.4805 13.1314 12.5395C13.0836 12.5918 13.0475 12.6536 13.0254 12.7209C13.0004 12.7969 13.0004 12.8821 13.0004 13.0524V21.2277C13.0004 21.6749 13.0004 21.8985 13.0944 22.0293C13.1764 22.1434 13.3027 22.2177 13.4423 22.234C13.6023 22.2527 13.7971 22.1445 14.1869 21.9281C15.8532 21.0028 18.8819 19.321 20.663 18.3314L20.7262 18.2966C20.9573 18.1693 21.2479 18.0092 21.4711 17.767C21.6641 17.5576 21.8101 17.3095 21.8994 17.0391C22.0027 16.7264 22.0015 16.3946 22.0005 16.1308L22.0004 16.0586C22.0004 14.0956 21.9978 10.7563 21.9963 8.89015Z"
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
              d="M20.5 7.27777L12 12M12 12L3.49997 7.27777M12 12L12 21.5M21 16.0586V7.94147C21 7.59883 21 7.4275 20.9495 7.27471C20.9049 7.13953 20.8318 7.01545 20.7354 6.91076C20.6263 6.79242 20.4766 6.70922 20.177 6.54282L12.777 2.43171C12.4934 2.27415 12.3516 2.19537 12.2015 2.16448C12.0685 2.13715 11.9315 2.13715 11.7986 2.16448C11.6484 2.19537 11.5066 2.27415 11.223 2.43171L3.82297 6.54282C3.52345 6.70922 3.37369 6.79242 3.26463 6.91076C3.16816 7.01545 3.09515 7.13953 3.05048 7.27471C3 7.42751 3 7.59883 3 7.94147V16.0586C3 16.4012 3 16.5725 3.05048 16.7253C3.09515 16.8605 3.16816 16.9846 3.26463 17.0893C3.37369 17.2076 3.52345 17.2908 3.82297 17.4572L11.223 21.5683C11.5066 21.7259 11.6484 21.8047 11.7986 21.8356C11.9315 21.8629 12.0685 21.8629 12.2015 21.8356C12.3516 21.8047 12.4934 21.7259 12.777 21.5683L20.177 17.4572C20.4766 17.2908 20.6263 17.2076 20.7354 17.0893C20.8318 16.9846 20.9049 16.8605 20.9495 16.7253C21 16.5725 21 16.4012 21 16.0586Z"
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
