import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconUser = ({
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
            d="M12 3.75C9.92897 3.75 8.25004 5.42893 8.25004 7.5C8.25004 9.57107 9.92897 11.25 12 11.25C14.0711 11.25 15.75 9.57107 15.75 7.5C15.75 5.42893 14.0711 3.75 12 3.75ZM6.75004 7.5C6.75004 4.6005 9.10055 2.25 12 2.25C14.8995 2.25 17.25 4.6005 17.25 7.5C17.25 10.3995 14.8995 12.75 12 12.75C9.10055 12.75 6.75004 10.3995 6.75004 7.5ZM9.35703 14.75C9.40406 14.75 9.45172 14.75 9.50005 14.75H14.5C14.5484 14.75 14.596 14.75 14.643 14.75C15.9012 14.7497 16.7031 14.7495 17.3789 14.9545C18.897 15.415 20.085 16.603 20.5455 18.1211C20.7505 18.797 20.7503 19.5989 20.7501 20.857C20.7501 20.904 20.75 20.9517 20.75 21C20.75 21.4142 20.4143 21.75 20 21.75C19.5858 21.75 19.25 21.4142 19.25 21C19.25 19.5499 19.2419 18.9911 19.1101 18.5566C18.795 17.5179 17.9822 16.705 16.9435 16.3899C16.509 16.2581 15.9502 16.25 14.5 16.25H9.50005C8.04991 16.25 7.49111 16.2581 7.05661 16.3899C6.01791 16.705 5.20507 17.5179 4.88999 18.5566C4.75818 18.9911 4.75004 19.5499 4.75004 21C4.75004 21.4142 4.41425 21.75 4.00004 21.75C3.58583 21.75 3.25004 21.4142 3.25004 21C3.25004 20.9517 3.25003 20.904 3.25002 20.857C3.24974 19.5989 3.24956 18.797 3.45458 18.1211C3.91509 16.603 5.10308 15.415 6.62119 14.9545C7.29702 14.7495 8.09892 14.7497 9.35703 14.75Z"
            fill={color}
          />
        </svg>
      </AccessibleIcon.Root>
    </div>
  );
};
