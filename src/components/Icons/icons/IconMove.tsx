import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconMove = ({
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
              d="M12.7071 1.29289C12.3166 0.902369 11.6834 0.902369 11.2929 1.29289L8.29289 4.29289C7.90237 4.68342 7.90237 5.31658 8.29289 5.70711C8.68342 6.09763 9.31658 6.09763 9.70711 5.70711L11 4.41421V11H4.41421L5.70711 9.70711C6.09763 9.31658 6.09763 8.68342 5.70711 8.29289C5.31658 7.90237 4.68342 7.90237 4.29289 8.29289L1.29289 11.2929C0.902369 11.6834 0.902369 12.3166 1.29289 12.7071L4.29289 15.7071C4.68342 16.0976 5.31658 16.0976 5.70711 15.7071C6.09763 15.3166 6.09763 14.6834 5.70711 14.2929L4.41421 13H11V19.5858L9.70711 18.2929C9.31658 17.9024 8.68342 17.9024 8.29289 18.2929C7.90237 18.6834 7.90237 19.3166 8.29289 19.7071L11.2929 22.7071C11.6834 23.0976 12.3166 23.0976 12.7071 22.7071L15.7071 19.7071C16.0976 19.3166 16.0976 18.6834 15.7071 18.2929C15.3166 17.9024 14.6834 17.9024 14.2929 18.2929L13 19.5858V13H19.5858L18.2929 14.2929C17.9024 14.6834 17.9024 15.3166 18.2929 15.7071C18.6834 16.0976 19.3166 16.0976 19.7071 15.7071L22.7071 12.7071C23.0976 12.3166 23.0976 11.6834 22.7071 11.2929L19.7071 8.29289C19.3166 7.90237 18.6834 7.90237 18.2929 8.29289C17.9024 8.68342 17.9024 9.31658 18.2929 9.70711L19.5858 11H13V4.41421L14.2929 5.70711C14.6834 6.09763 15.3166 6.09763 15.7071 5.70711C16.0976 5.31658 16.0976 4.68342 15.7071 4.29289L12.7071 1.29289Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5 9L2 12M2 12L5 15M2 12H22M9 5L12 2M12 2L15 5M12 2V22M15 19L12 22M12 22L9 19M19 9L22 12M22 12L19 15"
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
