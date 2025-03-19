import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconVolumePlus = ({
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
              d="M11.6406 3.23287C11.3288 2.86775 10.861 2.67399 10.3823 2.71166C9.95368 2.7454 9.64424 2.9921 9.4973 3.11512C9.33259 3.25301 9.1447 3.44096 8.95354 3.63218L5.76153 6.8242C5.6689 6.91683 5.6225 6.96289 5.58738 6.99494L5.58472 6.99735L5.58114 6.99752C5.53365 6.99969 5.46826 6.99993 5.33726 6.99993L3.56811 6.99993C3.31573 6.9999 3.06993 6.99987 2.86178 7.01688C2.63318 7.03555 2.36345 7.07962 2.09202 7.21792C1.7157 7.40967 1.40974 7.71563 1.21799 8.09195C1.07969 8.36338 1.03563 8.63311 1.01695 8.8617C0.999943 9.06986 0.999973 9.31564 1 9.56802L1 14.4318C0.999973 14.6842 0.999943 14.93 1.01695 15.1382C1.03563 15.3668 1.07969 15.6365 1.21799 15.9079C1.40974 16.2842 1.7157 16.5902 2.09202 16.7819C2.36345 16.9202 2.63318 16.9643 2.86178 16.983C3.06994 17 3.31574 17 3.56812 16.9999L5.33726 16.9999C5.46826 16.9999 5.53365 17.0002 5.58114 17.0023L5.58472 17.0025L5.58738 17.0049C5.6225 17.037 5.6689 17.083 5.76153 17.1757L8.95353 20.3677C9.14468 20.5589 9.3326 20.7469 9.4973 20.8847C9.64424 21.0078 9.95368 21.2545 10.3823 21.2882C10.861 21.3259 11.3288 21.1321 11.6406 20.767C11.9199 20.4401 11.9642 20.0468 11.9811 19.8559C12.0001 19.6419 12 19.3762 12 19.1058V4.89407C12 4.62369 12.0001 4.35793 11.9811 4.14396C11.9642 3.95307 11.9199 3.55981 11.6406 3.23287Z"
              fill={color}
            />
            <path
              d="M18.5 7.5C19.0523 7.5 19.5 7.94772 19.5 8.5V11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H19.5V15.5C19.5 16.0523 19.0523 16.5 18.5 16.5C17.9477 16.5 17.5 16.0523 17.5 15.5V13H15C14.4477 13 14 12.5523 14 12C14 11.4477 14.4477 11 15 11H17.5V8.5C17.5 7.94772 17.9477 7.5 18.5 7.5Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.5 15.5V8.49999M15 12H22M9.63432 4.36567L6.46863 7.53136C6.29568 7.70431 6.2092 7.79079 6.10828 7.85263C6.01881 7.90746 5.92127 7.94786 5.81923 7.97236C5.70414 7.99999 5.58185 7.99999 5.33726 7.99999H3.6C3.03995 7.99999 2.75992 7.99999 2.54601 8.10898C2.35785 8.20485 2.20487 8.35784 2.10899 8.546C2 8.75991 2 9.03994 2 9.59999V14.4C2 14.96 2 15.2401 2.10899 15.454C2.20487 15.6421 2.35785 15.7951 2.54601 15.891C2.75992 16 3.03995 16 3.6 16H5.33726C5.58185 16 5.70414 16 5.81923 16.0276C5.92127 16.0521 6.01881 16.0925 6.10828 16.1473C6.2092 16.2092 6.29568 16.2957 6.46863 16.4686L9.63431 19.6343C10.0627 20.0627 10.2769 20.2769 10.4608 20.2913C10.6203 20.3039 10.7763 20.2393 10.8802 20.1176C11 19.9773 11 19.6744 11 19.0686V4.93136C11 4.32554 11 4.02264 10.8802 3.88237C10.7763 3.76067 10.6203 3.69608 10.4608 3.70864C10.2769 3.72311 10.0627 3.9373 9.63432 4.36567Z"
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
