import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconSettings4 = ({
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
              d="M14.126 9L3 9C2.44772 9 2 8.55228 2 8C2 7.44772 2.44772 7 3 7L14.126 7C14.5701 5.27477 16.1362 4 18 4C20.2091 4 22 5.79086 22 8C22 10.2091 20.2091 12 18 12C16.1362 12 14.5701 10.7252 14.126 9Z"
              fill={color}
            />
            <path
              d="M6 12C3.79086 12 2 13.7909 2 16C2 18.2091 3.79086 20 6 20C7.86384 20 9.42994 18.7252 9.87398 17L21 17C21.5523 17 22 16.5523 22 16C22 15.4477 21.5523 15 21 15L9.87398 15C9.42994 13.2748 7.86384 12 6 12Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 8L15 8M15 8C15 9.65686 16.3431 11 18 11C19.6569 11 21 9.65685 21 8C21 6.34315 19.6569 5 18 5C16.3431 5 15 6.34315 15 8ZM9 16L21 16M9 16C9 17.6569 7.65685 19 6 19C4.34315 19 3 17.6569 3 16C3 14.3431 4.34315 13 6 13C7.65685 13 9 14.3431 9 16Z"
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
