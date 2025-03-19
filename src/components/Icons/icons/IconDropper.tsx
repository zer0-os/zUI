import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconDropper = ({
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
              d="M1.88976 22.9937C1.65729 22.9679 1.45095 22.8608 1.2957 22.7043C1.13918 22.5491 1.03215 22.3427 1.00632 22.1103C0.976638 21.8432 1.03748 21.549 1.0941 21.2752C1.10827 21.2067 1.12217 21.1395 1.13432 21.0743C1.22546 20.5855 1.37423 19.9078 1.60602 19.1462C2.06208 17.6477 2.8723 15.7135 4.29309 14.2927L10.5858 8L9.79289 7.20711C9.40237 6.81658 9.40237 6.18342 9.79289 5.79289C10.1834 5.40237 10.8166 5.40237 11.2071 5.79289L18.2071 12.7929C18.5976 13.1834 18.5976 13.8166 18.2071 14.2071C17.8166 14.5976 17.1834 14.5976 16.7929 14.2071L16 13.4142L9.7073 19.7069C8.28652 21.1277 6.35234 21.9379 4.85386 22.394C4.09226 22.6258 3.41452 22.7745 2.92567 22.8657C2.86048 22.8778 2.79328 22.8917 2.7248 22.9059C2.45102 22.9625 2.15686 23.0234 1.88976 22.9937Z"
              fill={color}
            />
            <path
              d="M14.5456 4.04021C14.1496 4.43622 13.9516 4.63423 13.8774 4.86256C13.8121 5.0634 13.8121 5.27975 13.8774 5.48059C13.9516 5.70892 14.1496 5.90693 14.5456 6.30295L17.6971 9.45442C18.0931 9.85044 18.2911 10.0485 18.5194 10.1226C18.7203 10.1879 18.9366 10.1879 19.1375 10.1226C19.3658 10.0485 19.5638 9.85044 19.9598 9.45443L21.7073 7.70692C23.2024 6.21183 23.2024 3.78781 21.7073 2.29271L21.705 2.29043C20.2097 0.797616 17.7874 0.798372 16.2931 2.29271L14.5456 4.04021Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.5 6.50006L17.5 13.5001M2 22.0001C2 22.0001 6.5 21.5001 9 19.0001L21 7.00006C22.1046 5.89549 22.1046 4.10463 21 3.00006C19.8954 1.89549 18.1046 1.89549 17 3.00006L5 15.0001C2.5 17.5001 2 22.0001 2 22.0001Z"
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
