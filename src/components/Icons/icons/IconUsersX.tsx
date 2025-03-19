import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconUsersX = ({
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
              d="M17.2074 15.2929C16.8168 14.9024 16.1837 14.9024 15.7931 15.2929C15.4026 15.6834 15.4026 16.3166 15.7931 16.7071L17.586 18.5L15.7931 20.2929C15.4026 20.6834 15.4026 21.3166 15.7931 21.7071C16.1837 22.0976 16.8168 22.0976 17.2074 21.7071L19.0002 19.9142L20.7931 21.7071C21.1837 22.0976 21.8168 22.0976 22.2074 21.7071C22.5979 21.3166 22.5979 20.6834 22.2074 20.2929L20.4145 18.5L22.2074 16.7071C22.5979 16.3166 22.5979 15.6834 22.2074 15.2929C21.8168 14.9024 21.1837 14.9024 20.7931 15.2929L19.0002 17.0858L17.2074 15.2929Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.1812 14.1635C12.4635 14.3073 12.693 14.5368 12.8368 14.819C12.9898 15.1194 13.0004 15.4476 13.0003 15.7769C13.0003 15.7847 13.0003 15.7924 13.0003 15.8C13.0003 17.2744 12.9997 18.7488 13.0003 20.2231C13.0003 20.3422 13.0004 20.4845 12.9901 20.6098C12.9783 20.755 12.9478 20.963 12.8368 21.181C12.693 21.4632 12.4635 21.6927 12.1812 21.8365C11.9633 21.9476 11.7553 21.978 11.6101 21.9899C11.4848 22.0001 11.3425 22.0001 11.2234 22C8.40795 21.999 5.5925 21.999 2.77706 22C2.6578 22.0001 2.51523 22.0001 2.3896 21.9898C2.24388 21.9778 2.03547 21.9472 1.81719 21.8356C1.53459 21.6911 1.30452 21.46 1.16133 21.1767C1.05103 20.9585 1.02112 20.7506 1.00975 20.6046C0.999981 20.4791 1.00069 20.3369 1.00127 20.2185C1.00643 19.1792 0.975447 18.0653 1.38085 17.0866C1.88832 15.8614 2.86169 14.8881 4.08683 14.3806C4.59653 14.1695 5.13481 14.0819 5.74356 14.0404C6.33557 14 7.06298 14 7.96474 14C9.05095 14 10.1372 14.0004 11.2234 14C11.5527 13.9999 11.8808 14.0104 12.1812 14.1635Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.5733 2.91554C14.7805 2.40361 15.3635 2.1566 15.8755 2.36382C17.706 3.10481 19.0003 4.90006 19.0003 7C19.0003 9.09994 17.706 10.8952 15.8755 11.6362C15.3635 11.8434 14.7805 11.5964 14.5733 11.0845C14.3661 10.5725 14.6131 9.98953 15.125 9.7823C16.2263 9.33652 17.0003 8.25744 17.0003 7C17.0003 5.74256 16.2263 4.66348 15.125 4.2177C14.6131 4.01047 14.3661 3.42748 14.5733 2.91554Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.50025 7C4.50025 4.23858 6.73883 2 9.50025 2C12.2617 2 14.5003 4.23858 14.5003 7C14.5003 9.76142 12.2617 12 9.50025 12C6.73883 12 4.50025 9.76142 4.50025 7Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.5 16L21.5 21M21.5 16L16.5 21M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7C18 8.67869 16.9659 10.1159 15.5 10.7092M12 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z"
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
