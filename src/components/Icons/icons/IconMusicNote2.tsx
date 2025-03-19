import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconMusicNote2 = ({
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
              d="M14.7259 3.24492C14.3743 3.06907 14.0517 2.90772 13.7779 2.80076C13.4959 2.69061 13.1239 2.578 12.7077 2.63949C12.1635 2.7199 11.6764 3.02093 11.3611 3.47173C11.1199 3.81652 11.0543 4.19955 11.0267 4.50105C10.9999 4.7938 11 5.15455 11 5.54767L11 14.5351C10.4117 14.1948 9.72858 14 9 14C6.79086 14 5 15.7909 5 18C5 20.2091 6.79086 22 9 22C11.2081 22 12.9983 20.2109 13 18.0032L13 18V5.58884C13 5.14072 13.001 4.87355 13.0184 4.68335L13.0215 4.65274L13.0502 4.66369C13.2281 4.73319 13.4675 4.85178 13.8683 5.05218L17.5528 6.89441C18.0468 7.1414 18.6474 6.94117 18.8944 6.4472C19.1414 5.95322 18.9412 5.35254 18.4472 5.10555L14.7259 3.24492Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 18V5.58888C12 4.73166 12 4.30306 12.1805 4.04492C12.3382 3.81952 12.5817 3.669 12.8538 3.6288C13.1655 3.58276 13.5488 3.77444 14.3155 4.1578L18 6.00003M12 18C12 19.6569 10.6569 21 9 21C7.34315 21 6 19.6569 6 18C6 16.3432 7.34315 15 9 15C10.6569 15 12 16.3432 12 18Z"
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
