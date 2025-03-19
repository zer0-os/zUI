import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconLightning2 = ({
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
              d="M8.49391 1.00012L8.45892 0.999871C8.33207 0.998618 8.06895 0.99602 7.81939 1.0821C7.6092 1.1546 7.41776 1.27292 7.25892 1.42849C7.07032 1.61321 6.95497 1.84971 6.89936 1.96373L6.88394 1.99513L2.66979 10.4234C2.58647 10.5899 2.49624 10.7703 2.43414 10.9293C2.36903 11.096 2.27462 11.381 2.32461 11.7194C2.38491 12.1275 2.61068 12.4928 2.94879 12.7293C3.22904 12.9253 3.52623 12.9684 3.70444 12.9847C3.87442 13.0002 4.07606 13.0002 4.26228 13.0001L9.15545 13.0001L6.54165 21.7128C6.40904 22.1548 6.59617 22.6302 6.99452 22.8633C7.39287 23.0963 7.89897 23.0265 8.21932 22.6943L20.4381 10.023C20.6213 9.83296 20.8026 9.64503 20.9355 9.48021C21.0555 9.33128 21.2916 9.02216 21.3195 8.59877C21.3508 8.12348 21.1546 7.66157 20.7907 7.35421C20.4665 7.08041 20.0801 7.03579 19.8896 7.01882C19.6787 7.00003 19.4176 7.00007 19.1537 7.00011L13.4425 7.00012L15.1858 2.35124C15.301 2.04414 15.2582 1.7001 15.0714 1.43052C14.8846 1.16095 14.5775 1.00012 14.2495 1.00012H8.49391Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.2495 2H8.49395C8.31447 2 8.22473 2 8.14551 2.02733C8.07544 2.05149 8.01163 2.09093 7.95868 2.14279C7.89881 2.20143 7.85868 2.2817 7.77841 2.44223L3.57841 10.8422C3.38673 11.2256 3.29089 11.4173 3.31391 11.5731C3.33401 11.7091 3.40927 11.8309 3.52197 11.9097C3.65104 12 3.86534 12 4.29395 12H10.4995L7.49953 22L19.6926 9.35531C20.104 8.9287 20.3097 8.7154 20.3217 8.53288C20.3321 8.37446 20.2667 8.22049 20.1454 8.11803C20.0057 8 19.7094 8 19.1167 8H11.9995L14.2495 2Z"
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
