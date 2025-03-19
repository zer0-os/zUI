import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconDiamond1 = ({
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
            <path d="M12.6131 2H11.3878L9.38777 8H14.6131L12.6131 2Z" fill={color} />
            <path d="M14.6129 10H9.38792L12.0004 17.8375L14.6129 10Z" fill={color} />
            <path
              d="M7.27959 8L9.27959 2H7.23463C6.78946 2 6.36729 2.19773 6.0823 2.53972L2.21548 7.17991C1.94409 7.50557 2.17567 8 2.59959 8H7.27959Z"
              fill={color}
            />
            <path
              d="M2.21548 10.8201C1.94409 10.4944 2.17567 10 2.59959 10H7.27973L10.7914 20.535C10.868 20.7649 10.616 20.9198 10.4667 20.729C10.4149 20.6628 10.3634 20.5976 10.3113 20.535L2.21548 10.8201Z"
              fill={color}
            />
            <path
              d="M16.7211 10H21.4013C21.8252 10 22.0568 10.4944 21.7854 10.8201L13.6896 20.535C13.6375 20.5976 13.586 20.6628 13.5341 20.729C13.3849 20.9198 13.1329 20.7648 13.2095 20.535L16.7211 10Z"
              fill={color}
            />
            <path
              d="M21.7854 7.17991C22.0568 7.50557 21.8252 8 21.4013 8H16.7213L14.7213 2H16.7663C17.2114 2 17.6336 2.19773 17.9186 2.53972L21.7854 7.17991Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.49954 9H21.4995M9.99954 3L7.99954 9L11.9995 20.5L15.9995 9L13.9995 3M12.6141 20.2625L21.5727 9.51215C21.7246 9.32995 21.8005 9.23885 21.8295 9.13717C21.8551 9.04751 21.8551 8.95249 21.8295 8.86283C21.8005 8.76114 21.7246 8.67005 21.5727 8.48785L17.2394 3.28785C17.1512 3.18204 17.1072 3.12914 17.0531 3.09111C17.0052 3.05741 16.9518 3.03238 16.8953 3.01717C16.8314 3 16.7626 3 16.6248 3H7.37424C7.2365 3 7.16764 3 7.10382 3.01717C7.04728 3.03238 6.99385 3.05741 6.94596 3.09111C6.89192 3.12914 6.84783 3.18204 6.75966 3.28785L2.42633 8.48785C2.2745 8.67004 2.19858 8.76114 2.16957 8.86283C2.144 8.95249 2.144 9.04751 2.16957 9.13716C2.19858 9.23885 2.2745 9.32995 2.42633 9.51215L11.385 20.2625C11.596 20.5158 11.7015 20.6424 11.8279 20.6886C11.9387 20.7291 12.0603 20.7291 12.1712 20.6886C12.2975 20.6424 12.4031 20.5158 12.6141 20.2625Z"
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
