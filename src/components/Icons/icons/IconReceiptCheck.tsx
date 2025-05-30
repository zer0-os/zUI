import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconReceiptCheck = ({
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
              d="M8.7587 2H15.2413C16.0463 1.99999 16.7106 1.99998 17.2518 2.0442C17.8139 2.09012 18.3306 2.18868 18.816 2.43598C19.5686 2.81947 20.1805 3.43139 20.564 4.18404C20.8113 4.66938 20.9099 5.18608 20.9558 5.74818C21 6.28937 21 6.95372 21 7.75868V21C21 21.3761 20.7889 21.7204 20.4538 21.8911C20.1186 22.0618 19.716 22.03 19.4118 21.8087L17.2789 20.2575L15.3747 21.7809C15.0229 22.0623 14.5262 22.0738 14.1618 21.8087L12 20.2365L9.83817 21.8087C9.47378 22.0738 8.97715 22.0623 8.62531 21.7809L6.72111 20.2575L4.58817 21.8087C4.28399 22.03 3.88139 22.0618 3.54622 21.8911C3.21105 21.7204 3 21.3761 3 21V7.75869C2.99999 6.95373 2.99998 6.28936 3.0442 5.74818C3.09012 5.18608 3.18868 4.66938 3.43598 4.18404C3.81947 3.43139 4.43139 2.81947 5.18404 2.43598C5.66938 2.18868 6.18608 2.09012 6.74818 2.0442C7.28936 1.99998 7.95375 1.99999 8.7587 2ZM16.2071 8.70711C16.5976 8.31658 16.5976 7.68342 16.2071 7.29289C15.8166 6.90237 15.1834 6.90237 14.7929 7.29289L11 11.0858L9.70711 9.79289C9.31658 9.40237 8.68342 9.40237 8.29289 9.79289C7.90237 10.1834 7.90237 10.8166 8.29289 11.2071L10.2929 13.2071C10.6834 13.5976 11.3166 13.5976 11.7071 13.2071L16.2071 8.70711Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9 10.5L11 12.5L15.5 8M20 21V7.8C20 6.11984 20 5.27976 19.673 4.63803C19.3854 4.07354 18.9265 3.6146 18.362 3.32698C17.7202 3 16.8802 3 15.2 3H8.8C7.11984 3 6.27976 3 5.63803 3.32698C5.07354 3.6146 4.6146 4.07354 4.32698 4.63803C4 5.27976 4 6.11984 4 7.8V21L6.75 19L9.25 21L12 19L14.75 21L17.25 19L20 21Z"
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
