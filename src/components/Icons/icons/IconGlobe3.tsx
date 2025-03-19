import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

/**
 * @dev for some reason, this icon does not have a filled version in Figma.
 */
export const IconGlobe3 = ({
  className,
  label = DEFAULT_LABEL,
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE
}: IconProps) => {
  return (
    <div style={{ height: size, width: size }} className={classNames(className, styles.Container)}>
      <AccessibleIcon.Root label={label}>
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_928_11852)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.07239 11.6264C5.1352 11.6508 5.20614 11.6778 5.28483 11.7069C5.65152 11.8428 6.18538 12.0251 6.8465 12.2078C7.25481 12.3206 7.71045 12.4332 8.20419 12.535C8.19323 12.3584 8.1875 12.18 8.1875 12C8.1875 9.78702 9.05303 7.80985 9.89237 6.40778C10.1757 5.93442 10.459 5.52178 10.7106 5.18209C7.61412 5.76409 5.24342 8.40346 5.07239 11.6264ZM12 5.35614C11.9776 5.38349 11.9546 5.41196 11.9308 5.44153C11.6387 5.80538 11.2481 6.3334 10.8576 6.98562C10.072 8.29802 9.3125 10.0708 9.3125 12C9.3125 12.2486 9.32511 12.4947 9.34877 12.7374C10.1716 12.8587 11.0659 12.9375 12 12.9375C12.9341 12.9375 13.8284 12.8587 14.6512 12.7374C14.6749 12.4947 14.6875 12.2486 14.6875 12C14.6875 10.0708 13.928 8.29802 13.1424 6.98562C12.7519 6.3334 12.3613 5.80538 12.0692 5.44153C12.0454 5.41196 12.0224 5.38349 12 5.35614ZM14.4532 13.9005C13.6834 14.0001 12.8586 14.0625 12 14.0625C11.1414 14.0625 10.3166 14.0001 9.54681 13.9005C9.83166 15.0808 10.3389 16.1479 10.8576 17.0144C11.2481 17.6666 11.6387 18.1946 11.9308 18.5585C11.9546 18.588 11.9776 18.6165 12 18.6439C12.0224 18.6165 12.0454 18.588 12.0692 18.5585C12.3613 18.1946 12.7519 17.6666 13.1424 17.0144C13.6611 16.1479 14.1683 15.0808 14.4532 13.9005ZM10.7106 18.8179C10.459 18.4782 10.1757 18.0656 9.89237 17.5922C9.27653 16.5635 8.6466 15.2252 8.35478 13.7113C7.68605 13.5856 7.07733 13.4387 6.5469 13.2922C5.97131 13.1332 5.48571 12.9739 5.113 12.8413C5.47665 15.8494 7.7653 18.2643 10.7106 18.8179ZM13.2894 18.8179C13.541 18.4782 13.8243 18.0656 14.1076 17.5922C14.7235 16.5635 15.3534 15.2252 15.6452 13.7113C16.314 13.5856 16.9227 13.4387 17.4531 13.2922C18.0287 13.1332 18.5143 12.9739 18.887 12.8413C18.5234 15.8494 16.2347 18.2643 13.2894 18.8179ZM18.9276 11.6264C18.8648 11.6508 18.7939 11.6778 18.7152 11.7069C18.3485 11.8428 17.8146 12.0251 17.1535 12.2078C16.7452 12.3206 16.2896 12.4332 15.7958 12.535C15.8068 12.3584 15.8125 12.18 15.8125 12C15.8125 9.78702 14.947 7.80985 14.1076 6.40778C13.8243 5.93442 13.541 5.52178 13.2894 5.18209C16.3859 5.76409 18.7566 8.40346 18.9276 11.6264ZM3.9375 12C3.9375 7.5472 7.5472 3.9375 12 3.9375C16.4528 3.9375 20.0625 7.5472 20.0625 12C20.0625 16.4528 16.4528 20.0625 12 20.0625C7.5472 20.0625 3.9375 16.4528 3.9375 12Z"
              fill={color}
            />
          </g>
          <defs>
            <clipPath id="clip0_928_11852">
              <rect width="18" height="18" fill={color} transform="translate(3 3)" />
            </clipPath>
          </defs>
        </svg>
      </AccessibleIcon.Root>
    </div>
  );
};
