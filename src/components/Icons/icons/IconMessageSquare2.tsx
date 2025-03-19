import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconMessageSquare2 = ({
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
              d="M7.7588 2H16.2414C17.0464 1.99999 17.7107 1.99998 18.2519 2.04419C18.814 2.09012 19.3307 2.18868 19.8161 2.43597C20.5687 2.81947 21.1806 3.43139 21.5641 4.18404C21.8114 4.66937 21.91 5.18608 21.9559 5.74817C22.0001 6.28936 22.0001 6.95372 22.0001 7.75868V13.2413C22.0001 14.0463 22.0001 14.7106 21.9559 15.2518C21.91 15.8139 21.8114 16.3306 21.5641 16.816C21.1806 17.5686 20.5687 18.1805 19.8161 18.564C19.3307 18.8113 18.814 18.9099 18.2519 18.9558C17.7107 19 17.0464 19 16.2414 19H13.6838C13.0197 19 12.8263 19.0047 12.6504 19.0408C12.4738 19.0771 12.303 19.137 12.1425 19.219C11.9826 19.3007 11.8286 19.4178 11.31 19.8327L8.89688 21.7632C8.7132 21.9102 8.52597 22.06 8.36137 22.1689C8.20394 22.273 7.8987 22.4593 7.50172 22.4597C7.0449 22.4602 6.61276 22.2525 6.32778 21.8955C6.08012 21.5852 6.03492 21.2305 6.01785 21.0425C6 20.846 6.00005 20.6062 6.00009 20.371L6.0001 18.9918C5.60829 18.9789 5.27229 18.9461 4.96482 18.8637C3.58445 18.4938 2.50626 17.4156 2.13639 16.0353C1.9993 15.5236 1.99962 14.933 2.00005 14.1376C2.00007 14.0924 2.0001 14.0465 2.0001 14L2.0001 7.7587C2.00008 6.95373 2.00007 6.28937 2.04429 5.74817C2.09022 5.18608 2.18878 4.66937 2.43607 4.18404C2.81956 3.43139 3.43149 2.81947 4.18413 2.43597C4.66947 2.18868 5.18617 2.09012 5.74827 2.04419C6.28947 1.99998 6.95383 1.99999 7.7588 2Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V13.2C21 14.8802 21 15.7202 20.673 16.362C20.3854 16.9265 19.9265 17.3854 19.362 17.673C18.7202 18 17.8802 18 16.2 18H13.6837C13.0597 18 12.7477 18 12.4492 18.0613C12.1844 18.1156 11.9282 18.2055 11.6875 18.3285C11.4162 18.4671 11.1725 18.662 10.6852 19.0518L8.29976 20.9602C7.88367 21.2931 7.67563 21.4595 7.50054 21.4597C7.34827 21.4599 7.20422 21.3906 7.10923 21.2716C7 21.1348 7 20.8684 7 20.3355V18C6.07003 18 5.60504 18 5.22354 17.8978C4.18827 17.6204 3.37962 16.8117 3.10222 15.7765C3 15.395 3 14.93 3 14V7.8Z"
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
