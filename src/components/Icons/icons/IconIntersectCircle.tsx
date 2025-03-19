import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconIntersectCircle = ({
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
              d="M1 9C1 4.58172 4.58172 1 9 1C12.8003 1 15.9817 3.64986 16.7973 7.2027C16.2196 7.07007 15.618 7 15 7C10.5817 7 7 10.5817 7 15C7 15.618 7.07007 16.2196 7.2027 16.7973C3.64986 15.9817 1 12.8003 1 9Z"
              fill={color}
            />
            <path
              d="M7.2027 16.7973C7.78042 16.9299 8.38203 17 9 17C13.4183 17 17 13.4183 17 9C17 8.38203 16.9299 7.78042 16.7973 7.2027C20.3501 8.0183 23 11.1997 23 15C23 19.4183 19.4183 23 15 23C11.1997 23 8.0183 20.3501 7.2027 16.7973Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9 16C12.866 16 16 12.866 16 9C16 5.13401 12.866 2 9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 22C18.866 22 22 18.866 22 15C22 11.134 18.866 8 15 8C11.134 8 8 11.134 8 15C8 18.866 11.134 22 15 22Z"
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
