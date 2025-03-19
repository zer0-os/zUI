import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconZapOff = ({
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
              d="M3.70711 2.29289C3.31658 1.90237 2.68342 1.90237 2.29289 2.29289C1.90237 2.68342 1.90237 3.31658 2.29289 3.70711L6.64716 8.06137L3.30231 12.0752C3.14799 12.2603 2.99168 12.4478 2.87788 12.6126C2.77026 12.7684 2.57375 13.0748 2.56768 13.4774C2.56072 13.9384 2.76614 14.3769 3.12471 14.6667C3.43793 14.9198 3.79909 14.965 3.9877 14.9821C4.18713 15.0001 4.43123 15.0001 4.67223 15L10.8672 15L10.0077 21.876C9.95264 22.3165 10.1946 22.7406 10.6018 22.9173C11.009 23.0941 11.484 22.9812 11.7682 22.6402L16.0672 17.4814L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929C15.7071 14.2929 9.70713 8.29292 3.70711 2.29289Z"
              fill={color}
            />
            <path
              d="M18.6385 14.3959L20.6977 11.9249C20.852 11.7398 21.0083 11.5523 21.1221 11.3875C21.2297 11.2317 21.4262 10.9253 21.4323 10.5227C21.4392 10.0617 21.2338 9.62314 20.8753 9.33338C20.562 9.08027 20.2009 9.03509 20.0123 9.01802C19.8128 8.99996 19.5687 9.00001 19.3277 9.00005L13.2427 9.00006L18.6385 14.3959Z"
              fill={color}
            />
            <path
              d="M13.145 8.90234L13.9923 2.12409C14.0473 1.68359 13.8054 1.25952 13.3982 1.08275C12.991 0.905986 12.516 1.01884 12.2318 1.35987L9.21847 4.97583L13.145 8.90234Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 8L4.09346 12.6879C3.74465 13.1064 3.57024 13.3157 3.56758 13.4925C3.56526 13.6461 3.63373 13.7923 3.75326 13.8889C3.89075 14 4.16318 14 4.70803 14H12L11 22L16 16M15.65 10H19.292C19.8368 10 20.1093 10 20.2467 10.1111C20.3663 10.2077 20.4347 10.3539 20.4324 10.5075C20.4298 10.6843 20.2554 10.8936 19.9065 11.3121L18.5502 12.9397M10.5728 4.91265L13 2L12.4002 6.79771M21 21L3 3"
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
