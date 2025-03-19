import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconLink = ({
  className,
  label = DEFAULT_LABEL,
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE
}: IconProps) => {
  return (
    <div style={{ height: size, width: size }} className={classNames(className, styles.Container)}>
      <AccessibleIcon.Root label={label}>
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.33108 1.25C8.34175 1.25 8.35245 1.25 8.36319 1.25L15.6688 1.25C16.0371 1.24998 16.363 1.24996 16.6266 1.27389C16.8998 1.29868 17.2097 1.35568 17.4898 1.54138C17.8742 1.79619 18.1425 2.19243 18.2363 2.64396C18.3047 2.97302 18.2425 3.28192 18.1641 3.54483C18.0884 3.79844 17.9673 4.10098 17.8305 4.44294L16.8107 6.99245C16.7882 7.04886 16.7758 7.0799 16.7669 7.10374C16.7592 7.12429 16.7583 7.12848 16.7588 7.12678C16.7554 7.13903 16.753 7.1515 16.7516 7.16411C16.7518 7.16235 16.7511 7.16659 16.7506 7.18852C16.75 7.21397 16.7499 7.24738 16.7499 7.30813V9.43875C16.7499 9.54839 16.7501 9.60931 16.7519 9.65553C16.7535 9.69572 16.7558 9.70305 16.755 9.69948C16.7596 9.72155 16.7671 9.7429 16.7773 9.76296C16.7757 9.75972 16.7785 9.76686 16.8023 9.79924C16.8298 9.83648 16.8677 9.88413 16.9362 9.96974L18.5282 11.9597C18.8421 12.3521 19.1095 12.6864 19.295 12.9668C19.4771 13.2423 19.6689 13.5909 19.6693 13.9981C19.6699 14.5311 19.4276 15.0352 19.0111 15.3677C18.6928 15.6217 18.3008 15.6897 17.9719 15.7196C17.6371 15.75 17.209 15.75 16.7064 15.75H12.7499V22C12.7499 22.4142 12.4142 22.75 11.9999 22.75C11.5857 22.75 11.2499 22.4142 11.2499 22L11.2499 15.75H7.29346C6.79092 15.75 6.36281 15.75 6.02797 15.7196C5.69911 15.6897 5.30704 15.6217 4.98883 15.3677C4.57231 15.0352 4.32999 14.5311 4.33057 13.9981C4.33101 13.5909 4.5228 13.2423 4.70492 12.9668C4.89034 12.6864 5.15778 12.3521 5.47172 11.9597L7.06368 9.96974C7.13217 9.88413 7.17012 9.83648 7.19756 9.79924C7.22143 9.76687 7.22423 9.75972 7.22257 9.76296C7.23282 9.7429 7.24031 9.72155 7.24484 9.69948C7.24411 9.70305 7.24639 9.69572 7.24798 9.65553C7.24981 9.6093 7.24994 9.54839 7.24994 9.43875V7.30813C7.24994 7.24738 7.2499 7.21397 7.24932 7.18853C7.24882 7.16659 7.24811 7.16235 7.24831 7.16411C7.24687 7.1515 7.24447 7.13902 7.24113 7.12678C7.24159 7.12849 7.24068 7.12429 7.23299 7.10374C7.22408 7.0799 7.21171 7.04886 7.18915 6.99245L6.18127 4.47277C6.17729 4.4628 6.17331 4.45286 6.16935 4.44295C6.03254 4.10098 5.9115 3.79845 5.83582 3.54484C5.75736 3.28192 5.6952 2.97302 5.76358 2.64396C5.8574 2.19243 6.12567 1.79619 6.51006 1.54138C6.79019 1.35568 7.10008 1.29868 7.37333 1.27389C7.63691 1.24996 7.96276 1.24998 8.33108 1.25ZM16.6709 14.25C17.2187 14.25 17.5776 14.2493 17.8362 14.2258C18.0004 14.2109 18.0697 14.19 18.0891 14.1835C18.1357 14.1404 18.1641 14.0812 18.1687 14.0179C18.1616 13.9988 18.1346 13.9316 18.0437 13.7941C17.9005 13.5775 17.6769 13.2968 17.3347 12.869L15.7649 10.9068C15.7565 10.8962 15.748 10.8856 15.7394 10.875C15.6352 10.7451 15.5237 10.6061 15.4415 10.4454C15.3698 10.305 15.3174 10.1555 15.2857 10.001C15.2494 9.82423 15.2497 9.64601 15.2499 9.47953C15.2499 9.46585 15.2499 9.45226 15.2499 9.43875V7.30813C15.2499 7.3007 15.2499 7.29323 15.2499 7.28571C15.2499 7.1932 15.2498 7.0941 15.2613 6.99325C15.2714 6.905 15.2883 6.81765 15.3117 6.73196C15.3384 6.63402 15.3753 6.54205 15.4097 6.45618C15.4125 6.4492 15.4153 6.44226 15.418 6.43537L16.4259 3.91568C16.5782 3.53481 16.6729 3.29626 16.7267 3.11591C16.7598 3.00493 16.7648 2.95433 16.7656 2.94012C16.7514 2.88236 16.717 2.83156 16.6687 2.79688C16.6552 2.79233 16.6063 2.77821 16.491 2.76775C16.3035 2.75073 16.0469 2.75 15.6367 2.75H8.36319C7.95298 2.75 7.69635 2.75073 7.50891 2.76775C7.39357 2.77821 7.34471 2.79233 7.33123 2.79688C7.28289 2.83156 7.2485 2.88236 7.23425 2.94012C7.23503 2.95433 7.24007 3.00493 7.27319 3.11591C7.32701 3.29626 7.42164 3.53481 7.57399 3.91569L8.58186 6.43537C8.58462 6.44226 8.5874 6.4492 8.5902 6.45617C8.62463 6.54204 8.66151 6.63402 8.68823 6.73196C8.71161 6.81765 8.72843 6.905 8.73855 6.99325C8.75012 7.09411 8.75003 7.1932 8.74995 7.28572C8.74995 7.29324 8.74994 7.30071 8.74994 7.30813V9.43875C8.74994 9.45226 8.74996 9.46585 8.74998 9.47952C8.75023 9.64601 8.7505 9.82423 8.71421 10.001C8.68251 10.1555 8.63008 10.305 8.55834 10.4454C8.47622 10.6061 8.36468 10.7451 8.26048 10.875C8.25192 10.8856 8.24342 10.8962 8.23498 10.9068L6.6652 12.869C6.32299 13.2968 6.09937 13.5775 5.95618 13.7941C5.86524 13.9316 5.83827 13.9988 5.83121 14.0179C5.83576 14.0812 5.86422 14.1404 5.91078 14.1835C5.93016 14.19 5.99945 14.2109 6.16366 14.2258C6.42224 14.2493 6.78113 14.25 7.32894 14.25H16.6709Z"
            fill={color}
          />
        </svg>
      </AccessibleIcon.Root>
    </div>
  );
};
