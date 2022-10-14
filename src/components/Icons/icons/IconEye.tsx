import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconEye = ({
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
              d="M10.0004 12C10.0004 10.8954 10.8958 10 12.0004 10C13.105 10 14.0004 10.8954 14.0004 12C14.0004 13.1046 13.105 14 12.0004 14C10.8958 14 10.0004 13.1046 10.0004 12Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.0004 4C9.13873 4 6.80575 5.26472 5.07715 6.70743C3.3509 8.14818 2.16737 9.81429 1.57462 10.7528L1.55054 10.7908C1.43292 10.976 1.2802 11.2164 1.203 11.5532C1.14067 11.8251 1.14067 12.1749 1.203 12.4468C1.2802 12.7836 1.43291 13.024 1.55053 13.2092L1.57462 13.2472C2.16737 14.1857 3.3509 15.8518 5.07715 17.2926C6.80575 18.7353 9.13873 20 12.0004 20C14.8621 20 17.1951 18.7353 18.9237 17.2926C20.6499 15.8518 21.8334 14.1857 22.4262 13.2472L22.4503 13.2092C22.5679 13.024 22.7206 12.7837 22.7978 12.4468C22.8601 12.1749 22.8601 11.8251 22.7978 11.5532C22.7206 11.2163 22.5679 10.976 22.4503 10.7908L22.4262 10.7528C21.8334 9.81429 20.6499 8.14818 18.9237 6.70743C17.1951 5.26472 14.8621 4 12.0004 4ZM12.0004 8C9.79126 8 8.0004 9.79086 8.0004 12C8.0004 14.2091 9.79126 16 12.0004 16C14.2095 16 16.0004 14.2091 16.0004 12C16.0004 9.79086 14.2095 8 12.0004 8Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.0004 10.3431 9.0004 12C9.0004 13.6569 10.3435 15 12.0004 15Z"
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
