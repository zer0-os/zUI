import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconInbox1 = ({
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
              d="M8.81414 2.99994C7.88644 2.99932 7.18706 2.99884 6.54986 3.21863C5.98936 3.41196 5.47885 3.72747 5.05527 4.14234C4.57372 4.61398 4.26137 5.23973 3.84705 6.06977C3.33863 7.08665 2.5156 8.73582 1.96291 9.84356C1.77196 10.2263 1.67648 10.4176 1.69959 10.5734C1.71976 10.7094 1.79504 10.831 1.90771 10.9098C2.03674 11 2.25083 11 2.67901 11H5.88199C6.94596 11 7.91862 11.6011 8.39445 12.5528C8.53149 12.8269 8.81162 13 9.11805 13H14.882C15.1884 13 15.4686 12.8269 15.6056 12.5528C16.0814 11.6011 17.0541 11 18.1181 11H21.3211C21.7492 11 21.9633 11 22.0924 10.9098C22.205 10.831 22.2803 10.7094 22.3005 10.5734C22.3236 10.4176 22.2281 10.2263 22.0372 9.84356C21.4845 8.73582 20.6615 7.08666 20.153 6.06978C19.7387 5.23974 19.4264 4.61398 18.9448 4.14234C18.5212 3.72747 18.0107 3.41196 17.4502 3.21863C16.813 2.99884 16.1136 2.99932 15.1859 2.99994H8.81414Z"
              fill={color}
            />
            <path
              d="M23.0001 14.5996C23.0001 14.0399 23.0001 13.76 22.8912 13.5461C22.7953 13.3579 22.6423 13.2049 22.4541 13.109C22.2402 13 21.9603 13 21.4004 13H18.1181C17.8116 13 17.5315 13.1731 17.3944 13.4472C16.9186 14.3989 15.946 15 14.882 15H9.11805C8.05408 15 7.08142 14.3989 6.60559 13.4472C6.46855 13.1731 6.18842 13 5.88199 13H2.59962C2.03978 13 1.75985 13 1.54593 13.109C1.3578 13.2049 1.20476 13.3579 1.10891 13.5461C0.999925 13.76 0.999951 14.0399 1 14.5996C1.00002 14.8135 1.00004 15.0274 1.00004 15.2413C1.00003 16.0463 1.00002 16.7106 1.04423 17.2518C1.09016 17.8139 1.18872 18.3306 1.43601 18.816C1.81951 19.5686 2.43143 20.1805 3.18408 20.564C3.66941 20.8113 4.18612 20.9099 4.74821 20.9558C5.2894 21 5.95376 21 6.75872 21H17.2414C18.0463 21 18.7107 21 19.2519 20.9558C19.814 20.9099 20.3307 20.8113 20.816 20.564C21.5687 20.1805 22.1806 19.5686 22.5641 18.816C22.8114 18.3306 22.9099 17.8139 22.9558 17.2518C23.0001 16.7106 23.0001 16.0463 23 15.2413C23 15.0274 23.0001 14.8135 23.0001 14.5996Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.5 12H5.88197C6.56717 12 7.19357 12.3871 7.5 13C7.80643 13.6129 8.43283 14 9.11803 14H14.882C15.5672 14 16.1936 13.6129 16.5 13C16.8064 12.3871 17.4328 12 18.118 12H21.5M8.96656 4H15.0334C16.1103 4 16.6487 4 17.1241 4.16396C17.5445 4.30896 17.9274 4.5456 18.2451 4.85675C18.6043 5.2086 18.8451 5.6902 19.3267 6.65337L21.4932 10.9865C21.6822 11.3645 21.7767 11.5535 21.8434 11.7515C21.9026 11.9275 21.9453 12.1085 21.971 12.2923C22 12.4992 22 12.7105 22 13.1331V15.2C22 16.8802 22 17.7202 21.673 18.362C21.3854 18.9265 20.9265 19.3854 20.362 19.673C19.7202 20 18.8802 20 17.2 20H6.8C5.11984 20 4.27976 20 3.63803 19.673C3.07354 19.3854 2.6146 18.9265 2.32698 18.362C2 17.7202 2 16.8802 2 15.2V13.1331C2 12.7105 2 12.4992 2.02897 12.2923C2.05471 12.1085 2.09744 11.9275 2.15662 11.7515C2.22326 11.5535 2.31776 11.3645 2.50675 10.9865L4.67331 6.65337C5.1549 5.69019 5.3957 5.2086 5.75495 4.85675C6.07263 4.5456 6.45551 4.30896 6.87589 4.16396C7.35125 4 7.88969 4 8.96656 4Z"
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
