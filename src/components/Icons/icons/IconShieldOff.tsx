import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconShieldOff = ({
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
              d="M3.70711 2.29289C3.31658 1.90237 2.68342 1.90237 2.29289 2.29289C1.90237 2.68342 1.90237 3.31658 2.29289 3.70711L3.29061 4.70483C3.10431 5.02285 3 5.39073 3 5.77624V11.9999C3 14.8266 4.53729 17.1831 6.19906 18.9143C7.87196 20.6571 9.786 21.8881 10.7981 22.4786L10.8391 22.5026C11.0238 22.611 11.2635 22.7518 11.5807 22.8198C11.8402 22.8755 12.1601 22.8755 12.4195 22.8198C12.7367 22.7517 12.9771 22.6105 13.1623 22.5018L13.2036 22.4776C14.1818 21.9068 16.014 20.7311 17.6526 19.0668L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L3.70711 2.29289Z"
              fill={color}
            />
            <path
              d="M20.0529 15.8102C20.6283 14.6661 21 13.3898 21 11.9999L21.0002 7.07799C21.0011 6.41855 21.0019 5.83944 20.8039 5.31893C20.6306 4.86358 20.349 4.45729 19.9835 4.13517C19.5657 3.76694 19.0232 3.56439 18.4054 3.33374L12.9129 1.27422L12.8697 1.2579C12.7081 1.19688 12.5047 1.12002 12.2861 1.08843C12.0964 1.06102 11.9037 1.06102 11.714 1.08843C11.4954 1.12002 11.2919 1.19688 11.1304 1.2579L11.0871 1.27422L7.03594 2.7933L20.0529 15.8102Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.80868 3.19674L11.4382 2.21067C11.6461 2.13271 11.75 2.09373 11.857 2.07827C11.9518 2.06457 12.0482 2.06457 12.143 2.07827C12.25 2.09373 12.3539 2.13271 12.5618 2.21067L17.9236 4.22134C18.6722 4.50207 19.0465 4.64243 19.3223 4.88552C19.566 5.10027 19.7537 5.37113 19.8692 5.6747C20 6.01833 20 6.41808 20 7.21759V12C20 12.7203 19.8847 13.4118 19.6818 14.071M17.6219 17.6257C15.9362 19.586 13.7879 20.9789 12.6996 21.6139C12.4772 21.7437 12.366 21.8086 12.2098 21.8421C12.0885 21.8681 11.9116 21.8681 11.7904 21.8421C11.6341 21.8086 11.5234 21.744 11.302 21.6149C9.35396 20.4784 4 16.9084 4 12V5.7763C4 5.30935 4.28966 4.89137 4.72688 4.72741M3 2.99999L21 21"
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
