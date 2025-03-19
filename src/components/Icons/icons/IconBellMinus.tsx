import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconBellMinus = ({
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
              d="M13.9998 5C13.9998 4.44772 14.4475 4 14.9998 4H20.9998C21.552 4 21.9998 4.44772 21.9998 5C21.9998 5.55228 21.552 6 20.9998 6H14.9998C14.4475 6 13.9998 5.55228 13.9998 5Z"
              fill={color}
            />
            <path
              d="M11.9997 1C10.1432 1 8.36275 1.7375 7.04999 3.05025C5.73724 4.36301 4.99974 6.14348 4.99974 8C4.99974 10.9127 4.26773 12.8439 3.50035 14.0771L3.48856 14.0961C3.13124 14.6703 2.84876 15.1243 2.65833 15.4547C2.56291 15.6202 2.47598 15.7797 2.41161 15.9215C2.37948 15.9922 2.34354 16.079 2.31545 16.1733C2.29214 16.2515 2.24774 16.4187 2.26439 16.6223C2.27558 16.7591 2.30347 16.9928 2.43762 17.2343C2.57178 17.4758 2.7555 17.623 2.86574 17.7047C3.11604 17.8904 3.40347 17.9329 3.49939 17.947L3.50382 17.9477C3.65123 17.9695 3.81851 17.9804 3.98726 17.9869C4.32244 18 4.78645 18 5.36348 18H18.6356C19.2126 18 19.677 18 20.0122 17.9869C20.181 17.9804 20.3482 17.9695 20.4957 17.9477L20.5001 17.947C20.596 17.9329 20.8834 17.8904 21.1337 17.7047C21.244 17.623 21.4277 17.4758 21.5618 17.2343C21.696 16.9928 21.7239 16.7591 21.7351 16.6223C21.7517 16.4187 21.7073 16.2515 21.684 16.1733C21.6559 16.079 21.62 15.9922 21.5879 15.9215C21.5235 15.7797 21.4366 15.6202 21.3411 15.4547C21.1508 15.1243 20.8684 14.6705 20.5112 14.0965L20.4991 14.0771C19.7317 12.8439 18.9997 10.9127 18.9997 8H14.9998C13.3429 8 11.9998 6.65685 11.9998 5C11.9998 3.34315 13.3429 2 14.9998 2C15.17 2 15.2264 1.78568 15.0734 1.71092C14.1251 1.24748 13.0752 1 11.9997 1Z"
              fill={color}
            />
            <path
              d="M10.0156 20.2503C9.60158 19.8848 8.96964 19.9242 8.60417 20.3383C8.23871 20.7523 8.27811 21.3843 8.69218 21.7497C9.57299 22.5272 10.7324 23 11.9997 23C13.2671 23 14.4265 22.5272 15.3073 21.7497C15.7214 21.3843 15.7608 20.7523 15.3953 20.3383C15.0298 19.9242 14.3979 19.8848 13.9838 20.2503C13.4544 20.7176 12.7613 21 11.9997 21C11.2382 21 10.5451 20.7176 10.0156 20.2503Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.35395 21C10.0591 21.6224 10.9853 22 11.9998 22C13.0142 22 13.9405 21.6224 14.6456 21M14.9998 5H20.9998M12.9998 2.08389C12.6715 2.02841 12.3371 2 11.9998 2C10.4085 2 8.88235 2.63214 7.75713 3.75736C6.63192 4.88258 5.99977 6.4087 5.99977 8C5.99977 11.0902 5.22024 13.206 4.34944 14.6054C3.61491 15.7859 3.24763 16.3761 3.2611 16.5408C3.27601 16.7231 3.31463 16.7926 3.46155 16.9016C3.59423 17 4.19237 17 5.38863 17H18.6109C19.8072 17 20.4054 17 20.5381 16.9016C20.685 16.7926 20.7236 16.7231 20.7385 16.5407C20.752 16.3761 20.3848 15.786 19.6503 14.6057C18.8767 13.3626 18.1752 11.5544 18.028 9"
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
