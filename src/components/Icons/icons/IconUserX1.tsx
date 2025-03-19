import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconUserX1 = ({
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
              d="M17.207 15.2929C16.8165 14.9024 16.1833 14.9024 15.7928 15.2929C15.4022 15.6834 15.4022 16.3166 15.7928 16.7071L17.5857 18.5L15.7928 20.2929C15.4022 20.6834 15.4022 21.3166 15.7928 21.7071C16.1833 22.0976 16.8165 22.0976 17.207 21.7071L18.9999 19.9142L20.7928 21.7071C21.1833 22.0976 21.8165 22.0976 22.207 21.7071C22.5975 21.3166 22.5975 20.6834 22.207 20.2929L20.4141 18.5L22.207 16.7071C22.5975 16.3166 22.5975 15.6834 22.207 15.2929C21.8165 14.9024 21.1833 14.9024 20.7928 15.2929L18.9999 17.0858L17.207 15.2929Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.78594 14.5C8.26498 14.5003 9.74402 14.5006 11.2231 14.5C11.3422 14.4999 11.4844 14.4999 11.6098 14.5101C11.755 14.522 11.963 14.5524 12.1809 14.6635C12.4632 14.8073 12.6926 15.0368 12.8364 15.319C12.9475 15.537 12.9779 15.745 12.9898 15.8902C13 16.0155 13 16.1578 12.9999 16.2769C12.9995 17.5923 12.9995 18.9077 12.9999 20.2231C13 20.3423 13 20.4845 12.9898 20.6098C12.9779 20.7551 12.9475 20.963 12.8364 21.181C12.6926 21.4632 12.4632 21.6927 12.1809 21.8365C11.963 21.9476 11.755 21.978 11.6098 21.9899C11.4844 22.0001 11.3422 22.0001 11.2231 22C8.34568 21.999 5.46779 21.9847 2.59044 22.0001C2.51908 22.0005 2.37563 22.0012 2.23946 21.9772C1.61844 21.8677 1.13222 21.3815 1.02272 20.7605C0.998707 20.6243 0.999471 20.4809 0.999851 20.4095C1.003 19.8186 0.972816 19.2163 1.07589 18.6318C1.4409 16.5617 3.06163 14.941 5.13168 14.576C5.5641 14.4997 6.05926 14.4998 6.78594 14.5Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.49993 7.5C4.49993 4.46243 6.96236 2 9.99993 2C13.0375 2 15.4999 4.46243 15.4999 7.5C15.4999 10.5376 13.0375 13 9.99993 13C6.96236 13 4.49993 10.5376 4.49993 7.5Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.5 16L21.5 21M21.5 16L16.5 21M12 15.5H7.5C6.10444 15.5 5.40665 15.5 4.83886 15.6722C3.56045 16.06 2.56004 17.0605 2.17224 18.3389C2 18.9067 2 19.6044 2 21M14.5 7.5C14.5 9.98528 12.4853 12 10 12C7.51472 12 5.5 9.98528 5.5 7.5C5.5 5.01472 7.51472 3 10 3C12.4853 3 14.5 5.01472 14.5 7.5Z"
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
