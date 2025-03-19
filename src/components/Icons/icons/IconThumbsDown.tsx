import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconThumbsDown = ({
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
              d="M16 2.6C16 2.03995 16 1.75992 15.891 1.54601C15.7951 1.35785 15.6422 1.20487 15.454 1.10899C15.2401 1 14.9601 1 14.4 1H8.08051C7.38178 0.999991 6.80158 0.999982 6.32427 1.03632C5.8259 1.07425 5.3665 1.15561 4.92296 1.35658C4.22939 1.67085 3.63992 2.17657 3.22384 2.81429C2.95777 3.2221 2.8075 3.66379 2.69422 4.1506C2.58573 4.61685 2.49752 5.19025 2.39128 5.8809L1.85568 9.3623C1.7149 10.2773 1.59949 11.0274 1.55867 11.6396C1.51655 12.2712 1.5441 12.8606 1.75957 13.4255C2.09042 14.2929 2.7127 15.0183 3.51973 15.4772C4.04531 15.776 4.62364 15.8929 5.25433 15.9473C5.86562 16 6.62451 16 7.55026 16H8.40011C8.69664 16 8.85889 16.0008 8.97548 16.0103L8.98866 16.0115L8.98981 16.0246C8.99933 16.1412 9.00011 16.3035 9.00011 16.6V19.5342C9.00011 21.4483 10.5518 23 12.4659 23C13.186 23 13.8384 22.576 14.1309 21.918L17.4916 14.3563C17.5732 14.1729 17.6157 14.0783 17.6506 14.0116L17.6537 14.0058L17.6604 14.0053C17.7354 14.0005 17.8392 14 18.0399 14H18.8386C19.3658 14 19.8206 14 20.1951 13.9694C20.5905 13.9371 20.9837 13.8658 21.3621 13.673C21.9266 13.3854 22.3855 12.9265 22.6731 12.362C22.8659 11.9836 22.9372 11.5904 22.9695 11.195C23.0001 10.8205 23.0001 10.3657 23.0001 9.83857V5.16144C23.0001 4.6343 23.0001 4.17954 22.9695 3.80497C22.9372 3.40963 22.8659 3.01641 22.6731 2.63803C22.3855 2.07354 21.9266 1.6146 21.3621 1.32698C20.9837 1.13419 20.5905 1.06287 20.1951 1.03057C19.8206 0.999969 19.3658 0.999984 18.8387 1C18.3755 1 18 1.3755 18 1.8387V10C18 10.5523 17.5523 11 17 11C16.4477 11 16 10.5523 16 10V2.6Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.0001 2V13M22.0001 9.8V5.2C22.0001 4.07989 22.0001 3.51984 21.7821 3.09202C21.5903 2.71569 21.2844 2.40973 20.908 2.21799C20.4802 2 19.9202 2 18.8001 2H8.11806C6.65658 2 5.92584 2 5.33563 2.26743C4.81545 2.50314 4.37335 2.88242 4.06129 3.36072C3.70722 3.90339 3.59611 4.62564 3.37388 6.07012L2.8508 9.47012C2.5577 11.3753 2.41114 12.3279 2.69386 13.0691C2.94199 13.7197 3.4087 14.2637 4.01398 14.6079C4.70358 15 5.66739 15 7.59499 15H8.40005C8.96011 15 9.24013 15 9.45404 15.109C9.64221 15.2049 9.79519 15.3578 9.89106 15.546C10.0001 15.7599 10.0001 16.0399 10.0001 16.6V19.5342C10.0001 20.896 11.104 22 12.4659 22C12.7907 22 13.0851 21.8087 13.217 21.5119L16.5778 13.9502C16.7306 13.6062 16.807 13.4343 16.9278 13.3082C17.0346 13.1967 17.1658 13.1115 17.311 13.0592C17.4753 13 17.6635 13 18.0398 13H18.8001C19.9202 13 20.4802 13 20.908 12.782C21.2844 12.5903 21.5903 12.2843 21.7821 11.908C22.0001 11.4802 22.0001 10.9201 22.0001 9.8Z"
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
