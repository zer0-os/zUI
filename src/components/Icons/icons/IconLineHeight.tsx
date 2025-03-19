import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconLineHeight = ({
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
              d="M3 2C2.44772 2 2 2.44772 2 3C2 3.55228 2.44772 4 3 4H21C21.5523 4 22 3.55228 22 3C22 2.44772 21.5523 2 21 2H3Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.6628 5.86287C12.2449 5.65704 11.7551 5.65704 11.3372 5.86287C10.97 6.04374 10.7764 6.3608 10.6825 6.52606C10.5819 6.70318 10.4788 6.93005 10.3763 7.15569L6.08963 16.5864C5.8611 17.0892 6.08342 17.682 6.5862 17.9106C7.08898 18.1391 7.68183 17.9168 7.91037 17.414L9.46218 14L14.5378 14L16.0896 17.414C16.3182 17.9168 16.911 18.1391 17.4138 17.9106C17.9166 17.682 18.1389 17.0892 17.9104 16.5864L13.6237 7.15569C13.5212 6.93005 13.4181 6.70318 13.3175 6.52606C13.2236 6.3608 13.03 6.04374 12.6628 5.86287ZM13.6287 12L12 8.4168L10.3713 12L13.6287 12Z"
              fill={color}
            />
            <path
              d="M2 21C2 20.4477 2.44772 20 3 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9 13H15M7 17L11.2717 7.60224C11.5031 7.09323 11.6188 6.83872 11.7791 6.75976C11.9184 6.69115 12.0816 6.69115 12.2209 6.75976C12.3812 6.83872 12.4969 7.09323 12.7283 7.60224L17 17M21 21H3M21 3H3"
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
