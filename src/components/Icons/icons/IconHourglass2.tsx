import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconHourglass2 = ({
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
              d="M15.4142 12L16.7637 10.6505C18.8359 8.57833 20 5.7679 20 2.83744C20 1.82265 19.1773 1 18.1626 1H5.83744C4.82265 1 4 1.82265 4 2.83744C4 5.7679 5.16412 8.57833 7.23627 10.6505L8.58579 12L7.23627 13.3495C5.16412 15.4217 4 18.2321 4 21.1626C4 22.1773 4.82265 23 5.83744 23H18.1626C19.1773 23 20 22.1773 20 21.1626C20 18.2321 18.8359 15.4217 16.7637 13.3495L15.4142 12ZM13 10.999C13.1756 10.9991 13.2635 10.9991 13.3534 10.9826C13.4875 10.9579 13.6273 10.9001 13.7396 10.8227C13.8149 10.7709 13.8766 10.7092 14 10.5858L15.3495 9.23627C16.6208 7.96499 17.4748 6.3544 17.8233 4.61737C17.9152 4.15932 17.9611 3.93029 17.8724 3.67346C17.8026 3.47154 17.6175 3.24563 17.4333 3.13752C17.1989 3 16.9225 3 16.3696 3H7.63043C7.07753 3 6.80108 3 6.56672 3.13752C6.38247 3.24563 6.19738 3.47154 6.12762 3.67346C6.03889 3.93029 6.08484 4.15932 6.17674 4.61737C6.52523 6.3544 7.3792 7.96499 8.65048 9.23627L10 10.5858C10.122 10.7078 10.183 10.7688 10.2572 10.8202C10.3706 10.8987 10.5114 10.957 10.647 10.9818C10.7357 10.9979 10.8226 10.998 10.9962 10.998L13 10.999Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.1626 2H5.83744C5.37494 2 5 2.37494 5 2.83744C5 5.50268 6.05876 8.05876 7.94337 9.94337L9.16256 11.1626C9.28363 11.2836 9.34417 11.3442 9.3875 11.4023C9.65188 11.7569 9.65188 12.2431 9.3875 12.5977C9.34417 12.6558 9.28363 12.7164 9.16256 12.8374L7.94337 14.0566C6.05876 15.9412 5 18.4973 5 21.1626C5 21.6251 5.37494 22 5.83744 22H18.1626C18.6251 22 19 21.6251 19 21.1626C19 18.4973 17.9412 15.9412 16.0566 14.0566L14.8374 12.8374C14.7164 12.7164 14.6558 12.6558 14.6125 12.5977C14.3481 12.2431 14.3481 11.7569 14.6125 11.4023C14.6558 11.3442 14.7164 11.2836 14.8374 11.1626L16.0566 9.94337C17.9412 8.05876 19 5.50268 19 2.83744C19 2.37494 18.6251 2 18.1626 2Z"
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
