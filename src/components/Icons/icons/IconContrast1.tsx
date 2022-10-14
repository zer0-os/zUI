import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconContrast1 = ({
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
              d="M13 3.05484C13.1894 3.07575 13.377 3.10253 13.5625 3.13498C14.1065 3.23014 14.6247 2.86625 14.7198 2.32223C14.815 1.7782 14.4511 1.26005 13.9071 1.16489C13.287 1.05643 12.6497 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C12.6489 23 13.2855 22.9437 13.9049 22.8355C14.4489 22.7404 14.8129 22.2224 14.7179 21.6783C14.6228 21.1343 14.1048 20.7703 13.5607 20.8653C13.3758 20.8976 13.1888 20.9243 13 20.9452L13 3.05484Z"
              fill={color}
            />
            <path
              d="M16.9195 3.23454C17.2367 2.78248 17.8604 2.6732 18.3125 2.99047C19.3617 3.72684 20.2762 4.64174 21.0122 5.69128C21.3292 6.14348 21.2197 6.76709 20.7675 7.08417C20.3153 7.40125 19.6917 7.29172 19.3746 6.83953C18.7719 5.98005 18.0228 5.23055 17.1635 4.62753C16.7115 4.31027 16.6022 3.6866 16.9195 3.23454Z"
              fill={color}
            />
            <path
              d="M21.6779 9.28058C22.2219 9.18545 22.7401 9.54935 22.8352 10.0934C22.9436 10.7133 23 11.3505 23 12C23 12.6495 22.9436 13.2867 22.8352 13.9066C22.7401 14.4506 22.2219 14.8146 21.6779 14.7194C21.1339 14.6243 20.77 14.1061 20.8651 13.5621C20.9537 13.0554 21 12.5335 21 12C21 11.4665 20.9537 10.9446 20.8651 10.4379C20.77 9.89385 21.1339 9.37571 21.6779 9.28058Z"
              fill={color}
            />
            <path
              d="M20.7639 16.9223C21.2158 17.2397 21.3249 17.8634 21.0075 18.3153C20.2721 19.3625 19.3588 20.2754 18.3113 21.0103C17.8592 21.3276 17.2355 21.2182 16.9183 20.7661C16.6011 20.314 16.7105 19.6903 17.1626 19.3731C18.0204 18.7713 18.7686 18.0234 19.3708 17.1659C19.6882 16.7139 20.3119 16.6049 20.7639 16.9223Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2C12.5917 2 13.1713 2.05139 13.7348 2.14994M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22M12 2V22M17.738 3.809C18.6922 4.47869 19.5241 5.31089 20.1934 6.26541M21.8501 10.2656C21.9486 10.8289 22 11.4085 22 12C22 12.5915 21.9486 13.1711 21.8501 13.7344M20.1892 17.7406C19.5203 18.693 18.6896 19.5233 17.7369 20.1917M13.7328 21.8504C13.17 21.9487 12.591 22 12 22"
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
