import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconCoinsHand = ({
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
              d="M16.5 2C14.0147 2 12 4.01472 12 6.5C12 8.98528 14.0147 11 16.5 11C18.9853 11 21 8.98528 21 6.5C21 4.01472 18.9853 2 16.5 2Z"
              fill={color}
            />
            <path
              d="M12.0318 1.77926C10.7805 2.96399 10 4.64084 10 6.5C10 7.69709 10.3236 8.81861 10.8881 9.78183C10.4509 9.92346 9.98439 10 9.5 10C7.01472 10 5 7.98528 5 5.5C5 3.01472 7.01472 1 9.5 1C10.4388 1 11.3105 1.2875 12.0318 1.77926Z"
              fill={color}
            />
            <path
              d="M17.7089 15.8933C17.7089 16.6846 17.1855 17.3538 16.464 17.5775L16.9279 17.556C17.4349 17.556 17.9279 17.3966 18.333 17.1004L21.1619 15.0366C21.8679 14.5217 22.8561 14.5901 23.4802 15.1972C24.1734 15.8715 24.1734 16.9638 23.4802 17.6369L21.053 19.9981C20.3996 20.6336 19.5659 21.0676 18.6597 21.2441L15.229 21.9116C14.5487 22.0437 13.8473 22.0278 13.1741 21.8637L10.0712 21.1097C9.70002 21.0186 9.31948 20.973 8.9366 20.973C8.5301 20.973 8.32685 20.973 8.16378 20.9148C7.88133 20.814 7.65906 20.5917 7.55822 20.3093C7.5 20.1462 7.5 19.9429 7.5 19.5365V16.1073C7.5 15.8215 7.5 15.6786 7.5367 15.5469C7.56921 15.4302 7.62265 15.3204 7.69441 15.2228C7.77541 15.1127 7.88788 15.0245 8.11281 14.8482L9.2984 13.9186C9.2984 13.9186 11.2632 13 12.3486 13C12.7982 13 13.2455 13.0547 13.6822 13.163L16.3659 13.8301C17.1551 14.0258 17.7089 14.7313 17.7089 15.5405V15.8933Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.47354 13C3.48235 13 3.49117 13 3.5 13C3.50884 13 3.51766 13 3.52648 13C3.73652 13 3.94115 12.9999 4.11523 13.0118C4.3056 13.0248 4.53133 13.0553 4.76537 13.1522C5.25543 13.3552 5.64477 13.7446 5.84776 14.2346C5.94471 14.4687 5.97518 14.6944 5.98817 14.8848C6.00005 15.0588 6.00003 15.2635 6.00001 15.4735C6 15.4823 6 15.4912 6 15.5L6.00001 20.5265C6.00003 20.7365 6.00005 20.9411 5.98817 21.1152C5.97518 21.3056 5.94471 21.5313 5.84776 21.7654C5.64477 22.2554 5.25543 22.6448 4.76537 22.8477C4.53133 22.9447 4.3056 22.9752 4.11523 22.9882C3.94115 23 3.73653 23 3.52648 23H3.47352C3.26348 23 3.05886 23 2.88478 22.9882C2.6944 22.9752 2.46868 22.9447 2.23464 22.8477C1.74458 22.6448 1.35523 22.2554 1.15224 21.7654C1.0553 21.5313 1.02483 21.3056 1.01184 21.1152C0.99996 20.9411 0.999981 20.7365 1 20.5265L1 15.5C1 15.4912 1 15.4823 1 15.4735C0.999981 15.2635 0.99996 15.0588 1.01184 14.8848C1.02483 14.6944 1.0553 14.4687 1.15224 14.2346C1.35523 13.7446 1.74458 13.3552 2.23464 13.1522C2.46868 13.0553 2.69441 13.0248 2.88478 13.0118C3.05886 12.9999 3.26349 13 3.47354 13Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.5295 8.35186C12.9571 8.75995 12.2566 9 11.5 9C9.567 9 8 7.433 8 5.5C8 3.567 9.567 2 11.5 2C12.753 2 13.8522 2.65842 14.4705 3.64814M6 20.0872H8.61029C8.95063 20.0872 9.28888 20.1277 9.61881 20.2086L12.3769 20.8789C12.9753 21.0247 13.5988 21.0388 14.2035 20.9214L17.253 20.3281C18.0585 20.1712 18.7996 19.7854 19.3803 19.2205L21.5379 17.1217C22.154 16.5234 22.154 15.5524 21.5379 14.9531C20.9832 14.4134 20.1047 14.3527 19.4771 14.8103L16.9626 16.6449C16.6025 16.9081 16.1643 17.0498 15.7137 17.0498H13.2855L14.8311 17.0498C15.7022 17.0498 16.4079 16.3633 16.4079 15.5159V15.2091C16.4079 14.5055 15.9156 13.892 15.2141 13.7219L12.8286 13.1417C12.4404 13.0476 12.0428 13 11.6431 13C10.6783 13 8.93189 13.7988 8.93189 13.7988L6 15.0249M20 6.5C20 8.433 18.433 10 16.5 10C14.567 10 13 8.433 13 6.5C13 4.567 14.567 3 16.5 3C18.433 3 20 4.567 20 6.5ZM2 14.6L2 20.4C2 20.9601 2 21.2401 2.10899 21.454C2.20487 21.6422 2.35785 21.7951 2.54601 21.891C2.75992 22 3.03995 22 3.6 22H4.4C4.96005 22 5.24008 22 5.45399 21.891C5.64215 21.7951 5.79513 21.6422 5.89101 21.454C6 21.2401 6 20.9601 6 20.4V14.6C6 14.0399 6 13.7599 5.89101 13.546C5.79513 13.3578 5.64215 13.2049 5.45399 13.109C5.24008 13 4.96005 13 4.4 13L3.6 13C3.03995 13 2.75992 13 2.54601 13.109C2.35785 13.2049 2.20487 13.3578 2.10899 13.546C2 13.7599 2 14.0399 2 14.6Z"
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
