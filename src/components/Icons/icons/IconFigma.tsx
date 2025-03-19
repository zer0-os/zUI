import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconFigma = ({
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
              d="M4 5C4 2.51472 6.01472 0.5 8.5 0.5H15.5C17.9853 0.5 20 2.51472 20 5C20 6.41363 19.3482 7.67502 18.3287 8.5C19.3482 9.32498 20 10.5864 20 12C20 14.4853 17.9853 16.5 15.5 16.5C14.5749 16.5 13.715 16.2209 13 15.7422V19C13 21.4853 10.9853 23.5 8.5 23.5C6.01472 23.5 4 21.4853 4 19C4 17.5864 4.65183 16.325 5.67134 15.5C4.65183 14.675 4 13.4136 4 12C4 10.5864 4.65183 9.32498 5.67134 8.5C4.65183 7.67502 4 6.41363 4 5ZM11 14.5H8.5C7.11929 14.5 6 13.3807 6 12C6 10.6193 7.11929 9.5 8.5 9.5H11V14.5ZM13 12C13 13.3807 14.1193 14.5 15.5 14.5C16.8807 14.5 18 13.3807 18 12C18 10.6193 16.8807 9.5 15.5 9.5C14.1193 9.5 13 10.6193 13 12ZM15.5 7.5C16.8807 7.5 18 6.38071 18 5C18 3.61929 16.8807 2.5 15.5 2.5H13V7.5H15.5ZM8.5 2.5H11V7.5H8.5C7.11929 7.5 6 6.38071 6 5C6 3.61929 7.11929 2.5 8.5 2.5ZM11 16.5H8.5C7.11929 16.5 6 17.6193 6 19C6 20.3807 7.11929 21.5 8.5 21.5C9.88071 21.5 11 20.3807 11 19V16.5Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 1.5H8.5C6.567 1.5 5 3.067 5 5C5 6.933 6.567 8.5 8.5 8.5M12 1.5V8.5M12 1.5H15.5C17.433 1.5 19 3.067 19 5C19 6.933 17.433 8.5 15.5 8.5M12 8.5H8.5M12 8.5V15.5M12 8.5H15.5M8.5 8.5C6.567 8.5 5 10.067 5 12C5 13.933 6.567 15.5 8.5 15.5M12 15.5H8.5M12 15.5V19C12 20.933 10.433 22.5 8.5 22.5C6.567 22.5 5 20.933 5 19C5 17.067 6.567 15.5 8.5 15.5M15.5 8.5C17.433 8.5 19 10.067 19 12C19 13.933 17.433 15.5 15.5 15.5C13.567 15.5 12 13.933 12 12C12 10.067 13.567 8.5 15.5 8.5Z"
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
