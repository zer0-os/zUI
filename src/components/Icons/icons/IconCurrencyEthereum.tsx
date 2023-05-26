import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconCurrencyEthereum = ({
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
              d="M12.7474 1.33564C12.5577 1.12215 12.2857 1 12 1C11.7144 1 11.4424 1.12215 11.2526 1.33564L3.2526 10.3358C3.02022 10.5972 2.94133 10.9611 3.04456 11.2953C3.1478 11.6295 3.41815 11.8855 3.7575 11.9703L11.7575 13.9701C11.9167 14.01 12.0833 14.01 12.2426 13.9701L20.2426 11.9701C20.5819 11.8853 20.8522 11.6293 20.9555 11.2951C21.0587 10.9609 20.9798 10.5971 20.7474 10.3356L12.7474 1.33564Z"
              fill={color}
            />
            <path
              d="M5.72487 14.0257C5.29686 13.9269 4.85451 14.119 4.63449 14.4992C4.41448 14.8794 4.46833 15.3586 4.76723 15.6805L11.2673 22.6805C11.4566 22.8843 11.7221 23.0001 12.0001 23.0001C12.2782 23.0001 12.5437 22.8843 12.7329 22.6805L19.2328 15.6805C19.5317 15.3586 19.5855 14.8794 19.3655 14.4992C19.1455 14.119 18.7032 13.9269 18.2752 14.0257L12 15.4738L5.72487 14.0257Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 11.0001L12 13L20 11M4 11.0001L12 2M4 11.0001L12 9.00008M20 11L12 2M20 11L12 9.00008M12 2V9.00008M5.5 15L12.0001 22L18.5 15L12 16.5L5.5 15Z"
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
