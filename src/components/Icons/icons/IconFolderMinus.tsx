import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconFolderMinus = ({
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
              d="M1 6.16167V16.2413C0.999989 17.0463 0.99998 17.7106 1.0442 18.2518C1.09012 18.8139 1.18869 19.3306 1.43598 19.816C1.81947 20.5686 2.43139 21.1805 3.18404 21.564C3.66938 21.8113 4.18608 21.9099 4.74818 21.9558C5.28937 22 5.95374 22 6.7587 22H17.2413C18.0463 22 18.7106 22 19.2518 21.9558C19.8139 21.9099 20.3306 21.8113 20.816 21.564C21.5686 21.1805 22.1805 20.5686 22.564 19.816C22.8113 19.3306 22.9099 18.8139 22.9558 18.2518C23 17.7106 23 17.0463 23 16.2413V11.7587C23 10.9537 23 10.2894 22.9558 9.74817C22.9099 9.18608 22.8113 8.66937 22.564 8.18404C22.1805 7.43139 21.5686 6.81947 20.816 6.43598C20.3306 6.18868 19.8139 6.09012 19.2518 6.04419C18.7106 5.99998 18.0463 5.99999 17.2413 6H13.6179L12.7234 4.21064C12.4586 3.67939 12.2258 3.21221 11.8631 2.85696C11.5454 2.54581 11.1625 2.30918 10.7421 2.16418C10.2622 1.99863 9.74022 1.99932 9.14666 2.00011L5.16146 2.00021C4.63431 2.0002 4.17955 2.00018 3.80498 2.03078C3.40963 2.06309 3.01641 2.1344 2.63803 2.3272C2.07355 2.61482 1.6146 3.07376 1.32698 3.63824C1.13419 4.01662 1.06287 4.40984 1.03057 4.80519C0.999971 5.17974 0.999985 5.63456 1 6.16167ZM10.09 4.05487C9.96938 4.01326 9.81271 4.00022 9.02229 4.00022H5.2C4.62345 4.00022 4.25118 4.00099 3.96784 4.02414C3.69618 4.04634 3.59546 4.08402 3.54601 4.10921C3.35785 4.20508 3.20487 4.35806 3.109 4.54622C3.0838 4.59567 3.04613 4.69639 3.02393 4.96805C3.00358 5.21716 3.00052 5.53501 3.00008 6L11.3819 6L10.99 5.21635C10.6366 4.50938 10.5548 4.37508 10.4637 4.2858C10.3578 4.18208 10.2301 4.1032 10.09 4.05487ZM9 13C8.44772 13 8 13.4477 8 14C8 14.5523 8.44772 15 9 15H15C15.5523 15 16 14.5523 16 14C16 13.4477 15.5523 13 15 13H9Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13 7L11.8845 4.76892C11.5634 4.1268 11.4029 3.80573 11.1634 3.57116C10.9516 3.36373 10.6963 3.20597 10.4161 3.10931C10.0992 3 9.74021 3 9.02229 3H5.2C4.0799 3 3.51984 3 3.09202 3.21799C2.71569 3.40973 2.40973 3.71569 2.21799 4.09202C2 4.51984 2 5.0799 2 6.2V7M2 7H17.2C18.8802 7 19.7202 7 20.362 7.32698C20.9265 7.6146 21.3854 8.07354 21.673 8.63803C22 9.27976 22 10.1198 22 11.8V16.2C22 17.8802 22 18.7202 21.673 19.362C21.3854 19.9265 20.9265 20.3854 20.362 20.673C19.7202 21 18.8802 21 17.2 21H6.8C5.11984 21 4.27976 21 3.63803 20.673C3.07354 20.3854 2.6146 19.9265 2.32698 19.362C2 18.7202 2 17.8802 2 16.2V7ZM9 14H15"
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
