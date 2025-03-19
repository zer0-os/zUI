import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconServer6 = ({
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
              d="M4 1C2.34315 1 1 2.34315 1 4C1 5.65685 2.34315 7 4 7C4.18765 7 4.37128 6.98277 4.54939 6.94981C3.57144 8.38978 3 10.1282 3 12C3 13.8718 3.57144 15.6102 4.54939 17.0502C4.37128 17.0172 4.18765 17 4 17C2.34315 17 1 18.3431 1 20C1 21.6569 2.34315 23 4 23C5.65685 23 7 21.6569 7 20C7 19.8123 6.98277 19.6287 6.94981 19.4506C8.38978 20.4286 10.1282 21 12 21C13.8718 21 15.6102 20.4286 17.0502 19.4506C17.0172 19.6287 17 19.8123 17 20C17 21.6569 18.3431 23 20 23C21.6569 23 23 21.6569 23 20C23 18.3431 21.6569 17 20 17C19.8123 17 19.6287 17.0172 19.4506 17.0502C20.4286 15.6102 21 13.8718 21 12C21 10.1282 20.4286 8.38978 19.4506 6.94981C19.6287 6.98277 19.8123 7 20 7C21.6569 7 23 5.65685 23 4C23 2.34315 21.6569 1 20 1C18.3431 1 17 2.34315 17 4C17 4.18765 17.0172 4.37128 17.0502 4.54939C15.6102 3.57144 13.8718 3 12 3C10.1282 3 8.38978 3.57144 6.94981 4.54939C6.98277 4.37128 7 4.18765 7 4C7 2.34315 5.65685 1 4 1ZM5.07089 11C5.44647 8.3743 7.27917 6.21866 9.72359 5.37847C8.68859 7.08148 8.04757 9.00277 7.85747 11H5.07089ZM9.72366 18.6216C7.2792 17.7814 5.44647 15.6257 5.07089 13H7.85747C8.04759 14.9972 8.68863 16.9185 9.72366 18.6216ZM18.9291 13C18.5536 15.6252 16.7215 17.7806 14.2777 18.6211C15.3126 16.9182 15.9535 14.9971 16.1436 13H18.9291ZM14.2778 5.37894C16.7215 6.21945 18.5536 8.37479 18.9291 11H16.1436C15.9535 9.00295 15.3126 7.08183 14.2778 5.37894ZM14.1329 11C13.9121 9.03393 13.176 7.16116 12.0005 5.57175C10.8251 7.16116 10.089 9.03393 9.86813 11H14.1329ZM9.86814 13C10.089 14.966 10.8251 16.8388 12.0005 18.4282C13.1759 16.8388 13.9121 14.966 14.1329 13H9.86814Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 12C20 16.4183 16.4183 20 12 20M20 12C20 7.58172 16.4183 4 12 4M20 12H4M12 20C7.58172 20 4 16.4183 4 12M12 20C14.001 17.8093 15.1388 14.9664 15.2006 12C15.1388 9.03363 14.001 6.19068 12 4M12 20C9.99898 17.8093 8.86235 14.9664 8.80055 12C8.86235 9.03363 9.99898 6.19068 12 4M4 12C4 7.58172 7.58172 4 12 4M6 20C6 21.1046 5.10457 22 4 22C2.89543 22 2 21.1046 2 20C2 18.8954 2.89543 18 4 18C5.10457 18 6 18.8954 6 20ZM22 20C22 21.1046 21.1046 22 20 22C18.8954 22 18 21.1046 18 20C18 18.8954 18.8954 18 20 18C21.1046 18 22 18.8954 22 20ZM6 4C6 5.10457 5.10457 6 4 6C2.89543 6 2 5.10457 2 4C2 2.89543 2.89543 2 4 2C5.10457 2 6 2.89543 6 4ZM22 4C22 5.10457 21.1046 6 20 6C18.8954 6 18 5.10457 18 4C18 2.89543 18.8954 2 20 2C21.1046 2 22 2.89543 22 4Z"
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
