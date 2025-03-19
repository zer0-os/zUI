import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconAtSign = ({
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
              d="M14.4999 1.28845C12.0822 0.724234 9.54474 0.994474 7.30009 2.05523C5.05545 3.11599 3.23565 4.90488 2.13659 7.13102C1.03754 9.35717 0.723873 11.8896 1.24659 14.3167C1.76932 16.7437 3.09768 18.9225 5.0157 20.4988C6.93372 22.0752 9.32859 22.9563 11.8109 22.999C14.2932 23.0417 16.7169 22.2434 18.688 20.7339C19.1265 20.3981 19.2097 19.7705 18.874 19.332C18.5382 18.8935 17.9105 18.8103 17.472 19.1461C15.8593 20.3811 13.8762 21.0342 11.8453 20.9993C9.8143 20.9644 7.85487 20.2434 6.28558 18.9537C4.71629 17.664 3.62944 15.8813 3.20176 13.8956C2.77408 11.9098 3.03072 9.8378 3.92994 8.0164C4.82917 6.19501 6.3181 4.73138 8.15462 3.86348C9.99115 2.99559 12.0673 2.77449 14.0454 3.23612C16.0235 3.69776 17.7873 4.81498 19.05 6.40613C20.3126 7.99727 20.9999 9.9688 21 12.0001V13C21 13.5304 20.7893 14.0391 20.4142 14.4142C20.0392 14.7893 19.5304 15 19 15C18.4696 15 17.9609 14.7893 17.5858 14.4142C17.2107 14.0391 17 13.5304 17 13V7.99999C17 7.44771 16.5523 6.99999 16 6.99999C15.4478 6.99999 15.0002 7.44752 15 7.99964C14.1644 7.37195 13.1256 7 12 7C9.23859 7 7.00002 9.23858 7.00002 12C7.00002 14.7614 9.23859 17 12 17C13.4881 17 14.8244 16.3499 15.7403 15.3183C15.8687 15.4989 16.0128 15.6696 16.1716 15.8284C16.9217 16.5786 17.9391 17 19 17C20.0609 17 21.0783 16.5786 21.8284 15.8284C22.5786 15.0783 23 14.0609 23 13V11.9999C22.9999 9.51726 22.1599 7.10765 20.6166 5.16291C19.0734 3.21817 16.9176 1.85268 14.4999 1.28845ZM15 11.9958V12.0042C14.9978 13.6591 13.6555 15 12 15C10.3432 15 9.00002 13.6569 9.00002 12C9.00002 10.3431 10.3432 9 12 9C13.6555 9 14.9978 10.3409 15 11.9958Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16 7.99999V13C16 13.7956 16.3161 14.5587 16.8787 15.1213C17.4413 15.6839 18.2044 16 19 16C19.7957 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V12C21.9999 9.74302 21.2362 7.55247 19.8333 5.78452C18.4303 4.01658 16.4706 2.77521 14.2726 2.26229C12.0747 1.74936 9.76794 1.99503 7.72736 2.95936C5.68677 3.92368 4.03241 5.54995 3.03327 7.57371C2.03413 9.59748 1.74898 11.8997 2.22418 14.1061C2.69938 16.3125 3.90699 18.2932 5.65064 19.7263C7.39429 21.1593 9.57144 21.9603 11.8281 21.9991C14.0847 22.0379 16.2881 21.3122 18.08 19.94M16 12C16 14.2091 14.2092 16 12 16C9.79087 16 8.00001 14.2091 8.00001 12C8.00001 9.79085 9.79087 7.99999 12 7.99999C14.2092 7.99999 16 9.79085 16 12Z"
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
