import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconZap = ({
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
              d="M13.3981 1.0827C13.8053 1.25947 14.0472 1.68354 13.9921 2.12403L13.1326 9L19.3276 9C19.5686 8.99995 19.8127 8.99991 20.0121 9.01796C20.2008 9.03504 20.5619 9.08021 20.8751 9.33332C21.2337 9.62309 21.4391 10.0616 21.4322 10.5226C21.4261 10.9253 21.2296 11.2316 21.122 11.3875C21.0082 11.5522 20.8519 11.7397 20.6975 11.9248L11.7681 22.6402C11.4839 22.9812 11.0089 23.0941 10.6017 22.9173C10.1945 22.7405 9.95252 22.3165 10.0076 21.876L10.8671 15L4.67209 15C4.4311 15 4.187 15.0001 3.98758 14.982C3.79897 14.965 3.4378 14.9198 3.12459 14.6667C2.76601 14.3769 2.5606 13.9384 2.56755 13.4774C2.57363 13.0747 2.77013 12.7684 2.87776 12.6125C2.99156 12.4478 3.14786 12.2603 3.30218 12.0752C3.30982 12.066 3.31747 12.0568 3.3251 12.0477L12.2316 1.35982C12.5158 1.01878 12.9908 0.90593 13.3981 1.0827Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.9999 2L4.09332 12.6879C3.74451 13.1064 3.57011 13.3157 3.56744 13.4925C3.56512 13.6461 3.63359 13.7923 3.75312 13.8889C3.89061 14 4.16304 14 4.7079 14H11.9999L10.9999 22L19.9064 11.3121C20.2552 10.8936 20.4296 10.6843 20.4323 10.5075C20.4346 10.3539 20.3661 10.2077 20.2466 10.1111C20.1091 10 19.8367 10 19.2918 10H11.9999L12.9999 2Z"
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
