import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconCryptocurrency2 = ({
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
              d="M8.05467 3.91074C8.55106 3.66863 8.7572 3.06996 8.5151 2.57357C8.27299 2.07718 7.67432 1.87105 7.17793 2.11315C5.09006 3.13147 3.37816 4.78464 2.28759 6.8357C1.19702 8.88676 0.783768 11.2304 1.10706 13.5308C1.18393 14.0777 1.68959 14.4587 2.2365 14.3819C2.78341 14.305 3.16446 13.7994 3.0876 13.2524C2.82309 11.3703 3.1612 9.45278 4.05348 7.77464C4.94577 6.0965 6.34641 4.74391 8.05467 3.91074Z"
              fill={color}
            />
            <path
              d="M15.4848 2.57357C15.7269 2.07718 16.3256 1.87105 16.822 2.11315C18.9099 3.13147 20.6218 4.78464 21.7123 6.8357C22.8029 8.88676 23.2162 11.2304 22.8929 13.5308C22.816 14.0777 22.3103 14.4587 21.7634 14.3819C21.2165 14.305 20.8355 13.7994 20.9123 13.2524C21.1768 11.3703 20.8387 9.45278 19.9464 7.77464C19.0542 6.0965 17.6535 4.74391 15.9452 3.91074C15.4489 3.66863 15.2427 3.06996 15.4848 2.57357Z"
              fill={color}
            />
            <path
              d="M5.31303 19.5026C5.63766 19.0558 6.26303 18.9568 6.70984 19.2814C8.24746 20.3985 10.0993 21.0002 11.9999 21.0002C13.9005 21.0002 15.7523 20.3985 17.29 19.2814C17.7368 18.9568 18.3621 19.0558 18.6868 19.5026C19.0114 19.9494 18.9123 20.5748 18.4655 20.8994C16.5862 22.2648 14.3229 23.0002 11.9999 23.0002C9.67693 23.0002 7.41359 22.2648 5.53426 20.8994C5.08746 20.5748 4.98841 19.9494 5.31303 19.5026Z"
              fill={color}
            />
            <path
              d="M12.9757 5.57587C12.8647 5.48158 12.6961 5.35603 12.4634 5.28045C12.1622 5.18256 11.8376 5.18256 11.5364 5.28045C11.3037 5.35603 11.1351 5.48158 11.0241 5.57587C10.9282 5.65725 10.8277 5.75787 10.7435 5.84213L5.8421 10.7435C5.75784 10.8277 5.65722 10.9282 5.57584 11.0241C5.48155 11.1352 5.356 11.3038 5.28042 11.5364C5.18253 11.8377 5.18253 12.1622 5.28042 12.4634C5.356 12.6961 5.48155 12.8647 5.57584 12.9758C5.65722 13.0716 5.75786 13.1722 5.84212 13.2564L10.7435 18.1577C10.8277 18.242 10.9282 18.3426 11.0241 18.424C11.1351 18.5183 11.3037 18.6438 11.5364 18.7194C11.8376 18.8173 12.1622 18.8173 12.4634 18.7194C12.6961 18.6438 12.8647 18.5183 12.9757 18.424C13.0716 18.3426 13.1721 18.242 13.2563 18.1577L18.1577 13.2564C18.2419 13.1722 18.3426 13.0716 18.4239 12.9758C18.5182 12.8647 18.6438 12.6961 18.7194 12.4634C18.8173 12.1622 18.8173 11.8377 18.7194 11.5364C18.6438 11.3038 18.5182 11.1352 18.4239 11.0241C18.3426 10.9282 18.2419 10.8277 18.1577 10.7435L13.2563 5.84213C13.1721 5.75787 13.0716 5.65725 12.9757 5.57587Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.8778 20.0902C16.1693 21.3315 14.1117 22 11.9999 22C9.88812 22 7.83054 21.3315 6.12206 20.0902M16.3836 3.01206C18.2817 3.93781 19.838 5.44068 20.8294 7.30528C21.8208 9.16989 22.1965 11.3005 21.9026 13.3917M2.09733 13.3916C1.80343 11.3004 2.17911 9.16979 3.17053 7.30519C4.16196 5.44059 5.71823 3.93771 7.6163 3.01196M11.4342 6.56569L6.5656 11.4343C6.36759 11.6323 6.26859 11.7313 6.23149 11.8455C6.19886 11.9459 6.19886 12.0541 6.23149 12.1545C6.26859 12.2687 6.36759 12.3677 6.5656 12.5657L11.4342 17.4343C11.6322 17.6323 11.7312 17.7313 11.8454 17.7684C11.9458 17.8011 12.054 17.8011 12.1544 17.7684C12.2686 17.7313 12.3676 17.6323 12.5656 17.4343L17.4342 12.5657C17.6322 12.3677 17.7312 12.2687 17.7683 12.1545C17.801 12.0541 17.801 11.9459 17.7683 11.8455C17.7312 11.7313 17.6322 11.6323 17.4342 11.4343L12.5656 6.56569C12.3676 6.36768 12.2686 6.26867 12.1544 6.23158C12.054 6.19895 11.9458 6.19895 11.8454 6.23158C11.7312 6.26867 11.6322 6.36768 11.4342 6.56569Z"
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
