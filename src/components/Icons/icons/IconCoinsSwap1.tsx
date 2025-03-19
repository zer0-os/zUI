import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconCoinsSwap1 = ({
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
              d="M5.29289 1.29289C5.68342 0.902369 6.31658 0.902369 6.70711 1.29289L8.70711 3.29289C9.09763 3.68342 9.09763 4.31658 8.70711 4.70711L6.70711 6.70711C6.31658 7.09763 5.68342 7.09763 5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289L5.55266 5.03313C4.10798 5.24911 3 6.49516 3 8C3 8.55228 2.55228 9 2 9C1.44772 9 1 8.55228 1 8C1 5.37273 3.02635 3.21874 5.60144 3.01565L5.29289 2.70711C4.90237 2.31658 4.90237 1.68342 5.29289 1.29289Z"
              fill={color}
            />
            <path
              d="M18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071L18.4473 18.9669C19.892 18.7509 21 17.5048 21 16C21 15.4477 21.4477 15 22 15C22.5523 15 23 15.4477 23 16C23 18.6273 20.9736 20.7813 18.3986 20.9843L18.7071 21.2929C19.0976 21.6834 19.0976 22.3166 18.7071 22.7071C18.3166 23.0976 17.6834 23.0976 17.2929 22.7071L15.2929 20.7071C15.1054 20.5196 15 20.2652 15 20C15 19.7348 15.1054 19.4804 15.2929 19.2929L17.2929 17.2929C17.6834 16.9024 18.3166 16.9024 18.7071 17.2929Z"
              fill={color}
            />
            <path
              d="M9.0623 7.06204C9.52062 3.63955 12.4521 1 16 1C19.866 1 23 4.13401 23 8C23 11.5479 20.3605 14.4794 16.938 14.9377C16.4533 10.8162 13.1838 7.54667 9.0623 7.06204Z"
              fill={color}
            />
            <path
              d="M8 9C4.13401 9 1 12.134 1 16C1 19.866 4.13401 23 8 23C11.866 23 15 19.866 15 16C15 12.134 11.866 9 8 9Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 6L8 4M8 4L6 2M8 4H6C3.79086 4 2 5.79086 2 8M18 18L16 20M16 20L18 22M16 20H18C20.2091 20 22 18.2091 22 16M13.4172 13.4172C14.1994 13.7908 15.0753 14 16 14C19.3137 14 22 11.3137 22 8C22 4.68629 19.3137 2 16 2C12.6863 2 10 4.68629 10 8C10 8.92472 10.2092 9.80057 10.5828 10.5828M14 16C14 19.3137 11.3137 22 8 22C4.68629 22 2 19.3137 2 16C2 12.6863 4.68629 10 8 10C11.3137 10 14 12.6863 14 16Z"
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
