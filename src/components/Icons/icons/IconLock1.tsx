import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconLock1 = ({
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
              d="M6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8V9.15032C18.2826 9.21225 18.5539 9.30243 18.816 9.43598C19.5686 9.81947 20.1805 10.4314 20.564 11.184C20.8113 11.6694 20.9099 12.1861 20.9558 12.7482C21 13.2894 21 13.9537 21 14.7587V16.2413C21 17.0463 21 17.7106 20.9558 18.2518C20.9099 18.8139 20.8113 19.3306 20.564 19.816C20.1805 20.5686 19.5686 21.1805 18.816 21.564C18.3306 21.8113 17.8139 21.9099 17.2518 21.9558C16.7106 22 16.0463 22 15.2413 22H8.75873C7.95375 22 7.28938 22 6.74818 21.9558C6.18608 21.9099 5.66938 21.8113 5.18404 21.564C4.43139 21.1805 3.81947 20.5686 3.43598 19.816C3.18868 19.3306 3.09012 18.8139 3.0442 18.2518C2.99998 17.7106 2.99999 17.0463 3 16.2413V14.7587C2.99999 13.9537 2.99998 13.2894 3.0442 12.7482C3.09012 12.1861 3.18868 11.6694 3.43598 11.184C3.81947 10.4314 4.43139 9.81947 5.18404 9.43598C5.44614 9.30243 5.71739 9.21226 6 9.15032V8ZM16 8V9.00163H8V8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8ZM13 14.5C13 13.9477 12.5523 13.5 12 13.5C11.4477 13.5 11 13.9477 11 14.5V16.5C11 17.0523 11.4477 17.5 12 17.5C12.5523 17.5 13 17.0523 13 16.5V14.5Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17 10V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V10M12 14.5V16.5M8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C17.7202 10 16.8802 10 15.2 10H8.8C7.11984 10 6.27976 10 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21Z"
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
