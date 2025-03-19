import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconVolumeMin = ({
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
              d="M17.673 7.17981C18.126 6.86385 18.7493 6.97492 19.0653 7.4279C19.9694 8.7241 20.4998 10.3016 20.4998 12C20.4998 13.6984 19.9694 15.2759 19.0653 16.5721C18.7493 17.0251 18.126 17.1361 17.673 16.8202C17.22 16.5042 17.109 15.8809 17.4249 15.4279C18.1026 14.4564 18.4998 13.2761 18.4998 12C18.4998 10.7239 18.1026 9.54355 17.4249 8.57209C17.109 8.11912 17.22 7.49577 17.673 7.17981Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.8823 2.71172C13.361 2.67405 13.8288 2.86781 14.1406 3.23293C14.4199 3.55988 14.4642 3.95313 14.4811 4.14402C14.5001 4.35799 14.5 4.62375 14.5 4.89413C14.5 4.90653 14.5 4.91895 14.5 4.93136L14.5 19.1059C14.5 19.3762 14.5001 19.642 14.4811 19.856C14.4642 20.0469 14.4199 20.4401 14.1406 20.7671C13.8288 21.1322 13.361 21.3259 12.8823 21.2883C12.4537 21.2545 12.1442 21.0078 11.9973 20.8848C11.8326 20.7469 11.6447 20.559 11.4535 20.3677L8.26153 17.1757C8.1689 17.0831 8.1225 17.037 8.08738 17.005L8.08472 17.0026L8.08114 17.0024C8.03365 17.0002 7.96826 17 7.83726 17L6.06812 17C5.81574 17 5.56994 17.0001 5.36178 16.983C5.13318 16.9644 4.86345 16.9203 4.59202 16.782C4.2157 16.5903 3.90974 16.2843 3.71799 15.908C3.57969 15.6366 3.53563 15.3668 3.51695 15.1382C3.49994 14.9301 3.49997 14.6843 3.5 14.4319L3.50001 9.59999C3.50001 9.58935 3.5 9.57872 3.5 9.5681C3.49997 9.31571 3.49994 9.06992 3.51695 8.86176C3.53563 8.63317 3.57969 8.36344 3.71799 8.09201C3.90974 7.71569 4.2157 7.40973 4.59202 7.21798C4.86345 7.07968 5.13318 7.03562 5.36178 7.01694C5.56993 6.99993 5.81572 6.99996 6.06811 6.99999C6.07873 6.99999 6.08936 6.99999 6.10001 6.99999H7.83726C7.96826 6.99999 8.03365 6.99976 8.08114 6.99758L8.08472 6.99741L8.08738 6.995C8.1225 6.96295 8.1689 6.91689 8.26153 6.82426L11.4272 3.65857C11.436 3.64979 11.4448 3.64101 11.4535 3.63224C11.6447 3.44102 11.8326 3.25308 11.9973 3.11518C12.1442 2.99217 12.4537 2.74546 12.8823 2.71172Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.2451 7.99999C19.036 9.13382 19.4998 10.5127 19.4998 12C19.4998 13.4872 19.036 14.8662 18.2451 16M12.1343 4.36567L8.96863 7.53136C8.79568 7.70431 8.7092 7.79079 8.60828 7.85263C8.51881 7.90746 8.42127 7.94786 8.31923 7.97236C8.20414 7.99999 8.08185 7.99999 7.83726 7.99999H6.1C5.53995 7.99999 5.25992 7.99999 5.04601 8.10898C4.85785 8.20485 4.70487 8.35784 4.60899 8.546C4.5 8.75991 4.5 9.03994 4.5 9.59999V14.4C4.5 14.96 4.5 15.2401 4.60899 15.454C4.70487 15.6421 4.85785 15.7951 5.04601 15.891C5.25992 16 5.53995 16 6.1 16H7.83726C8.08185 16 8.20414 16 8.31923 16.0276C8.42127 16.0521 8.51881 16.0925 8.60828 16.1473C8.7092 16.2092 8.79568 16.2957 8.96863 16.4686L12.1343 19.6343C12.5627 20.0627 12.7769 20.2769 12.9608 20.2913C13.1203 20.3039 13.2763 20.2393 13.3802 20.1176C13.5 19.9773 13.5 19.6744 13.5 19.0686V4.93136C13.5 4.32554 13.5 4.02264 13.3802 3.88237C13.2763 3.76067 13.1203 3.69608 12.9608 3.70864C12.7769 3.72311 12.5627 3.9373 12.1343 4.36567Z"
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
