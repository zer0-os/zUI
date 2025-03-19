import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconParagraphWrap = ({
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
              d="M3 5C2.44772 5 2 5.44772 2 6C2 6.55228 2.44772 7 3 7H21C21.5523 7 22 6.55228 22 6C22 5.44772 21.5523 5 21 5H3Z"
              fill={color}
            />
            <path
              d="M3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H18C18.5304 13 19.0391 13.2107 19.4142 13.5858C19.7893 13.9609 20 14.4696 20 15C20 15.5304 19.7893 16.0391 19.4142 16.4142C19.0391 16.7893 18.5304 17 18 17H16.4142L16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929C16.3166 14.9024 15.6834 14.9024 15.2929 15.2929L13.2929 17.2929C12.9024 17.6834 12.9024 18.3166 13.2929 18.7071L15.2929 20.7071C15.6834 21.0976 16.3166 21.0976 16.7071 20.7071C17.0976 20.3166 17.0976 19.6834 16.7071 19.2929L16.4142 19H18C19.0609 19 20.0783 18.5786 20.8284 17.8284C21.5786 17.0783 22 16.0609 22 15C22 13.9391 21.5786 12.9217 20.8284 12.1716C20.0783 11.4214 19.0609 11 18 11H3Z"
              fill={color}
            />
            <path
              d="M3 17C2.44772 17 2 17.4477 2 18C2 18.5523 2.44772 19 3 19H10C10.5523 19 11 18.5523 11 18C11 17.4477 10.5523 17 10 17H3Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 6H21M3 12H18C18.7956 12 19.5587 12.3161 20.1213 12.8787C20.6839 13.4413 21 14.2044 21 15C21 15.7956 20.6839 16.5587 20.1213 17.1213C19.5587 17.6839 18.7956 18 18 18H14M14 18L16 16M14 18L16 20M3 18H10"
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
