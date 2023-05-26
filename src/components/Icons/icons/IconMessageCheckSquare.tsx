import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconMessageCheckSquare = ({
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
              d="M16.2414 2H7.7588C6.95383 1.99999 6.28946 1.99998 5.74827 2.04419C5.18617 2.09012 4.66947 2.18868 4.18413 2.43598C3.43149 2.81947 2.81956 3.43139 2.43607 4.18404C2.18878 4.66937 2.09022 5.18608 2.04429 5.74818C2.00007 6.28937 2.00008 6.95373 2.0001 7.7587L2.00005 14.1376C1.99962 14.933 1.9993 15.5236 2.13639 16.0353C2.50626 17.4156 3.58445 18.4938 4.96482 18.8637C5.27229 18.9461 5.60829 18.9789 6.0001 18.9918L6.00009 20.371C6.00005 20.6062 6 20.846 6.01785 21.0425C6.03492 21.2305 6.08012 21.5852 6.32778 21.8955C6.61276 22.2525 7.0449 22.4602 7.50172 22.4597C7.8987 22.4593 8.20394 22.273 8.36137 22.1689C8.52597 22.06 8.7132 21.9102 8.89688 21.7632L11.31 19.8327C11.8286 19.4178 11.9826 19.3007 12.1425 19.219C12.303 19.137 12.4738 19.0771 12.6504 19.0408C12.8263 19.0047 13.0197 19 13.6838 19H16.2414C17.0464 19 17.7107 19 18.2519 18.9558C18.814 18.9099 19.3307 18.8113 19.8161 18.564C20.5687 18.1805 21.1806 17.5686 21.5641 16.816C21.8114 16.3306 21.91 15.8139 21.9559 15.2518C22.0001 14.7106 22.0001 14.0463 22.0001 13.2413V7.75868C22.0001 6.95372 22.0001 6.28936 21.9559 5.74818C21.91 5.18608 21.8114 4.66937 21.5641 4.18404C21.1806 3.43139 20.5687 2.81947 19.8161 2.43598C19.3307 2.18868 18.814 2.09012 18.2519 2.04419C17.7107 1.99998 17.0464 1.99999 16.2414 2ZM16.2071 8.70711C16.5976 8.31658 16.5976 7.68342 16.2071 7.29289C15.8166 6.90237 15.1834 6.90237 14.7929 7.29289L11 11.0858L9.70711 9.79289C9.31658 9.40237 8.68342 9.40237 8.29289 9.79289C7.90237 10.1834 7.90237 10.8166 8.29289 11.2071L10.2929 13.2071C10.6834 13.5976 11.3166 13.5976 11.7071 13.2071L16.2071 8.70711Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9 10.5L11 12.5L15.5 8M7 18V20.3355C7 20.8684 7 21.1348 7.10923 21.2716C7.20422 21.3906 7.34827 21.4599 7.50054 21.4597C7.67563 21.4595 7.88367 21.2931 8.29976 20.9602L10.6852 19.0518C11.1725 18.662 11.4162 18.4671 11.6875 18.3285C11.9282 18.2055 12.1844 18.1156 12.4492 18.0613C12.7477 18 13.0597 18 13.6837 18H16.2C17.8802 18 18.7202 18 19.362 17.673C19.9265 17.3854 20.3854 16.9265 20.673 16.362C21 15.7202 21 14.8802 21 13.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V14C3 14.93 3 15.395 3.10222 15.7765C3.37962 16.8117 4.18827 17.6204 5.22354 17.8978C5.60504 18 6.07003 18 7 18Z"
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
