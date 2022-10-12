import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconClipboardX = ({
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
              d="M8.86178 1.01695C9.06993 0.999943 9.31573 0.999973 9.56811 1L14.4319 1C14.6843 0.999973 14.9301 0.999943 15.1382 1.01695C15.3668 1.03563 15.6366 1.07969 15.908 1.21799C16.2843 1.40974 16.5903 1.7157 16.782 2.09202C16.9203 2.36345 16.9644 2.63318 16.9831 2.86178C16.9869 2.90874 16.9899 2.95762 16.9922 3.00805C17.3874 3.02081 17.7258 3.05345 18.0354 3.13639C19.4157 3.50626 20.4939 4.58445 20.8638 5.96482C21.0009 6.47647 21.0006 7.06713 21.0001 7.86252L21.0001 17.2414C21.0001 18.0464 21.0001 18.7107 20.9559 19.2519C20.91 19.814 20.8114 20.3307 20.5641 20.8161C20.1806 21.5687 19.5687 22.1806 18.8161 22.5641C18.3307 22.8114 17.814 22.91 17.2519 22.9559C16.7107 23.0001 16.0464 23.0001 15.2414 23.0001H8.75877C7.95381 23.0001 7.28946 23.0001 6.74827 22.9559C6.18617 22.91 5.66947 22.8114 5.18413 22.5641C4.43149 22.1806 3.81956 21.5687 3.43607 20.8161C3.18878 20.3307 3.09022 19.814 3.04429 19.2519C3.00007 18.7107 3.00008 18.0464 3.0001 17.2414L3.00005 7.86252C2.99962 7.06713 2.9993 6.47647 3.13639 5.96482C3.50626 4.58445 4.58445 3.50626 5.96482 3.13639C6.27431 3.05347 6.61271 3.02082 7.00784 3.00806C7.01014 2.95762 7.01311 2.90874 7.01695 2.86178C7.03563 2.63318 7.07969 2.36345 7.21799 2.09202C7.40974 1.7157 7.7157 1.40974 8.09202 1.21799C8.36345 1.07969 8.63318 1.03563 8.86178 1.01695ZM9.10899 3.54601C9 3.75992 9 4.03995 9 4.6V5H15V4.6C15 4.03995 15 3.75992 14.891 3.54601C14.7951 3.35785 14.6422 3.20487 14.454 3.10899C14.2401 3 13.9601 3 13.4 3H10.6C10.0399 3 9.75992 3 9.54601 3.10899C9.35785 3.20487 9.20487 3.35785 9.10899 3.54601ZM8.79289 11.2929C9.18342 10.9024 9.81658 10.9024 10.2071 11.2929L12 13.0858L13.7929 11.2929C14.1834 10.9024 14.8166 10.9024 15.2071 11.2929C15.5976 11.6834 15.5976 12.3166 15.2071 12.7071L13.4142 14.5L15.2071 16.2929C15.5976 16.6834 15.5976 17.3166 15.2071 17.7071C14.8166 18.0976 14.1834 18.0976 13.7929 17.7071L12 15.9142L10.2071 17.7071C9.81658 18.0976 9.18342 18.0976 8.79289 17.7071C8.40237 17.3166 8.40237 16.6834 8.79289 16.2929L10.5858 14.5L8.79289 12.7071C8.40237 12.3166 8.40237 11.6834 8.79289 11.2929Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16 4C16.93 4 17.395 4 17.7765 4.10222C18.8117 4.37962 19.6204 5.18827 19.8978 6.22354C20 6.60504 20 7.07003 20 8V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V8C4 7.07003 4 6.60504 4.10222 6.22354C4.37962 5.18827 5.18827 4.37962 6.22354 4.10222C6.60504 4 7.07003 4 8 4M9.5 12L14.5 17M14.5 12L9.5 17M9.6 6H14.4C14.9601 6 15.2401 6 15.454 5.89101C15.6422 5.79513 15.7951 5.64215 15.891 5.45399C16 5.24008 16 4.96005 16 4.4V3.6C16 3.03995 16 2.75992 15.891 2.54601C15.7951 2.35785 15.6422 2.20487 15.454 2.10899C15.2401 2 14.9601 2 14.4 2H9.6C9.03995 2 8.75992 2 8.54601 2.10899C8.35785 2.20487 8.20487 2.35785 8.10899 2.54601C8 2.75992 8 3.03995 8 3.6V4.4C8 4.96005 8 5.24008 8.10899 5.45399C8.20487 5.64215 8.35785 5.79513 8.54601 5.89101C8.75992 6 9.03995 6 9.6 6Z"
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
