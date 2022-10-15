import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconGift1 = ({
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
              d="M5.66953 5C5.55821 4.68133 5.5 4.34339 5.5 4C5.5 3.21011 5.80801 2.44902 6.36188 1.88508C6.91635 1.32053 7.67224 1 8.46429 1C10.259 1 11.3725 2.21846 12 3.27224C12.6275 2.21846 13.741 1 15.5357 1C16.3278 1 17.0837 1.32053 17.6381 1.88508C18.192 2.44902 18.5 3.21011 18.5 4C18.5 4.34339 18.4418 4.68133 18.3305 5L20.5265 5C20.7365 4.99998 20.9412 4.99996 21.1152 5.01184C21.3056 5.02483 21.5313 5.0553 21.7654 5.15225C22.2554 5.35524 22.6448 5.74458 22.8478 6.23464C22.9447 6.46868 22.9752 6.69441 22.9882 6.88478C23.0001 7.05876 23 7.26342 23 7.47333V7.52668C23 7.73658 23.0001 7.94126 22.9882 8.11523C22.9752 8.3056 22.9447 8.53133 22.8478 8.76537C22.6448 9.25543 22.2554 9.64478 21.7654 9.84776C21.5313 9.94471 21.3056 9.97518 21.1152 9.98817C20.9412 10 20.7366 10 20.5265 10H3.47353C3.26348 10 3.05886 10 2.88478 9.98817C2.69441 9.97518 2.46868 9.94471 2.23464 9.84776C1.74458 9.64478 1.35524 9.25543 1.15225 8.76537C1.0553 8.53133 1.02483 8.3056 1.01184 8.11523C0.999969 7.94121 0.999985 7.73659 1 7.52663V7.47344C0.999985 7.26348 0.999969 7.0588 1.01184 6.88478C1.02483 6.69441 1.0553 6.46868 1.15225 6.23464C1.35524 5.74458 1.74458 5.35524 2.23464 5.15225C2.46868 5.0553 2.69441 5.02483 2.88478 5.01184C3.05882 4.99997 3.26355 4.99998 3.47354 5L5.66953 5ZM8.46429 3C8.21442 3 7.97106 3.1009 7.78878 3.28649C7.60589 3.4727 7.5 3.72903 7.5 4C7.5 4.27097 7.60589 4.5273 7.78878 4.71351C7.97106 4.8991 8.21442 5 8.46429 5H10.6343C10.5619 4.82865 10.4786 4.65116 10.3836 4.47527C9.89769 3.57581 9.27397 3 8.46429 3ZM13.3658 5C13.4381 4.82865 13.5214 4.65116 13.6165 4.47527C14.1023 3.57581 14.726 3 15.5357 3C15.7856 3 16.029 3.1009 16.2112 3.28649C16.3941 3.4727 16.5 3.72903 16.5 4C16.5 4.27097 16.3941 4.5273 16.2112 4.71351C16.029 4.8991 15.7856 5 15.5357 5H13.3658Z"
              fill={color}
            />
            <path
              d="M3.00001 13C3.00001 12.4477 3.44772 12 4.00001 12H10.2C10.48 12 10.62 12 10.727 12.0545C10.8211 12.1024 10.8976 12.1789 10.9455 12.273C11 12.38 11 12.52 11 12.8V22.2C11 22.48 11 22.62 10.9455 22.727C10.8976 22.8211 10.8211 22.8976 10.727 22.9455C10.62 23 10.48 23 10.2 23H7.16136C6.63432 23 6.17949 23 5.80498 22.9694C5.40963 22.9371 5.01641 22.8658 4.63803 22.673C4.07355 22.3854 3.61461 21.9265 3.32699 21.362C3.13419 20.9836 3.06288 20.5904 3.03058 20.195C2.99997 19.8205 2.99999 19.3657 3.00001 18.8385L3.00001 13Z"
              fill={color}
            />
            <path
              d="M18.195 22.9694C17.8205 23 17.3657 23 16.8385 23H13.8C13.52 23 13.38 23 13.273 22.9455C13.1789 22.8976 13.1024 22.8211 13.0545 22.727C13 22.62 13 22.48 13 22.2V12.8C13 12.52 13 12.38 13.0545 12.273C13.1024 12.1789 13.1789 12.1024 13.273 12.0545C13.38 12 13.52 12 13.8 12H20C20.5523 12 21 12.4477 21 13V18.8386C21 19.3657 21 19.8205 20.9694 20.195C20.9371 20.5904 20.8658 20.9836 20.673 21.362C20.3854 21.9265 19.9265 22.3854 19.362 22.673C18.9836 22.8658 18.5904 22.9371 18.195 22.9694Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 6V22M12 6H8.46429C7.94332 6 7.4437 5.78929 7.07533 5.41421C6.70695 5.03914 6.5 4.53043 6.5 4C6.5 3.46957 6.70695 2.96086 7.07533 2.58579C7.4437 2.21071 7.94332 2 8.46429 2C11.2143 2 12 6 12 6ZM12 6H15.5357C16.0567 6 16.5563 5.78929 16.9247 5.41421C17.293 5.03914 17.5 4.53043 17.5 4C17.5 3.46957 17.293 2.96086 16.9247 2.58579C16.5563 2.21071 16.0567 2 15.5357 2C12.7857 2 12 6 12 6ZM20 11V18.8C20 19.9201 20 20.4802 19.782 20.908C19.5903 21.2843 19.2843 21.5903 18.908 21.782C18.4802 22 17.9201 22 16.8 22L7.2 22C6.07989 22 5.51984 22 5.09202 21.782C4.71569 21.5903 4.40973 21.2843 4.21799 20.908C4 20.4802 4 19.9201 4 18.8V11M2 7.6L2 9.4C2 9.96005 2 10.2401 2.10899 10.454C2.20487 10.6422 2.35785 10.7951 2.54601 10.891C2.75992 11 3.03995 11 3.6 11L20.4 11C20.9601 11 21.2401 11 21.454 10.891C21.6422 10.7951 21.7951 10.6422 21.891 10.454C22 10.2401 22 9.96005 22 9.4V7.6C22 7.03995 22 6.75992 21.891 6.54601C21.7951 6.35785 21.6422 6.20487 21.454 6.10899C21.2401 6 20.9601 6 20.4 6L3.6 6C3.03995 6 2.75992 6 2.54601 6.10899C2.35785 6.20487 2.20487 6.35785 2.10899 6.54601C2 6.75992 2 7.03995 2 7.6Z"
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