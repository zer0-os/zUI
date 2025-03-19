import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconCornerUpRight = ({
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
              d="M15.7071 3.29289C15.3166 2.90237 14.6834 2.90237 14.2929 3.29289C13.9024 3.68342 13.9024 4.31658 14.2929 4.70711L17.5858 8L13.5556 8C11.913 7.99999 10.6191 7.99999 9.57778 8.08507C8.51543 8.17186 7.62827 8.35217 6.82207 8.76295C5.50493 9.43407 4.43407 10.5049 3.76295 11.8221C3.35217 12.6283 3.17186 13.5154 3.08507 14.5778C2.99999 15.6191 2.99999 16.913 3 18.5556V20C3 20.5523 3.44772 21 4 21C4.55229 21 5 20.5523 5 20V18.6C5 16.9033 5.00078 15.691 5.07842 14.7406C5.15512 13.802 5.30179 13.2073 5.54497 12.73C6.02433 11.7892 6.78924 11.0243 7.73005 10.545C8.20732 10.3018 8.80197 10.1551 9.74064 10.0784C10.691 10.0008 11.9033 10 13.6 10H17.5858L14.2929 13.2929C13.9024 13.6834 13.9024 14.3166 14.2929 14.7071C14.6834 15.0976 15.3166 15.0976 15.7071 14.7071L20.7071 9.70711C21.0976 9.31658 21.0976 8.68342 20.7071 8.29289L15.7071 3.29289Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 20V18.6C4 15.2397 4 13.5595 4.65396 12.2761C5.2292 11.1471 6.14708 10.2292 7.27606 9.65396C8.55953 9 10.2397 9 13.6 9H20M20 9L15 14M20 9L15 4"
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
