import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconHomeLine = ({
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
              d="M12.5228 1.33636C12.1805 1.24368 11.8197 1.24368 11.4774 1.33636C11.0801 1.44395 10.7455 1.7066 10.4785 1.91623L10.4039 1.97465L3.54388 7.31012C3.16725 7.6024 2.83544 7.85991 2.58818 8.19421C2.37119 8.48759 2.20954 8.8181 2.11118 9.1695C1.9991 9.56992 1.99955 9.98993 2.00007 10.4667L2.00014 17.8385C2.00012 18.3657 2.00011 18.8204 2.03071 19.195C2.06301 19.5904 2.13433 19.9836 2.32712 20.362C2.61474 20.9264 3.07368 21.3854 3.63817 21.673C4.01655 21.8658 4.40977 21.9371 4.80511 21.9694C5.17968 22 5.63443 22 6.16157 22H17.8387C18.3658 22 18.8206 22 19.1952 21.9694C19.5905 21.9371 19.9837 21.8658 20.3621 21.673C20.9266 21.3854 21.3855 20.9264 21.6732 20.362C21.866 19.9836 21.9373 19.5904 21.9696 19.195C22.0002 18.8204 22.0002 18.3657 22.0001 17.8386L22.0002 10.4667C22.0007 9.98993 22.0012 9.56992 21.8891 9.1695C21.7907 8.8181 21.6291 8.48759 21.4121 8.19421C21.1648 7.8599 20.833 7.6024 20.4564 7.31011L13.5964 1.97465L13.5218 1.91623C13.2547 1.7066 12.9202 1.44395 12.5228 1.33636ZM8.00015 16C7.44787 16 7.00015 16.4477 7.00015 17C7.00015 17.5523 7.44787 18 8.00015 18H16.0002C16.5524 18 17.0002 17.5523 17.0002 17C17.0002 16.4477 16.5524 16 16.0002 16H8.00015Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 17H16M11.0177 2.76403L4.23539 8.03916C3.78202 8.39178 3.55534 8.56809 3.39203 8.78889C3.24737 8.98447 3.1396 9.20481 3.07403 9.43908C3 9.70355 3 9.99073 3 10.5651V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V10.5651C21 9.99073 21 9.70355 20.926 9.43908C20.8604 9.20481 20.7526 8.98447 20.608 8.78889C20.4447 8.56809 20.218 8.39178 19.7646 8.03916L12.9823 2.76403C12.631 2.49078 12.4553 2.35415 12.2613 2.30163C12.0902 2.25529 11.9098 2.25529 11.7387 2.30163C11.5447 2.35415 11.369 2.49078 11.0177 2.76403Z"
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
