import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconPhoneCall1 = ({
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
              d="M13.0687 5.80853C13.1744 5.26647 13.6996 4.91277 14.2416 5.01853C15.4137 5.24721 16.4909 5.82044 17.3353 6.66486C18.1797 7.50927 18.753 8.58645 18.9816 9.75853C19.0874 10.3006 18.7337 10.8258 18.1916 10.9315C17.6496 11.0373 17.1244 10.6836 17.0187 10.1415C16.8662 9.36013 16.484 8.64201 15.9211 8.07907C15.3582 7.51613 14.64 7.13397 13.8587 6.98152C13.3166 6.87576 12.9629 6.3506 13.0687 5.80853Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.0563 1.88961C13.1172 1.34071 13.6117 0.945162 14.1606 1.00614C16.4153 1.25663 18.5179 2.26634 20.1231 3.86948C21.7282 5.47263 22.7406 7.57393 22.9939 9.82836C23.0556 10.3772 22.6606 10.8721 22.1118 10.9338C21.563 10.9954 21.0681 10.6005 21.0064 10.0517C20.8037 8.24814 19.9939 6.5671 18.7097 5.28459C17.4256 4.00207 15.7435 3.1943 13.9397 2.99391C13.3908 2.93293 12.9953 2.43852 13.0563 1.88961Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.33804 17.7522C3.90413 15.3183 2.13431 12.2873 1.19373 8.97807C1.04622 8.45906 0.931832 8.05659 0.930189 7.5047C0.928311 6.87393 1.13382 6.08369 1.44275 5.53374C1.97403 4.58797 3.11479 3.37592 4.10012 2.87755C4.95146 2.44694 5.95686 2.44694 6.8082 2.87755C7.64386 3.30021 8.60242 4.27862 9.11134 5.06137C9.75783 6.05571 9.75783 7.33757 9.11134 8.33191C8.9381 8.59836 8.69117 8.84487 8.40451 9.13105C8.31525 9.22016 8.217 9.28455 8.28225 9.42043C8.93007 10.7697 9.81356 12.0353 10.9342 13.156C12.0549 14.2767 13.3205 15.1602 14.6698 15.808C14.8095 15.8751 14.8667 15.7783 14.9592 15.6857C15.2454 15.3991 15.4919 15.1521 15.7583 14.9789C16.7527 14.3324 18.0345 14.3324 19.0289 14.9789C19.8116 15.4878 20.79 16.4464 21.2127 17.282C21.6433 18.1334 21.6433 19.1388 21.2127 19.9901C20.718 20.9681 19.5159 22.1085 18.5565 22.6475C18.0065 22.9564 17.2163 23.1619 16.5855 23.16C16.0336 23.1584 15.6312 23.044 15.1122 22.8965C11.8029 21.956 8.77192 20.1861 6.33804 17.7522Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.0497 6C15.0264 6.19057 15.924 6.66826 16.6277 7.37194C17.3314 8.07561 17.8091 8.97326 17.9997 9.95M14.0497 2C16.0789 2.22544 17.9713 3.13417 19.4159 4.57701C20.8606 6.01984 21.7717 7.91101 21.9997 9.94M10.2266 13.8631C9.02506 12.6615 8.07627 11.3028 7.38028 9.85323C7.32041 9.72854 7.29048 9.66619 7.26748 9.5873C7.18576 9.30695 7.24446 8.96269 7.41447 8.72526C7.46231 8.65845 7.51947 8.60129 7.63378 8.48698C7.98338 8.13737 8.15819 7.96257 8.27247 7.78679C8.70347 7.1239 8.70347 6.26932 8.27247 5.60643C8.15819 5.43065 7.98338 5.25585 7.63378 4.90624L7.43891 4.71137C6.90747 4.17993 6.64174 3.91421 6.35636 3.76987C5.7888 3.4828 5.11854 3.4828 4.55098 3.76987C4.2656 3.91421 3.99987 4.17993 3.46843 4.71137L3.3108 4.86901C2.78117 5.39863 2.51636 5.66344 2.31411 6.02348C2.08969 6.42298 1.92833 7.04347 1.9297 7.5017C1.93092 7.91464 2.01103 8.19687 2.17124 8.76131C3.03221 11.7947 4.65668 14.6571 7.04466 17.045C9.43264 19.433 12.295 21.0575 15.3284 21.9185C15.8928 22.0787 16.1751 22.1588 16.588 22.16C17.0462 22.1614 17.6667 22 18.0662 21.7756C18.4263 21.5733 18.6911 21.3085 19.2207 20.7789L19.3783 20.6213C19.9098 20.0898 20.1755 19.8241 20.3198 19.5387C20.6069 18.9712 20.6069 18.3009 20.3198 17.7333C20.1755 17.448 19.9098 17.1822 19.3783 16.6508L19.1835 16.4559C18.8339 16.1063 18.6591 15.9315 18.4833 15.8172C17.8204 15.3862 16.9658 15.3862 16.3029 15.8172C16.1271 15.9315 15.9523 16.1063 15.6027 16.4559C15.4884 16.5702 15.4313 16.6274 15.3644 16.6752C15.127 16.8453 14.7828 16.904 14.5024 16.8222C14.4235 16.7992 14.3612 16.7693 14.2365 16.7094C12.7869 16.0134 11.4282 15.0646 10.2266 13.8631Z"
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