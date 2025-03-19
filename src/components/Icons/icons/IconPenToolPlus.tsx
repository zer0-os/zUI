import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconPenToolPlus = ({
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
              d="M17.6181 2.51195C17.2164 2.38143 16.7837 2.38143 16.3821 2.51195C16.0923 2.60608 15.8705 2.76565 15.6956 2.91409C15.5364 3.04925 15.3626 3.22307 15.1842 3.40156L14.4018 4.18392C14.2233 4.36236 14.0495 4.53614 13.9143 4.69536C13.7659 4.87021 13.6063 5.0921 13.5122 5.38181C13.4049 5.71213 13.3858 6.06342 13.455 6.40119L8.55977 7.79983L8.49571 7.81797C8.26013 7.88441 7.96377 7.968 7.7061 8.13553C7.48314 8.28049 7.29134 8.46847 7.1419 8.68845C6.9692 8.94269 6.87964 9.2373 6.80846 9.47148L6.78902 9.53516L3.33615 19.0941C2.98281 20.0723 2.80614 20.5613 2.90222 20.7532C2.98491 20.9184 3.15193 21.0245 3.33658 21.0292C3.55111 21.0347 3.91882 20.667 4.65425 19.9315L10.0677 14.518C10.0236 14.3528 10 14.1792 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14C14 15.1046 13.1046 16 12 16C11.8208 16 11.6472 15.9764 11.482 15.9323L6.06886 21.3454C5.33344 22.0808 4.96572 22.4485 4.97118 22.663C4.97588 22.8477 5.082 23.0147 5.24716 23.0974C5.43905 23.1935 5.92815 23.0168 6.90634 22.6635L16.4646 19.2108L16.5283 19.1913C16.7625 19.1201 17.0571 19.0306 17.3113 18.8579C17.5313 18.7085 17.7193 18.5167 17.8643 18.2937C18.0318 18.036 18.1154 17.7397 18.1818 17.5041L18.2 17.44L19.5986 12.5449C19.9364 12.6142 20.2877 12.5951 20.6181 12.4877C20.9078 12.3936 21.1297 12.234 21.3046 12.0856C21.4638 11.9504 21.6376 11.7766 21.816 11.5981L22.5984 10.8158C22.7769 10.6373 22.9507 10.4636 23.0859 10.3043C23.2343 10.1295 23.3939 9.9076 23.488 9.61788C23.6185 9.2162 23.6185 8.7835 23.488 8.38181C23.3939 8.0921 23.2343 7.87021 23.0859 7.69536C22.9507 7.53615 22.7769 7.36237 22.5984 7.18393L18.816 3.40155C18.6376 3.22307 18.4638 3.04925 18.3046 2.91409C18.1297 2.76565 17.9078 2.60608 17.6181 2.51195Z"
              fill={color}
            />
            <path
              d="M6 2C6 1.44772 5.55228 1 5 1C4.44772 1 4 1.44772 4 2V4H2C1.44772 4 1 4.44772 1 5C1 5.55228 1.44772 6 2 6H4V8C4 8.55228 4.44772 9 5 9C5.55228 9 6 8.55228 6 8V6H8C8.55228 6 9 5.55228 9 5C9 4.44772 8.55228 4 8 4H6V2Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 7L8.83447 8.76158C8.52956 8.8487 8.37711 8.89226 8.25117 8.97414C8.13969 9.04662 8.04379 9.1406 7.96907 9.2506C7.88466 9.37485 7.83803 9.5264 7.74477 9.82948L4 22M4 22L16.1705 18.2552C16.4736 18.162 16.6251 18.1153 16.7494 18.0309C16.8594 17.9562 16.9534 17.8603 17.0259 17.7488C17.1077 17.6229 17.1513 17.4704 17.2384 17.1655L19 11M4 22L10.586 15.4139M5 8V2M2 5H8M21.8686 7.86863L18.1314 4.13137C17.7354 3.73535 17.5373 3.53735 17.309 3.46316C17.1082 3.3979 16.8918 3.3979 16.691 3.46316C16.4627 3.53735 16.2646 3.73535 15.8686 4.13137L15.1314 4.86863C14.7354 5.26465 14.5373 5.46265 14.4632 5.69098C14.3979 5.89183 14.3979 6.10817 14.4632 6.30902C14.5373 6.53735 14.7354 6.73535 15.1314 7.13137L18.8686 10.8686C19.2646 11.2646 19.4627 11.4627 19.691 11.5368C19.8918 11.6021 20.1082 11.6021 20.309 11.5368C20.5373 11.4627 20.7354 11.2646 21.1314 10.8686L21.8686 10.1314C22.2646 9.73535 22.4627 9.53735 22.5368 9.30902C22.6021 9.10817 22.6021 8.89183 22.5368 8.69098C22.4627 8.46265 22.2646 8.26465 21.8686 7.86863ZM12 12C13.1046 12 14 12.8954 14 14C14 15.1046 13.1046 16 12 16C10.8954 16 10 15.1046 10 14C10 12.8954 10.8954 12 12 12Z"
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
