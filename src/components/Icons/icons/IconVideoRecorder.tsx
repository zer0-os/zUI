import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconVideoRecorder = ({
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
              d="M12.2413 4H6.7587C5.95374 3.99999 5.28937 3.99998 4.74818 4.04419C4.18608 4.09012 3.66937 4.18868 3.18404 4.43598C2.43139 4.81947 1.81947 5.43139 1.43598 6.18404C1.18868 6.66937 1.09012 7.18608 1.04419 7.74818C0.999978 8.28937 0.999988 8.95372 1 9.75869V14.2413C0.999988 15.0463 0.999978 15.7106 1.04419 16.2518C1.09012 16.8139 1.18868 17.3306 1.43598 17.816C1.81947 18.5686 2.43139 19.1805 3.18404 19.564C3.66937 19.8113 4.18608 19.9099 4.74818 19.9558C5.28937 20 5.95373 20 6.7587 20H12.2413C13.0462 20 13.7106 20 14.2518 19.9558C14.8139 19.9099 15.3306 19.8113 15.816 19.564C16.5686 19.1805 17.1805 18.5686 17.564 17.816C17.8113 17.3306 17.9099 16.8139 17.9558 16.2518C17.9968 15.7499 17.9998 15.1419 18 14.4141L19.9535 16.3677C20.1447 16.5589 20.3326 16.7468 20.4973 16.8847C20.6442 17.0078 20.9537 17.2545 21.3823 17.2882C21.861 17.3259 22.3288 17.1321 22.6406 16.767C22.9198 16.4401 22.9642 16.0468 22.9811 15.8559C23.0001 15.6419 23 15.3762 23 15.1058V8.89407C23 8.6237 23.0001 8.35792 22.9811 8.14396C22.9642 7.95307 22.9198 7.55981 22.6406 7.23287C22.3288 6.86775 21.861 6.67399 21.3823 6.71166C20.9537 6.7454 20.6442 6.99211 20.4973 7.11512C20.3326 7.253 20.1447 7.44093 19.9536 7.63213L18 9.58573C17.9998 8.85799 17.9968 8.25011 17.9558 7.74818C17.9099 7.18608 17.8113 6.66937 17.564 6.18404C17.1805 5.43139 16.5686 4.81947 15.816 4.43598C15.3306 4.18868 14.8139 4.09012 14.2518 4.04419C13.7106 3.99998 13.0463 3.99999 12.2413 4Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22 8.93137C22 8.32555 22 8.02265 21.8802 7.88238C21.7763 7.76068 21.6203 7.69609 21.4608 7.70865C21.2769 7.72312 21.0627 7.93731 20.6343 8.36569L17 12L20.6343 15.6343C21.0627 16.0627 21.2769 16.2769 21.4608 16.2914C21.6203 16.3039 21.7763 16.2393 21.8802 16.1176C22 15.9774 22 15.6744 22 15.0686V8.93137Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 9.8C2 8.11984 2 7.27976 2.32698 6.63803C2.6146 6.07354 3.07354 5.6146 3.63803 5.32698C4.27976 5 5.11984 5 6.8 5H12.2C13.8802 5 14.7202 5 15.362 5.32698C15.9265 5.6146 16.3854 6.07354 16.673 6.63803C17 7.27976 17 8.11984 17 9.8V14.2C17 15.8802 17 16.7202 16.673 17.362C16.3854 17.9265 15.9265 18.3854 15.362 18.673C14.7202 19 13.8802 19 12.2 19H6.8C5.11984 19 4.27976 19 3.63803 18.673C3.07354 18.3854 2.6146 17.9265 2.32698 17.362C2 16.7202 2 15.8802 2 14.2V9.8Z"
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
