import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconRollerBrush = ({
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
              d="M5.4162 1.00004C5.03551 0.99974 4.70767 0.999479 4.41482 1.05773C3.22474 1.29445 2.29445 2.22474 2.05773 3.41482C1.99948 3.70767 1.99974 4.0355 2.00004 4.4162L2.00009 4.50009L2.00004 4.58397C1.99974 4.96467 1.99948 5.29251 2.05773 5.58536C2.29445 6.77543 3.22474 7.70572 4.41482 7.94244C4.70767 8.0007 5.0355 8.00043 5.4162 8.00013H16.584C16.9647 8.00043 17.2925 8.0007 17.5854 7.94244C18.7754 7.70572 19.7057 6.77543 19.9424 5.58536C19.9472 5.5613 19.9516 5.537 19.9556 5.51246C19.9799 5.51374 20.0034 5.51515 20.0262 5.51671C20.2542 5.53227 20.3411 5.55888 20.3827 5.57612C20.6277 5.67762 20.8224 5.87229 20.9239 6.11732C20.9411 6.15893 20.9677 6.24576 20.9833 6.47376C20.9995 6.71074 21 7.02038 21 7.5V7.8C21 8.37655 20.9992 8.74883 20.9761 9.03217C20.9539 9.30383 20.9162 9.40455 20.891 9.45399C20.7951 9.64215 20.6422 9.79513 20.454 9.89101C20.4045 9.9162 20.3038 9.95388 20.0322 9.97607C19.7488 9.99922 19.3766 10 18.8 10L15.1615 10C14.6343 9.99998 14.1795 9.99997 13.805 10.0306C13.4096 10.0629 13.0164 10.1342 12.638 10.327C12.0735 10.6146 11.6146 11.0735 11.327 11.638C11.1342 12.0164 11.0629 12.4096 11.0306 12.805C11.003 13.1428 11.0003 13.5457 11 14.0082C10.9524 14.0105 10.9062 14.0133 10.8618 14.017C10.6332 14.0356 10.3634 14.0797 10.092 14.218C9.7157 14.4097 9.40974 14.7157 9.21799 15.092C9.07969 15.3634 9.03563 15.6332 9.01695 15.8618C8.99994 16.0699 8.99997 16.3157 9 16.5681V20.4319C8.99997 20.6843 8.99994 20.9301 9.01695 21.1382C9.03563 21.3668 9.07969 21.6366 9.21799 21.908C9.40974 22.2843 9.7157 22.5903 10.092 22.782C10.3634 22.9203 10.6332 22.9644 10.8618 22.9831C11.0699 23.0001 11.3157 23 11.5681 23H12.4319C12.6843 23 12.9301 23.0001 13.1382 22.9831C13.3668 22.9644 13.6366 22.9203 13.908 22.782C14.2843 22.5903 14.5903 22.2843 14.782 21.908C14.9203 21.6366 14.9644 21.3668 14.9831 21.1382C15.0001 20.9301 15 20.6843 15 20.4319V16.5681C15 16.3157 15.0001 16.0699 14.9831 15.8618C14.9644 15.6332 14.9203 15.3634 14.782 15.092C14.5903 14.7157 14.2843 14.4097 13.908 14.218C13.6366 14.0797 13.3668 14.0356 13.1382 14.017C13.0938 14.0133 13.0476 14.0105 13.0001 14.0082C13.0005 13.5386 13.0035 13.2184 13.0239 12.9678C13.0461 12.6962 13.0838 12.5955 13.109 12.546C13.2049 12.3578 13.3578 12.2049 13.546 12.109C13.5955 12.0838 13.6962 12.0461 13.9678 12.0239C14.2512 12.0008 14.6234 12 15.2 12L18.8385 12C19.3657 12 19.8205 12 20.195 11.9694C20.5904 11.9371 20.9836 11.8658 21.362 11.673C21.9265 11.3854 22.3854 10.9265 22.673 10.362C22.8658 9.98359 22.9371 9.59037 22.9694 9.19503C23 8.8205 23 8.36579 23 7.83871V7.46801C23 7.02936 23 6.65088 22.9787 6.33762C22.9561 6.00779 22.9066 5.67788 22.7716 5.35195C22.4672 4.61687 21.8831 4.03284 21.1481 3.72836C20.8221 3.59336 20.4922 3.54385 20.1624 3.52135C20.0975 3.51692 20.0298 3.51341 19.9593 3.51063C19.9543 3.47827 19.9487 3.44634 19.9424 3.41482C19.7057 2.22474 18.7754 1.29445 17.5854 1.05773C17.2925 0.999479 16.9647 0.99974 16.584 1.00004H5.4162Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19 4.5C19 4.96466 19 5.19698 18.9616 5.39018C18.8038 6.18356 18.1836 6.80376 17.3902 6.96157C17.197 7 16.9647 7 16.5 7H5.5C5.03534 7 4.80302 7 4.60982 6.96157C3.81644 6.80376 3.19624 6.18356 3.03843 5.39018C3 5.19698 3 4.96466 3 4.5C3 4.03534 3 3.80302 3.03843 3.60982C3.19624 2.81644 3.81644 2.19624 4.60982 2.03843C4.80302 2 5.03534 2 5.5 2H16.5C16.9647 2 17.197 2 17.3902 2.03843C18.1836 2.19624 18.8038 2.81644 18.9616 3.60982C19 3.80302 19 4.03534 19 4.5ZM19 4.5C19.9319 4.5 20.3978 4.5 20.7654 4.65224C21.2554 4.85523 21.6448 5.24458 21.8478 5.73463C22 6.10218 22 6.56812 22 7.5V7.8C22 8.9201 22 9.48016 21.782 9.90798C21.5903 10.2843 21.2843 10.5903 20.908 10.782C20.4802 11 19.9201 11 18.8 11H15.2C14.0799 11 13.5198 11 13.092 11.218C12.7157 11.4097 12.4097 11.7157 12.218 12.092C12 12.5198 12 13.0799 12 14.2V15M11.6 22H12.4C12.9601 22 13.2401 22 13.454 21.891C13.6422 21.7951 13.7951 21.6422 13.891 21.454C14 21.2401 14 20.9601 14 20.4V16.6C14 16.0399 14 15.7599 13.891 15.546C13.7951 15.3578 13.6422 15.2049 13.454 15.109C13.2401 15 12.9601 15 12.4 15H11.6C11.0399 15 10.7599 15 10.546 15.109C10.3578 15.2049 10.2049 15.3578 10.109 15.546C10 15.7599 10 16.0399 10 16.6V20.4C10 20.9601 10 21.2401 10.109 21.454C10.2049 21.6422 10.3578 21.7951 10.546 21.891C10.7599 22 11.0399 22 11.6 22Z"
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
