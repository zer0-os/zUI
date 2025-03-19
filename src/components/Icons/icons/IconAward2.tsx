import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconAward2 = ({
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
              d="M12 1C7.30558 1 3.5 4.80558 3.5 9.5C3.5 11.8525 4.45569 13.9818 6 15.5208V22.0001C6 22.3319 6.1646 22.6421 6.43937 22.8281C6.71414 23.0142 7.0633 23.0518 7.37139 22.9285L12 21.0771L16.6286 22.9285C16.9367 23.0518 17.2859 23.0142 17.5606 22.8281C17.8354 22.6421 18 22.3319 18 22.0001V15.5208C19.5443 13.9818 20.5 11.8525 20.5 9.5C20.5 4.80558 16.6944 1 12 1ZM8 17.0019C9.19215 17.6389 10.5539 18 12 18C13.4461 18 14.8079 17.6389 16 17.0019V20.523L12.6685 19.1904L12.647 19.1817C12.5682 19.1496 12.4055 19.0832 12.2274 19.0559C12.0767 19.0328 11.9233 19.0328 11.7726 19.0559C11.5945 19.0832 11.4318 19.1496 11.353 19.1817L11.3315 19.1904L8 20.523V17.0019Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 15.0903V22L11.7029 20.1188C11.8126 20.0749 11.8675 20.053 11.9242 20.0443C11.9744 20.0366 12.0256 20.0366 12.0758 20.0443C12.1325 20.053 12.1874 20.0749 12.2971 20.1188L17 22V15.0903M19.5 9.5C19.5 13.6421 16.1421 17 12 17C7.85786 17 4.5 13.6421 4.5 9.5C4.5 5.35786 7.85786 2 12 2C16.1421 2 19.5 5.35786 19.5 9.5Z"
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
