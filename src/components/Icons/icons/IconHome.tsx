import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconHome = ({
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.9362 3.02523C11.9296 3.02793 11.9056 3.03921 11.8539 3.07374C11.7695 3.13012 11.6623 3.21292 11.4782 3.3561L4.69592 8.63123C4.20902 9.00993 4.08279 9.11637 3.99509 9.23493C3.90468 9.35718 3.83733 9.49489 3.79634 9.6413C3.75659 9.78332 3.75008 9.94831 3.75008 10.5651V17.8001C3.75008 18.3725 3.75066 18.7567 3.77483 19.0526C3.79829 19.3397 3.84017 19.477 3.88632 19.5676C4.00616 19.8028 4.19739 19.994 4.43259 20.1138C4.52315 20.16 4.66043 20.2019 4.94755 20.2253C5.24343 20.2495 5.62765 20.2501 6.20008 20.2501H8.20008C8.21771 20.2501 8.23433 20.2501 8.25006 20.2501C8.25007 20.2343 8.25008 20.2177 8.25008 20.2001L8.25007 13.5739C8.25006 13.3164 8.25004 13.0799 8.26619 12.8822C8.2836 12.6691 8.32347 12.4359 8.44081 12.2056C8.60859 11.8763 8.87631 11.6086 9.20559 11.4408C9.4359 11.3235 9.66907 11.2836 9.8822 11.2662C10.0799 11.25 10.3164 11.2501 10.5738 11.2501H13.4263C13.6838 11.2501 13.9203 11.25 14.1179 11.2662C14.3311 11.2836 14.5643 11.3235 14.7946 11.4408C15.1238 11.6086 15.3916 11.8763 15.5593 12.2056C15.6767 12.4359 15.7165 12.6691 15.734 12.8822C15.7501 13.0799 15.7501 13.3164 15.7501 13.5738L15.7501 20.2001C15.7501 20.2177 15.7501 20.2343 15.7501 20.2501C15.7658 20.2501 15.7824 20.2501 15.8001 20.2501H17.8001C18.3725 20.2501 18.7567 20.2495 19.0526 20.2253C19.3397 20.2019 19.477 20.16 19.5676 20.1138C19.8028 19.994 19.994 19.8028 20.1138 19.5676C20.16 19.477 20.2019 19.3397 20.2253 19.0526C20.2495 18.7567 20.2501 18.3725 20.2501 17.8001V10.5651C20.2501 9.94831 20.2436 9.78332 20.2038 9.6413C20.1628 9.49489 20.0955 9.35717 20.0051 9.23493C19.9174 9.11637 19.7911 9.00993 19.3042 8.63123L12.5219 3.3561C12.3378 3.21292 12.2306 3.13012 12.1463 3.07374C12.0946 3.03921 12.0705 3.02794 12.0639 3.02523C12.0221 3.01417 11.9781 3.01417 11.9362 3.02523ZM12.062 3.02451C12.062 3.02448 12.0628 3.02477 12.0639 3.02523L12.062 3.02451ZM8.2444 20.4802C8.2444 20.4802 8.24445 20.4798 8.24459 20.479L8.2444 20.4802ZM11.9362 3.02523C11.9374 3.02477 11.9382 3.02448 11.9382 3.02451L11.9362 3.02523ZM11.5427 1.57776C11.8422 1.49666 12.1579 1.49666 12.4574 1.57776C12.8027 1.67124 13.0962 1.90089 13.372 2.11677C13.3957 2.13534 13.4193 2.15381 13.4428 2.17208L20.2251 7.4472C20.248 7.46495 20.2705 7.48246 20.2928 7.49976C20.6803 7.80073 20.9851 8.03748 21.211 8.34296C21.4099 8.6119 21.5581 8.91486 21.6483 9.23698C21.7507 9.60287 21.7504 9.98884 21.7501 10.4795C21.7501 10.5077 21.7501 10.5362 21.7501 10.5651V17.8305C21.7501 18.3647 21.7501 18.8105 21.7203 19.1747C21.6893 19.5546 21.6222 19.9113 21.4503 20.2485C21.1867 20.766 20.766 21.1867 20.2485 21.4503C19.9113 21.6222 19.5546 21.6893 19.1747 21.7203C18.8105 21.7501 18.3647 21.7501 17.8305 21.7501L15.7798 21.7501C15.6577 21.7501 15.5252 21.7501 15.4106 21.7408C15.2808 21.7302 15.1094 21.7039 14.9326 21.6138C14.6974 21.494 14.5062 21.3028 14.3863 21.0676C14.2962 20.8907 14.27 20.7193 14.2594 20.5895C14.25 20.4749 14.25 20.3425 14.2501 20.2203L14.2501 13.6001C14.2501 13.3077 14.2495 13.1335 14.2389 13.0044C14.2325 12.9255 14.224 12.8924 14.2213 12.8835C14.1977 12.8389 14.1613 12.8024 14.1166 12.7789C14.1077 12.7761 14.0746 12.7676 13.9958 12.7612C13.8667 12.7507 13.6925 12.7501 13.4001 12.7501H10.6001C10.3077 12.7501 10.1335 12.7507 10.0044 12.7612C9.92554 12.7676 9.89242 12.7761 9.88354 12.7789C9.8389 12.8024 9.80242 12.8389 9.7789 12.8835C9.77614 12.8924 9.76765 12.9255 9.76121 13.0044C9.75066 13.1335 9.75008 13.3077 9.75008 13.6001L9.75008 20.2203C9.75011 20.3425 9.75014 20.4749 9.74077 20.5895C9.73017 20.7193 9.70393 20.8907 9.61383 21.0676C9.49399 21.3028 9.30277 21.494 9.06756 21.6138C8.89073 21.7039 8.71931 21.7302 8.58955 21.7408C8.47491 21.7501 8.34246 21.7501 8.2203 21.7501L6.16962 21.7501C5.63548 21.7501 5.18963 21.7501 4.82541 21.7203C4.44552 21.6893 4.08886 21.6222 3.7516 21.4503C3.23415 21.1867 2.81346 20.766 2.54981 20.2485C2.37796 19.9113 2.31085 19.5546 2.27981 19.1747C2.25006 18.8105 2.25006 18.3647 2.25007 17.8305L2.25008 10.5651C2.25008 10.5362 2.25006 10.5077 2.25004 10.4795C2.24971 9.98884 2.24945 9.60287 2.35186 9.23698C2.44203 8.91486 2.5902 8.6119 2.78911 8.34296C3.01505 8.03748 3.31987 7.80073 3.70738 7.49976C3.72965 7.48246 3.75219 7.46495 3.77501 7.4472L10.5573 2.17208C10.5808 2.1538 10.6044 2.13534 10.6281 2.11677C10.904 1.90089 11.1974 1.67124 11.5427 1.57776ZM9.7798 12.8809C9.77981 12.881 9.77964 12.8815 9.77925 12.8824L9.7798 12.8809ZM9.88095 12.7798C9.88091 12.7798 9.88138 12.7796 9.88244 12.7793L9.88095 12.7798ZM14.1192 12.7798C14.1192 12.7798 14.1186 12.7796 14.1177 12.7792L14.1192 12.7798ZM14.2203 12.8809C14.2204 12.8809 14.2206 12.8814 14.2209 12.8825L14.2203 12.8809Z"
            fill={color}
          />
        </svg>
      </AccessibleIcon.Root>
    </div>
  );
};
