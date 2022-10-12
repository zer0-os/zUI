import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconImageUserLeft = ({
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
              d="M6.7587 1H12C12.5523 1 13 1.44772 13 2C13 2.55229 12.5523 3 12 3H6.8C5.94342 3 5.36113 3.00078 4.91104 3.03755C4.47262 3.07337 4.24842 3.1383 4.09202 3.21799C3.7157 3.40973 3.40973 3.7157 3.21799 4.09202C3.1383 4.24842 3.07337 4.47262 3.03755 4.91104C3.00078 5.36113 3 5.94342 3 6.8V16.9996C3.83529 16.3721 4.87374 16 5.9998 16L13.5577 16C13.9665 16 14.2448 15.9999 14.4903 16.0241C16.8639 16.258 18.7419 18.1358 18.9759 20.5095C18.9894 20.6468 18.9954 20.7943 18.998 20.9693C19.0289 20.9671 19.0592 20.9649 19.089 20.9624C19.5274 20.9266 19.7516 20.8617 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C20.8617 19.7516 20.9266 19.5274 20.9624 19.089C20.9992 18.6389 21 18.0566 21 17.2V12C21 11.4477 21.4477 11 22 11C22.5523 11 23 11.4477 23 12V17.2413C23 18.0463 23 18.7106 22.9558 19.2518C22.9099 19.8139 22.8113 20.3306 22.564 20.816C22.1805 21.5686 21.5686 22.1805 20.816 22.564C20.3306 22.8113 19.8139 22.9099 19.2518 22.9558C18.7106 23 18.0463 23 17.2413 23H6.75868C5.95372 23 5.28937 23 4.74818 22.9558C4.18608 22.9099 3.66937 22.8113 3.18404 22.564C2.43139 22.1805 1.81947 21.5686 1.43598 20.816C1.18868 20.3306 1.09012 19.8139 1.04419 19.2518C0.999978 18.7106 0.999988 18.0463 1 17.2413V6.7587C0.999988 5.95374 0.999978 5.28937 1.04419 4.74818C1.09012 4.18608 1.18868 3.66937 1.43598 3.18404C1.81947 2.43139 2.43139 1.81947 3.18404 1.43598C3.66937 1.18868 4.18608 1.09012 4.74818 1.04419C5.28937 0.999978 5.95374 0.999988 6.7587 1Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 4.5C7.23858 4.5 5 6.73858 5 9.5C5 12.2614 7.23858 14.5 10 14.5C12.7614 14.5 15 12.2614 15 9.5C15 6.73858 12.7614 4.5 10 4.5Z"
              fill={color}
            />
            <path
              d="M19.7071 2.70711C20.0976 2.31658 20.0976 1.68342 19.7071 1.29289C19.3166 0.902369 18.6834 0.902369 18.2929 1.29289L15.2929 4.29289C15.1054 4.48043 15 4.73478 15 5C15 5.26522 15.1054 5.51957 15.2929 5.70711L18.2929 8.70711C18.6834 9.09763 19.3166 9.09763 19.7071 8.70711C20.0976 8.31658 20.0976 7.68342 19.7071 7.29289L18.4142 6L22 6C22.5523 6 23 5.55228 23 5C23 4.44771 22.5523 4 22 4L18.4142 4L19.7071 2.70711Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19 8L16 5M16 5L19 2M16 5L22 5M22 12V17.2C22 18.8802 22 19.7202 21.673 20.362C21.3854 20.9265 20.9265 21.3854 20.362 21.673C19.7202 22 18.8802 22 17.2 22H6.8C5.11984 22 4.27976 22 3.63803 21.673C3.07354 21.3854 2.6146 20.9265 2.32698 20.362C2 19.7202 2 18.8802 2 17.2V6.8C2 5.11984 2 4.27976 2.32698 3.63803C2.6146 3.07354 3.07354 2.6146 3.63803 2.32698C4.27976 2 5.11984 2 6.8 2H12M2.14551 19.9263C2.61465 18.2386 4.16256 17 5.99977 17H12.9998C13.9291 17 14.3937 17 14.7801 17.0769C16.3669 17.3925 17.6073 18.6329 17.9229 20.2196C17.9998 20.606 17.9998 21.0707 17.9998 22M14 9.5C14 11.7091 12.2091 13.5 10 13.5C7.79086 13.5 6 11.7091 6 9.5C6 7.29086 7.79086 5.5 10 5.5C12.2091 5.5 14 7.29086 14 9.5Z"
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
