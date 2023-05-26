import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconMail4 = ({
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
              d="M12.6855 0.964631C12.2346 0.858795 11.7654 0.858795 11.3145 0.964631C10.7994 1.08553 10.3416 1.38401 9.82066 1.72362C7.56542 3.18957 5.30411 4.64668 3.05228 6.11797C2.71184 6.34041 2.54162 6.45163 2.48234 6.59304C2.43059 6.7165 2.43057 6.856 2.48228 6.97947C2.54151 7.1209 2.71193 7.23233 3.05276 7.45518L10.7961 12.5181C11.4941 12.9745 11.6407 13.0532 11.7705 13.0838C11.9214 13.1194 12.0786 13.1194 12.2296 13.0838C12.3594 13.0532 12.5059 12.9745 13.204 12.5181L20.9473 7.45521C21.2881 7.23236 21.4585 7.12093 21.5178 6.9795C21.5695 6.85602 21.5694 6.71653 21.5177 6.59307C21.4584 6.45166 21.2882 6.34044 20.9477 6.118C18.6959 4.64671 16.4346 3.18958 14.1793 1.72363C13.6584 1.38402 13.2006 1.08553 12.6855 0.964631Z"
              fill={color}
            />
            <path
              d="M22.9974 9.98165C22.9971 9.50159 22.9969 9.26156 22.8965 9.12814C22.8089 9.01188 22.6751 8.93952 22.5299 8.92997C22.3632 8.91901 22.162 9.05056 21.7596 9.31365L14.1884 14.2642C13.6656 14.6071 13.2061 14.9084 12.6887 15.0304C12.2358 15.1372 11.7643 15.1372 11.3113 15.0304C10.7939 14.9084 10.3345 14.6071 9.81166 14.2642L2.24037 9.3136C1.838 9.0505 1.63682 8.91896 1.47015 8.92992C1.32494 8.93947 1.19108 9.01183 1.10355 9.12808C1.00308 9.26151 1.00293 9.50154 1.00264 9.9816C1.00157 11.7067 1 14.5406 1 16.2412C0.999988 17.0462 0.999977 17.7105 1.04419 18.2517C1.09012 18.8138 1.18868 19.3305 1.43597 19.8158C1.81947 20.5685 2.43139 21.1804 3.18404 21.5639C3.66937 21.8112 4.18608 21.9098 4.74817 21.9557C5.28936 21.9999 5.95372 21.9999 6.75868 21.9999H17.2413C18.0463 21.9999 18.7106 21.9999 19.2518 21.9557C19.8139 21.9098 20.3306 21.8112 20.816 21.5639C21.5686 21.1804 22.1805 20.5685 22.564 19.8158C22.8113 19.3305 22.9099 18.8138 22.9558 18.2517C23 17.7105 23 17.0462 23 16.2412C23 14.5406 22.9984 11.7067 22.9974 9.98165Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.744 2.63358L21.272 7.52679C21.538 7.69969 21.671 7.78615 21.7674 7.90146C21.8527 8.00354 21.9167 8.12162 21.9558 8.24877C22 8.39241 22 8.55104 22 8.8683V16.2C22 17.8802 22 18.7202 21.673 19.362C21.3854 19.9265 20.9265 20.3854 20.362 20.673C19.7202 21 18.8802 21 17.2 21H6.8C5.11984 21 4.27976 21 3.63803 20.673C3.07354 20.3854 2.6146 19.9265 2.32698 19.362C2 18.7202 2 17.8802 2 16.2V8.8683C2 8.55104 2 8.39241 2.04417 8.24877C2.08327 8.12162 2.14735 8.00354 2.23265 7.90146C2.32901 7.78615 2.46201 7.69969 2.72802 7.52679L10.256 2.63358M13.744 2.63358C13.1127 2.22327 12.7971 2.01812 12.457 1.93829C12.1564 1.86774 11.8436 1.86774 11.543 1.93829C11.2029 2.01812 10.8873 2.22327 10.256 2.63358M13.744 2.63358L20.9681 7.32925C21.312 7.5528 21.484 7.66458 21.5435 7.80632C21.5956 7.9302 21.5956 8.06981 21.5435 8.19368C21.484 8.33543 21.312 8.44721 20.9681 8.67076L13.744 13.3664C13.1127 13.7767 12.7971 13.9819 12.457 14.0617C12.1564 14.1323 11.8436 14.1323 11.543 14.0617C11.2029 13.9819 10.8873 13.7767 10.256 13.3664L3.03193 8.67076C2.68801 8.44721 2.51604 8.33543 2.45649 8.19368C2.40444 8.06981 2.40444 7.9302 2.45649 7.80632C2.51604 7.66458 2.68801 7.5528 3.03193 7.32925L10.256 2.63358"
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
