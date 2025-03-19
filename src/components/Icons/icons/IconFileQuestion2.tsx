import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconFileQuestion2 = ({
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
              d="M8.7587 1H15.2413C16.0463 0.999988 16.7106 0.999979 17.2518 1.0442C17.8139 1.09012 18.3306 1.18868 18.816 1.43598C19.5686 1.81947 20.1805 2.43139 20.564 3.18404C20.8113 3.66938 20.9099 4.18608 20.9558 4.74818C21 5.28937 21 5.95372 21 6.75868V9.76584C21 10.2001 21 10.4173 20.9294 10.5356C20.8587 10.6541 20.7865 10.7119 20.6553 10.7548C20.5244 10.7976 20.275 10.7413 19.7762 10.6287C19.6875 10.6087 19.5981 10.591 19.5082 10.5756C18.2866 10.366 17.0302 10.5956 15.9616 11.2236C14.8931 11.8516 14.0813 12.8375 13.67 14.0067C13.1201 15.5697 13.9415 17.2824 15.5044 17.8322C15.5438 17.8461 15.5833 17.8591 15.6228 17.8712C15.6075 18.2267 15.6556 18.591 15.7748 18.9487C15.8432 19.1537 15.9315 19.3464 16.0369 19.5253C15.7906 19.9608 15.65 20.464 15.65 21C15.65 21.3487 15.7095 21.6835 15.8189 21.9948C15.9023 22.2322 15.944 22.3509 15.9487 22.3679C16.0514 22.7426 15.8892 22.9714 15.5016 22.9988C15.4841 23 15.4031 23 15.2413 23H8.75868C7.95372 23 7.28937 23 6.74818 22.9558C6.18608 22.9099 5.66938 22.8113 5.18404 22.564C4.43139 22.1805 3.81947 21.5686 3.43598 20.816C3.18868 20.3306 3.09012 19.8139 3.0442 19.2518C2.99998 18.7106 2.99999 18.0463 3 17.2413V6.75869C2.99999 5.95373 2.99998 5.28936 3.0442 4.74818C3.09012 4.18608 3.18868 3.66938 3.43598 3.18404C3.81947 2.43139 4.43139 1.81947 5.18404 1.43598C5.66938 1.18868 6.18608 1.09012 6.74818 1.0442C7.28936 0.999979 7.95375 0.999988 8.7587 1ZM7 5C6.44772 5 6 5.44772 6 6C6 6.55229 6.44772 7 7 7H16C16.5523 7 17 6.55229 17 6C17 5.44772 16.5523 5 16 5H7ZM6 10C6 9.44771 6.44772 9 7 9H13C13.5523 9 14 9.44771 14 10C14 10.5523 13.5523 11 13 11H7C6.44772 11 6 10.5523 6 10ZM6 14C6 13.4477 6.44772 13 7 13H9C9.55229 13 10 13.4477 10 14C10 14.5523 9.55229 15 9 15H7C6.44772 15 6 14.5523 6 14Z"
              fill={color}
            />
            <path
              d="M17.9884 14.6721C18.2426 14.5227 18.5414 14.4681 18.832 14.518C19.1225 14.5678 19.3861 14.7189 19.5759 14.9444C19.7658 15.1699 19.8697 15.4554 19.8693 15.7502V15.7517C19.8693 15.9703 19.6921 16.2714 19.1904 16.6059C18.97 16.7528 18.7425 16.8673 18.5661 16.9457C18.4793 16.9842 18.4084 17.0125 18.3616 17.0304C18.3382 17.0393 18.3211 17.0455 18.3112 17.049L18.3031 17.0519C17.7802 17.2271 17.4978 17.7928 17.6723 18.3162C17.8469 18.8402 18.4132 19.1233 18.9372 18.9487L18.9384 18.9483L18.9812 18.9334C19.0043 18.9252 19.0354 18.9139 19.0735 18.8994C19.1496 18.8704 19.2544 18.8284 19.3784 18.7733C19.6236 18.6643 19.9581 18.4978 20.2998 18.27C20.9221 17.8551 21.8688 17.0324 21.8693 15.7526C21.8703 14.9857 21.5999 14.2431 21.106 13.6564C20.612 13.0695 19.9262 12.6765 19.1701 12.5468C18.414 12.4171 17.6364 12.5592 16.9751 12.9478C16.3137 13.3365 15.8113 13.9467 15.5567 14.6704C15.3734 15.1914 15.6472 15.7623 16.1682 15.9456C16.6892 16.1288 17.2601 15.8551 17.4434 15.3341C17.5412 15.056 17.7343 14.8215 17.9884 14.6721Z"
              fill={color}
            />
            <path
              d="M18.65 20C18.0977 20 17.65 20.4477 17.65 21C17.65 21.5523 18.0977 22 18.65 22H18.66C19.2123 22 19.66 21.5523 19.66 21C19.66 20.4477 19.2123 20 18.66 20H18.65Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 9.5V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H14M14 11H8M10 15H8M16 7H8M16.5 15.0022C16.6762 14.5014 17.024 14.079 17.4817 13.81C17.9395 13.5409 18.4777 13.4426 19.001 13.5324C19.5243 13.6221 19.999 13.8942 20.3409 14.3004C20.6829 14.7066 20.87 15.2207 20.8692 15.7517C20.8692 17.2506 18.6209 18 18.6209 18M18.6499 21H18.6599"
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
