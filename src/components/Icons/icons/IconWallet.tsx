import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconWallet = ({
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
            d="M14.8682 3.36906C14.6811 3.43553 14.4345 3.54856 14.0437 3.72892L6.41461 7.25003L15.2499 7.25003V4.50069C15.2499 4.07028 15.2491 3.79895 15.2311 3.60122C15.2199 3.47914 15.2048 3.4274 15.2 3.41307C15.1637 3.3647 15.1112 3.33108 15.0521 3.31846C15.0371 3.32005 14.9837 3.32802 14.8682 3.36906ZM16.7499 7.25003L16.7499 4.46785C16.7499 4.08011 16.7499 3.73916 16.7249 3.46484C16.6991 3.18261 16.6399 2.86026 16.4433 2.57343C16.1754 2.18267 15.7605 1.91722 15.2935 1.83774C14.9506 1.7794 14.6331 1.86073 14.3661 1.95561C14.1065 2.04783 13.7969 2.19072 13.4449 2.35322L4.5446 6.46106C4.5102 6.47693 4.47622 6.49258 4.44267 6.50803C3.86925 6.7721 3.41909 6.9794 3.07777 7.31297C2.77796 7.60598 2.5491 7.96367 2.4087 8.35868C2.24886 8.80836 2.24928 9.30396 2.24982 9.93525C2.24985 9.9722 2.24988 10.0096 2.24988 10.0475V11.1092C2.24988 11.1292 2.24988 11.1493 2.24988 11.1696L2.24988 17.8305C2.24987 18.3646 2.24986 18.8105 2.27962 19.1747C2.31066 19.5546 2.37777 19.9112 2.54961 20.2485C2.81326 20.7659 3.23396 21.1866 3.75141 21.4503C4.08867 21.6221 4.44532 21.6893 4.82521 21.7203C5.18944 21.75 5.63528 21.75 6.16943 21.75H17.8303C18.3645 21.75 18.8103 21.75 19.1745 21.7203C19.5544 21.6893 19.9111 21.6221 20.2484 21.4503C20.7658 21.1866 21.1865 20.766 21.4501 20.2485C21.622 19.9112 21.6891 19.5546 21.7201 19.1747C21.7499 18.8105 21.7499 18.3646 21.7499 17.8305V11.1696C21.7499 10.6354 21.7499 10.1896 21.7201 9.82536C21.6891 9.44548 21.622 9.08882 21.4501 8.75156C21.1865 8.23412 20.7658 7.81342 20.2484 7.54977C19.9111 7.37792 19.5544 7.31081 19.1746 7.27977C18.8103 7.25001 18.3645 7.25002 17.8303 7.25003H16.7499ZM6.19988 8.75003C5.62745 8.75003 5.24324 8.75062 4.94736 8.77479C4.66023 8.79825 4.52295 8.84013 4.43239 8.88627C4.19719 9.00612 4.00596 9.19734 3.88612 9.43254C3.83998 9.52311 3.7981 9.66039 3.77464 9.94751C3.7506 10.2417 3.74989 10.6233 3.74988 11.1904C3.74988 11.1936 3.74988 11.1968 3.74988 11.2L3.74988 15C3.74988 14.9999 3.74988 15.0002 3.74988 15L3.74988 17.8C3.74988 18.3725 3.75046 18.7567 3.77464 19.0526C3.7981 19.3397 3.83998 19.477 3.88612 19.5675C4.00596 19.8027 4.19719 19.9939 4.43239 20.1138C4.52295 20.1599 4.66023 20.2018 4.94736 20.2253C5.24324 20.2494 5.62745 20.25 6.19988 20.25H17.7999C18.3723 20.25 18.7565 20.2494 19.0524 20.2253C19.3395 20.2018 19.4768 20.1599 19.5674 20.1138C19.8026 19.9939 19.9938 19.8027 20.1136 19.5675C20.1598 19.477 20.2017 19.3397 20.2251 19.0526C20.2493 18.7567 20.2499 18.3725 20.2499 17.8V11.2C20.2499 10.6276 20.2493 10.2434 20.2251 9.94751C20.2017 9.66039 20.1598 9.52311 20.1136 9.43255C19.9938 9.19734 19.8026 9.00612 19.5674 8.88628C19.4768 8.84013 19.3395 8.79825 19.0524 8.77479C18.7565 8.75062 18.3723 8.75003 17.7999 8.75003L6.19988 8.75003ZM15.2499 14.5C15.2499 13.8097 15.8095 13.25 16.4999 13.25C17.1902 13.25 17.7499 13.8097 17.7499 14.5C17.7499 15.1904 17.1902 15.75 16.4999 15.75C15.8095 15.75 15.2499 15.1904 15.2499 14.5Z"
            fill={color}
          />
        </svg>
      </AccessibleIcon.Root>
    </div>
  );
};
