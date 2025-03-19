import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconCoins1 = ({
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
              d="M7.20269 7.2027C3.64986 8.0183 1 11.1997 1 15C1 19.4183 4.58172 23 9 23C12.8003 23 15.9817 20.3501 16.7973 16.7973C16.9299 16.2196 17 15.618 17 15C17 10.5817 13.4183 7 9 7C8.38203 7 7.78042 7.07007 7.20269 7.2027Z"
              fill={color}
            />
            <path
              d="M8.04438 5.04507C8.3589 5.01525 8.67767 5 9 5C14.5228 5 19 9.47715 19 15C19 15.3223 18.9847 15.6411 18.9549 15.9556C21.371 14.5789 23 11.9797 23 9C23 4.58172 19.4183 1 15 1C12.0203 1 9.42109 2.62903 8.04438 5.04507Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.9377 15.9377C19.3603 15.4795 22 12.548 22 9C22 5.13401 18.866 2 15 2C11.452 2 8.52049 4.63967 8.06227 8.06227M16 15C16 18.866 12.866 22 9 22C5.13401 22 2 18.866 2 15C2 11.134 5.13401 8 9 8C12.866 8 16 11.134 16 15Z"
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
