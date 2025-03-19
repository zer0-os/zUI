import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconCpuChip1 = ({
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
              d="M10 10.8C10 10.52 10 10.38 10.0545 10.273C10.1024 10.1789 10.1789 10.1024 10.273 10.0545C10.38 10 10.52 10 10.8 10H13.2C13.48 10 13.62 10 13.727 10.0545C13.8211 10.1024 13.8976 10.1789 13.9455 10.273C14 10.38 14 10.52 14 10.8V13.2C14 13.48 14 13.62 13.9455 13.727C13.8976 13.8211 13.8211 13.8976 13.727 13.9455C13.62 14 13.48 14 13.2 14H10.8C10.52 14 10.38 14 10.273 13.9455C10.1789 13.8976 10.1024 13.8211 10.0545 13.727C10 13.62 10 13.48 10 13.2V10.8Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 2C10 1.44772 9.55229 1 9 1C8.44772 1 8 1.44772 8 2V3.00163C7.52454 3.00489 7.10898 3.01472 6.74817 3.04419C6.18608 3.09012 5.66937 3.18868 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.18868 5.66937 3.09012 6.18608 3.04419 6.74817C3.01472 7.10898 3.00489 7.52454 3.00163 8H2C1.44772 8 1 8.44772 1 9C1 9.55229 1.44772 10 2 10H3V13H2C1.44772 13 1 13.4477 1 14C1 14.5523 1.44772 15 2 15H3V15.2413C2.99999 16.0463 2.99998 16.7106 3.04419 17.2518C3.09012 17.8139 3.18868 18.3306 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.66937 20.8113 6.18608 20.9099 6.74817 20.9558C7.10898 20.9853 7.52454 20.9951 8 20.9984V22C8 22.5523 8.44772 23 9 23C9.55229 23 10 22.5523 10 22V21H14V22C14 22.5523 14.4477 23 15 23C15.5523 23 16 22.5523 16 22V20.9984C16.4755 20.9951 16.891 20.9853 17.2518 20.9558C17.8139 20.9099 18.3306 20.8113 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.8113 18.3306 20.9099 17.8139 20.9558 17.2518C21 16.7106 21 16.0463 21 15.2413V15H22C22.5523 15 23 14.5523 23 14C23 13.4477 22.5523 13 22 13H21V10H22C22.5523 10 23 9.55229 23 9C23 8.44772 22.5523 8 22 8H20.9984C20.9951 7.52454 20.9853 7.10898 20.9558 6.74817C20.9099 6.18608 20.8113 5.66937 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.3306 3.18868 17.8139 3.09012 17.2518 3.04419C16.891 3.01472 16.4755 3.00489 16 3.00163V2C16 1.44772 15.5523 1 15 1C14.4477 1 14 1.44772 14 2V3H10V2ZM10.5681 8C10.3157 7.99997 10.0699 7.99994 9.86178 8.01695C9.63318 8.03563 9.36345 8.07969 9.09202 8.21799C8.7157 8.40974 8.40974 8.7157 8.21799 9.09202C8.07969 9.36345 8.03563 9.63318 8.01695 9.86178C7.99994 10.0699 7.99997 10.3157 8 10.5681V13.4319C7.99997 13.6843 7.99994 13.9301 8.01695 14.1382C8.03563 14.3668 8.07969 14.6366 8.21799 14.908C8.40974 15.2843 8.7157 15.5903 9.09202 15.782C9.36345 15.9203 9.63318 15.9644 9.86178 15.9831C10.0699 16.0001 10.3157 16 10.5681 16H13.4319C13.6843 16 13.9301 16.0001 14.1382 15.9831C14.3668 15.9644 14.6366 15.9203 14.908 15.782C15.2843 15.5903 15.5903 15.2843 15.782 14.908C15.9203 14.6366 15.9644 14.3668 15.9831 14.1382C16.0001 13.9301 16 13.6843 16 13.4319V10.5681C16 10.3157 16.0001 10.0699 15.9831 9.86178C15.9644 9.63318 15.9203 9.36345 15.782 9.09202C15.5903 8.7157 15.2843 8.40974 14.908 8.21799C14.6366 8.07969 14.3668 8.03563 14.1382 8.01695C13.9301 7.99994 13.6843 7.99997 13.4319 8H10.5681Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9 2V4M15 2V4M9 20V22M15 20V22M20 9H22M20 14H22M2 9H4M2 14H4M8.8 20H15.2C16.8802 20 17.7202 20 18.362 19.673C18.9265 19.3854 19.3854 18.9265 19.673 18.362C20 17.7202 20 16.8802 20 15.2V8.8C20 7.11984 20 6.27976 19.673 5.63803C19.3854 5.07354 18.9265 4.6146 18.362 4.32698C17.7202 4 16.8802 4 15.2 4H8.8C7.11984 4 6.27976 4 5.63803 4.32698C5.07354 4.6146 4.6146 5.07354 4.32698 5.63803C4 6.27976 4 7.11984 4 8.8V15.2C4 16.8802 4 17.7202 4.32698 18.362C4.6146 18.9265 5.07354 19.3854 5.63803 19.673C6.27976 20 7.11984 20 8.8 20ZM10.6 15H13.4C13.9601 15 14.2401 15 14.454 14.891C14.6422 14.7951 14.7951 14.6422 14.891 14.454C15 14.2401 15 13.9601 15 13.4V10.6C15 10.0399 15 9.75992 14.891 9.54601C14.7951 9.35785 14.6422 9.20487 14.454 9.10899C14.2401 9 13.9601 9 13.4 9H10.6C10.0399 9 9.75992 9 9.54601 9.10899C9.35785 9.20487 9.20487 9.35785 9.10899 9.54601C9 9.75992 9 10.0399 9 10.6V13.4C9 13.9601 9 14.2401 9.10899 14.454C9.20487 14.6422 9.35785 14.7951 9.54601 14.891C9.75992 15 10.0399 15 10.6 15Z"
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
