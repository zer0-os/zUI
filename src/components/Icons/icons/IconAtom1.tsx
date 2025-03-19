import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconAtom1 = ({
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
              d="M12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.1192 2.57528C14.1212 2.98623 13.068 3.55469 11.9999 4.26062C10.9319 3.55472 9.87872 2.98629 8.88072 2.57535C7.7206 2.09765 6.58743 1.81307 5.56519 1.8054C4.53801 1.7977 3.54206 2.07316 2.80758 2.80764C2.0731 3.54212 1.79764 4.53807 1.80534 5.56525C1.81301 6.58749 2.0976 7.72066 2.57529 8.88078C2.98623 9.87878 3.55467 10.932 4.26057 12C3.55466 13.068 2.98623 14.1212 2.57528 15.1192C2.09758 16.2793 1.813 17.4125 1.80533 18.4347C1.79763 19.4619 2.07309 20.4579 2.80757 21.1923C3.54205 21.9268 4.538 22.2023 5.56518 22.1946C6.58742 22.1869 7.72059 21.9023 8.88071 21.4246C9.87871 21.0137 10.9319 20.4453 11.9999 19.7394C13.068 20.4453 14.1212 21.0138 15.1192 21.4247C16.2793 21.9024 17.4125 22.187 18.4347 22.1947C19.4619 22.2024 20.4579 21.9269 21.1924 21.1924C21.9268 20.4579 22.2023 19.462 22.1946 18.4348C22.1869 17.4126 21.9023 16.2794 21.4246 15.1193C21.0137 14.1213 20.4452 13.068 19.7393 12C20.4452 10.932 21.0137 9.87873 21.4246 8.88071C21.9023 7.72059 22.1869 6.58742 22.1946 5.56518C22.2023 4.538 21.9268 3.54205 21.1923 2.80757C20.4579 2.07309 19.4619 1.79763 18.4347 1.80533C17.4125 1.813 16.2793 2.09758 15.1192 2.57528ZM15.8807 4.42464C15.2037 4.70341 14.4838 5.0721 13.7405 5.5243C14.5855 6.19327 15.4261 6.9409 16.2426 7.75739C17.0591 8.57385 17.8067 9.41445 18.4756 10.2594C18.9278 9.51611 19.2965 8.79623 19.5753 8.11921C19.9933 7.10399 20.1895 6.23267 20.1946 5.55018C20.1997 4.87264 20.02 4.46362 19.7781 4.22179C19.5363 3.97995 19.1273 3.80019 18.4497 3.80528C17.7672 3.8104 16.8959 4.00661 15.8807 4.42464ZM4.42465 8.11928C4.70341 8.79627 5.07208 9.51613 5.52425 10.2594C6.19322 9.41442 6.94084 8.5738 7.75732 7.75732C8.57378 6.94086 9.41438 6.19326 10.2594 5.52431C9.51606 5.07214 8.79621 4.70347 8.11922 4.42471C7.104 4.00668 6.23268 3.81047 5.55019 3.80535C4.87265 3.80026 4.46363 3.98002 4.2218 4.22186C3.97996 4.46369 3.80021 4.87271 3.80529 5.55025C3.81041 6.23274 4.00662 7.10406 4.42465 8.11928ZM9.17153 9.17153C8.23976 10.1033 7.41444 11.0581 6.70741 12C7.41444 12.9419 8.23976 13.8967 9.17154 14.8285C10.1033 15.7602 11.058 16.5855 11.9999 17.2925C12.9418 16.5855 13.8966 15.7602 14.8284 14.8284C15.7601 13.8966 16.5854 12.9419 17.2925 12C16.5854 11.0581 15.7602 10.1034 14.8284 9.1716C13.8966 8.23982 12.9418 7.4145 11.9999 6.70747C11.058 7.41448 10.1033 8.23978 9.17153 9.17153ZM4.42464 15.8807C4.7034 15.2037 5.07207 14.4838 5.52425 13.7405C6.19322 14.5856 6.94085 15.4262 7.75733 16.2427C8.57378 17.0591 9.41438 17.8067 10.2594 18.4757C9.51606 18.9278 8.7962 19.2965 8.11921 19.5753C7.10399 19.9933 6.23267 20.1895 5.55018 20.1946C4.87264 20.1997 4.46362 20.02 4.22179 19.7781C3.97995 19.5363 3.8002 19.1273 3.80528 18.4497C3.8104 17.7672 4.00661 16.8959 4.42464 15.8807ZM15.8807 19.5754C15.2037 19.2966 14.4838 18.9279 13.7405 18.4757C14.5855 17.8067 15.4261 17.0591 16.2426 16.2426C17.0591 15.4261 17.8067 14.5855 18.4756 13.7405C18.9278 14.4839 19.2965 15.2038 19.5753 15.8808C19.9933 16.896 20.1895 17.7673 20.1947 18.4498C20.1997 19.1273 20.02 19.5364 19.7781 19.7782C19.5363 20.02 19.1273 20.1998 18.4497 20.1947C17.7673 20.1896 16.8959 19.9934 15.8807 19.5754Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.9995 12.0001H12.0095M15.535 15.5357C10.8488 20.222 5.46685 22.438 3.51423 20.4854C1.56161 18.5328 3.77769 13.1509 8.46398 8.46461C13.1503 3.77832 18.5322 1.56224 20.4848 3.51486C22.4374 5.46748 20.2213 10.8494 15.535 15.5357ZM15.535 8.46443C20.2213 13.1507 22.4374 18.5326 20.4848 20.4852C18.5321 22.4379 13.1502 20.2218 8.46394 15.5355C3.77765 10.8492 1.56157 5.4673 3.51419 3.51468C5.46681 1.56206 10.8487 3.77814 15.535 8.46443ZM12.4995 12.0001C12.4995 12.2763 12.2757 12.5001 11.9995 12.5001C11.7234 12.5001 11.4995 12.2763 11.4995 12.0001C11.4995 11.724 11.7234 11.5001 11.9995 11.5001C12.2757 11.5001 12.4995 11.724 12.4995 12.0001Z"
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
