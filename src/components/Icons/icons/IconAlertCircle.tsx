import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconAlertCircle = ({
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
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.75 16.5C10.75 15.8096 11.3096 15.25 12 15.25H12.01C12.7004 15.25 13.26 15.8096 13.26 16.5C13.26 17.1904 12.7004 17.75 12.01 17.75H12C11.3096 17.75 10.75 17.1904 10.75 16.5ZM11.5 6.75C11.1468 6.75 10.8102 6.89939 10.5732 7.16124C10.3362 7.4231 10.2211 7.77297 10.2562 8.12438L10.7562 13.1244C10.8201 13.7634 11.3578 14.25 12 14.25C12.6422 14.25 13.1799 13.7634 13.2438 13.1244L13.7438 8.12438C13.7789 7.77297 13.6638 7.4231 13.4268 7.16124C13.1898 6.89939 12.8532 6.75 12.5 6.75H11.5Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 16.5H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM11.5 8L12 13L12.5 8H11.5Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        )}
      </AccessibleIcon.Root>
    </div>
  );
};
