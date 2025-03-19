import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconSlantLines = ({
  className,
  label = DEFAULT_LABEL,
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE
}: IconProps) => {
  return (
    <div style={{ height: size, width: size }} className={classNames(className, styles.Container)}>
      <AccessibleIcon.Root label={label}>
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_929_10090)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.3048 2.31465C12.6833 2.48287 12.8538 2.92609 12.6855 3.30461L4.68555 21.3046C4.51732 21.6831 4.0741 21.8536 3.69558 21.6854C3.31707 21.5171 3.1466 21.0739 3.31483 20.6954L11.3148 2.6954C11.4831 2.31689 11.9263 2.14642 12.3048 2.31465ZM20.3048 2.31465C20.6833 2.48287 20.8538 2.92609 20.6855 3.30461L12.6855 21.3046C12.5173 21.6831 12.0741 21.8536 11.6956 21.6854C11.3171 21.5171 11.1466 21.0739 11.3148 20.6954L19.3148 2.6954C19.4831 2.31689 19.9263 2.14642 20.3048 2.31465Z"
              fill={color}
            />
          </g>
          <defs>
            <clipPath id="clip0_929_10090">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </AccessibleIcon.Root>
    </div>
  );
};
