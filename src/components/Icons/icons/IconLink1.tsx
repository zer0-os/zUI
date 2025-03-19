import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconLink1 = ({
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
              d="M16.2076 7.79287C16.5981 8.18339 16.5981 8.81656 16.2076 9.20708L9.20756 16.2071C8.81704 16.5976 8.18387 16.5976 7.79335 16.2071C7.40282 15.8166 7.40282 15.1834 7.79335 14.7929L14.7933 7.79287C15.1839 7.40234 15.817 7.40234 16.2076 7.79287Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.3436 10.5858C6.73412 10.9763 6.73412 11.6095 6.3436 12L4.92939 13.4142C3.36729 14.9763 3.36729 17.509 4.92939 19.0711C6.49148 20.6332 9.02414 20.6332 10.5862 19.0711L12.0005 17.6569C12.391 17.2663 13.0241 17.2663 13.4147 17.6569C13.8052 18.0474 13.8052 18.6805 13.4147 19.0711L12.0005 20.4853C9.65731 22.8284 5.85832 22.8284 3.51517 20.4853C1.17203 18.1421 1.17203 14.3431 3.51517 12L4.92939 10.5858C5.31991 10.1953 5.95307 10.1953 6.3436 10.5858Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.0005 3.51471C14.3436 1.17157 18.1426 1.17157 20.4857 3.51471C22.8289 5.85786 22.8289 9.65685 20.4857 12L19.0715 13.4142C18.681 13.8047 18.0478 13.8047 17.6573 13.4142C17.2668 13.0237 17.2668 12.3905 17.6573 12L19.0715 10.5858C20.6336 9.02368 20.6336 6.49102 19.0715 4.92893C17.5094 3.36683 14.9768 3.36683 13.4147 4.92893L12.0005 6.34314C11.6099 6.73367 10.9768 6.73367 10.5862 6.34314C10.1957 5.95262 10.1957 5.31945 10.5862 4.92893L12.0005 3.51471Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.7076 18.3639L11.2933 19.7781C9.34072 21.7308 6.1749 21.7308 4.22228 19.7781C2.26966 17.8255 2.26966 14.6597 4.22228 12.7071L5.63649 11.2929M18.3644 12.7071L19.7786 11.2929C21.7312 9.34024 21.7312 6.17441 19.7786 4.22179C17.826 2.26917 14.6602 2.26917 12.7076 4.22179L11.2933 5.636M8.50045 15.4999L15.5005 8.49994"
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
