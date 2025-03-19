import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconHexagon1 = ({
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
              d="M11.5975 1.18505C11.8633 1.13038 12.1375 1.13038 12.4033 1.18505C12.7105 1.24824 12.9852 1.40207 13.2035 1.52436C13.2239 1.53575 13.2437 1.54687 13.263 1.55761L20.663 5.66872C20.6835 5.68009 20.7046 5.6917 20.7262 5.70359C20.9573 5.8309 21.2479 5.99097 21.4711 6.23315C21.6641 6.44253 21.8101 6.69069 21.8994 6.96105C22.0027 7.27375 22.0015 7.60553 22.0005 7.8694C22.0005 7.89406 22.0004 7.91813 22.0004 7.94153V16.0586C22.0004 16.082 22.0005 16.1061 22.0005 16.1308C22.0015 16.3946 22.0027 16.7264 21.8994 17.0391C21.8101 17.3095 21.6641 17.5576 21.4711 17.767C21.2479 18.0092 20.9573 18.1693 20.7262 18.2966C20.7046 18.3085 20.6835 18.3201 20.663 18.3314L13.263 22.4426C13.2437 22.4533 13.2239 22.4644 13.2035 22.4758C12.9852 22.5981 12.7105 22.7519 12.4033 22.8151C12.1375 22.8698 11.8633 22.8698 11.5975 22.8151C11.2902 22.7519 11.0155 22.5981 10.7972 22.4758C10.7769 22.4644 10.757 22.4533 10.7377 22.4426L3.3377 18.3314C3.31724 18.3201 3.29616 18.3085 3.27456 18.2966C3.04343 18.1693 2.75281 18.0092 2.52964 17.767C2.33668 17.5576 2.19066 17.3095 2.10134 17.0391C1.99802 16.7264 1.99923 16.3946 2.00019 16.1308C2.00028 16.1061 2.00037 16.082 2.00037 16.0586V7.94153C2.00037 7.91813 2.00028 7.89406 2.00019 7.8694C1.99923 7.60553 1.99802 7.27375 2.10134 6.96105C2.19066 6.69069 2.33668 6.44253 2.52964 6.23315C2.75281 5.99097 3.04343 5.8309 3.27456 5.70359C3.29616 5.6917 3.31724 5.68009 3.3377 5.66872L10.7377 1.55761C10.757 1.54687 10.7769 1.53575 10.7972 1.52436C11.0156 1.40207 11.2902 1.24824 11.5975 1.18505Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.223 2.43171C11.5066 2.27415 11.6484 2.19537 11.7985 2.16448C11.9315 2.13715 12.0685 2.13715 12.2015 2.16448C12.3516 2.19537 12.4934 2.27415 12.777 2.43171L20.177 6.54282C20.4766 6.70922 20.6263 6.79242 20.7354 6.91076C20.8318 7.01545 20.9049 7.13953 20.9495 7.27471C21 7.4275 21 7.59883 21 7.94147V16.0586C21 16.4012 21 16.5725 20.9495 16.7253C20.9049 16.8605 20.8318 16.9846 20.7354 17.0893C20.6263 17.2076 20.4766 17.2908 20.177 17.4572L12.777 21.5683C12.4934 21.7259 12.3516 21.8047 12.2015 21.8356C12.0685 21.8629 11.9315 21.8629 11.7985 21.8356C11.6484 21.8047 11.5066 21.7259 11.223 21.5683L3.82297 17.4572C3.52345 17.2908 3.37369 17.2076 3.26463 17.0893C3.16816 16.9846 3.09515 16.8605 3.05048 16.7253C3 16.5725 3 16.4012 3 16.0586V7.94147C3 7.59883 3 7.4275 3.05048 7.27471C3.09515 7.13953 3.16816 7.01545 3.26463 6.91076C3.37369 6.79242 3.52345 6.70922 3.82297 6.54282L11.223 2.43171Z"
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
