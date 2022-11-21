import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE, DEFAULT_WIDTH, DEFAULT_HEIGHT } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconCheckBoxCheck = ({
  className,
  label = DEFAULT_LABEL,
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT
}: IconProps) => {
  return (
    <div style={{ height: height, width: width }} className={classNames(className, styles.Container)}>
      <AccessibleIcon.Root label={label}>
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M1 4.2L3.54545 7L9 1" stroke={color} />
        </svg>
      </AccessibleIcon.Root>
    </div>
  );
};
