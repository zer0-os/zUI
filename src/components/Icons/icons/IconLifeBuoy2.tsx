import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconLifeBuoy2 = ({
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
              d="M12 1C9.95069 1 8.03228 1.5604 6.38963 2.53631C5.94644 2.79961 5.72484 2.93127 5.59339 3.1785C5.48843 3.3759 5.45185 3.66786 5.50485 3.88505C5.57124 4.15707 5.78069 4.36653 6.1996 4.78543L8.31792 6.90376C8.63178 7.21762 8.78871 7.37455 8.93952 7.44796C9.10484 7.52844 9.18346 7.54697 9.36732 7.54879C9.53504 7.55045 9.82817 7.45251 10.4144 7.25663C10.9127 7.09017 11.4458 7 12 7C12.5542 7 13.0874 7.09018 13.5857 7.25666C14.1719 7.45256 14.4651 7.55051 14.6328 7.54886C14.8167 7.54704 14.8953 7.52851 15.0606 7.44803C15.2114 7.37461 15.3684 7.21768 15.6822 6.90381L17.8005 4.78551C18.2194 4.36661 18.4289 4.15716 18.4953 3.88513C18.5483 3.66794 18.5117 3.37599 18.4067 3.17859C18.2753 2.93136 18.0537 2.7997 17.6105 2.53639C15.9678 1.56043 14.0494 1 12 1Z"
              fill={color}
            />
            <path
              d="M17.0962 15.6821C16.7824 15.3682 16.6255 15.2113 16.552 15.0605C16.4716 14.8952 16.453 14.8165 16.4512 14.6327C16.4495 14.465 16.5475 14.1718 16.7434 13.5856C16.9098 13.0873 17 12.5542 17 12C17 11.4459 16.9099 10.9128 16.7434 10.4146C16.5476 9.82834 16.4496 9.53522 16.4513 9.36751C16.4531 9.18365 16.4717 9.10503 16.5521 8.93972C16.6255 8.78892 16.7825 8.63199 17.0963 8.31814L19.2147 6.19979C19.6336 5.78087 19.8431 5.57142 20.1151 5.50503C20.3323 5.45203 20.6242 5.48862 20.8216 5.59358C21.0689 5.72504 21.2005 5.94664 21.4638 6.38984C22.4397 8.03244 23 9.95078 23 12C23 14.0493 22.4396 15.9677 21.4637 17.6104C21.2004 18.0536 21.0687 18.2752 20.8215 18.4066C20.6241 18.5116 20.3321 18.5482 20.115 18.4951C19.8429 18.4288 19.6335 18.2193 19.2146 17.8004L17.0962 15.6821Z"
              fill={color}
            />
            <path
              d="M8.31814 17.0963C8.63199 16.7825 8.78892 16.6255 8.93972 16.5521C9.10503 16.4717 9.18365 16.4531 9.36751 16.4513C9.53522 16.4496 9.82834 16.5476 10.4146 16.7434C10.9128 16.9099 11.4459 17 12 17C12.5542 17 13.0873 16.9098 13.5855 16.7434C14.1718 16.5475 14.4649 16.4496 14.6326 16.4512C14.8165 16.4531 14.8951 16.4716 15.0604 16.5521C15.2112 16.6255 15.3681 16.7824 15.682 17.0963L17.8003 19.2146C18.2192 19.6335 18.4287 19.843 18.4951 20.115C18.5481 20.3322 18.5115 20.6241 18.4065 20.8215C18.2751 21.0688 18.0535 21.2004 17.6103 21.4637C15.9677 22.4396 14.0493 23 12 23C9.95078 23 8.03244 22.4397 6.38984 21.4638C5.94664 21.2005 5.72504 21.0689 5.59358 20.8216C5.48862 20.6242 5.45203 20.3323 5.50503 20.1151C5.57142 19.8431 5.78087 19.6336 6.19979 19.2147L8.31814 17.0963Z"
              fill={color}
            />
            <path
              d="M6.90373 8.31799C7.21759 8.63185 7.37452 8.78878 7.44793 8.93958C7.52841 9.1049 7.54694 9.18352 7.54876 9.36738C7.55042 9.5351 7.45249 9.82823 7.25661 10.4145C7.09016 10.9127 7 11.4458 7 12C7 12.5542 7.09018 13.0874 7.25666 13.5857C7.45256 14.1719 7.55052 14.4651 7.54886 14.6328C7.54704 14.8167 7.52851 14.8953 7.44803 15.0606C7.37461 15.2114 7.21768 15.3684 6.90381 15.6822L4.78551 17.8005C4.36661 18.2194 4.15716 18.4289 3.88513 18.4953C3.66794 18.5483 3.37599 18.5117 3.17859 18.4067C2.93136 18.2753 2.7997 18.0537 2.53639 17.6105C1.56043 15.9678 1 14.0494 1 12C1 9.95072 1.56038 8.03233 2.53627 6.3897C2.79957 5.94651 2.93122 5.72491 3.17846 5.59345C3.37585 5.4885 3.66781 5.45191 3.88501 5.50491C4.15703 5.5713 4.36649 5.78075 4.7854 6.19966L6.90373 8.31799Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.46445 8.46448L4.92893 4.92896M4.92893 19.0711L8.46448 15.5355M15.5355 15.5355L19.0711 19.071M19.0711 4.92891L15.5355 8.46445M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
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
