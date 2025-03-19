import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconBellOff3 = ({
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
              d="M15.874 20H19.4948L20.3356 20.7474C20.7484 21.1143 21.3805 21.0772 21.7474 20.6644C22.1143 20.2516 22.0772 19.6195 21.6644 19.2526L3.66437 3.2526C3.25159 2.88568 2.61952 2.92286 2.2526 3.33565C1.88568 3.74843 1.92286 4.3805 2.33565 4.74742L5.99947 8.00415C5.35664 8.95234 5.00001 10.0539 5.00001 11.2C5.00001 13.3076 4.47975 14.7999 3.86729 15.8357L3.85713 15.8529C3.46334 16.5188 3.15573 17.0391 2.94944 17.4125C2.84633 17.5991 2.75559 17.7721 2.68963 17.9202C2.65691 17.9937 2.62083 18.0819 2.59271 18.1756C2.57175 18.2454 2.52017 18.4264 2.54162 18.6459C2.5534 18.7664 2.58042 19.0057 2.71976 19.25C2.85909 19.4942 3.05132 19.6393 3.14904 19.7107C3.30829 19.8272 3.46764 19.8771 3.547 19.8991C3.64066 19.9251 3.73168 19.9404 3.80714 19.9505C3.95802 19.9707 4.1337 19.981 4.31681 19.9873C4.68183 20 5.19219 20 5.83526 20H8.12601C8.57005 21.7252 10.1362 23 12 23C13.8638 23 15.43 21.7252 15.874 20ZM12 21C11.2597 21 10.6134 20.5978 10.2676 20H13.7324C13.3866 20.5978 12.7403 21 12 21Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.52206 4.89464L19.6071 14.748C19.2498 13.8256 19 12.6606 19 11.2C19 9.50571 18.2222 7.91537 16.8976 6.76736C16.4121 6.34658 15.8666 5.99625 15.2807 5.72147C15.4224 5.34106 15.5 4.92938 15.5 4.5C15.5 2.567 13.933 1 12 1C10.067 1 8.5 2.567 8.5 4.5C8.5 4.63339 8.50749 4.76507 8.52206 4.89464ZM12 3C11.1716 3 10.5 3.67157 10.5 4.5C10.5 4.72109 10.5474 4.93048 10.633 5.11912C11.0811 5.04027 11.5389 5 12 5C12.4611 5 12.9189 5.04027 13.367 5.11911C13.4526 4.93048 13.5 4.72108 13.5 4.5C13.5 3.67157 12.8284 3 12 3Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 19C15 20.6569 13.6569 22 12 22C10.3431 22 9 20.6569 9 19M7.37748 7.88479C6.49088 8.81326 6 9.9847 6 11.2C6 13.4818 5.43413 15.1506 4.72806 16.3447C3.92334 17.7056 3.52098 18.3861 3.53686 18.5486C3.55504 18.7346 3.58852 18.7933 3.73934 18.9036C3.87117 19 4.53351 19 5.85819 19H19.88M12 6C11.7071 6 11.4164 6.01856 11.13 6.05493C10.7485 6.10339 10.5577 6.12762 10.3662 6.07557C10.2284 6.0381 10.0206 5.91728 9.91979 5.81604C9.77982 5.67541 9.74922 5.60123 9.68801 5.45287C9.56684 5.15921 9.5 4.83741 9.5 4.5C9.5 3.11929 10.6193 2 12 2C13.3807 2 14.5 3.11929 14.5 4.5C14.5 5.17562 14.232 5.78864 13.7965 6.23856C13.2203 6.08184 12.615 6 12 6ZM12 6C13.5913 6 15.1174 6.54786 16.2426 7.52304C17.3679 8.49823 18 9.82087 18 11.2C18 11.5348 18.0091 11.8563 18.0264 12.1652M21 20L3 4"
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
