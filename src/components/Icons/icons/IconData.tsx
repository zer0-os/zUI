import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconData = ({
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
              d="M18.7769 9.00001C18.7847 9.00001 18.7924 9.00001 18.8 9.00001L21.2 9.00001C21.2076 9.00001 21.2153 9.00001 21.2232 9.00001C21.3423 8.99996 21.4845 8.99991 21.6098 9.01015C21.7551 9.02201 21.9631 9.05245 22.181 9.1635C22.4632 9.30731 22.6927 9.53679 22.8365 9.81903C22.9476 10.037 22.978 10.245 22.9899 10.3902C23.0001 10.5155 23.0001 10.6578 23 10.7769C23 10.7847 23 10.7924 23 10.8V21.2C23 21.2076 23 21.2153 23 21.2231C23.0001 21.3423 23.0001 21.4845 22.9899 21.6098C22.978 21.7551 22.9476 21.9631 22.8365 22.181C22.6927 22.4632 22.4632 22.6927 22.181 22.8365C21.9631 22.9476 21.7551 22.978 21.6098 22.9899C21.4845 23.0001 21.3423 23.0001 21.2231 23C21.2153 23 21.2076 23 21.2 23L10.8 23C10.7924 23 10.7847 23 10.7769 23C10.6577 23.0001 10.5155 23.0001 10.3902 22.9899C10.245 22.978 10.037 22.9476 9.81903 22.8365C9.53678 22.6927 9.30731 22.4632 9.1635 22.181C9.05245 21.9631 9.02201 21.7551 9.01015 21.6098C8.99991 21.4845 8.99996 21.3423 9.00001 21.2231C9.00001 21.2153 9.00001 21.2076 9.00001 21.2V18.8C9.00001 18.7924 9.00001 18.7847 9.00001 18.7769C8.99996 18.6578 8.99991 18.5155 9.01015 18.3902C9.02201 18.245 9.05245 18.037 9.1635 17.819C9.30731 17.5368 9.53678 17.3073 9.81903 17.1635C10.037 17.0525 10.245 17.022 10.3902 17.0101C10.5155 16.9999 10.6578 17 10.7769 17C10.7847 17 10.7924 17 10.8 17H13V14.8C13 14.7924 13 14.7847 13 14.7769C13 14.6578 12.9999 14.5155 13.0101 14.3902C13.022 14.245 13.0525 14.037 13.1635 13.819C13.3073 13.5368 13.5368 13.3073 13.819 13.1635C14.037 13.0525 14.245 13.022 14.3902 13.0101C14.5155 12.9999 14.6578 13 14.7769 13C14.7847 13 14.7924 13 14.8 13H17V10.8C17 10.7924 17 10.7847 17 10.7769C17 10.6578 16.9999 10.5155 17.0101 10.3902C17.022 10.245 17.0525 10.037 17.1635 9.81903C17.3073 9.53678 17.5368 9.30731 17.819 9.1635C18.037 9.05245 18.245 9.02201 18.3902 9.01015C18.5155 8.99991 18.6578 8.99996 18.7769 9.00001Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.7769 5.00001C10.7847 5.00001 10.7924 5.00001 10.8 5.00001H13.2C13.2076 5.00001 13.2153 5.00001 13.2232 5.00001C13.3423 4.99996 13.4845 4.99991 13.6098 5.01015C13.7551 5.02201 13.9631 5.05245 14.181 5.1635C14.4632 5.30731 14.6927 5.53678 14.8365 5.81903C14.9476 6.03697 14.978 6.24496 14.9899 6.39018C15.0001 6.5155 15.0001 6.65776 15 6.77687C15 6.78469 15 6.79241 15 6.80001V9.20001C15 9.20762 15 9.21533 15 9.22315C15.0001 9.34227 15.0001 9.48452 14.9899 9.60984C14.978 9.75506 14.9476 9.96305 14.8365 10.181C14.6927 10.4632 14.4632 10.6927 14.181 10.8365C13.9631 10.9476 13.7551 10.978 13.6098 10.9899C13.4845 11.0001 13.3423 11.0001 13.2232 11C13.2153 11 13.2076 11 13.2 11H10.8C10.7924 11 10.7847 11 10.7769 11C10.6578 11.0001 10.5155 11.0001 10.3902 10.9899C10.245 10.978 10.037 10.9476 9.81903 10.8365C9.53678 10.6927 9.30731 10.4632 9.1635 10.181C9.05245 9.96305 9.02201 9.75506 9.01015 9.60984C8.99991 9.48452 8.99996 9.34227 9.00001 9.22315C9.00001 9.21533 9.00001 9.20762 9.00001 9.20001V6.80001C9.00001 6.79241 9.00001 6.78469 9.00001 6.77687C8.99996 6.65776 8.99991 6.5155 9.01015 6.39018C9.02201 6.24496 9.05245 6.03697 9.1635 5.81903C9.30731 5.53678 9.53678 5.30731 9.81903 5.1635C10.037 5.05245 10.245 5.02201 10.3902 5.01015C10.5155 4.99991 10.6578 4.99996 10.7769 5.00001Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.77687 11C3.78469 11 3.79241 11 3.80001 11H6.20001C6.20762 11 6.21533 11 6.22315 11C6.34227 11 6.48452 10.9999 6.60984 11.0101C6.75506 11.022 6.96305 11.0525 7.181 11.1635C7.46324 11.3073 7.69271 11.5368 7.83652 11.819C7.94757 12.037 7.97801 12.245 7.98988 12.3902C8.00012 12.5155 8.00006 12.6578 8.00002 12.7769C8.00001 12.7847 8.00001 12.7924 8.00001 12.8V15.2C8.00001 15.2076 8.00001 15.2153 8.00002 15.2232C8.00006 15.3423 8.00012 15.4845 7.98988 15.6098C7.97801 15.7551 7.94757 15.9631 7.83652 16.181C7.69271 16.4632 7.46324 16.6927 7.181 16.8365C6.96305 16.9476 6.75506 16.978 6.60984 16.9899C6.48452 17.0001 6.34227 17.0001 6.22315 17C6.21533 17 6.20762 17 6.20001 17H3.80001C3.79241 17 3.78469 17 3.77687 17C3.65776 17.0001 3.5155 17.0001 3.39018 16.9899C3.24496 16.978 3.03697 16.9476 2.81903 16.8365C2.53678 16.6927 2.30731 16.4632 2.1635 16.181C2.05245 15.9631 2.02201 15.7551 2.01015 15.6098C1.99991 15.4845 1.99996 15.3423 2.00001 15.2232C2.00001 15.2153 2.00001 15.2076 2.00001 15.2V12.8C2.00001 12.7924 2.00001 12.7847 2.00001 12.7769C1.99996 12.6578 1.99991 12.5155 2.01015 12.3902C2.02201 12.245 2.05245 12.037 2.1635 11.819C2.30731 11.5368 2.53678 11.3073 2.81903 11.1635C3.03697 11.0525 3.24496 11.022 3.39018 11.0101C3.5155 10.9999 3.65776 11 3.77687 11Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.77687 1.00001C2.78469 1.00001 2.79241 1.00001 2.80001 1.00001H5.20001C5.20762 1.00001 5.21533 1.00001 5.22315 1.00001C5.34227 0.999961 5.48452 0.999906 5.60984 1.01015C5.75506 1.02201 5.96305 1.05245 6.181 1.1635C6.46324 1.30731 6.69271 1.53678 6.83652 1.81903C6.94757 2.03697 6.97801 2.24496 6.98988 2.39018C7.00012 2.5155 7.00006 2.65776 7.00002 2.77687C7.00001 2.78469 7.00001 2.79241 7.00001 2.80001V5.20001C7.00001 5.20762 7.00001 5.21533 7.00002 5.22315C7.00006 5.34227 7.00012 5.48452 6.98988 5.60984C6.97801 5.75506 6.94757 5.96305 6.83652 6.181C6.69271 6.46324 6.46324 6.69271 6.181 6.83652C5.96305 6.94757 5.75506 6.97801 5.60984 6.98988C5.48452 7.00012 5.34227 7.00006 5.22315 7.00002C5.21533 7.00001 5.20762 7.00001 5.20001 7.00001H2.80001C2.79241 7.00001 2.78469 7.00001 2.77687 7.00002C2.65776 7.00006 2.5155 7.00012 2.39018 6.98988C2.24496 6.97801 2.03697 6.94757 1.81903 6.83652C1.53678 6.69271 1.30731 6.46324 1.1635 6.181C1.05245 5.96305 1.02201 5.75506 1.01015 5.60984C0.999906 5.48452 0.999961 5.34227 1.00001 5.22315C1.00001 5.21533 1.00001 5.20762 1.00001 5.20001V2.80001C1.00001 2.79241 1.00001 2.78469 1.00001 2.77687C0.999961 2.65776 0.999906 2.5155 1.01015 2.39018C1.02201 2.24496 1.05245 2.03697 1.1635 1.81903C1.30731 1.53678 1.53678 1.30731 1.81903 1.1635C2.03697 1.05245 2.24496 1.02201 2.39018 1.01015C2.5155 0.999906 2.65776 0.999961 2.77687 1.00001Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21.2 22C21.48 22 21.62 22 21.727 21.9455C21.8211 21.8976 21.8976 21.8211 21.9455 21.727C22 21.62 22 21.48 22 21.2V10.8C22 10.52 22 10.38 21.9455 10.273C21.8976 10.1789 21.8211 10.1024 21.727 10.0545C21.62 10 21.48 10 21.2 10L18.8 10C18.52 10 18.38 10 18.273 10.0545C18.1789 10.1024 18.1024 10.1789 18.0545 10.273C18 10.38 18 10.52 18 10.8V13.2C18 13.48 18 13.62 17.9455 13.727C17.8976 13.8211 17.8211 13.8976 17.727 13.9455C17.62 14 17.48 14 17.2 14H14.8C14.52 14 14.38 14 14.273 14.0545C14.1789 14.1024 14.1024 14.1789 14.0545 14.273C14 14.38 14 14.52 14 14.8V17.2C14 17.48 14 17.62 13.9455 17.727C13.8976 17.8211 13.8211 17.8976 13.727 17.9455C13.62 18 13.48 18 13.2 18H10.8C10.52 18 10.38 18 10.273 18.0545C10.1789 18.1024 10.1024 18.1789 10.0545 18.273C10 18.38 10 18.52 10 18.8V21.2C10 21.48 10 21.62 10.0545 21.727C10.1024 21.8211 10.1789 21.8976 10.273 21.9455C10.38 22 10.52 22 10.8 22L21.2 22Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 6.8C10 6.51997 10 6.37996 10.0545 6.273C10.1024 6.17892 10.1789 6.10243 10.273 6.0545C10.38 6 10.52 6 10.8 6H13.2C13.48 6 13.62 6 13.727 6.0545C13.8211 6.10243 13.8976 6.17892 13.9455 6.273C14 6.37996 14 6.51997 14 6.8V9.2C14 9.48003 14 9.62004 13.9455 9.727C13.8976 9.82108 13.8211 9.89757 13.727 9.9455C13.62 10 13.48 10 13.2 10H10.8C10.52 10 10.38 10 10.273 9.9455C10.1789 9.89757 10.1024 9.82108 10.0545 9.727C10 9.62004 10 9.48003 10 9.2V6.8Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 12.8C3 12.52 3 12.38 3.0545 12.273C3.10243 12.1789 3.17892 12.1024 3.273 12.0545C3.37996 12 3.51997 12 3.8 12H6.2C6.48003 12 6.62004 12 6.727 12.0545C6.82108 12.1024 6.89757 12.1789 6.9455 12.273C7 12.38 7 12.52 7 12.8V15.2C7 15.48 7 15.62 6.9455 15.727C6.89757 15.8211 6.82108 15.8976 6.727 15.9455C6.62004 16 6.48003 16 6.2 16H3.8C3.51997 16 3.37996 16 3.273 15.9455C3.17892 15.8976 3.10243 15.8211 3.0545 15.727C3 15.62 3 15.48 3 15.2V12.8Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 2.8C2 2.51997 2 2.37996 2.0545 2.273C2.10243 2.17892 2.17892 2.10243 2.273 2.0545C2.37996 2 2.51997 2 2.8 2H5.2C5.48003 2 5.62004 2 5.727 2.0545C5.82108 2.10243 5.89757 2.17892 5.9455 2.273C6 2.37996 6 2.51997 6 2.8V5.2C6 5.48003 6 5.62004 5.9455 5.727C5.89757 5.82108 5.82108 5.89757 5.727 5.9455C5.62004 6 5.48003 6 5.2 6H2.8C2.51997 6 2.37996 6 2.273 5.9455C2.17892 5.89757 2.10243 5.82108 2.0545 5.727C2 5.62004 2 5.48003 2 5.2V2.8Z"
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
