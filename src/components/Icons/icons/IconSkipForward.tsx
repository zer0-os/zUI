import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconSkipForward = ({
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
              d="M19 4C18.4477 4 18 4.44772 18 5V19C18 19.5523 18.4477 20 19 20C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.00216 4.08063C5.39308 4.07997 4.81689 4.3569 4.43692 4.83292C4.13465 5.2116 4.06214 5.66715 4.03141 6.00542C3.99995 6.35179 3.99997 6.78985 4 7.28453V16.7155C3.99997 17.2102 3.99995 17.6482 4.03141 17.9946C4.06214 18.3329 4.13465 18.7884 4.43692 19.1671C4.81689 19.6431 5.39308 19.92 6.00216 19.9194C6.48669 19.9189 6.88771 19.6909 7.17105 19.5036C7.46117 19.3118 7.80323 19.0381 8.1895 18.729L14.0914 14.0075C14.3337 13.8137 14.5638 13.6297 14.7416 13.4598C14.9323 13.2777 15.1469 13.0358 15.2721 12.7016C15.4416 12.2492 15.4416 11.7508 15.2721 11.2984C15.1469 10.9642 14.9323 10.7223 14.7416 10.5402C14.5638 10.3703 14.3338 10.1863 14.0915 9.99254C14.082 9.98496 14.0725 9.97736 14.063 9.96974L8.18949 5.27096C7.80322 4.96191 7.46117 4.68824 7.17105 4.49643C6.88771 4.30911 6.48669 4.08115 6.00216 4.08063Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19 5V19M7.59951 17.9204L13.4383 13.2494C13.9721 12.8223 14.239 12.6088 14.3357 12.3508C14.4204 12.1246 14.4204 11.8754 14.3357 11.6492C14.239 11.3912 13.9721 11.1777 13.4383 10.7506L7.59951 6.07961C6.76734 5.41387 6.35125 5.081 6.00108 5.08063C5.69654 5.0803 5.40845 5.21876 5.21846 5.45677C5 5.73045 5 6.2633 5 7.329V16.671C5 17.7367 5 18.2695 5.21846 18.5432C5.40845 18.7812 5.69654 18.9197 6.00108 18.9194C6.35125 18.919 6.76734 18.5861 7.59951 17.9204Z"
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
