import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconReceipt = ({
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
              d="M15.2413 2H8.7587C7.95374 1.99999 7.28937 1.99998 6.74818 2.04419C6.18608 2.09012 5.66937 2.18868 5.18404 2.43598C4.43139 2.81947 3.81947 3.43139 3.43598 4.18404C3.18868 4.66937 3.09012 5.18608 3.04419 5.74818C2.99998 6.28937 2.99999 6.95372 3 7.75869V21C3 21.3761 3.21105 21.7204 3.54622 21.8911C3.88139 22.0618 4.28399 22.03 4.58817 21.8087L6.72111 20.2575L8.62531 21.7809C8.97715 22.0623 9.47378 22.0738 9.83817 21.8087L12 20.2365L14.1618 21.8087C14.5262 22.0738 15.0229 22.0623 15.3747 21.7809L17.2789 20.2575L19.4118 21.8087C19.716 22.03 20.1186 22.0618 20.4538 21.8911C20.7889 21.7204 21 21.3761 21 21V7.75868C21 6.95372 21 6.28937 20.9558 5.74818C20.9099 5.18608 20.8113 4.66937 20.564 4.18404C20.1805 3.43139 19.5686 2.81947 18.816 2.43598C18.3306 2.18868 17.8139 2.09012 17.2518 2.04419C16.7106 1.99998 16.0463 1.99999 15.2413 2Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 7.8C4 6.11984 4 5.27976 4.32698 4.63803C4.6146 4.07354 5.07354 3.6146 5.63803 3.32698C6.27976 3 7.11984 3 8.8 3H15.2C16.8802 3 17.7202 3 18.362 3.32698C18.9265 3.6146 19.3854 4.07354 19.673 4.63803C20 5.27976 20 6.11984 20 7.8V21L17.25 19L14.75 21L12 19L9.25 21L6.75 19L4 21V7.8Z"
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
