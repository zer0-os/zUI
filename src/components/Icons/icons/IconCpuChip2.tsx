import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconCpuChip2 = ({
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
              d="M9 1C9.55229 1 10 1.44772 10 2V4H14V2C14 1.44772 14.4477 1 15 1C15.5523 1 16 1.44772 16 2V4.02714C16.0868 4.03193 16.1707 4.03756 16.2518 4.04419C16.8139 4.09012 17.3306 4.18868 17.816 4.43597C18.5686 4.81947 19.1805 5.43139 19.564 6.18404C19.8113 6.66937 19.9099 7.18608 19.9558 7.74817C19.9624 7.82933 19.9681 7.91325 19.9729 8H22C22.5523 8 23 8.44772 23 9C23 9.55229 22.5523 10 22 10H20V13H22C22.5523 13 23 13.4477 23 14C23 14.5523 22.5523 15 22 15H19.9984C19.9951 15.4755 19.9853 15.891 19.9558 16.2518C19.9099 16.8139 19.8113 17.3306 19.564 17.816C19.1805 18.5686 18.5686 19.1805 17.816 19.564C17.3306 19.8113 16.8139 19.9099 16.2518 19.9558C16.1707 19.9624 16.0868 19.9681 16 19.9729V22C16 22.5523 15.5523 23 15 23C14.4477 23 14 22.5523 14 22V20H10V22C10 22.5523 9.55229 23 9 23C8.44772 23 8 22.5523 8 22V19.9729C7.91325 19.9681 7.82933 19.9624 7.74818 19.9558C7.18608 19.9099 6.66937 19.8113 6.18404 19.564C5.43139 19.1805 4.81947 18.5686 4.43597 17.816C4.18868 17.3306 4.09012 16.8139 4.04419 16.2518C4.01472 15.891 4.00489 15.4755 4.00163 15H2C1.44772 15 1 14.5523 1 14C1 13.4477 1.44772 13 2 13H4V10H2C1.44772 10 1 9.55229 1 9C1 8.44772 1.44772 8 2 8H4.02714C4.03193 7.91325 4.03756 7.82933 4.04419 7.74818C4.09012 7.18608 4.18868 6.66937 4.43597 6.18404C4.81947 5.43139 5.43139 4.81947 6.18404 4.43597C6.66937 4.18868 7.18608 4.09012 7.74817 4.04419C7.82933 4.03756 7.91325 4.03193 8 4.02714V2C8 1.44772 8.44772 1 9 1Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9 2V5M15 2V5M9 19V22M15 19V22M19 9H22M19 14H22M2 9H5M2 14H5M9.8 19H14.2C15.8802 19 16.7202 19 17.362 18.673C17.9265 18.3854 18.3854 17.9265 18.673 17.362C19 16.7202 19 15.8802 19 14.2V9.8C19 8.11984 19 7.27976 18.673 6.63803C18.3854 6.07354 17.9265 5.6146 17.362 5.32698C16.7202 5 15.8802 5 14.2 5H9.8C8.11984 5 7.27976 5 6.63803 5.32698C6.07354 5.6146 5.6146 6.07354 5.32698 6.63803C5 7.27976 5 8.11984 5 9.8V14.2C5 15.8802 5 16.7202 5.32698 17.362C5.6146 17.9265 6.07354 18.3854 6.63803 18.673C7.27976 19 8.11984 19 9.8 19Z"
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
