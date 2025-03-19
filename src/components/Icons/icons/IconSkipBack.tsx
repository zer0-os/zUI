import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconSkipBack = ({
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
              d="M5 4C5.55228 4 6 4.44772 6 5V19C6 19.5523 5.55228 20 5 20C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44772 4 5 4Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.9978 4.08063C18.6069 4.07997 19.1831 4.3569 19.5631 4.83292C19.8654 5.2116 19.9379 5.66715 19.9686 6.00542C20.0001 6.35179 20 6.78985 20 7.28453V16.7155C20 17.2102 20.0001 17.6482 19.9686 17.9946C19.9379 18.3329 19.8654 18.7884 19.5631 19.1671C19.1831 19.6431 18.6069 19.92 17.9978 19.9194C17.5133 19.9189 17.1123 19.6909 16.829 19.5036C16.5388 19.3118 16.1968 19.0381 15.8105 18.729L9.90858 14.0075C9.66626 13.8137 9.43621 13.6297 9.25837 13.4598C9.06773 13.2777 8.85309 13.0358 8.72788 12.7016C8.55842 12.2492 8.55842 11.7508 8.72788 11.2984C8.85309 10.9642 9.06773 10.7223 9.25837 10.5402C9.4362 10.3703 9.66624 10.1863 9.90854 9.99254C9.91802 9.98496 9.92752 9.97736 9.93704 9.96974L15.8105 5.27096C16.1968 4.96191 16.5388 4.68824 16.829 4.49643C17.1123 4.30911 17.5133 4.08115 17.9978 4.08063Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5 19V5M16.4005 6.07961L10.5617 10.7506C10.0279 11.1777 9.76097 11.3912 9.66433 11.6492C9.5796 11.8754 9.5796 12.1246 9.66433 12.3508C9.76097 12.6088 10.0279 12.8223 10.5617 13.2494L16.4005 17.9204C17.2327 18.5861 17.6487 18.919 17.9989 18.9194C18.3035 18.9197 18.5916 18.7812 18.7815 18.5432C19 18.2695 19 17.7367 19 16.671V7.329C19 6.2633 19 5.73045 18.7815 5.45677C18.5916 5.21876 18.3035 5.0803 17.9989 5.08063C17.6487 5.081 17.2327 5.41387 16.4005 6.07961Z"
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
