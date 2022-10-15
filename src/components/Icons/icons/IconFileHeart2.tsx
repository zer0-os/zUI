import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconFileHeart2 = ({
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
              d="M8.7587 1H15.2413C16.0462 0.999989 16.7106 0.999979 17.2518 1.0442C17.8139 1.09012 18.3306 1.18869 18.816 1.43598C19.5686 1.81947 20.1805 2.43139 20.564 3.18404C20.8113 3.66938 20.9099 4.18608 20.9558 4.74818C21 5.28937 21 5.95372 21 6.75868V11.1174C21 11.4435 21 11.6065 20.9478 11.7116C20.8954 11.817 20.8409 11.8734 20.7374 11.9292C20.6341 11.9849 20.4393 11.9914 20.0498 12.0045C19.3318 12.0285 18.6306 12.2194 17.9955 12.5463C16.4216 11.7357 14.4303 11.7436 12.7994 13.0983C10.726 14.8207 10.3918 17.7967 12.0699 19.8961C12.549 20.4955 13.3728 21.2922 14.108 21.9736C14.2467 22.1022 14.3161 22.1665 14.3448 22.206C14.5618 22.5044 14.3991 22.9192 14.0371 22.9906C13.9892 23 13.8968 23 13.7119 23H8.75868C7.95372 23 7.28937 23 6.74818 22.9558C6.18608 22.9099 5.66938 22.8113 5.18404 22.564C4.43139 22.1805 3.81947 21.5686 3.43598 20.816C3.18869 20.3306 3.09012 19.8139 3.0442 19.2518C2.99998 18.7106 2.99999 18.0463 3 17.2413V6.75869C2.99999 5.95374 2.99998 5.28936 3.0442 4.74818C3.09012 4.18608 3.18869 3.66938 3.43598 3.18404C3.81947 2.43139 4.43139 1.81947 5.18404 1.43598C5.66938 1.18869 6.18608 1.09012 6.74818 1.0442C7.28936 0.999979 7.95376 0.999989 8.7587 1ZM7 8C6.44772 8 6 8.44772 6 9C6 9.55229 6.44772 10 7 10H13C13.5523 10 14 9.55229 14 9C14 8.44772 13.5523 8 13 8H7ZM6 13C6 12.4477 6.44772 12 7 12H9C9.55229 12 10 12.4477 10 13C10 13.5523 9.55229 14 9 14H7C6.44772 14 6 13.5523 6 13ZM7 4C6.44772 4 6 4.44772 6 5C6 5.55229 6.44772 6 7 6H16C16.5523 6 17 5.55229 17 5C17 4.44772 16.5523 4 16 4H7Z"
              fill={color}
            />
            <path
              d="M17.9966 15.0382C16.9969 13.902 15.3299 13.5964 14.0773 14.6368C12.8248 15.6773 12.6485 17.4169 13.6321 18.6474C14.3772 19.5796 16.4978 21.4536 17.4825 22.3077C17.6616 22.463 17.7512 22.5407 17.8556 22.5714C17.9463 22.598 18.0469 22.598 18.1375 22.5714C18.2419 22.5407 18.3315 22.463 18.5106 22.3077C19.4953 21.4536 21.616 19.5796 22.3611 18.6474C23.3447 17.4169 23.1899 15.6663 21.9158 14.6368C20.6417 13.6073 18.9963 13.902 17.9966 15.0382Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 10V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H12M12.5 11H8M9 15H8M16 7H8M16.9973 14.8306C16.1975 13.9216 14.8639 13.6771 13.8619 14.5094C12.8599 15.3418 12.7188 16.7335 13.5057 17.7179C14.2926 18.7024 16.9973 21 16.9973 21C16.9973 21 19.7019 18.7024 20.4888 17.7179C21.2757 16.7335 21.1519 15.3331 20.1326 14.5094C19.1134 13.6858 17.797 13.9216 16.9973 14.8306Z"
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