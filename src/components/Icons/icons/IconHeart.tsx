import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconHeart = ({
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
              d="M11.9929 3.71703C9.65298 1.67214 6.19252 1.25369 3.50521 3.54978C0.598423 6.0334 0.176093 10.2162 2.47471 13.1741C3.34724 14.2968 5.05023 15.9836 6.68684 17.5284C8.34261 19.0912 9.99457 20.568 10.8092 21.2895C10.8143 21.294 10.8195 21.2986 10.8248 21.3033C10.9014 21.3712 10.9967 21.4557 11.0881 21.5245C11.1975 21.6069 11.3547 21.7092 11.5645 21.7718C11.8434 21.855 12.1432 21.855 12.4221 21.7718C12.6319 21.7092 12.789 21.6069 12.8984 21.5245C12.9898 21.4557 13.0852 21.3712 13.1618 21.3033C13.167 21.2986 13.1722 21.294 13.1773 21.2895C13.992 20.568 15.6439 19.0912 17.2997 17.5284C18.9363 15.9836 20.6393 14.2968 21.5118 13.1741C23.8016 10.2276 23.4445 6.0125 20.4709 3.54101C17.7537 1.28258 14.3301 1.67136 11.9929 3.71703Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.9932 5.13581C9.9938 2.7984 6.65975 2.16964 4.15469 4.31001C1.64964 6.45038 1.29697 10.029 3.2642 12.5604C4.89982 14.6651 9.84977 19.1041 11.4721 20.5408C11.6536 20.7016 11.7444 20.7819 11.8502 20.8135C11.9426 20.8411 12.0437 20.8411 12.1361 20.8135C12.2419 20.7819 12.3327 20.7016 12.5142 20.5408C14.1365 19.1041 19.0865 14.6651 20.7221 12.5604C22.6893 10.029 22.3797 6.42787 19.8316 4.31001C17.2835 2.19216 13.9925 2.7984 11.9932 5.13581Z"
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
