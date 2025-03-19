import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconBuilding7 = ({
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
              d="M13.3385 2H10.6615C10.1343 1.99998 9.67953 1.99997 9.30497 2.03057C8.90963 2.06287 8.51641 2.13419 8.13803 2.32698C7.57354 2.6146 7.1146 3.07355 6.82698 3.63803C6.63419 4.01641 6.56287 4.40963 6.53057 4.80498C6.49997 5.17955 6.49998 5.63431 6.5 6.16146L6.5 10L4.56809 10C4.31572 9.99997 4.06993 9.99995 3.86178 10.017C3.63318 10.0356 3.36345 10.0797 3.09202 10.218C2.7157 10.4097 2.40974 10.7157 2.21799 11.092C2.07969 11.3635 2.03563 11.6332 2.01695 11.8618C1.99994 12.0699 1.99997 12.3157 2 12.5681L2 20C1.44772 20 1 20.4477 1 21C1 21.5523 1.44772 22 2 22H2.99721L3.00001 22L3.0028 22H20.9972L21 22L21.0028 22H22C22.5523 22 23 21.5523 23 21C23 20.4477 22.5523 20 22 20L22 12.568C22 12.3157 22.0001 12.0699 21.9831 11.8618C21.9644 11.6332 21.9203 11.3635 21.782 11.092C21.5903 10.7157 21.2843 10.4097 20.908 10.218C20.6366 10.0797 20.3668 10.0356 20.1382 10.017C19.9301 9.99995 19.6843 9.99997 19.4319 10L17.5 10V6.16134C17.5 5.63425 17.5 5.17951 17.4694 4.80498C17.4371 4.40963 17.3658 4.01641 17.173 3.63803C16.8854 3.07355 16.4265 2.6146 15.862 2.32698C15.4836 2.13419 15.0904 2.06287 14.695 2.03057C14.3205 1.99997 13.8657 1.99998 13.3385 2ZM10 7C10 6.44772 10.4477 6 11 6H13C13.5523 6 14 6.44772 14 7C14 7.55229 13.5523 8 13 8H11C10.4477 8 10 7.55229 10 7ZM10 11C10 10.4477 10.4477 10 11 10H13C13.5523 10 14 10.4477 14 11C14 11.5523 13.5523 12 13 12H11C10.4477 12 10 11.5523 10 11ZM11 14C10.4477 14 10 14.4477 10 15C10 15.5523 10.4477 16 11 16H13C13.5523 16 14 15.5523 14 15C14 14.4477 13.5523 14 13 14H11Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.5 11H4.6C4.03995 11 3.75992 11 3.54601 11.109C3.35785 11.2049 3.20487 11.3578 3.10899 11.546C3 11.7599 3 12.0399 3 12.6V21M16.5 11H19.4C19.9601 11 20.2401 11 20.454 11.109C20.6422 11.2049 20.7951 11.3578 20.891 11.546C21 11.7599 21 12.0399 21 12.6V21M16.5 21V6.2C16.5 5.0799 16.5 4.51984 16.282 4.09202C16.0903 3.71569 15.7843 3.40973 15.408 3.21799C14.9802 3 14.4201 3 13.3 3H10.7C9.57989 3 9.01984 3 8.59202 3.21799C8.21569 3.40973 7.90973 3.71569 7.71799 4.09202C7.5 4.51984 7.5 5.0799 7.5 6.2V21M22 21H2M11 7H13M11 11H13M11 15H13"
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
