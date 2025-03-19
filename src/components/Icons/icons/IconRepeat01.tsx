import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconRepeat01 = ({
  className,
  label = DEFAULT_LABEL,
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE
}: IconProps) => {
  return (
    <div style={{ height: size, width: size }} className={classNames(className, styles.Container)}>
      <AccessibleIcon.Root label={label}>
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6 3.25C6.41421 3.25 6.75 3.58579 6.75 4V11C6.75 13.8995 9.10051 16.25 12 16.25C14.8995 16.25 17.25 13.8995 17.25 11V4C17.25 3.58579 17.5858 3.25 18 3.25C18.4142 3.25 18.75 3.58579 18.75 4V11C18.75 14.7279 15.7279 17.75 12 17.75C8.27208 17.75 5.25 14.7279 5.25 11V4C5.25 3.58579 5.58579 3.25 6 3.25ZM3.25 21C3.25 20.5858 3.58579 20.25 4 20.25H20C20.4142 20.25 20.75 20.5858 20.75 21C20.75 21.4142 20.4142 21.75 20 21.75H4C3.58579 21.75 3.25 21.4142 3.25 21Z"
            fill={color}
          />
        </svg>
      </AccessibleIcon.Root>
    </div>
  );
};
