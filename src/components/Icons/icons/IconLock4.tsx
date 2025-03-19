import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconLock4 = ({
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
              d="M6 8V9.70835C4.75527 11.1186 4 12.9711 4 15C4 19.4183 7.58172 23 12 23C16.4183 23 20 19.4183 20 15C20 12.9711 19.2447 11.1186 18 9.70835V8C18 4.68629 15.3137 2 12 2C8.68629 2 6 4.68629 6 8ZM12 4C9.79086 4 8 5.79086 8 8V8.07026C9.17669 7.38958 10.5429 7 12 7C13.4571 7 14.8233 7.38958 16 8.07026V8C16 5.79086 14.2091 4 12 4ZM13 14C13 13.4477 12.5523 13 12 13C11.4477 13 11 13.4477 11 14L11 16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V14Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.10102 10H7V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10H16.899M12 14V16M19 15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15C5 11.134 8.13401 8 12 8C15.866 8 19 11.134 19 15Z"
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
