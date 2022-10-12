import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconEraser = ({
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
              d="M14.764 1.43845C15.5673 1.17742 16.4327 1.17742 17.2361 1.43845C17.7541 1.60677 18.1892 1.90244 18.6191 2.26743C19.0331 2.61882 19.5028 3.08856 20.0719 3.6577L20.3423 3.92813C20.9115 4.49724 21.3813 4.96702 21.7326 5.38093C22.0976 5.81086 22.3933 6.24592 22.5616 6.76397C22.8227 7.56734 22.8227 8.43273 22.5616 9.2361C22.3933 9.75415 22.0976 10.1892 21.7326 10.6191C21.3812 11.0331 20.9114 11.5029 20.3422 12.072C20.1369 12.2774 20.0342 12.3801 19.9284 12.4435C19.6119 12.6333 19.2166 12.6333 18.9001 12.4435C18.7943 12.3801 18.6916 12.2774 18.4862 12.072L11.928 5.51377C11.7226 5.30843 11.62 5.20577 11.5566 5.10004C11.3668 4.7835 11.3668 4.38815 11.5566 4.0716C11.62 3.96588 11.7226 3.86321 11.928 3.65787C12.4972 3.08865 12.967 2.61885 13.3809 2.26743C13.8109 1.90244 14.2459 1.60677 14.764 1.43845Z"
              fill={color}
            />
            <path
              d="M10.7172 7.1314C10.3212 6.73539 10.1232 6.53738 9.89484 6.46319C9.69399 6.39793 9.47765 6.39793 9.2768 6.46319C9.04848 6.53738 8.85047 6.73539 8.45445 7.13141L3.65784 11.928C3.08863 12.4972 2.61885 12.967 2.26743 13.3809C1.90244 13.8109 1.60677 14.2459 1.43845 14.764C1.17742 15.5673 1.17742 16.4327 1.43845 17.2361C1.60677 17.7541 1.90244 18.1892 2.26743 18.6191C2.61882 19.0331 3.08857 19.5028 3.65773 20.0719L4.41455 20.8288C4.70199 21.1168 4.95543 21.3707 5.26097 21.558C5.52938 21.7224 5.82202 21.8437 6.12813 21.9171C6.47657 22.0008 6.83532 22.0005 7.24222 22.0001H8.75785C8.81608 22.0001 8.87332 22.0002 8.92969 22L21 22C21.5523 22 22 21.5523 22 21C22 20.4477 21.5523 20 21 20L12.4143 20L16.8687 15.5456C17.2647 15.1496 17.4627 14.9516 17.5369 14.7233C17.6021 14.5224 17.6021 14.3061 17.5369 14.1052C17.4627 13.8769 17.2647 13.6789 16.8687 13.2829L10.7172 7.1314Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.9995 13L10.9995 6.00004M20.9995 21H7.99955M10.9368 20.0628L19.6054 11.3941C20.7935 10.2061 21.3875 9.61207 21.6101 8.92709C21.8058 8.32456 21.8058 7.67551 21.6101 7.07298C21.3875 6.388 20.7935 5.79397 19.6054 4.60592L19.3937 4.39415C18.2056 3.2061 17.6116 2.61207 16.9266 2.38951C16.3241 2.19373 15.675 2.19373 15.0725 2.38951C14.3875 2.61207 13.7935 3.2061 12.6054 4.39415L4.39366 12.6059C3.20561 13.794 2.61158 14.388 2.38902 15.073C2.19324 15.6755 2.19324 16.3246 2.38902 16.9271C2.61158 17.6121 3.20561 18.2061 4.39366 19.3941L5.06229 20.0628C5.40819 20.4087 5.58114 20.5816 5.78298 20.7053C5.96192 20.815 6.15701 20.8958 6.36108 20.9448C6.59126 21 6.83585 21 7.32503 21H8.67406C9.16324 21 9.40784 21 9.63801 20.9448C9.84208 20.8958 10.0372 20.815 10.2161 20.7053C10.418 20.5816 10.5909 20.4087 10.9368 20.0628Z"
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
