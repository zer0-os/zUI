import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconBuilding5 = ({
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
              d="M9.83855 2H6.16146C5.63434 1.99998 5.17953 1.99997 4.80497 2.03057C4.40963 2.06287 4.01641 2.13419 3.63803 2.32698C3.07354 2.6146 2.6146 3.07355 2.32698 3.63803C2.13419 4.01641 2.06287 4.40963 2.03057 4.80498C1.99997 5.17955 1.99998 5.63431 2 6.16146L2 20C1.44772 20 1 20.4477 1 21C1 21.5523 1.44772 22 2 22H22C22.5523 22 23 21.5523 23 21C23 20.4477 22.5523 20 22 20V14.1615C22 13.6343 22 13.1796 21.9694 12.805C21.9371 12.4096 21.8658 12.0164 21.673 11.638C21.3854 11.0735 20.9265 10.6146 20.362 10.327C19.9836 10.1342 19.5904 10.0629 19.195 10.0306C18.8205 9.99997 18.3657 9.99998 17.8385 10L14 10V6.16145C14 5.63431 14 5.17955 13.9694 4.80498C13.9371 4.40963 13.8658 4.01641 13.673 3.63803C13.3854 3.07355 12.9265 2.6146 12.362 2.32698C11.9836 2.13419 11.5904 2.06287 11.195 2.03057C10.8205 1.99997 10.3657 1.99998 9.83855 2ZM5 7C5 6.44772 5.44772 6 6 6H10C10.5523 6 11 6.44772 11 7C11 7.55229 10.5523 8 10 8H6C5.44772 8 5 7.55229 5 7ZM5 11C5 10.4477 5.44772 10 6 10H10C10.5523 10 11 10.4477 11 11C11 11.5523 10.5523 12 10 12H6C5.44772 12 5 11.5523 5 11ZM6 14C5.44772 14 5 14.4477 5 15C5 15.5523 5.44772 16 6 16H10C10.5523 16 11 15.5523 11 15C11 14.4477 10.5523 14 10 14H6Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13 11H17.8C18.9201 11 19.4802 11 19.908 11.218C20.2843 11.4097 20.5903 11.7157 20.782 12.092C21 12.5198 21 13.0799 21 14.2V21M13 21V6.2C13 5.0799 13 4.51984 12.782 4.09202C12.5903 3.71569 12.2843 3.40973 11.908 3.21799C11.4802 3 10.9201 3 9.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.0799 3 6.2V21M22 21H2M6.5 7H9.5M6.5 11H9.5M6.5 15H9.5"
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
