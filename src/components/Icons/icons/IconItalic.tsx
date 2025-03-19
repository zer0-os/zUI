import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconItalic = ({
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
            d="M14.9827 3.25002H10C9.58579 3.25002 9.25 3.58581 9.25 4.00002C9.25 4.41423 9.58579 4.75002 10 4.75002H13.9177L8.48025 19.25H5C4.58579 19.25 4.25 19.5858 4.25 20C4.25 20.4142 4.58579 20.75 5 20.75H8.98248C8.99411 20.7503 9.00572 20.7503 9.01729 20.75H14C14.4142 20.75 14.75 20.4142 14.75 20C14.75 19.5858 14.4142 19.25 14 19.25H10.0823L15.5198 4.75002H19C19.4142 4.75002 19.75 4.41423 19.75 4.00002C19.75 3.58581 19.4142 3.25002 19 3.25002H15.0175C15.0059 3.24975 14.9943 3.24975 14.9827 3.25002Z"
            fill={color}
          />
        </svg>
      </AccessibleIcon.Root>
    </div>
  );
};
