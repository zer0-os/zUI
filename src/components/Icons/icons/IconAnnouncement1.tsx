import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconAnnouncement1 = ({
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
              d="M22 6.99999C22.5523 6.99999 23 7.44771 23 7.99999V12C23 12.5523 22.5523 13 22 13C21.4477 13 21 12.5523 21 12V7.99999C21 7.44771 21.4477 6.99999 22 6.99999Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.5669 2.14128C16.8593 2.00935 17.2851 1.83943 17.7431 1.89553C18.3164 1.96574 18.7906 2.24734 19.1266 2.71706C19.3906 3.08606 19.4484 3.52389 19.4735 3.83962C19.5 4.17334 19.5 4.59837 19.5 5.08612V14.9138C19.5 15.4016 19.5 15.8266 19.4735 16.1604C19.4484 16.4761 19.3906 16.9139 19.1266 17.2829C18.7906 17.7526 18.3164 18.0342 17.7431 18.1044C17.2851 18.1605 16.8593 17.9906 16.5669 17.8587C16.2493 17.7154 15.8569 17.5015 15.4002 17.2525L15.3657 17.2336C13.797 16.3785 11.9561 15.5913 10.5 15.5074C10.5 16.6022 10.4996 17.6971 10.5 18.7919C10.5001 18.9822 10.5002 19.1458 10.4856 19.294C10.3453 20.7184 9.21839 21.8453 7.79405 21.9855C7.63506 22.0012 7.45837 22 7.25 22C7.04164 22 6.86495 22.0012 6.70595 21.9855C5.28162 21.8453 4.15473 20.7184 4.01445 19.294C3.99985 19.1458 3.99992 18.9822 3.99999 18.7919C4.00043 17.6905 4 16.5891 4 15.4877C3.94407 15.4852 3.88994 15.4822 3.83762 15.4786C3.50779 15.4561 3.17788 15.4066 2.85195 15.2716C2.11687 14.9671 1.53285 14.3831 1.22837 13.648C1.09336 13.3221 1.04386 12.9922 1.02135 12.6624C0.999978 12.3491 0.999989 11.9706 1 11.532L1 10.2587C0.999987 9.45372 0.999976 8.78936 1.04419 8.24816C1.09012 7.68607 1.18868 7.16936 1.43597 6.68403C1.81947 5.93138 2.43139 5.31946 3.18404 4.93596C3.66937 4.68867 4.18608 4.59011 4.74817 4.54418C5.28937 4.49996 5.95373 4.49998 6.7587 4.49999L10.25 4.49999C11.7411 4.49999 13.7058 3.67118 15.3657 2.76633L15.4002 2.74747C15.857 2.49849 16.2493 2.2846 16.5669 2.14128Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22 8.00001V12M10.25 5.5H6.8C5.11984 5.5 4.27976 5.5 3.63803 5.82698C3.07354 6.1146 2.6146 6.57355 2.32698 7.13803C2 7.77977 2 8.61985 2 10.3L2 11.5C2 12.4319 2 12.8978 2.15224 13.2654C2.35523 13.7554 2.74458 14.1448 3.23463 14.3478C3.60218 14.5 4.06812 14.5 5 14.5V18.75C5 18.9822 5 19.0983 5.00963 19.196C5.10316 20.1456 5.85441 20.8968 6.80397 20.9904C6.90175 21 7.01783 21 7.25 21C7.48217 21 7.59826 21 7.69604 20.9904C8.64559 20.8968 9.39685 20.1456 9.49037 19.196C9.5 19.0983 9.5 18.9822 9.5 18.75V14.5H10.25C12.0164 14.5 14.1772 15.4469 15.8443 16.3556C16.8168 16.8858 17.3031 17.1509 17.6216 17.1119C17.9169 17.0757 18.1402 16.9431 18.3133 16.7011C18.5 16.4402 18.5 15.918 18.5 14.8737V5.12629C18.5 4.082 18.5 3.55985 18.3133 3.29889C18.1402 3.0569 17.9169 2.9243 17.6216 2.88813C17.3031 2.84912 16.8168 3.1142 15.8443 3.64436C14.1772 4.55312 12.0164 5.5 10.25 5.5Z"
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