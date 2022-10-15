import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconFolderLock = ({
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
              d="M12 11C11.5858 11 11.25 11.3358 11.25 11.75V12.5H12.75V11.75C12.75 11.3358 12.4142 11 12 11Z"
              fill={color}
            />
            <path
              d="M9.5 15.7C9.5 15.98 9.5 16.12 9.5545 16.227C9.60243 16.3211 9.67892 16.3976 9.773 16.4455C9.87996 16.5 10.02 16.5 10.3 16.5H13.7C13.98 16.5 14.12 16.5 14.227 16.4455C14.3211 16.3976 14.3976 16.3211 14.4455 16.227C14.5 16.12 14.5 15.98 14.5 15.7V15.3C14.5 15.02 14.5 14.88 14.4455 14.773C14.3976 14.6789 14.3211 14.6024 14.227 14.5545C14.12 14.5 13.98 14.5 13.7 14.5H10.3C10.02 14.5 9.87996 14.5 9.773 14.5545C9.67892 14.6024 9.60243 14.6789 9.5545 14.773C9.5 14.88 9.5 15.02 9.5 15.3V15.7Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1 6.16167V16.2413C0.999989 17.0463 0.99998 17.7106 1.0442 18.2518C1.09012 18.8139 1.18869 19.3306 1.43598 19.816C1.81947 20.5686 2.43139 21.1805 3.18404 21.564C3.66938 21.8113 4.18608 21.9099 4.74818 21.9558C5.28937 22 5.95374 22 6.7587 22H17.2413C18.0463 22 18.7106 22 19.2518 21.9558C19.8139 21.9099 20.3306 21.8113 20.816 21.564C21.5686 21.1805 22.1805 20.5686 22.564 19.816C22.8113 19.3306 22.9099 18.8139 22.9558 18.2518C23 17.7106 23 17.0463 23 16.2413V11.7587C23 10.9537 23 10.2894 22.9558 9.74817C22.9099 9.18608 22.8113 8.66937 22.564 8.18404C22.1805 7.43139 21.5686 6.81947 20.816 6.43598C20.3306 6.18868 19.8139 6.09012 19.2518 6.04419C18.7106 5.99998 18.0463 5.99999 17.2413 6H13.6179L12.7234 4.21064C12.4586 3.67939 12.2258 3.21221 11.8631 2.85696C11.5454 2.54581 11.1625 2.30918 10.7421 2.16418C10.2622 1.99863 9.74022 1.99932 9.14666 2.00011L5.16146 2.00021C4.63431 2.0002 4.17955 2.00018 3.80498 2.03078C3.40963 2.06309 3.01641 2.1344 2.63803 2.3272C2.07355 2.61482 1.6146 3.07376 1.32698 3.63824C1.13419 4.01662 1.06287 4.40984 1.03057 4.80519C0.999971 5.17974 0.999985 5.63456 1 6.16167ZM10.09 4.05487C9.96938 4.01326 9.81271 4.00022 9.02229 4.00022H5.2C4.62345 4.00022 4.25118 4.00099 3.96784 4.02414C3.69618 4.04634 3.59546 4.08402 3.54601 4.10921C3.35785 4.20508 3.20487 4.35806 3.109 4.54622C3.0838 4.59567 3.04613 4.69639 3.02393 4.96805C3.00358 5.21716 3.00052 5.53501 3.00008 6L11.3819 6L10.99 5.21635C10.6366 4.50938 10.5548 4.37508 10.4637 4.2858C10.3578 4.18208 10.2301 4.1032 10.09 4.05487ZM9.25 11.75C9.25 10.2312 10.4812 9 12 9C13.5188 9 14.75 10.2312 14.75 11.75V12.528C14.9525 12.552 15.1796 12.6016 15.408 12.718C15.7843 12.9097 16.0903 13.2157 16.282 13.592C16.4203 13.8634 16.4644 14.1332 16.4831 14.3618C16.5001 14.5699 16.5 14.8157 16.5 15.0681V15.9319C16.5 16.1843 16.5001 16.4301 16.4831 16.6382C16.4644 16.8668 16.4203 17.1366 16.282 17.408C16.0903 17.7843 15.7843 18.0903 15.408 18.282C15.1366 18.4203 14.8668 18.4644 14.6382 18.4831C14.4301 18.5001 14.1843 18.5 13.9319 18.5H10.0681C9.81573 18.5 9.56993 18.5001 9.36178 18.4831C9.13318 18.4644 8.86345 18.4203 8.59202 18.282C8.2157 18.0903 7.90974 17.7843 7.71799 17.408C7.5797 17.1366 7.53563 16.8668 7.51695 16.6382C7.49995 16.4301 7.49997 16.1843 7.5 15.9319V15.0681C7.49997 14.8157 7.49995 14.5699 7.51695 14.3618C7.53563 14.1332 7.5797 13.8634 7.71799 13.592C7.90974 13.2157 8.2157 12.9097 8.59202 12.718C8.82038 12.6016 9.04753 12.552 9.25 12.528V11.75Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13 7L11.8845 4.76892C11.5634 4.1268 11.4029 3.80573 11.1634 3.57116C10.9516 3.36373 10.6963 3.20597 10.4161 3.10931C10.0992 3 9.74021 3 9.02229 3H5.2C4.0799 3 3.51984 3 3.09202 3.21799C2.71569 3.40973 2.40973 3.71569 2.21799 4.09202C2 4.51984 2 5.0799 2 6.2V7M2 7H17.2C18.8802 7 19.7202 7 20.362 7.32698C20.9265 7.6146 21.3854 8.07354 21.673 8.63803C22 9.27976 22 10.1198 22 11.8V16.2C22 17.8802 22 18.7202 21.673 19.362C21.3854 19.9265 20.9265 20.3854 20.362 20.673C19.7202 21 18.8802 21 17.2 21H6.8C5.11984 21 4.27976 21 3.63803 20.673C3.07354 20.3854 2.6146 19.9265 2.32698 19.362C2 18.7202 2 17.8802 2 16.2V7ZM10.1 17.5H13.9C14.4601 17.5 14.7401 17.5 14.954 17.391C15.1422 17.2951 15.2951 17.1422 15.391 16.954C15.5 16.7401 15.5 16.4601 15.5 15.9V15.1C15.5 14.5399 15.5 14.2599 15.391 14.046C15.2951 13.8578 15.1422 13.7049 14.954 13.609C14.7401 13.5 14.4601 13.5 13.9 13.5H10.1C9.53995 13.5 9.25992 13.5 9.04601 13.609C8.85785 13.7049 8.70487 13.8578 8.60899 14.046C8.5 14.2599 8.5 14.5399 8.5 15.1V15.9C8.5 16.4601 8.5 16.7401 8.60899 16.954C8.70487 17.1422 8.85785 17.2951 9.04601 17.391C9.25992 17.5 9.53995 17.5 10.1 17.5ZM13.75 13.5V11.75C13.75 10.7835 12.9665 10 12 10C11.0335 10 10.25 10.7835 10.25 11.75V13.5H13.75Z"
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