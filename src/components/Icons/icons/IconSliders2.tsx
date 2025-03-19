import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconSliders2 = ({
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
              d="M5 2C5.55228 2 6 2.44772 6 3V7C6 7.55228 5.55228 8 5 8C4.44772 8 4 7.55228 4 7V3C4 2.44772 4.44772 2 5 2Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 15.8293C7.16519 15.4175 8 14.3062 8 13C8 11.3431 6.65685 10 5 10C3.34315 10 2 11.3431 2 13C2 14.3062 2.83481 15.4175 4 15.8293L4 21C4 21.5523 4.44772 22 5 22C5.55229 22 6 21.5523 6 21L6 15.8293Z"
              fill={color}
            />
            <path
              d="M13 15C13 14.4477 12.5523 14 12 14C11.4477 14 11 14.4477 11 15V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V15Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C12.5523 2 13 2.44772 13 3V6.17071C14.1652 6.58254 15 7.69378 15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.69378 9.83481 6.58254 11 6.17071V3C11 2.44772 11.4477 2 12 2Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22 15C22 16.3062 21.1652 17.4175 20 17.8293V21C20 21.5523 19.5523 22 19 22C18.4477 22 18 21.5523 18 21V17.8293C16.8348 17.4175 16 16.3062 16 15C16 13.3431 17.3431 12 19 12C20.6569 12 22 13.3431 22 15Z"
              fill={color}
            />
            <path
              d="M19 2C19.5523 2 20 2.44772 20 3V9C20 9.55228 19.5523 10 19 10C18.4477 10 18 9.55228 18 9V3C18 2.44772 18.4477 2 19 2Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5 21L5 15M5 15C6.10457 15 7 14.1046 7 13C7 11.8954 6.10457 11 5 11C3.89543 11 3 11.8954 3 13C3 14.1046 3.89543 15 5 15ZM5 7V3M12 21V15M12 7V3M12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7ZM19 21V17M19 17C20.1046 17 21 16.1046 21 15C21 13.8954 20.1046 13 19 13C17.8954 13 17 13.8954 17 15C17 16.1046 17.8954 17 19 17ZM19 9V3"
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
