import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconType1 = ({
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
              d="M6.96802 3H17.032C17.4706 2.99999 17.8491 2.99998 18.1624 3.02135C18.4922 3.04386 18.8221 3.09336 19.1481 3.22836C19.8831 3.53284 20.4672 4.11687 20.7716 4.85195C20.9066 5.17788 20.9561 5.50779 20.9787 5.83762C21 6.15088 21 6.52936 21 6.96801V7C21 7.55229 20.5523 8 20 8C19.4477 8 19 7.55229 19 7C19 6.52038 18.9995 6.21074 18.9833 5.97376C18.9677 5.74576 18.9411 5.65893 18.9239 5.61732C18.8224 5.37229 18.6277 5.17762 18.3827 5.07612C18.3411 5.05888 18.2542 5.03227 18.0262 5.01671C17.7893 5.00054 17.4796 5 17 5H13V19H15C15.5523 19 16 19.4477 16 20C16 20.5523 15.5523 21 15 21H9C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19H11V5H7C6.52038 5 6.21074 5.00054 5.97376 5.01671C5.74576 5.03227 5.65893 5.05888 5.61732 5.07612C5.37229 5.17762 5.17762 5.37229 5.07612 5.61732C5.05888 5.65893 5.03227 5.74576 5.01671 5.97376C5.00054 6.21074 5 6.52038 5 7C5 7.55229 4.55229 8 4 8C3.44772 8 3 7.55229 3 7L3 6.96802C2.99999 6.52937 2.99998 6.15088 3.02135 5.83762C3.04386 5.50779 3.09336 5.17788 3.22836 4.85195C3.53284 4.11687 4.11687 3.53284 4.85195 3.22836C5.17788 3.09336 5.50779 3.04386 5.83762 3.02135C6.15088 2.99998 6.52937 2.99999 6.96802 3Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 7C4 6.06812 4 5.60218 4.15224 5.23463C4.35523 4.74458 4.74458 4.35523 5.23463 4.15224C5.60218 4 6.06812 4 7 4H17C17.9319 4 18.3978 4 18.7654 4.15224C19.2554 4.35523 19.6448 4.74458 19.8478 5.23463C20 5.60218 20 6.06812 20 7M9 20H15M12 4V20"
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
