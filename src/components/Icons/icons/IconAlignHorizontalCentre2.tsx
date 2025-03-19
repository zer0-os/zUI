import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconAlignHorizontalCentre2 = ({
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
              d="M7.96802 3L16.032 3C16.4706 2.99999 16.8491 2.99998 17.1624 3.02135C17.4922 3.04386 17.8221 3.09336 18.1481 3.22836C18.8831 3.53285 19.4672 4.11687 19.7716 4.85195C19.9066 5.17788 19.9561 5.50779 19.9787 5.83762C20 6.15088 20 6.52936 20 6.96801V7.03199C20 7.47064 20 7.84913 19.9787 8.16238C19.9561 8.49221 19.9066 8.82212 19.7716 9.14805C19.4672 9.88314 18.8831 10.4672 18.1481 10.7716C17.8221 10.9066 17.4922 10.9561 17.1624 10.9787C16.8491 11 16.4706 11 16.032 11H7.96804C7.52938 11 7.15088 11 6.83762 10.9787C6.50779 10.9561 6.17788 10.9066 5.85195 10.7716C5.11687 10.4672 4.53284 9.88313 4.22836 9.14805C4.09336 8.82212 4.04386 8.49221 4.02135 8.16238C3.99998 7.84912 3.99999 7.47063 4 7.03198V6.96802C3.99999 6.52937 3.99998 6.15088 4.02135 5.83762C4.04386 5.50779 4.09336 5.17788 4.22836 4.85195C4.53284 4.11687 5.11687 3.53284 5.85195 3.22836C6.17788 3.09336 6.50779 3.04385 6.83762 3.02135C7.15088 2.99998 7.52937 2.99999 7.96802 3Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.96802 13H18.032C18.4706 13 18.8491 13 19.1624 13.0214C19.4922 13.0439 19.8221 13.0934 20.1481 13.2284C20.8831 13.5328 21.4672 14.1169 21.7716 14.852C21.9066 15.1779 21.9561 15.5078 21.9787 15.8376C22 16.1509 22 16.5294 22 16.968V17.032C22 17.4706 22 17.8491 21.9787 18.1624C21.9561 18.4922 21.9066 18.8221 21.7716 19.1481C21.4672 19.8831 20.8831 20.4672 20.1481 20.7716C19.8221 20.9066 19.4922 20.9561 19.1624 20.9787C18.8491 21 18.4706 21 18.032 21H5.96804C5.52938 21 5.15088 21 4.83762 20.9786C4.50779 20.9561 4.17788 20.9066 3.85195 20.7716C3.11687 20.4672 2.53284 19.8831 2.22836 19.1481C2.09336 18.8221 2.04385 18.4922 2.02135 18.1624C1.99998 17.8491 1.99999 17.4706 2 17.032V16.968C1.99999 16.5294 1.99998 16.1509 2.02135 15.8376C2.04386 15.5078 2.09336 15.1779 2.22836 14.852C2.53284 14.1169 3.11687 13.5328 3.85195 13.2284C4.17788 13.0934 4.50779 13.0439 4.83762 13.0213C5.15088 13 5.52937 13 5.96802 13Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16 10C16.9319 10 17.3978 10 17.7654 9.84776C18.2554 9.64477 18.6448 9.25542 18.8478 8.76537C19 8.39782 19 7.93188 19 7C19 6.06812 19 5.60218 18.8478 5.23463C18.6448 4.74458 18.2554 4.35523 17.7654 4.15224C17.3978 4 16.9319 4 16 4L8 4C7.06812 4 6.60218 4 6.23463 4.15224C5.74458 4.35523 5.35523 4.74458 5.15224 5.23463C5 5.60218 5 6.06812 5 7C5 7.93188 5 8.39782 5.15224 8.76537C5.35523 9.25542 5.74458 9.64477 6.23463 9.84776C6.60218 10 7.06812 10 8 10L16 10Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 20C18.9319 20 19.3978 20 19.7654 19.8478C20.2554 19.6448 20.6448 19.2554 20.8478 18.7654C21 18.3978 21 17.9319 21 17C21 16.0681 21 15.6022 20.8478 15.2346C20.6448 14.7446 20.2554 14.3552 19.7654 14.1522C19.3978 14 18.9319 14 18 14H6C5.06812 14 4.60218 14 4.23463 14.1522C3.74458 14.3552 3.35523 14.7446 3.15224 15.2346C3 15.6022 3 16.0681 3 17C3 17.9319 3 18.3978 3.15224 18.7654C3.35523 19.2554 3.74458 19.6448 4.23463 19.8478C4.60218 20 5.06812 20 6 20L18 20Z"
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
