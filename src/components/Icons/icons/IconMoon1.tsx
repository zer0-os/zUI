import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconMoon1 = ({
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
              d="M9.06693 2.41209C9.23841 2.03292 9.15714 1.58718 8.86288 1.29292C8.56862 0.998664 8.12289 0.917396 7.74371 1.08887C3.76893 2.88642 1 6.88764 1 11.5377C1 17.8682 6.13185 23 12.4623 23C17.1124 23 21.1136 20.2311 22.9112 16.2563C23.0826 15.8771 23.0014 15.4314 22.7071 15.1371C22.4128 14.8429 21.9671 14.7616 21.5879 14.9331C20.4015 15.4697 19.0838 15.7689 17.6935 15.7689C12.4676 15.7689 8.23116 11.5325 8.23116 6.30656C8.23116 4.91628 8.53036 3.59857 9.06693 2.41209Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22 15.8442C20.6866 16.4382 19.2286 16.7688 17.6935 16.7688C11.9153 16.7688 7.23116 12.0847 7.23116 6.30654C7.23116 4.77135 7.5618 3.3134 8.15577 2C4.52576 3.64163 2 7.2947 2 11.5377C2 17.3159 6.68414 22 12.4623 22C16.7053 22 20.3584 19.4742 22 15.8442Z"
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
