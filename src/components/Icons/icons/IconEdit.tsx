import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconEdit = ({
  className,
  label = DEFAULT_LABEL,
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE
}: IconProps) => {
  return (
    <div style={{ height: size, width: size }} className={classNames(className, styles.Container)}>
      <AccessibleIcon.Root label={label}>
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.9697 2.96965C17.0911 1.84833 18.9091 1.84833 20.0304 2.96965C21.1517 4.09097 21.1517 5.90899 20.0304 7.03031L7.46767 19.5931C7.45037 19.6103 7.4333 19.6274 7.41643 19.6443C7.12061 19.9405 6.88773 20.1736 6.60853 20.3447C6.36248 20.4955 6.09423 20.6066 5.81363 20.674C5.49521 20.7504 5.16568 20.7503 4.74707 20.75C4.72321 20.75 4.69905 20.75 4.6746 20.75H3.00005C2.58584 20.75 2.25005 20.4142 2.25005 20V18.3255C2.25005 18.301 2.25004 18.2769 2.25003 18.253C2.24978 17.8344 2.24959 17.5049 2.32604 17.1864C2.3934 16.9058 2.50452 16.6376 2.6553 16.3915C2.82639 16.1123 3.05954 15.8795 3.35571 15.5836C3.3726 15.5668 3.38969 15.5497 3.40699 15.5324L15.9697 2.96965ZM18.9698 4.03031C18.4342 3.49478 17.5659 3.49478 17.0304 4.03031L4.46764 16.5931C4.0965 16.9642 4.00077 17.0667 3.93426 17.1753C3.86572 17.2871 3.81521 17.4091 3.78459 17.5366C3.75487 17.6604 3.75005 17.8006 3.75005 18.3255V19.25H4.6746C5.19948 19.25 5.33968 19.2452 5.46346 19.2154C5.59101 19.1848 5.71294 19.1343 5.82478 19.0658C5.93332 18.9993 6.03586 18.9035 6.40701 18.5324L18.9698 5.96965C19.5053 5.43412 19.5053 4.56585 18.9698 4.03031ZM11.25 20C11.25 19.5858 11.5858 19.25 12 19.25H21C21.4142 19.25 21.75 19.5858 21.75 20C21.75 20.4142 21.4142 20.75 21 20.75H12C11.5858 20.75 11.25 20.4142 11.25 20Z"
            fill={color}
          />
        </svg>
      </AccessibleIcon.Root>
    </div>
  );
};
