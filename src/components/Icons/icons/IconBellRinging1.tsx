import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconBellRinging1 = ({
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
              d="M8.60469 20.3383C8.97015 19.9242 9.60209 19.8848 10.0162 20.2503C10.5456 20.7176 11.2387 21 12.0002 21C12.7618 21 13.4549 20.7176 13.9843 20.2503C14.3984 19.8848 15.0303 19.9242 15.3958 20.3383C15.7613 20.7523 15.7219 21.3843 15.3078 21.7497C14.427 22.5272 13.2676 23 12.0002 23C10.7329 23 9.5735 22.5272 8.69269 21.7497C8.27862 21.3843 8.23922 20.7523 8.60469 20.3383Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.19728 1.80858C5.46868 2.28958 5.29877 2.89952 4.81777 3.17092C3.871 3.70513 3.28335 4.72298 3.29409 5.81001C3.29955 6.36227 2.85628 6.81438 2.30402 6.81984C1.75177 6.8253 1.29965 6.38204 1.29419 5.82978C1.27624 4.01411 2.25355 2.32136 3.83494 1.42907C4.31594 1.15767 4.92588 1.32758 5.19728 1.80858Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.7992 1.80859C19.0706 1.32759 19.6806 1.15768 20.1616 1.42908C21.743 2.32137 22.7203 4.01412 22.7023 5.82978C22.6969 6.38204 22.2448 6.82531 21.6925 6.81985C21.1402 6.81439 20.697 6.36227 20.7024 5.81001C20.7132 4.72299 20.1255 3.70514 19.1788 3.17093C18.6978 2.89953 18.5278 2.28959 18.7992 1.80859Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.0505 3.05025C8.36326 1.7375 10.1437 1 12.0002 1C13.8568 1 15.6372 1.7375 16.95 3.05025C18.2628 4.36301 19.0002 6.14349 19.0002 8C19.0002 10.9127 19.7323 12.8439 20.4996 14.0771L20.5115 14.0962C20.8688 14.6704 21.1512 15.1243 21.3417 15.4547C21.4371 15.6202 21.524 15.7797 21.5884 15.9215C21.6205 15.9922 21.6564 16.079 21.6845 16.1733C21.7078 16.2515 21.7522 16.4187 21.7356 16.6223C21.7244 16.7591 21.6965 16.9928 21.5624 17.2343C21.4282 17.4758 21.2445 17.623 21.1342 17.7047C20.8839 17.8904 20.5965 17.9329 20.5006 17.947L20.4962 17.9477C20.3488 17.9695 20.1815 17.9804 20.0127 17.9869C19.6775 18 19.2133 18 18.6361 18H5.3644C4.78718 18 4.32303 18 3.98778 17.9869C3.81902 17.9804 3.65174 17.9695 3.50433 17.9477L3.49991 17.947C3.40398 17.9329 3.11655 17.8904 2.86626 17.7047C2.75602 17.623 2.57229 17.4758 2.43814 17.2343C2.30398 16.9928 2.27609 16.7591 2.2649 16.6223C2.24825 16.4187 2.29266 16.2515 2.31596 16.1733C2.34405 16.079 2.38 15.9922 2.41212 15.9215C2.47649 15.7797 2.56342 15.6202 2.65884 15.4547C2.84927 15.1243 3.13175 14.6703 3.48907 14.0961L3.50087 14.0771C4.26824 12.8439 5.00025 10.9127 5.00025 8C5.00025 6.14348 5.73775 4.36301 7.0505 3.05025Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.35442 21C10.0596 21.6224 10.9858 22 12.0002 22C13.0147 22 13.9409 21.6224 14.6461 21M2.29414 5.81989C2.27979 4.36854 3.06227 3.01325 4.32635 2.3M21.7024 5.8199C21.7167 4.36855 20.9342 3.01325 19.6702 2.3M18.0002 8C18.0002 6.4087 17.3681 4.88258 16.2429 3.75736C15.1177 2.63214 13.5915 2 12.0002 2C10.4089 2 8.88283 2.63214 7.75761 3.75736C6.63239 4.88258 6.00025 6.4087 6.00025 8C6.00025 11.0902 5.22072 13.206 4.34991 14.6054C3.61538 15.7859 3.24811 16.3761 3.26157 16.5408C3.27649 16.7231 3.31511 16.7926 3.46203 16.9016C3.59471 17 4.19284 17 5.3891 17H18.6114C19.8077 17 20.4058 17 20.5385 16.9016C20.6854 16.7926 20.724 16.7231 20.7389 16.5408C20.7524 16.3761 20.3851 15.7859 19.6506 14.6054C18.7798 13.206 18.0002 11.0902 18.0002 8Z"
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
