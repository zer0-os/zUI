import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconFileMinus2 = ({
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
              d="M8.7587 1H15.2413C16.0463 0.999988 16.7106 0.999979 17.2518 1.0442C17.8139 1.09012 18.3306 1.18868 18.816 1.43598C19.5686 1.81947 20.1805 2.43139 20.564 3.18404C20.8113 3.66938 20.9099 4.18608 20.9558 4.74818C21 5.28937 21 5.95372 21 6.75868V13.2C21 13.48 21 13.62 20.9455 13.727C20.8976 13.8211 20.8211 13.8976 20.727 13.9455C20.62 14 20.48 14 20.2 14H15C13.3431 14 12 15.3431 12 17C12 18.6569 13.3431 20 15 20H19.9828C20.1716 20 20.2661 20 20.3601 20.0401C20.5299 20.1126 20.6752 20.3497 20.6627 20.5339C20.6558 20.6359 20.6252 20.6959 20.564 20.8159C20.1805 21.5686 19.5686 22.1805 18.816 22.564C18.3306 22.8113 17.8139 22.9099 17.2518 22.9558C16.7106 23 16.0463 23 15.2413 23H8.75868C7.95372 23 7.28937 23 6.74818 22.9558C6.18608 22.9099 5.66938 22.8113 5.18404 22.564C4.43139 22.1805 3.81947 21.5686 3.43598 20.816C3.18868 20.3306 3.09012 19.8139 3.0442 19.2518C2.99998 18.7106 2.99999 18.0463 3 17.2413V6.75869C2.99999 5.95373 2.99998 5.28936 3.0442 4.74818C3.09012 4.18608 3.18868 3.66938 3.43598 3.18404C3.81947 2.43139 4.43139 1.81947 5.18404 1.43598C5.66938 1.18868 6.18608 1.09012 6.74818 1.0442C7.28936 0.999979 7.95375 0.999988 8.7587 1ZM7 5C6.44772 5 6 5.44772 6 6C6 6.55229 6.44772 7 7 7H16C16.5523 7 17 6.55229 17 6C17 5.44772 16.5523 5 16 5H7ZM6 10C6 9.44771 6.44772 9 7 9H13C13.5523 9 14 9.44771 14 10C14 10.5523 13.5523 11 13 11H7C6.44772 11 6 10.5523 6 10ZM6 14C6 13.4477 6.44772 13 7 13H9C9.55229 13 10 13.4477 10 14C10 14.5523 9.55229 15 9 15H7C6.44772 15 6 14.5523 6 14Z"
              fill={color}
            />
            <path
              d="M15 16C14.4477 16 14 16.4477 14 17C14 17.5523 14.4477 18 15 18H21C21.5523 18 22 17.5523 22 17C22 16.4477 21.5523 16 21 16H15Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 11.9412V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H14M14 11H8M10 15H8M16 7H8M15 17H21"
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