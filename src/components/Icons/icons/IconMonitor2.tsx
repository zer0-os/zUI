import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconMonitor2 = ({
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
              d="M12 21C10.562 21 9.20626 21.3252 8.00427 21.9017C7.5063 22.1405 6.909 21.9304 6.67016 21.4325C6.43132 20.9345 6.64139 20.3372 7.13936 20.0983C8.60697 19.3944 10.2579 19 12 19C13.7421 19 15.393 19.3944 16.8606 20.0983C17.3586 20.3372 17.5687 20.9345 17.3298 21.4325C17.091 21.9304 16.4937 22.1405 15.9957 21.9017C14.7937 21.3252 13.438 21 12 21Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.7587 2H17.2413C18.0463 1.99999 18.7106 1.99998 19.2518 2.04419C19.8139 2.09012 20.3306 2.18868 20.816 2.43597C21.5686 2.81947 22.1805 3.43139 22.564 4.18404C22.8113 4.66937 22.9099 5.18608 22.9558 5.74817C23 6.28936 23 6.95372 23 7.75868V12.2413C23 13.0463 23 13.7106 22.9558 14.2518C22.9099 14.8139 22.8113 15.3306 22.564 15.816C22.1805 16.5686 21.5686 17.1805 20.816 17.564C20.3306 17.8113 19.8139 17.9099 19.2518 17.9558C18.7106 18 18.0463 18 17.2413 18H6.75873C5.95374 18 5.28938 18 4.74817 17.9558C4.18608 17.9099 3.66937 17.8113 3.18404 17.564C2.43139 17.1805 1.81947 16.5686 1.43597 15.816C1.18868 15.3306 1.09012 14.8139 1.04419 14.2518C0.999977 13.7106 0.999988 13.0463 1 12.2413V7.7587C0.999988 6.95373 0.999977 6.28937 1.04419 5.74818C1.09012 5.18608 1.18868 4.66937 1.43597 4.18404C1.81947 3.43139 2.43139 2.81947 3.18404 2.43597C3.66937 2.18868 4.18608 2.09012 4.74817 2.04419C5.28937 1.99998 5.95373 1.99999 6.7587 2Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.57181 21C8.90661 20.3598 10.41 20 12 20C13.59 20 15.0934 20.3598 16.4282 21M6.8 17H17.2C18.8802 17 19.7202 17 20.362 16.673C20.9265 16.3854 21.3854 15.9265 21.673 15.362C22 14.7202 22 13.8802 22 12.2V7.8C22 6.11984 22 5.27976 21.673 4.63803C21.3854 4.07354 20.9265 3.6146 20.362 3.32698C19.7202 3 18.8802 3 17.2 3H6.8C5.11984 3 4.27976 3 3.63803 3.32698C3.07354 3.6146 2.6146 4.07354 2.32698 4.63803C2 5.27976 2 6.11984 2 7.8V12.2C2 13.8802 2 14.7202 2.32698 15.362C2.6146 15.9265 3.07354 16.3854 3.63803 16.673C4.27976 17 5.11984 17 6.8 17Z"
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
