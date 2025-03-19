import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconSave1 = ({
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
              d="M15.8719 2.08299C15.5235 1.99934 15.1647 1.99967 14.7578 2.00005L7.7587 2.0001C6.95373 2.00009 6.28937 2.00008 5.74818 2.0443C5.18608 2.09022 4.66937 2.18878 4.18404 2.43608C3.43139 2.81957 2.81947 3.43149 2.43598 4.18414C2.18868 4.66948 2.09012 5.18618 2.04419 5.74828C1.99998 6.28947 1.99999 6.95382 2 7.75879V16.2414C1.99999 17.0464 1.99998 17.7107 2.04419 18.2519C2.09012 18.814 2.18868 19.3307 2.43598 19.8161C2.81947 20.5687 3.43139 21.1806 4.18404 21.5641C4.66937 21.8114 5.18608 21.91 5.74818 21.9559C6.28936 22.0001 6.95372 22.0001 7.75868 22.0001H16.2413C17.0463 22.0001 17.7106 22.0001 18.2518 21.9559C18.8139 21.91 19.3306 21.8114 19.816 21.5641C20.5686 21.1806 21.1805 20.5687 21.564 19.8161C21.8113 19.3307 21.9099 18.814 21.9558 18.2519C22 17.7107 22 17.0464 22 16.2414L22.0001 9.24229C22.0004 8.83539 22.0008 8.47664 21.9171 8.12819C21.8436 7.82208 21.7224 7.52945 21.5579 7.26103C21.3707 6.95549 21.1168 6.70205 20.8288 6.4146L17.5855 3.17131C17.298 2.88333 17.0446 2.62942 16.7391 2.44218C16.4707 2.2777 16.178 2.15648 15.8719 2.08299ZM15.405 4.02763C15.3167 4.00643 15.2113 4 14.6745 4H7.8C7.50216 4 7.23749 4.00009 7 4.00176V6.3999C7 6.95995 7 7.23998 7.10899 7.45389C7.20487 7.64205 7.35785 7.79503 7.54601 7.8909C7.75992 7.9999 8.03995 7.9999 8.6 7.9999H15.4C15.9601 7.9999 16.2401 7.9999 16.454 7.8909C16.6422 7.79503 16.7951 7.64205 16.891 7.45389C17 7.23998 17 6.95995 17 6.3999V5.41421L16.2302 4.64436C15.8506 4.2648 15.7715 4.19482 15.6941 4.14736C15.6046 4.09253 15.5071 4.05213 15.405 4.02763ZM8.6 12.9999H15.4C15.9601 12.9999 16.2401 12.9999 16.454 13.1089C16.6422 13.2048 16.7951 13.3577 16.891 13.5459C17 13.7598 17 14.0398 17 14.5999V19.9999H7V14.5999C7 14.0398 7 13.7598 7.10899 13.5459C7.20487 13.3577 7.35785 13.2048 7.54601 13.1089C7.75992 12.9999 8.03995 12.9999 8.6 12.9999Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 3V6.4C7 6.96005 7 7.24008 7.10899 7.45399C7.20487 7.64215 7.35785 7.79513 7.54601 7.89101C7.75992 8 8.03995 8 8.6 8H15.4C15.9601 8 16.2401 8 16.454 7.89101C16.6422 7.79513 16.7951 7.64215 16.891 7.45399C17 7.24008 17 6.96005 17 6.4V4M17 21V14.6C17 14.0399 17 13.7599 16.891 13.546C16.7951 13.3578 16.6422 13.2049 16.454 13.109C16.2401 13 15.9601 13 15.4 13H8.6C8.03995 13 7.75992 13 7.54601 13.109C7.35785 13.2049 7.20487 13.3578 7.10899 13.546C7 13.7599 7 14.0399 7 14.6V21M21 9.32548V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H14.6745C15.1637 3 15.4083 3 15.6385 3.05526C15.8425 3.10425 16.0376 3.18506 16.2166 3.29472C16.4184 3.4184 16.5914 3.59135 16.9373 3.93726L20.0627 7.06274C20.4086 7.40865 20.5816 7.5816 20.7053 7.78343C20.8149 7.96237 20.8957 8.15746 20.9447 8.36154C21 8.59171 21 8.8363 21 9.32548Z"
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
