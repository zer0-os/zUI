import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconFolderCode = ({
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
              d="M1 6.16143V16.2413C0.999989 17.0463 0.99998 17.7106 1.0442 18.2518C1.09012 18.8139 1.18869 19.3306 1.43598 19.816C1.81947 20.5686 2.43139 21.1805 3.18404 21.564C3.66938 21.8113 4.18608 21.9099 4.74818 21.9558C5.28937 22 5.95374 22 6.7587 22H17.2413C18.0463 22 18.7106 22 19.2518 21.9558C19.8139 21.9099 20.3306 21.8113 20.816 21.564C21.5686 21.1805 22.1805 20.5686 22.564 19.816C22.8113 19.3306 22.9099 18.8139 22.9558 18.2518C23 17.7106 23 17.0463 23 16.2413V11.7587C23 10.9537 23 10.2894 22.9558 9.74817C22.9099 9.18608 22.8113 8.66937 22.564 8.18404C22.1805 7.43139 21.5686 6.81947 20.816 6.43598C20.3306 6.18868 19.8139 6.09012 19.2518 6.04419C18.7106 5.99998 18.0463 5.99999 17.2413 6H13.6181L12.7234 4.21039C12.4586 3.67915 12.2258 3.21196 11.8631 2.85672C11.5454 2.54557 11.1625 2.30893 10.7421 2.16394C10.2622 1.99839 9.74022 1.99908 9.14666 1.99986L5.16146 1.99997C4.63431 1.99995 4.17955 1.99994 3.80498 2.03054C3.40963 2.06284 3.01641 2.13416 2.63803 2.32695C2.07355 2.61457 1.6146 3.07351 1.32698 3.638C1.13419 4.01638 1.06287 4.4096 1.03057 4.80494C0.999971 5.1795 0.999985 5.63431 1 6.16143ZM10.7071 12.2071C11.0976 11.8166 11.0976 11.1834 10.7071 10.7929C10.3166 10.4024 9.68342 10.4024 9.29289 10.7929L6.79289 13.2929C6.40237 13.6834 6.40237 14.3166 6.79289 14.7071L9.29289 17.2071C9.68342 17.5976 10.3166 17.5976 10.7071 17.2071C11.0976 16.8166 11.0976 16.1834 10.7071 15.7929L8.91421 14L10.7071 12.2071ZM14.7071 10.7929C14.3166 10.4024 13.6834 10.4024 13.2929 10.7929C12.9024 11.1834 12.9024 11.8166 13.2929 12.2071L15.0858 14L13.2929 15.7929C12.9024 16.1834 12.9024 16.8166 13.2929 17.2071C13.6834 17.5976 14.3166 17.5976 14.7071 17.2071L17.2071 14.7071C17.5976 14.3166 17.5976 13.6834 17.2071 13.2929L14.7071 10.7929Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13 7L11.8845 4.76892C11.5634 4.1268 11.4029 3.80573 11.1634 3.57116C10.9516 3.36373 10.6963 3.20597 10.4161 3.10931C10.0992 3 9.74021 3 9.02229 3H5.2C4.0799 3 3.51984 3 3.09202 3.21799C2.71569 3.40973 2.40973 3.71569 2.21799 4.09202C2 4.51984 2 5.0799 2 6.2V7M2 7H17.2C18.8802 7 19.7202 7 20.362 7.32698C20.9265 7.6146 21.3854 8.07354 21.673 8.63803C22 9.27976 22 10.1198 22 11.8V16.2C22 17.8802 22 18.7202 21.673 19.362C21.3854 19.9265 20.9265 20.3854 20.362 20.673C19.7202 21 18.8802 21 17.2 21H6.8C5.11984 21 4.27976 21 3.63803 20.673C3.07354 20.3854 2.6146 19.9265 2.32698 19.362C2 18.7202 2 17.8802 2 16.2V7ZM14 16.5L16.5 14L14 11.5M10 11.5L7.5 14L10 16.5"
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
