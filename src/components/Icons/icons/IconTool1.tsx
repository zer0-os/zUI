import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconTool1 = ({
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
              d="M9.00023 8C9.00023 4.13401 12.1342 1 16.0002 1C16.8238 1 17.6163 1.14267 18.3529 1.40547C18.6758 1.52068 18.9172 1.79329 18.9925 2.12778C19.0677 2.46226 18.9664 2.81199 18.724 3.05443L16.4804 5.32178C16.1622 5.64333 16.0031 5.80411 15.9282 5.98225C15.823 6.23209 15.8238 6.51392 15.9304 6.76316C16.0064 6.94087 16.1664 7.10075 16.4864 7.4205C16.807 7.74085 16.9673 7.90103 17.1453 7.97687C17.395 8.08324 17.6773 8.08353 17.9272 7.97766C18.1054 7.90219 18.266 7.74234 18.5873 7.42264L20.8913 5.1297C21.1305 4.89056 21.4743 4.7885 21.8052 4.85841C22.136 4.92832 22.4092 5.16073 22.5311 5.47616C22.8344 6.26046 23.0002 7.11205 23.0002 8C23.0002 11.866 19.8662 15 16.0002 15C15.4288 15 14.8721 14.9313 14.3385 14.8013C14.0854 14.7397 13.9254 14.7009 13.8084 14.6774C13.7868 14.673 13.7691 14.6698 13.7549 14.6673C13.7512 14.6706 13.7471 14.6742 13.7426 14.6783C13.6805 14.7344 13.599 14.8155 13.4552 14.9593L7.20733 21.2071C5.98838 22.4261 4.01207 22.4261 2.79312 21.2071C1.57417 19.9882 1.57417 18.0118 2.79312 16.7929L9.04094 10.5451C9.18475 10.4013 9.26585 10.3197 9.32196 10.2576C9.33759 10.2403 9.32869 10.2209 9.32284 10.1918C9.29933 10.0749 9.26055 9.91484 9.1989 9.66177C9.0689 9.1281 9.00023 8.57139 9.00023 8Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.6316 7.63137C15.2356 7.23535 15.0376 7.03735 14.9634 6.80902C14.8981 6.60817 14.8981 6.39183 14.9634 6.19098C15.0376 5.96265 15.2356 5.76465 15.6316 5.36863L18.47 2.53026C17.7168 2.18962 16.8806 2 16.0002 2C12.6865 2 10.0002 4.68629 10.0002 8C10.0002 8.49104 10.0592 8.9683 10.1705 9.42509C10.2896 9.91424 10.3492 10.1588 10.3387 10.3133C10.3276 10.4751 10.3035 10.5612 10.2289 10.7051C10.1576 10.8426 10.0211 10.9791 9.74804 11.2522L3.50023 17.5C2.6718 18.3284 2.6718 19.6716 3.50023 20.5C4.32865 21.3284 5.6718 21.3284 6.50023 20.5L12.748 14.2522C13.0211 13.9791 13.1576 13.8426 13.2951 13.7714C13.4391 13.6968 13.5251 13.6727 13.6869 13.6616C13.8414 13.651 14.086 13.7106 14.5751 13.8297C15.0319 13.941 15.5092 14 16.0002 14C19.3139 14 22.0002 11.3137 22.0002 8C22.0002 7.11959 21.8106 6.28347 21.47 5.53026L18.6316 8.36863C18.2356 8.76465 18.0376 8.96265 17.8092 9.03684C17.6084 9.1021 17.3921 9.1021 17.1912 9.03684C16.9629 8.96265 16.7649 8.76465 16.3689 8.36863L15.6316 7.63137Z"
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
