import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconSliders1 = ({
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
              d="M5 2C5.55228 2 6 2.44772 6 3V10C6 10.5523 5.55228 11 5 11C4.44772 11 4 10.5523 4 10V3C4 2.44772 4.44772 2 5 2Z"
              fill={color}
            />
            <path
              d="M6 15H8C8.55228 15 9 14.5523 9 14C9 13.4477 8.55228 13 8 13H2C1.44772 13 1 13.4477 1 14C1 14.5523 1.44772 15 2 15H4V21C4 21.5523 4.44772 22 5 22C5.55228 22 6 21.5523 6 21V15Z"
              fill={color}
            />
            <path
              d="M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V12Z"
              fill={color}
            />
            <path
              d="M12 2C12.5523 2 13 2.44772 13 3V7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H9C8.44772 9 8 8.55228 8 8C8 7.44772 8.44772 7 9 7H11V3C11 2.44772 11.4477 2 12 2Z"
              fill={color}
            />
            <path
              d="M22 15C22.5523 15 23 15.4477 23 16C23 16.5523 22.5523 17 22 17H20V21C20 21.5523 19.5523 22 19 22C18.4477 22 18 21.5523 18 21V17H16C15.4477 17 15 16.5523 15 16C15 15.4477 15.4477 15 16 15H22Z"
              fill={color}
            />
            <path
              d="M19 2C19.5523 2 20 2.44772 20 3V12C20 12.5523 19.5523 13 19 13C18.4477 13 18 12.5523 18 12V3C18 2.44772 18.4477 2 19 2Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5 21V14M5 10V3M12 21V12M12 8V3M19 21V16M19 12V3M2 14H8M9 8H15M16 16H22"
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
