import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconHelpCircle = ({
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
              d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM10.9066 8.27123C11.3138 8.03191 11.7926 7.94443 12.2581 8.02428C12.7236 8.10413 13.1459 8.34615 13.45 8.70749C13.7542 9.06883 13.9207 9.52615 13.92 9.99847L13.92 9.99996C13.92 10.4691 13.5549 10.9582 12.8653 11.4179C12.5509 11.6275 12.2294 11.7889 11.9826 11.8986C11.8606 11.9529 11.7603 11.9929 11.6929 12.0186C11.663 12.03 11.6329 12.041 11.6027 12.0516C11.0794 12.2267 10.7968 12.7926 10.9713 13.3162C11.146 13.8401 11.7123 14.1233 12.2362 13.9486L12.4049 13.8876C12.5015 13.8508 12.6356 13.7971 12.7949 13.7263C13.1105 13.586 13.5391 13.3724 13.9747 13.082C14.7849 12.5419 15.9195 11.5312 15.92 10.0009C15.9213 9.05644 15.5883 8.14201 14.9801 7.41949C14.3717 6.69682 13.5273 6.21277 12.5962 6.05307C11.6652 5.89337 10.7077 6.06833 9.89327 6.54696C9.07886 7.02559 8.46013 7.77701 8.14666 8.66812C7.96339 9.18911 8.23716 9.76002 8.75815 9.9433C9.27914 10.1266 9.85006 9.85279 10.0333 9.33181C10.1901 8.88625 10.4994 8.51054 10.9066 8.27123ZM12 16C11.4477 16 11 16.4477 11 17C11 17.5522 11.4477 18 12 18H12.01C12.5623 18 13.01 17.5522 13.01 17C13.01 16.4477 12.5623 16 12.01 16H12Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13M12 17H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
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
