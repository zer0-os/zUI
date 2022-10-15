import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconFileShield2 = ({
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
              d="M8.7587 1H15.2413C16.0463 0.999988 16.7106 0.999979 17.2518 1.0442C17.8139 1.09012 18.3306 1.18868 18.816 1.43598C19.5686 1.81947 20.1805 2.43139 20.564 3.18404C20.8113 3.66938 20.9099 4.18608 20.9558 4.74818C21 5.28937 21 5.95372 21 6.75868V11.6016C21 11.9839 21 12.175 20.9198 12.299C20.8496 12.4074 20.7402 12.4845 20.6145 12.5141C20.4708 12.5479 20.2908 12.4836 19.9308 12.355L19.8241 12.3168L19.8229 12.3164L19.8219 12.316C18.6433 11.8945 17.3544 11.8947 16.1759 12.3164L13.99 13.0979C12.7966 13.5246 12 14.6553 12 15.9228V18.4251C12 19.6244 12.3928 20.6337 12.9011 21.4417C13.2921 22.0632 13.4876 22.3739 13.4746 22.539C13.4619 22.7014 13.4053 22.804 13.2746 22.9011C13.1418 23 12.8178 23 12.17 23H8.75868C7.95372 23 7.28937 23 6.74818 22.9558C6.18608 22.9099 5.66938 22.8113 5.18404 22.564C4.43139 22.1805 3.81947 21.5686 3.43598 20.816C3.18868 20.3306 3.09012 19.8139 3.0442 19.2518C2.99998 18.7106 2.99999 18.0463 3 17.2413V6.75869C2.99999 5.95373 2.99998 5.28936 3.0442 4.74818C3.09012 4.18608 3.18868 3.66938 3.43598 3.18404C3.81947 2.43139 4.43139 1.81947 5.18404 1.43598C5.66938 1.18868 6.18608 1.09012 6.74818 1.0442C7.28936 0.999979 7.95375 0.999988 8.7587 1ZM7 9C6.44772 9 6 9.44771 6 10C6 10.5523 6.44772 11 7 11H13C13.5523 11 14 10.5523 14 10C14 9.44771 13.5523 9 13 9H7ZM6 14C6 13.4477 6.44772 13 7 13H9C9.55229 13 10 13.4477 10 14C10 14.5523 9.55229 15 9 15H7C6.44772 15 6 14.5523 6 14ZM7 5C6.44772 5 6 5.44772 6 6C6 6.55229 6.44772 7 7 7H15C15.5523 7 16 6.55229 16 6C16 5.44772 15.5523 5 15 5H7Z"
              fill={color}
            />
            <path
              d="M21.3365 14.981L19.1496 14.1995C18.4064 13.9335 17.5924 13.9335 16.8492 14.1995L14.6633 14.981C14.2655 15.1233 14 15.5002 14 15.9227V18.425C14 19.964 15.0565 21.1148 15.8595 21.7846C16.2859 22.1403 16.7071 22.4159 17.0194 22.6019C17.1989 22.7088 17.3817 22.8101 17.5692 22.9022C17.7276 22.9778 18.3128 22.9602 18.4812 22.8774C18.5652 22.8354 18.7446 22.7425 18.9806 22.6019C19.2929 22.4159 19.7141 22.1403 20.1405 21.7846C20.9436 21.1148 22 19.964 22 18.425V15.9227C22 15.5001 21.7344 15.1231 21.3365 14.981Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14 11H8M10 15H8M16 7H8M20 10V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H12.5M18 21C18 21 21 19.5701 21 17.4252V14.9229L18.8124 14.1412C18.2868 13.9529 17.712 13.9529 17.1864 14.1412L15 14.9229V17.4252C15 19.5701 18 21 18 21Z"
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