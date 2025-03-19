import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconPlay = ({
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
              d="M8.00625 2.80231C8.0182 2.81028 8.03019 2.81828 8.04222 2.8263L18.591 9.85878C18.8962 10.0622 19.1792 10.2509 19.3965 10.4261C19.6234 10.6091 19.8908 10.8628 20.0447 11.2339C20.2481 11.7244 20.2481 12.2756 20.0447 12.7661C19.8908 13.1372 19.6234 13.3909 19.3965 13.5739C19.1792 13.7491 18.8962 13.9378 18.591 14.1412L8.00628 21.1977C7.63319 21.4464 7.29772 21.6701 7.01305 21.8244C6.72818 21.9788 6.33717 22.1552 5.8808 22.1279C5.29705 22.0931 4.75779 21.8045 4.40498 21.3381C4.12916 20.9735 4.05905 20.5503 4.02949 20.2276C3.99994 19.9052 3.99997 19.502 4 19.0536L4 4.98963C4 4.97517 4 4.96075 4 4.94638C3.99997 4.49799 3.99994 4.09479 4.02949 3.77237C4.05905 3.44971 4.12916 3.02652 4.40498 2.66191C4.75779 2.19553 5.29705 1.90693 5.8808 1.87207C6.33717 1.84482 6.72818 2.02123 7.01305 2.17561C7.29771 2.32988 7.63317 2.55356 8.00625 2.80231Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5 4.98963C5 4.01846 5 3.53288 5.20249 3.26521C5.37889 3.03202 5.64852 2.88772 5.9404 2.8703C6.27544 2.85029 6.67946 3.11964 7.48752 3.65835L18.0031 10.6687C18.6708 11.1138 19.0046 11.3364 19.1209 11.6169C19.2227 11.8622 19.2227 12.1378 19.1209 12.3831C19.0046 12.6636 18.6708 12.8862 18.0031 13.3313L7.48752 20.3417C6.67946 20.8804 6.27544 21.1497 5.9404 21.1297C5.64852 21.1123 5.37889 20.968 5.20249 20.7348C5 20.4671 5 19.9815 5 19.0104V4.98963Z"
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
