import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconArrowsTriangle = ({
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
              d="M10.8074 2.08277C11.5684 1.75301 12.432 1.75301 13.193 2.08277C13.727 2.31414 14.1137 2.73294 14.4446 3.17755C14.7705 3.61532 15.1289 4.2019 15.559 4.90563L16.554 6.53386L17.0343 4.74125C17.1772 4.20778 17.7256 3.8912 18.2591 4.03414C18.7925 4.17708 19.1091 4.72542 18.9662 5.25888L17.8681 9.35696C17.7251 9.89043 17.1768 10.207 16.6433 10.0641L12.5453 8.96599C12.0118 8.82305 11.6952 8.27471 11.8382 7.74125C11.9811 7.20778 12.5294 6.8912 13.0629 7.03414L14.8003 7.49968L13.8774 5.98953C13.4159 5.23421 13.1048 4.72711 12.8403 4.37175C12.5746 4.01476 12.445 3.93833 12.3978 3.91789C12.1442 3.80797 11.8563 3.80797 11.6026 3.91789C11.5555 3.93833 11.4259 4.01476 11.1602 4.37175C10.8957 4.72711 10.5846 5.23421 10.123 5.98954L9.10318 7.65834C8.81519 8.12959 8.1997 8.27816 7.72845 7.99017C7.25719 7.70218 7.10863 7.08669 7.39662 6.61544L8.4415 4.90562C8.87154 4.20189 9.22998 3.61532 9.55583 3.17755C9.88678 2.73294 10.2735 2.31414 10.8074 2.08277Z"
              fill={color}
            />
            <path
              d="M3.09663 13.6519L4.05562 12.0826L2.25907 12.564C1.7256 12.7069 1.17726 12.3904 1.03432 11.8569C0.891381 11.3234 1.20796 10.7751 1.74143 10.6322L5.83951 9.53408C6.09568 9.46543 6.36864 9.50137 6.59832 9.63398C6.82801 9.76659 6.99561 9.985 7.06425 10.2412L7.07021 10.2634C7.08999 10.3179 7.10502 10.374 7.11513 10.4311L8.16233 14.3393C8.30527 14.8727 7.98869 15.4211 7.45522 15.564C6.92175 15.7069 6.37342 15.3904 6.23047 14.8569L5.76522 13.1205L4.82882 14.6528C4.33221 15.4655 3.9968 16.0163 3.78588 16.4451C3.57187 16.8803 3.56597 17.0391 3.57018 17.0872C3.59518 17.373 3.74172 17.6343 3.97255 17.8046C4.01141 17.8333 4.14995 17.9111 4.63287 17.9554C5.10881 17.999 5.75366 18 6.70604 18H8.50026C9.05255 18 9.50026 18.4477 9.50026 19C9.50026 19.5523 9.05255 20 8.50026 20H6.65689C5.76613 20 5.02858 20.0001 4.45015 19.947C3.86809 19.8936 3.27557 19.7759 2.7849 19.4138C2.09242 18.9027 1.65279 18.1188 1.57779 17.2615C1.52465 16.6539 1.73323 16.087 1.99118 15.5625C2.24752 15.0413 2.63212 14.4119 3.09663 13.6519Z"
              fill={color}
            />
            <path
              d="M19.8813 11.9786C19.5933 11.5073 18.9778 11.3588 18.5066 11.6467C18.0353 11.9347 17.8867 12.5502 18.1747 13.0215L19.1717 14.6528C19.6683 15.4655 20.0037 16.0162 20.2146 16.4451C20.4286 16.8803 20.4345 17.0391 20.4303 17.0872C20.4053 17.373 20.2588 17.6343 20.028 17.8046C19.9891 17.8333 19.8506 17.911 19.3676 17.9554C18.8917 17.999 18.2468 18 17.2945 18H14.9144L16.2074 16.7071C16.5979 16.3166 16.5979 15.6834 16.2074 15.2929C15.8168 14.9024 15.1837 14.9024 14.7931 15.2929L11.7931 18.2929C11.4026 18.6834 11.4026 19.3166 11.7931 19.7071L14.7931 22.7071C15.1837 23.0976 15.8168 23.0976 16.2074 22.7071C16.5979 22.3166 16.5979 21.6834 16.2074 21.2929L14.9145 20L17.3436 20C18.2344 20 18.9719 20.0001 19.5504 19.947C20.1324 19.8936 20.7249 19.7759 21.2156 19.4138C21.9081 18.9027 22.3477 18.1188 22.4227 17.2615C22.4759 16.6539 22.2673 16.087 22.0093 15.5625C21.753 15.0413 21.3685 14.4121 20.9041 13.6522L19.8813 11.9786Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13 19H17.2942C19.1594 19 20.092 19 20.6215 18.6092C21.0832 18.2685 21.3763 17.7459 21.4263 17.1743C21.4836 16.5187 20.9973 15.7229 20.0247 14.1313L19.0278 12.5M6.13014 10.6052L3.97528 14.1314C3.00267 15.7229 2.51637 16.5187 2.57372 17.1743C2.62372 17.7459 2.91681 18.2685 3.37846 18.6092C3.90799 19 4.84059 19 6.70578 19H8.5M16.8889 8.99999L14.7305 5.46808C13.8277 3.99079 13.3763 3.25214 12.7952 3.00033C12.2879 2.78049 11.7121 2.78049 11.2048 3.00033C10.6237 3.25214 10.1723 3.99079 9.2695 5.46809L8.24967 7.13689M18 5.00006L16.9019 9.09813L12.8038 8.00006M2 11.5981L6.09808 10.5L7.19615 14.5981M15.5 22L12.5 19L15.5 16"
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
