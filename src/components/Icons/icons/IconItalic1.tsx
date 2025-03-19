import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconItalic1 = ({
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
              d="M15.0313 3H19C19.5523 3 20 3.44772 20 4C20 4.55228 19.5523 5 19 5H15.6929L10.4429 19H14C14.5523 19 15 19.4477 15 20C15 20.5523 14.5523 21 14 21H9.01017C9.00332 21.0001 8.99645 21.0001 8.98958 21H5C4.44772 21 4 20.5523 4 20C4 19.4477 4.44772 19 5 19H8.30694L13.5569 5H10C9.44772 5 9 4.55228 9 4C9 3.44772 9.44772 3 10 3H14.969C14.9897 2.99935 15.0105 2.99935 15.0313 3Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 4H10M14 20H5M15 4L9 20" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </AccessibleIcon.Root>
    </div>
  );
};
