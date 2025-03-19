import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconLinkBroken1 = ({
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
              d="M9 1C9.55229 1 10 1.44772 10 2V4C10 4.55228 9.55229 5 9 5C8.44772 5 8 4.55228 8 4V2C8 1.44772 8.44772 1 9 1Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 19C15.5523 19 16 19.4477 16 20V22C16 22.5523 15.5523 23 15 23C14.4477 23 14 22.5523 14 22V20C14 19.4477 14.4477 19 15 19Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 8H4C4.55228 8 5 8.44772 5 9C5 9.55228 4.55228 10 4 10H2C1.44772 10 1 9.55229 1 9C1 8.44772 1.44772 8 2 8Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19 15C19 14.4477 19.4477 14 20 14H22C22.5523 14 23 14.4477 23 15C23 15.5523 22.5523 16 22 16H20C19.4477 16 19 15.5523 19 15Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.79289 2.79289C3.18342 2.40237 3.81658 2.40237 4.20711 2.79289L5.62132 4.20711C6.01184 4.59763 6.01184 5.2308 5.62132 5.62132C5.2308 6.01184 4.59763 6.01184 4.20711 5.62132L2.79289 4.20711C2.40237 3.81658 2.40237 3.18342 2.79289 2.79289Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.3787 18.3787C18.7692 17.9882 19.4024 17.9882 19.7929 18.3787L21.2071 19.7929C21.5976 20.1834 21.5976 20.8166 21.2071 21.2071C20.8166 21.5976 20.1834 21.5976 19.7929 21.2071L18.3787 19.7929C17.9882 19.4024 17.9882 18.7692 18.3787 18.3787Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.4142 3.51472C15.3668 1.5621 18.5327 1.5621 20.4853 3.51472C22.4379 5.46734 22.4379 8.63316 20.4853 10.5858L18.364 12.7071C17.9734 13.0976 17.3403 13.0976 16.9497 12.7071C16.5592 12.3166 16.5592 11.6834 16.9497 11.2929L19.0711 9.17157C20.2426 8 20.2426 6.1005 19.0711 4.92893C17.8995 3.75736 16 3.75736 14.8284 4.92893L12.7071 7.05025C12.3166 7.44078 11.6834 7.44078 11.2929 7.05025C10.9024 6.65973 10.9024 6.02656 11.2929 5.63604L13.4142 3.51472ZM7.05025 11.2929C7.44078 11.6834 7.44078 12.3166 7.05025 12.7071L4.92893 14.8284C3.75736 16 3.75736 17.8995 4.92893 19.0711C6.1005 20.2426 8 20.2426 9.17157 19.0711L11.2929 16.9497C11.6834 16.5592 12.3166 16.5592 12.7071 16.9497C13.0976 17.3403 13.0976 17.9734 12.7071 18.364L10.5858 20.4853C8.63317 22.4379 5.46734 22.4379 3.51472 20.4853C1.5621 18.5327 1.5621 15.3668 3.51472 13.4142L5.63604 11.2929C6.02656 10.9024 6.65973 10.9024 7.05025 11.2929Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9 4V2M15 20V22M4 9H2M20 15H22M4.91421 4.91421L3.5 3.5M19.0858 19.0858L20.5 20.5M12 17.6569L9.87868 19.7782C8.31658 21.3403 5.78392 21.3403 4.22183 19.7782C2.65973 18.2161 2.65973 15.6834 4.22183 14.1213L6.34315 12M17.6569 12L19.7782 9.87868C21.3403 8.31658 21.3403 5.78392 19.7782 4.22183C18.2161 2.65973 15.6834 2.65973 14.1213 4.22183L12 6.34315"
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
