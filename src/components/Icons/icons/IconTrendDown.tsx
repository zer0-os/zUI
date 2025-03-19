import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconTrendDown = ({
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
            d="M6.46967 6.46967C6.76256 6.17678 7.23744 6.17678 7.53033 6.46967L16.25 15.1893V7C16.25 6.58579 16.5858 6.25 17 6.25C17.4142 6.25 17.75 6.58579 17.75 7V17C17.75 17.4142 17.4142 17.75 17 17.75H7C6.58579 17.75 6.25 17.4142 6.25 17C6.25 16.5858 6.58579 16.25 7 16.25H15.1893L6.46967 7.53033C6.17678 7.23744 6.17678 6.76256 6.46967 6.46967Z"
            fill={color}
          />
        </svg>
      </AccessibleIcon.Root>
    </div>
  );
};
