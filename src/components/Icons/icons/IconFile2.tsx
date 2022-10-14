import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconFile2 = ({
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
              d="M15.2413 1H8.7587C7.95374 0.999988 7.28937 0.999978 6.74818 1.04419C6.18608 1.09012 5.66937 1.18868 5.18404 1.43598C4.43139 1.81947 3.81947 2.43139 3.43598 3.18404C3.18868 3.66937 3.09012 4.18608 3.04419 4.74818C2.99998 5.28937 2.99999 5.95372 3 6.75869V17.2413C2.99999 18.0463 2.99998 18.7106 3.04419 19.2518C3.09012 19.8139 3.18868 20.3306 3.43598 20.816C3.81947 21.5686 4.43139 22.1805 5.18404 22.564C5.66937 22.8113 6.18608 22.9099 6.74818 22.9558C7.28937 23 7.95372 23 8.75868 23H15.2413C16.0463 23 16.7106 23 17.2518 22.9558C17.8139 22.9099 18.3306 22.8113 18.816 22.564C19.5686 22.1805 20.1805 21.5686 20.564 20.816C20.8113 20.3306 20.9099 19.8139 20.9558 19.2518C21 18.7106 21 18.0463 21 17.2413V6.75868C21 5.95372 21 5.28937 20.9558 4.74818C20.9099 4.18608 20.8113 3.66937 20.564 3.18404C20.1805 2.43139 19.5686 1.81947 18.816 1.43598C18.3306 1.18868 17.8139 1.09012 17.2518 1.04419C16.7106 0.999978 16.0463 0.999988 15.2413 1ZM8 6C7.44772 6 7 6.44772 7 7C7 7.55229 7.44772 8 8 8H16C16.5523 8 17 7.55229 17 7C17 6.44772 16.5523 6 16 6H8ZM7 11C7 10.4477 7.44772 10 8 10H14C14.5523 10 15 10.4477 15 11C15 11.5523 14.5523 12 14 12H8C7.44772 12 7 11.5523 7 11ZM7 15C7 14.4477 7.44772 14 8 14H10C10.5523 14 11 14.4477 11 15C11 15.5523 10.5523 16 10 16H8C7.44772 16 7 15.5523 7 15Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14 11H8M10 15H8M16 7H8M20 6.8V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H15.2C16.8802 2 17.7202 2 18.362 2.32698C18.9265 2.6146 19.3854 3.07354 19.673 3.63803C20 4.27976 20 5.11984 20 6.8Z"
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
