import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconPhoneOutgoing1 = ({
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
              d="M15 3C15 2.44772 15.4477 2 16 2H21C21.5523 2 22 2.44772 22 3V8C22 8.55228 21.5523 9 21 9C20.4477 9 20 8.55228 20 8V5.41422L15.7071 9.70711C15.3166 10.0976 14.6834 10.0976 14.2929 9.70711C13.9024 9.31658 13.9024 8.68342 14.2929 8.29289L18.5858 4H16C15.4477 4 15 3.55228 15 3Z"
              fill={color}
            />
            <path
              d="M1.19373 8.97805C2.13431 12.2873 3.90413 15.3182 6.33804 17.7522C8.77192 20.186 11.8029 21.956 15.1122 22.8965C15.6312 23.044 16.0336 23.1584 16.5855 23.16C17.2163 23.1619 18.0065 22.9564 18.5565 22.6475C19.5159 22.1085 20.718 20.968 21.2127 19.9901C21.6433 19.1387 21.6433 18.1333 21.2127 17.282C20.79 16.4463 19.8116 15.4878 19.0289 14.9789C18.0345 14.3324 16.7527 14.3324 15.7583 14.9789C15.4919 15.1521 15.2454 15.399 14.9592 15.6857C14.9461 15.6988 14.9336 15.7121 14.9216 15.7249C14.8488 15.8025 14.7897 15.8655 14.6698 15.808C13.3205 15.1601 12.0549 14.2766 10.9342 13.156C9.81356 12.0353 8.93007 10.7697 8.28225 9.42041C8.22534 9.3019 8.2928 9.23777 8.37019 9.16419C8.38154 9.1534 8.3931 9.14241 8.40451 9.13102C8.69117 8.84485 8.9381 8.59834 9.11134 8.33189C9.75783 7.33755 9.75783 6.05568 9.11134 5.06134C8.60242 4.2786 7.64386 3.30019 6.8082 2.87752C5.95686 2.44691 4.95146 2.44691 4.10012 2.87752C3.11479 3.37589 1.97403 4.58795 1.44275 5.53372C1.13382 6.08366 0.928311 6.8739 0.930189 7.50467C0.931832 8.05657 1.04622 8.45904 1.19373 8.97805Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.9996 8V3M20.9996 3H15.9996M20.9996 3L14.9996 9M10.2266 13.8631C9.02506 12.6615 8.07627 11.3028 7.38028 9.85323C7.32041 9.72854 7.29048 9.66619 7.26748 9.5873C7.18576 9.30695 7.24446 8.96269 7.41447 8.72526C7.46231 8.65845 7.51947 8.60129 7.63378 8.48698C7.98338 8.13737 8.15819 7.96257 8.27247 7.78679C8.70347 7.1239 8.70347 6.26932 8.27247 5.60643C8.15819 5.43065 7.98338 5.25585 7.63378 4.90624L7.43891 4.71137C6.90747 4.17993 6.64174 3.91421 6.35636 3.76987C5.7888 3.4828 5.11854 3.4828 4.55098 3.76987C4.2656 3.91421 3.99987 4.17993 3.46843 4.71137L3.3108 4.86901C2.78117 5.39863 2.51636 5.66344 2.31411 6.02348C2.08969 6.42298 1.92833 7.04347 1.9297 7.5017C1.93092 7.91464 2.01103 8.19687 2.17124 8.76131C3.03221 11.7947 4.65668 14.6571 7.04466 17.045C9.43264 19.433 12.295 21.0575 15.3284 21.9185C15.8928 22.0787 16.1751 22.1588 16.588 22.16C17.0462 22.1614 17.6667 22 18.0662 21.7756C18.4263 21.5733 18.6911 21.3085 19.2207 20.7789L19.3783 20.6213C19.9098 20.0898 20.1755 19.8241 20.3198 19.5387C20.6069 18.9712 20.6069 18.3009 20.3198 17.7333C20.1755 17.448 19.9098 17.1822 19.3783 16.6508L19.1835 16.4559C18.8339 16.1063 18.6591 15.9315 18.4833 15.8172C17.8204 15.3862 16.9658 15.3862 16.3029 15.8172C16.1271 15.9315 15.9523 16.1063 15.6027 16.4559C15.4884 16.5702 15.4313 16.6274 15.3644 16.6752C15.127 16.8453 14.7828 16.904 14.5024 16.8222C14.4235 16.7992 14.3612 16.7693 14.2365 16.7094C12.7869 16.0134 11.4282 15.0646 10.2266 13.8631Z"
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
