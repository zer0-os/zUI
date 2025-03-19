import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconUsbFlashDrive = ({
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
              d="M10 4.00001C10.5523 4.00001 11 4.44772 11 5.00001V6.00001C11 6.55229 10.5523 7.00001 10 7.00001C9.44772 7.00001 9.00001 6.55229 9.00001 6.00001V5.00001C9.00001 4.44772 9.44772 4.00001 10 4.00001Z"
              fill={color}
            />
            <path
              d="M15 5.00001C15 4.44772 14.5523 4.00001 14 4.00001C13.4477 4.00001 13 4.44772 13 5.00001V6.00001C13 6.55229 13.4477 7.00001 14 7.00001C14.5523 7.00001 15 6.55229 15 6.00001V5.00001Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.56811 1H16.4319C16.6843 0.999973 16.9301 0.999943 17.1382 1.01695C17.3668 1.03563 17.6366 1.07969 17.908 1.21799C18.2843 1.40974 18.5903 1.7157 18.782 2.09202C18.9203 2.36345 18.9644 2.63318 18.9831 2.86178C19.0001 3.0699 19 3.31564 19 3.56798L19 8.17825C19.1219 8.21747 19.2427 8.26619 19.362 8.32698C19.9265 8.6146 20.3854 9.07354 20.673 9.63803C20.8658 10.0164 20.9371 10.4096 20.9694 10.805C21 11.1795 21 11.6343 21 12.1614V17.2413C21 18.0463 21 18.7106 20.9558 19.2518C20.9099 19.8139 20.8113 20.3306 20.564 20.816C20.1805 21.5686 19.5686 22.1805 18.816 22.564C18.3306 22.8113 17.8139 22.9099 17.2518 22.9558C16.7106 23 16.0463 23 15.2414 23H8.75868C7.95373 23 7.28936 23 6.74818 22.9558C6.18608 22.9099 5.66938 22.8113 5.18404 22.564C4.43139 22.1805 3.81947 21.5686 3.43598 20.816C3.18869 20.3306 3.09012 19.8139 3.0442 19.2518C2.99998 18.7106 2.99999 18.0463 3 17.2414V12.1615C2.99998 11.6343 2.99997 11.1795 3.03057 10.805C3.06287 10.4096 3.13419 10.0164 3.32698 9.63803C3.6146 9.07354 4.07354 8.6146 4.63803 8.32698C4.75735 8.26619 4.87814 8.21747 5.00001 8.17825L5 3.56811C4.99997 3.31573 4.99994 3.06993 5.01695 2.86178C5.03563 2.63318 5.0797 2.36345 5.21799 2.09202C5.40974 1.7157 5.7157 1.40974 6.09202 1.21799C6.36345 1.07969 6.63318 1.03563 6.86178 1.01695C7.06993 0.999943 7.31573 0.999973 7.56811 1ZM7.00001 8.00003C7.05304 8 7.10686 8 7.16146 8H16.8385C16.8931 8 16.947 8 17 8.00003V3.60001C17 3.30348 16.9992 3.14122 16.9897 3.02464L16.9886 3.01145L16.9754 3.01031C16.8588 3.00078 16.6965 3.00001 16.4 3.00001H7.60001C7.30348 3.00001 7.14123 3.00078 7.02464 3.01031L7.01145 3.01145L7.01031 3.02464C7.00078 3.14122 7.00001 3.30348 7.00001 3.60001V8.00003Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18 9V3.6C18 3.03995 18 2.75992 17.891 2.54601C17.7951 2.35785 17.6422 2.20487 17.454 2.10899C17.2401 2 16.9601 2 16.4 2H7.6C7.03995 2 6.75992 2 6.54601 2.10899C6.35785 2.20487 6.20487 2.35785 6.10899 2.54601C6 2.75992 6 3.03995 6 3.6V9M10 6V5M14 6V5M8.8 22H15.2C16.8802 22 17.7202 22 18.362 21.673C18.9265 21.3854 19.3854 20.9265 19.673 20.362C20 19.7202 20 18.8802 20 17.2V12.2C20 11.0799 20 10.5198 19.782 10.092C19.5903 9.71569 19.2843 9.40973 18.908 9.21799C18.4802 9 17.9201 9 16.8 9H7.2C6.0799 9 5.51984 9 5.09202 9.21799C4.71569 9.40973 4.40973 9.71569 4.21799 10.092C4 10.5198 4 11.0799 4 12.2V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22Z"
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
