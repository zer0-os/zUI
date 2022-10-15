import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconStickerSquare = ({
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
              d="M12 2.8C12 2.51998 12 2.37996 11.9455 2.27301C11.8976 2.17893 11.8211 2.10244 11.727 2.0545C11.62 2 11.4803 2 11.2008 2C10.2559 2 8.69388 2 7.7587 2.00001C6.95373 1.99999 6.28937 1.99998 5.74818 2.0442C5.18608 2.09013 4.66937 2.18869 4.18404 2.43598C3.43139 2.81947 2.81947 3.4314 2.43598 4.18404C2.18868 4.66938 2.09012 5.18608 2.04419 5.74818C1.99998 6.28937 1.99999 6.95373 2 7.75869V16.2413C1.99999 17.0463 1.99998 17.7106 2.04419 18.2518C2.09012 18.8139 2.18868 19.3306 2.43598 19.816C2.81947 20.5686 3.43139 21.1805 4.18404 21.564C4.66937 21.8113 5.18608 21.9099 5.74818 21.9558C6.28936 22 6.95372 22 7.75868 22H16.2413C17.0463 22 17.7106 22 18.2518 21.9558C18.8139 21.9099 19.3306 21.8113 19.816 21.564C20.5686 21.1805 21.1805 20.5686 21.564 19.816C21.8113 19.3306 21.9099 18.8139 21.9558 18.2518C22 17.7106 22 17.0463 22 16.2413C22 15.3061 22 13.7441 22 12.7992C22 12.5197 22 12.3799 21.9455 12.2729C21.8976 12.1789 21.8211 12.1024 21.727 12.0544C21.62 11.9999 21.48 11.9999 21.2 11.9999H17.7587C16.9537 12 16.2894 12 15.7482 11.9558C15.1861 11.9098 14.6694 11.8113 14.184 11.564C13.4314 11.1805 12.8195 10.5686 12.436 9.81591C12.1887 9.33057 12.0901 8.81387 12.0442 8.25177C12 7.71058 12 7.04622 12 6.24126V2.8Z"
              fill={color}
            />
            <path
              d="M19.908 9.99994C20.2015 9.99994 20.3483 9.99994 20.4685 9.92624C20.6384 9.82212 20.74 9.57676 20.6934 9.38302C20.6604 9.2459 20.5647 9.15028 20.3733 8.95903L15.041 3.62672C14.8497 3.43523 14.754 3.33949 14.6169 3.30652C14.4232 3.25996 14.1779 3.3615 14.0737 3.53134C14 3.6516 14 3.79842 14 4.09205V6.19994C14 7.05652 14.0008 7.63882 14.0376 8.08891C14.0734 8.52732 14.1383 8.75152 14.218 8.90792C14.4097 9.28425 14.7157 9.59021 15.092 9.78196C15.2484 9.86165 15.4726 9.92657 15.911 9.96239C16.3611 9.99917 16.9434 9.99994 17.8 9.99994H19.908Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13 3.5V6.2C13 7.88016 13 8.72024 13.327 9.36197C13.6146 9.92646 14.0735 10.3854 14.638 10.673C15.2798 11 16.1198 11 17.8 11H20.5M21 12.9882V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H11.0118C11.7455 3 12.1124 3 12.4577 3.08289C12.7638 3.15638 13.0564 3.27759 13.3249 3.44208C13.6276 3.6276 13.887 3.88703 14.4059 4.40589L19.5941 9.59411C20.113 10.113 20.3724 10.3724 20.5579 10.6751C20.7224 10.9436 20.8436 11.2362 20.9171 11.5423C21 11.8876 21 12.2545 21 12.9882Z"
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