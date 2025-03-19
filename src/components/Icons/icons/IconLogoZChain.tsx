import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconLogoZChain = ({
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.25 3C1.25 2.0335 2.0335 1.25 3 1.25H8C8.41421 1.25 8.75 1.58579 8.75 2C8.75 2.41421 8.41421 2.75 8 2.75H3C2.86193 2.75 2.75 2.86193 2.75 3V8C2.75 8.41421 2.41421 8.75 2 8.75C1.58579 8.75 1.25 8.41421 1.25 8V3Z"
            fill={color}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.25 21C1.25 21.9665 2.0335 22.75 3 22.75H8C8.41421 22.75 8.75 22.4142 8.75 22C8.75 21.5858 8.41421 21.25 8 21.25H3C2.86193 21.25 2.75 21.1381 2.75 21V16C2.75 15.5858 2.41421 15.25 2 15.25C1.58579 15.25 1.25 15.5858 1.25 16V21Z"
            fill={color}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.75 3C22.75 2.0335 21.9665 1.25 21 1.25H16C15.5858 1.25 15.25 1.58579 15.25 2C15.25 2.41421 15.5858 2.75 16 2.75H21C21.1381 2.75 21.25 2.86193 21.25 3V8C21.25 8.41421 21.5858 8.75 22 8.75C22.4142 8.75 22.75 8.41421 22.75 8V3Z"
            fill={color}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.75 21C22.75 21.9665 21.9665 22.75 21 22.75H16C15.5858 22.75 15.25 22.4142 15.25 22C15.25 21.5858 15.5858 21.25 16 21.25H21C21.1381 21.25 21.25 21.1381 21.25 21V16C21.25 15.5858 21.5858 15.25 22 15.25C22.4142 15.25 22.75 15.5858 22.75 16V21Z"
            fill={color}
          />
          <path d="M8.70968 7L6.77419 9.30769H12.5806L6 17H16.0645L18 14.6923H11.3641L18 7H8.70968Z" fill={color} />
        </svg>
      </AccessibleIcon.Root>
    </div>
  );
};
