import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconCursor2 = ({
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
              d="M4.90019 2.61991C4.67488 2.53898 4.44626 2.45686 4.25324 2.4067C4.07011 2.3591 3.71659 2.28021 3.33754 2.41147C2.90298 2.56196 2.56147 2.90347 2.41098 3.33802C2.27972 3.71707 2.35861 4.0706 2.40621 4.25372C2.45637 4.44675 2.53849 4.67536 2.61942 4.90068L8.34833 20.8599C8.44889 21.1402 8.54534 21.4089 8.64052 21.616C8.72093 21.791 8.9038 22.1737 9.3014 22.39C9.73617 22.6266 10.2596 22.6335 10.7005 22.4084C11.1036 22.2025 11.2965 21.8248 11.3814 21.652C11.482 21.4475 11.5855 21.1813 11.6934 20.9038L14.2721 14.2727L20.9034 11.6939C21.1808 11.586 21.447 11.4825 21.6515 11.382C21.8242 11.297 22.202 11.1041 22.4079 10.701C22.6329 10.2602 22.6261 9.73671 22.3895 9.30194C22.1731 8.90434 21.7904 8.72147 21.6155 8.64106C21.4084 8.54588 21.1397 8.44944 20.8594 8.34887L4.90019 2.61991Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.5054 10.7756C21.1223 10.5357 21.4308 10.4157 21.5174 10.2461C21.5924 10.0992 21.5901 9.9247 21.5112 9.77978C21.4202 9.61251 21.1087 9.50069 20.4857 9.27705L4.59605 3.57305C4.08635 3.39008 3.8315 3.29859 3.6649 3.35629C3.52005 3.40645 3.40621 3.52029 3.35605 3.66514C3.29835 3.83175 3.38983 4.08659 3.5728 4.59629L9.27675 20.486C9.50039 21.109 9.61221 21.4205 9.77949 21.5115C9.92441 21.5904 10.0989 21.5927 10.2458 21.5176C10.4154 21.431 10.5354 21.1226 10.7753 20.5057L13.3722 13.8281C13.4191 13.7072 13.4426 13.6468 13.4789 13.5959C13.5111 13.5508 13.5505 13.5114 13.5956 13.4792C13.6465 13.4429 13.7069 13.4194 13.8278 13.3724L20.5054 10.7756Z"
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
