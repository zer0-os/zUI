import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconMagicWand1 = ({
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
              d="M14.01 2C14.01 1.44772 14.4577 1 15.01 1C15.5623 1 16.01 1.44772 16.01 2V3.5C16.01 4.05228 15.5623 4.5 15.01 4.5C14.4577 4.5 14.01 4.05228 14.01 3.5V2Z"
              fill={color}
            />
            <path
              d="M19.3029 3.29289C19.6934 2.90237 20.3266 2.90237 20.7171 3.29289C21.1076 3.68342 21.1076 4.31658 20.7171 4.70711L19.6565 5.76777C19.2659 6.15829 18.6328 6.15829 18.2422 5.76777C17.8517 5.37724 17.8517 4.74408 18.2422 4.35355L19.3029 3.29289Z"
              fill={color}
            />
            <path
              d="M18.2422 12.2929C17.8517 12.6834 17.8517 13.3166 18.2422 13.7071L19.3029 14.7678C19.6934 15.1583 20.3266 15.1583 20.7171 14.7678C21.1076 14.3772 21.1076 13.7441 20.7171 13.3536L19.6565 12.2929C19.2659 11.9024 18.6328 11.9024 18.2422 12.2929Z"
              fill={color}
            />
            <path
              d="M9.24224 4.70711C8.85172 4.31658 8.85172 3.68342 9.24224 3.29289C9.63277 2.90237 10.2659 2.90237 10.6565 3.29289L11.7171 4.35355C12.1076 4.74408 12.1076 5.37724 11.7171 5.76777C11.3266 6.15829 10.6934 6.15829 10.3029 5.76777L9.24224 4.70711Z"
              fill={color}
            />
            <path
              d="M22.01 8H20.51C19.9577 8 19.51 8.44772 19.51 9C19.51 9.55228 19.9577 10 20.51 10H22.01C22.5623 10 23.01 9.55229 23.01 9C23.01 8.44772 22.5623 8 22.01 8Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.8818 7.01195C13.2835 6.88143 13.7162 6.88143 14.1179 7.01195C14.4076 7.10608 14.6295 7.26565 14.8043 7.41409C14.9636 7.54925 15.1373 7.72308 15.3158 7.90156L16.0981 8.68391C16.2766 8.86236 16.4504 9.03614 16.5856 9.19536C16.734 9.37021 16.8936 9.5921 16.9877 9.88181C17.1183 10.2835 17.1183 10.7162 16.9877 11.1179C16.8936 11.4076 16.734 11.6295 16.5856 11.8043C16.4504 11.9636 16.2766 12.1373 16.0981 12.3158L6.81577 21.5981C6.63734 21.7766 6.46355 21.9505 6.30434 22.0856C6.12949 22.234 5.9076 22.3936 5.61788 22.4877C5.2162 22.6183 4.7835 22.6183 4.38181 22.4877C4.0921 22.3936 3.87021 22.234 3.69536 22.0856C3.53615 21.9505 3.36236 21.7766 3.18393 21.5981L2.40157 20.8158C2.22309 20.6374 2.04925 20.4635 1.91409 20.3043C1.76565 20.1295 1.60608 19.9076 1.51195 19.6179C1.38143 19.2162 1.38143 18.7835 1.51195 18.3818C1.60608 18.0921 1.76565 17.8702 1.91409 17.6954C2.04925 17.5361 2.22307 17.3624 2.40155 17.1839L11.6839 7.90156C11.8624 7.72309 12.0362 7.54924 12.1954 7.41409C12.3702 7.26565 12.5921 7.10608 12.8818 7.01195ZM12.8393 12.3481C12.725 12.3111 12.6259 12.2119 12.4277 12.0137L11.986 11.572C11.7878 11.3738 11.6886 11.2747 11.6516 11.1604C11.6189 11.0599 11.619 10.9516 11.6517 10.8512C11.689 10.737 11.7882 10.638 11.9866 10.44L12.9342 9.49463C13.1322 9.29706 13.2312 9.19827 13.3453 9.1613C13.4457 9.12877 13.5538 9.12884 13.6541 9.16148C13.7682 9.19858 13.8671 9.29748 14.0649 9.49527L14.5044 9.93482C14.7022 10.1326 14.8011 10.2315 14.8382 10.3456C14.8709 10.4459 14.8709 10.554 14.8384 10.6544C14.8014 10.7685 14.7026 10.8675 14.5051 11.0655L13.5597 12.0131C13.3617 12.2115 13.2627 12.3107 13.1485 12.348C13.0481 12.3807 12.9398 12.3808 12.8393 12.3481Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.9998 14L9.99985 11M15.0102 3.5V2M18.9495 5.06066L20.0102 4M18.9495 13L20.0102 14.0607M11.0102 5.06066L9.94954 4M20.5102 9H22.0102M6.13122 20.8686L15.3685 11.6314C15.7645 11.2354 15.9625 11.0373 16.0367 10.809C16.1019 10.6082 16.1019 10.3918 16.0367 10.191C15.9625 9.96265 15.7645 9.76465 15.3685 9.36863L14.6312 8.63137C14.2352 8.23535 14.0372 8.03735 13.8089 7.96316C13.608 7.8979 13.3917 7.8979 13.1908 7.96316C12.9625 8.03735 12.7645 8.23535 12.3685 8.63137L3.13122 17.8686C2.7352 18.2646 2.53719 18.4627 2.46301 18.691C2.39775 18.8918 2.39775 19.1082 2.46301 19.309C2.53719 19.5373 2.7352 19.7354 3.13122 20.1314L3.86848 20.8686C4.2645 21.2646 4.4625 21.4627 4.69083 21.5368C4.89168 21.6021 5.10802 21.6021 5.30887 21.5368C5.53719 21.4627 5.7352 21.2646 6.13122 20.8686Z"
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
