import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconRefreshCw2 = ({
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
              d="M4.92889 4.92893C8.83414 1.02369 15.1658 1.02369 19.071 4.92893C19.8691 5.72704 20.5003 6.39522 21 6.95364V4C21 3.44772 21.4477 3 22 3C22.5523 3 23 3.44772 23 4V10C23 10.5523 22.5523 11 22 11H16C15.4477 11 15 10.5523 15 10C15 9.44772 15.4477 9 16 9H20.1257C19.6135 8.38281 18.8349 7.52125 17.6568 6.34315C14.5326 3.21895 9.4673 3.21895 6.34311 6.34315C5.23512 7.45114 4.52135 8.80057 4.199 10.2213C4.0768 10.7599 3.54111 11.0974 3.00252 10.9752C2.46392 10.853 2.12637 10.3173 2.24858 9.77873C2.65196 8.00086 3.54634 6.31149 4.92889 4.92893Z"
              fill={color}
            />
            <path
              d="M19.8009 13.7787C19.9231 13.2401 20.4588 12.9026 20.9974 13.0248C21.536 13.147 21.8736 13.6826 21.7514 14.2212C21.348 15.9991 20.4536 17.6885 19.071 19.071C15.1658 22.9763 8.83415 22.9763 4.92891 19.071C4.13113 18.2733 3.49992 17.6051 3 17.0464V20C3 20.5523 2.55228 21 2 21C1.44772 21 1 20.5523 1 20V14C1 13.4477 1.44772 13 2 13H8C8.55229 13 9 13.4477 9 14C9 14.5523 8.55229 15 8 15H3.87429C4.38583 15.6164 5.16421 16.4779 6.34312 17.6568C9.46732 20.781 14.5326 20.781 17.6568 17.6568C18.7648 16.5488 19.4786 15.1994 19.8009 13.7787Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2 14C2 14 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364C19.6092 17.1187 20.4133 15.5993 20.7762 14M2 14V20M2 14H8M22 10C22 10 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C4.39076 6.88131 3.58669 8.40072 3.22383 10M22 10V4M22 10H16"
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
