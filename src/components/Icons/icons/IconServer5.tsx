import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconServer5 = ({
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
              d="M20 9C20 13.0796 16.9463 16.446 13 16.9381V17.1707C13.8524 17.472 14.528 18.1476 14.8293 19H21C21.5523 19 22 19.4477 22 20C22 20.5523 21.5523 21 21 21H14.8293C14.4175 22.1652 13.3062 23 12 23C10.6938 23 9.58254 22.1652 9.17071 21H3C2.44772 21 2 20.5523 2 20C2 19.4477 2.44772 19 3 19H9.17071C9.47199 18.1476 10.1476 17.472 11 17.1707V16.9381C7.05369 16.446 4 13.0796 4 9C4 4.58172 7.58172 1 12 1C16.4183 1 20 4.58172 20 9ZM6.08295 9.99996H8.26263C8.43139 11.6072 8.93055 13.1565 9.72196 14.5524C7.83472 13.7773 6.42989 12.068 6.08295 9.99996ZM14.2805 14.5514C15.0715 13.1558 15.5705 11.6069 15.7392 9.99996H17.917C17.5703 12.0671 16.1665 13.7759 14.2805 14.5514ZM17.917 7.99996C17.5702 5.93287 16.1665 4.22417 14.2805 3.44859C15.0716 4.84422 15.5705 6.39309 15.7392 7.99996H17.917ZM9.7219 3.4476C7.83471 4.22271 6.42992 5.93198 6.08297 7.99996H8.26263C8.43139 6.39271 8.93052 4.84349 9.7219 3.4476ZM12.0009 3.58803C12.9308 4.89291 13.5239 6.4089 13.7259 7.99996H10.2759C10.4779 6.4089 11.0711 4.89291 12.0009 3.58803ZM12.0009 14.4119C11.0711 13.107 10.4779 11.591 10.2759 9.99996H13.7259C13.5239 11.591 12.9308 13.107 12.0009 14.4119Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19 9C19 12.866 15.866 16 12 16M19 9C19 5.13401 15.866 2 12 2M19 9H5M12 16C8.13401 16 5 12.866 5 9M12 16C13.7509 14.0832 14.7468 11.5956 14.8009 9C14.7468 6.40442 13.7509 3.91685 12 2M12 16C10.2491 14.0832 9.25498 11.5956 9.20091 9C9.25498 6.40442 10.2491 3.91685 12 2M12 16V18M5 9C5 5.13401 8.13401 2 12 2M14 20C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20M14 20C14 18.8954 13.1046 18 12 18M14 20H21M10 20C10 18.8954 10.8954 18 12 18M10 20H3"
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
