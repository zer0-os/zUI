import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconFlash = ({
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
              d="M13.9921 2.12409C14.0472 1.68359 13.8053 1.25952 13.3981 1.08275C12.9908 0.905986 12.5158 1.01884 12.2316 1.35987L3.30218 12.0752C3.14786 12.2603 2.99156 12.4478 2.87776 12.6126C2.77013 12.7684 2.57363 13.0748 2.56755 13.4774C2.5606 13.9384 2.76601 14.377 3.12459 14.6667C3.4378 14.9198 3.79897 14.965 3.98758 14.9821C4.187 15.0002 4.43109 15.0001 4.67208 15.0001L10.8671 15.0001L10.0076 21.876C9.95252 22.3165 10.1945 22.7406 10.6017 22.9174C11.0089 23.0941 11.4839 22.9813 11.7681 22.6402L20.6975 11.9249C20.8519 11.7398 21.0082 11.5523 21.122 11.3875C21.2296 11.2317 21.4261 10.9253 21.4322 10.5227C21.4391 10.0617 21.2337 9.62314 20.8751 9.33338C20.5619 9.08027 20.2008 9.03509 20.0121 9.01802C19.8127 8.99996 19.5686 9.00001 19.3276 9.00005L13.1326 9.00006L13.9921 2.12409Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.9999 2L4.09332 12.6879C3.74451 13.1064 3.57011 13.3157 3.56744 13.4925C3.56512 13.6461 3.63359 13.7923 3.75312 13.8889C3.89061 14 4.16304 14 4.7079 14H11.9999L10.9999 22L19.9064 11.3121C20.2552 10.8936 20.4296 10.6843 20.4323 10.5075C20.4346 10.3539 20.3661 10.2077 20.2466 10.1111C20.1091 10 19.8367 10 19.2918 10H11.9999L12.9999 2Z"
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
