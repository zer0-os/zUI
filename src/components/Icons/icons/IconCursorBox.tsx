import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconCursorBox = ({
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
              d="M16.2413 2H7.7587C6.95374 1.99999 6.28937 1.99998 5.74818 2.04419C5.18608 2.09012 4.66937 2.18868 4.18404 2.43598C3.43139 2.81947 2.81947 3.43139 2.43598 4.18404C2.18868 4.66937 2.09012 5.18608 2.04419 5.74818C1.99998 6.28937 1.99999 6.95372 2 7.75869V16.2413C1.99999 17.0463 1.99998 17.7106 2.04419 18.2518C2.09012 18.8139 2.18868 19.3306 2.43598 19.816C2.81947 20.5686 3.43139 21.1805 4.18404 21.564C4.66937 21.8113 5.18608 21.9099 5.74818 21.9558C6.28936 22 6.95372 22 7.75868 22H9.5C10.0523 22 10.5 21.5523 10.5 21C10.5 20.4477 10.0523 20 9.5 20H7.8C6.94342 20 6.36113 19.9992 5.91104 19.9624C5.47262 19.9266 5.24842 19.8617 5.09202 19.782C4.7157 19.5903 4.40973 19.2843 4.21799 18.908C4.1383 18.7516 4.07337 18.5274 4.03755 18.089C4.00078 17.6389 4 17.0566 4 16.2V7.8C4 6.94342 4.00078 6.36113 4.03755 5.91104C4.07337 5.47262 4.1383 5.24842 4.21799 5.09202C4.40973 4.7157 4.7157 4.40973 5.09202 4.21799C5.24842 4.1383 5.47262 4.07337 5.91104 4.03755C6.36113 4.00078 6.94342 4 7.8 4H16.2C17.0566 4 17.6389 4.00078 18.089 4.03755C18.5274 4.07337 18.7516 4.1383 18.908 4.21799C19.2843 4.40973 19.5903 4.7157 19.782 5.09202C19.8617 5.24842 19.9266 5.47262 19.9624 5.91104C19.9992 6.36113 20 6.94342 20 7.8V9.5C20 10.0523 20.4477 10.5 21 10.5C21.5523 10.5 22 10.0523 22 9.5V7.75868C22 6.95372 22 6.28936 21.9558 5.74818C21.9099 5.18608 21.8113 4.66937 21.564 4.18404C21.1805 3.43139 20.5686 2.81947 19.816 2.43598C19.3306 2.18868 18.8139 2.09012 18.2518 2.04419C17.7106 1.99998 17.0463 1.99999 16.2413 2Z"
              fill={color}
            />
            <path
              d="M12.7925 10.5401L21.0866 13.2863C21.334 13.3681 21.5795 13.4494 21.7722 13.5329C21.9475 13.6088 22.2967 13.7716 22.5178 14.1301C22.7668 14.5337 22.8102 15.0312 22.635 15.4718C22.4794 15.8632 22.1636 16.084 22.0041 16.1892C21.8288 16.3048 21.6011 16.4274 21.3717 16.5509L18.2382 18.2382L16.5509 21.3717C16.4274 21.6012 16.3048 21.8288 16.1892 22.0042C16.084 22.1637 15.8632 22.4794 15.4718 22.635C15.0312 22.8102 14.5336 22.7668 14.1301 22.5179C13.7716 22.2967 13.6088 21.9475 13.5328 21.7722C13.4494 21.5795 13.3681 21.334 13.2863 21.0867L10.5401 12.7925C10.4691 12.5783 10.3959 12.3575 10.3523 12.1701C10.3098 11.9876 10.2446 11.6469 10.3749 11.2824C10.5262 10.8592 10.8592 10.5262 11.2824 10.3749C11.6469 10.2446 11.9876 10.3098 12.1701 10.3523C12.3575 10.3959 12.5783 10.4691 12.7925 10.5401Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21 9.5V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H9.5M17.3862 17.7113L15.6879 20.8653C15.4103 21.3808 15.2715 21.6386 15.1023 21.7059C14.9555 21.7643 14.7896 21.7498 14.6551 21.6668C14.5001 21.5712 14.4081 21.2933 14.2241 20.7375L11.5004 12.5113C11.3392 12.0245 11.2586 11.7812 11.3166 11.6191C11.367 11.478 11.478 11.367 11.6191 11.3166C11.7812 11.2586 12.0245 11.3392 12.5113 11.5004L20.7374 14.2241C21.2933 14.4082 21.5712 14.5002 21.6668 14.6551C21.7498 14.7897 21.7642 14.9555 21.7058 15.1024C21.6386 15.2715 21.3808 15.4103 20.8652 15.6879L17.7113 17.3862C17.6328 17.4285 17.5935 17.4497 17.5591 17.4768C17.5286 17.501 17.501 17.5286 17.4768 17.5591C17.4497 17.5935 17.4285 17.6328 17.3862 17.7113Z"
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