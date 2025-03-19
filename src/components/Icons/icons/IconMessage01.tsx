import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconMessage01 = ({
  className,
  label = DEFAULT_LABEL,
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE
}: IconProps) => {
  return (
    <div style={{ height: size, width: size }} className={classNames(className, styles.Container)}>
      <AccessibleIcon.Root label={label}>
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.76794 2.25H16.2322C17.045 2.24999 17.7006 2.24999 18.2315 2.29336C18.7782 2.33803 19.2583 2.43239 19.7025 2.65873C20.4081 3.01825 20.9818 3.59193 21.3413 4.29754C21.5677 4.74175 21.662 5.2219 21.7067 5.76853C21.7501 6.29944 21.7501 6.95505 21.75 7.76788V13.2321C21.7501 14.045 21.7501 14.7006 21.7067 15.2315C21.662 15.7781 21.5677 16.2582 21.3413 16.7025C20.9818 17.4081 20.4081 17.9817 19.7025 18.3413C19.2583 18.5676 18.7782 18.662 18.2315 18.7066C17.7006 18.75 17.045 18.75 16.2322 18.75H13.6838C13.0297 18.75 12.8067 18.7535 12.6 18.7959C12.4015 18.8367 12.2093 18.9041 12.0288 18.9963C11.8409 19.0923 11.6645 19.2289 11.1538 19.6375L8.74519 21.5644C8.55726 21.7147 8.37824 21.858 8.22345 21.9603C8.0739 22.0592 7.82102 22.2093 7.5014 22.2097C7.12072 22.2101 6.76061 22.037 6.52312 21.7395C6.32372 21.4897 6.283 21.1984 6.26678 21.0199C6.24999 20.8351 6.25002 20.6058 6.25005 20.3652L6.25005 18.7474C5.75774 18.7402 5.37312 18.7143 5.02948 18.6222C3.73538 18.2755 2.72458 17.2647 2.37783 15.9706C2.24957 15.4919 2.24975 14.9338 2.25002 14.1158C2.25004 14.0778 2.25005 14.0392 2.25005 14L2.25005 7.7679C2.25004 6.95506 2.25004 6.29944 2.29341 5.76853C2.33807 5.2219 2.43243 4.74175 2.65877 4.29754C3.0183 3.59193 3.59198 3.01825 4.29759 2.65873C4.7418 2.43239 5.22194 2.33803 5.76858 2.29336C6.29949 2.24999 6.95511 2.24999 7.76794 2.25ZM5.89073 3.78838C5.43685 3.82547 5.17609 3.8946 4.97857 3.99524C4.55521 4.21095 4.211 4.55516 3.99528 4.97852C3.89464 5.17604 3.82551 5.4368 3.78843 5.89068C3.75063 6.35331 3.75005 6.94755 3.75005 7.8V14C3.75005 14.9783 3.75649 15.3203 3.82672 15.5823C4.03477 16.3588 4.64125 16.9653 5.41771 17.1733C5.67979 17.2436 6.02179 17.25 7.00005 17.25C7.41426 17.25 7.75005 17.5858 7.75005 18V20.3355C7.75005 20.3722 7.75006 20.4067 7.75011 20.4394C7.77564 20.419 7.80266 20.3974 7.83128 20.3745L10.2167 18.4662C10.2358 18.4509 10.2546 18.4359 10.2732 18.421C10.7062 18.0744 11.0061 17.8344 11.3463 17.6606C11.6472 17.5068 11.9675 17.3945 12.2985 17.3266C12.6727 17.2498 13.0568 17.2499 13.6115 17.25C13.6353 17.25 13.6594 17.25 13.6838 17.25H16.2C17.0525 17.25 17.6467 17.2494 18.1094 17.2116C18.5632 17.1745 18.824 17.1054 19.0215 17.0048C19.4449 16.789 19.7891 16.4448 20.0048 16.0215C20.1055 15.824 20.1746 15.5632 20.2117 15.1093C20.2495 14.6467 20.25 14.0525 20.25 13.2V7.8C20.25 6.94755 20.2495 6.35331 20.2117 5.89068C20.1746 5.4368 20.1055 5.17604 20.0048 4.97852C19.7891 4.55516 19.4449 4.21095 19.0215 3.99524C18.824 3.8946 18.5632 3.82547 18.1094 3.78838C17.6467 3.75058 17.0525 3.75 16.2001 3.75H7.80005C6.9476 3.75 6.35336 3.75058 5.89073 3.78838Z"
            fill={color}
          />
        </svg>
      </AccessibleIcon.Root>
    </div>
  );
};
