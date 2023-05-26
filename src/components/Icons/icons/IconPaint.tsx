import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconPaint = ({
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
              d="M11.2071 1.29314C10.8166 0.902613 10.1834 0.902613 9.79289 1.29314C9.40237 1.68366 9.40237 2.31683 9.79289 2.70735L10.0857 3.00019L4.15783 8.92808C3.58863 9.49727 3.11885 9.96704 2.76743 10.381C2.40244 10.8109 2.10677 11.246 1.93845 11.764C1.67742 12.5674 1.67742 13.4328 1.93845 14.2362C2.10677 14.7542 2.40244 15.1893 2.76743 15.6192C3.11885 16.0332 3.58864 16.5029 4.15787 17.0721L7.42804 20.3423C7.99718 20.9115 8.467 21.3813 8.88093 21.7327C9.31086 22.0977 9.74592 22.3934 10.264 22.5617C11.0673 22.8227 11.9327 22.8227 12.7361 22.5617C13.2541 22.3934 13.6892 22.0977 14.1191 21.7327C14.5331 21.3813 15.0028 20.9116 15.5719 20.3424L21.0983 14.8161C21.2768 14.6376 21.4506 14.4638 21.5858 14.3046C21.7342 14.1297 21.8938 13.9078 21.9879 13.6181C22.1185 13.2164 22.1185 12.7837 21.9879 12.3821C21.8938 12.0923 21.7342 11.8705 21.5858 11.6956C21.4506 11.5364 21.2768 11.3626 21.0983 11.1841L12.2071 2.29299C12.2033 2.28911 12.1994 2.28528 12.1955 2.28148L11.2071 1.29314ZM11.5 4.41431L5.60125 10.3131C4.99556 10.9188 4.58437 11.3311 4.29211 11.6753C4.18619 11.8001 4.10409 11.9068 4.03995 12.0001H19.0858L11.5 4.41431Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.99955 13H19.9995M11.9995 3.5L10.4995 2M11.4995 3L20.3682 11.8686C20.7642 12.2646 20.9622 12.4627 21.0364 12.691C21.1016 12.8918 21.1016 13.1082 21.0364 13.309C20.9622 13.5373 20.7642 13.7354 20.3682 14.1314L14.8937 19.6059C13.7056 20.7939 13.1116 21.388 12.4266 21.6105C11.8241 21.8063 11.175 21.8063 10.5725 21.6105C9.88751 21.388 9.29349 20.7939 8.10543 19.6059L4.89366 16.3941C3.70561 15.2061 3.11158 14.612 2.88902 13.9271C2.69324 13.3245 2.69324 12.6755 2.88902 12.0729C3.11158 11.388 3.70561 10.7939 4.89366 9.60589L11.4995 3Z"
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
