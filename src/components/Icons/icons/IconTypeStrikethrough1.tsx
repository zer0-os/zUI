import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconTypeStrikethrough1 = ({
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
              d="M2.29289 2.29289C2.68342 1.90237 3.31658 1.90237 3.70711 2.29289L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L13 14.4142V19H15C15.5523 19 16 19.4477 16 20C16 20.5523 15.5523 21 15 21H9C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19H11V12.4142L5 6.41421V7C5 7.55228 4.55228 8 4 8C3.44772 8 3 7.55228 3 7V6C3 5.53728 3.10519 5.09845 3.29256 4.70677L2.29289 3.70711C1.90237 3.31658 1.90237 2.68342 2.29289 2.29289ZM18.0262 5.01671C17.7893 5.00054 17.4796 5 17 5H13V6.5C13 7.05228 12.5523 7.5 12 7.5C11.4477 7.5 11 7.05228 11 6.5V5H9.5C8.94772 5 8.5 4.55228 8.5 4C8.5 3.44772 8.94772 3 9.5 3H17.032C17.4706 2.99999 17.8491 2.99998 18.1624 3.02135C18.4922 3.04385 18.8221 3.09336 19.1481 3.22836C19.8831 3.53284 20.4672 4.11686 20.7716 4.85195C20.9066 5.17788 20.9561 5.50779 20.9787 5.83762C21 6.15087 21 6.52936 21 6.96801V7C21 7.55228 20.5523 8 20 8C19.4477 8 19 7.55228 19 7C19 6.52038 18.9995 6.21074 18.9833 5.97376C18.9677 5.74576 18.9411 5.65893 18.9239 5.61732C18.8224 5.37229 18.6277 5.17761 18.3827 5.07612C18.3411 5.05888 18.2542 5.03227 18.0262 5.01671Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 7V6C4 5.45879 4.21497 4.96778 4.56419 4.60772M9 20H15M12 12V20M3 3L21 21M9.5 4H17C17.9319 4 18.3978 4 18.7654 4.15224C19.2554 4.35523 19.6448 4.74458 19.8478 5.23463C20 5.60218 20 6.06812 20 7M12 4V6.5"
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
