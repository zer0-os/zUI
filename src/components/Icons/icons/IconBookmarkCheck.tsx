import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconBookmarkCheck = ({
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
              d="M14.2413 2H9.7587C8.95374 1.99999 8.28937 1.99998 7.74818 2.04419C7.18608 2.09012 6.66937 2.18868 6.18404 2.43598C5.43139 2.81947 4.81947 3.43139 4.43598 4.18404C4.18868 4.66937 4.09012 5.18608 4.04419 5.74818C3.99998 6.28937 3.99999 6.95372 4 7.75869V21C4 21.3565 4.18976 21.686 4.49807 21.8649C4.80639 22.0438 5.18664 22.0451 5.49614 21.8682L12 18.1518L18.5039 21.8682C18.8134 22.0451 19.1936 22.0438 19.5019 21.8649C19.8102 21.686 20 21.3565 20 21V7.75873C20 6.95376 20 6.28937 19.9558 5.74818C19.9099 5.18608 19.8113 4.66937 19.564 4.18404C19.1805 3.43139 18.5686 2.81947 17.816 2.43598C17.3306 2.18868 16.8139 2.09012 16.2518 2.04419C15.7106 1.99998 15.0463 1.99999 14.2413 2ZM16.2071 8.70711C16.5976 8.31658 16.5976 7.68342 16.2071 7.29289C15.8166 6.90237 15.1834 6.90237 14.7929 7.29289L11 11.0858L9.70711 9.79289C9.31658 9.40237 8.68342 9.40237 8.29289 9.79289C7.90237 10.1834 7.90237 10.8166 8.29289 11.2071L10.2929 13.2071C10.6834 13.5976 11.3166 13.5976 11.7071 13.2071L16.2071 8.70711Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9 10.5L11 12.5L15.5 8M19 21V7.8C19 6.11984 19 5.27976 18.673 4.63803C18.3854 4.07354 17.9265 3.6146 17.362 3.32698C16.7202 3 15.8802 3 14.2 3H9.8C8.11984 3 7.27976 3 6.63803 3.32698C6.07354 3.6146 5.6146 4.07354 5.32698 4.63803C5 5.27976 5 6.11984 5 7.8V21L12 17L19 21Z"
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
