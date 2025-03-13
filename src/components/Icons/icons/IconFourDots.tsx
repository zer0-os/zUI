import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

/**
 * @dev this icon does not have a filled version in Figma.
 */
export const IconFourDots = ({
  className,
  label = DEFAULT_LABEL,
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE
}: IconProps) => {
  return (
    <div style={{ height: size, width: size }} className={classNames(className, styles.Container)}>
      <AccessibleIcon.Root label={label}>
        <svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.5 5.5C3.5 4.39543 4.39543 3.5 5.5 3.5C6.60457 3.5 7.5 4.39543 7.5 5.5C7.5 6.60457 6.60457 7.5 5.5 7.5C4.39543 7.5 3.5 6.60457 3.5 5.5ZM10.5 5.5C10.5 4.39543 11.3954 3.5 12.5 3.5C13.6046 3.5 14.5 4.39543 14.5 5.5C14.5 6.60457 13.6046 7.5 12.5 7.5C11.3954 7.5 10.5 6.60457 10.5 5.5ZM3.5 12.5C3.5 11.3954 4.39543 10.5 5.5 10.5C6.60457 10.5 7.5 11.3954 7.5 12.5C7.5 13.6046 6.60457 14.5 5.5 14.5C4.39543 14.5 3.5 13.6046 3.5 12.5ZM10.5 12.5C10.5 11.3954 11.3954 10.5 12.5 10.5C13.6046 10.5 14.5 11.3954 14.5 12.5C14.5 13.6046 13.6046 14.5 12.5 14.5C11.3954 14.5 10.5 13.6046 10.5 12.5Z"
            fill={color}
          />
        </svg>
      </AccessibleIcon.Root>
    </div>
  );
};
