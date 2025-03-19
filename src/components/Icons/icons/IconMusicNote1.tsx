import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconMusicNote1 = ({
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
              d="M19.968 4.19884C19.8297 4.20975 19.6394 4.24058 19.3014 4.29692L10.5014 5.76359C10.249 5.80564 10.1145 5.82874 10.0186 5.85226L10.0089 5.85469L10.0081 5.8647C10.0007 5.96308 10 6.09962 10 6.35542V18L10 18.0036C9.99804 20.2111 8.20793 22 6 22C3.79086 22 2 20.2091 2 18C2 15.7909 3.79086 14 6 14C6.72858 14 7.41166 14.1948 8 14.5351L8 6.327C7.99998 6.11089 7.99995 5.89705 8.0138 5.71387C8.02921 5.51013 8.06541 5.2733 8.17521 5.02853C8.32965 4.68426 8.57834 4.3907 8.89253 4.18176C9.11591 4.03322 9.34358 3.95857 9.54201 3.90988C9.72042 3.8661 9.93135 3.83097 10.1445 3.79547L19.0074 2.31832C19.2977 2.2699 19.5753 2.22361 19.8106 2.20504C20.0647 2.18499 20.3747 2.18614 20.6964 2.30563C21.1347 2.46845 21.5022 2.77973 21.7349 3.18536C21.9056 3.48306 21.9577 3.78866 21.9797 4.04255C22.0001 4.27768 22 4.55902 22 4.8533L22 16C22 16.0557 21.9955 16.1102 21.9867 16.1634C21.901 18.2968 20.1444 20 17.99 20C15.7809 20 13.99 18.2091 13.99 16C13.99 13.7909 15.7809 12 17.99 12C18.7227 12 19.4094 12.197 20 12.5409V4.88876C20 4.54605 19.9991 4.35324 19.9872 4.21511L19.9855 4.19756L19.968 4.19884Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9 18V6.35543C9 5.87389 9 5.63312 9.0876 5.43784C9.16482 5.26571 9.28917 5.11893 9.44627 5.01446C9.62449 4.89594 9.86198 4.85636 10.337 4.7772L19.137 3.31053C19.7779 3.2037 20.0984 3.15029 20.3482 3.24306C20.5674 3.32447 20.7511 3.48011 20.8674 3.68292C21 3.91404 21 4.23895 21 4.88876V16M9 18C9 19.6569 7.65685 21 6 21C4.34315 21 3 19.6569 3 18C3 16.3432 4.34315 15 6 15C7.65685 15 9 16.3432 9 18ZM21 16C21 17.6569 19.6569 19 18 19C16.3431 19 15 17.6569 15 16C15 14.3432 16.3431 13 18 13C19.6569 13 21 14.3432 21 16Z"
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
