import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconUsersEdit = ({
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
              d="M18.7931 11.2929C19.7359 10.3501 21.2645 10.3501 22.2074 11.2928C23.1502 12.2357 23.1502 13.7643 22.2074 14.7072C19.9794 16.9351 17.747 19.1587 15.5235 21.391C15.4244 21.4905 15.2996 21.6159 15.1513 21.7192C15.0226 21.809 14.8837 21.8834 14.7375 21.9407C14.5539 22.0127 14.3641 22.047 14.2213 22.0756L12.1962 22.4806C11.8684 22.5462 11.5294 22.4435 11.293 22.2071C11.0566 21.9706 10.954 21.6317 11.0195 21.3038C11.157 20.6166 11.2958 19.9296 11.4319 19.2421C11.4592 19.1044 11.4936 18.9309 11.5596 18.7627C11.6169 18.6165 11.6912 18.4777 11.781 18.3489C11.8844 18.2007 12.0097 18.0759 12.1092 17.9768C14.3416 15.7532 16.5652 13.5208 18.7931 11.2929Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.18124 14.1635C8.46348 14.3073 8.69295 14.5368 8.83676 14.819C8.98983 15.1194 9.00038 15.4476 9.00026 15.7769C9.00025 15.7847 9.00025 15.7924 9.00025 15.8C9.00025 17.2744 8.99972 18.7488 9.00026 20.2231C9.0003 20.3422 9.00036 20.4845 8.99012 20.6098C8.97825 20.755 8.94781 20.963 8.83676 21.181C8.69295 21.4632 8.46348 21.6927 8.18124 21.8365C7.96329 21.9476 7.7553 21.978 7.61008 21.9899C7.48476 22.0001 7.34251 22.0001 7.22339 22H2.77706C2.6578 22.0001 2.51523 22.0001 2.3896 21.9898C2.24388 21.9778 2.03547 21.9472 1.81719 21.8356C1.53459 21.6911 1.30452 21.46 1.16133 21.1767C1.05103 20.9585 1.02112 20.7506 1.00975 20.6046C0.999981 20.4791 1.00069 20.3369 1.00127 20.2185C1.00643 19.1792 0.975447 18.0653 1.38085 17.0866C1.88832 15.8614 2.86169 14.8881 4.08683 14.3806C4.59653 14.1695 5.13481 14.0819 5.74356 14.0404L7.22339 14C7.55265 13.9999 7.88082 14.0104 8.18124 14.1635Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.5733 2.91554C14.7805 2.40361 15.3635 2.1566 15.8755 2.36382C17.706 3.10481 19.0003 4.90006 19.0003 7C19.0003 9.09994 17.706 10.8952 15.8755 11.6362C15.3635 11.8434 14.7805 11.5964 14.5733 11.0845C14.3661 10.5725 14.6131 9.98953 15.125 9.7823C16.2263 9.33652 17.0003 8.25744 17.0003 7C17.0003 5.74256 16.2263 4.66348 15.125 4.2177C14.6131 4.01047 14.3661 3.42748 14.5733 2.91554Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.50025 7C4.50025 4.23858 6.73883 2 9.50025 2C12.2617 2 14.5003 4.23858 14.5003 7C14.5003 9.76142 12.2617 12 9.50025 12C6.73883 12 4.50025 9.76142 4.50025 7Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7M11.9999 21.5L14.025 21.095C14.2015 21.0597 14.2898 21.042 14.3721 21.0097C14.4452 20.9811 14.5147 20.9439 14.579 20.899C14.6516 20.8484 14.7152 20.7848 14.8426 20.6574L21.5 14C22.0524 13.4477 22.0523 12.5523 21.5 12C20.9477 11.4477 20.0523 11.4477 19.5 12L12.8425 18.6575C12.7152 18.7848 12.6516 18.8484 12.601 18.921C12.5561 18.9853 12.5189 19.0548 12.4902 19.1278C12.458 19.2102 12.4403 19.2984 12.405 19.475L11.9999 21.5ZM13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z"
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