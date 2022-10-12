import React from 'react';

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconClockCheck = ({
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
              d="M22.7071 16.7929C23.0976 17.1834 23.0976 17.8166 22.7071 18.2071L18.2071 22.7071C17.8166 23.0976 17.1834 23.0976 16.7929 22.7071L14.7929 20.7071C14.4024 20.3166 14.4024 19.6834 14.7929 19.2929C15.1834 18.9024 15.8166 18.9024 16.2071 19.2929L17.5 20.5858L21.2929 16.7929C21.6834 16.4024 22.3166 16.4024 22.7071 16.7929Z"
              fill={color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C12.373 23 12.7416 22.9814 13.1051 22.9452C13.1352 22.9422 13.0598 22.9497 13.0669 22.9488C13.453 22.8991 13.6339 22.3925 13.3666 22.1095C13.3617 22.1044 13.39 22.1326 13.3787 22.1213C12.2071 20.9497 12.2071 19.0503 13.3787 17.8787C14.5095 16.7478 16.3186 16.7085 17.4966 17.7608L19.8787 15.3787C20.4401 14.8173 21.1687 14.5249 21.9042 14.5015C22.2589 14.4903 22.4363 14.4846 22.5308 14.4396C22.6259 14.3943 22.6777 14.3489 22.7351 14.2605C22.7921 14.1727 22.8126 14.0484 22.8535 13.7997C22.9499 13.2141 23 12.6129 23 12C23 5.92487 18.0751 1 12 1ZM12 5C12.5523 5 13 5.44772 13 6V11.382L16.4472 13.1056C16.9412 13.3526 17.1414 13.9532 16.8944 14.4472C16.6474 14.9412 16.0468 15.1414 15.5528 14.8944L11.5528 12.8944C11.214 12.725 11 12.3788 11 12V6C11 5.44772 11.4477 5 12 5Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.5 19L16.5 21L21 16.5M21.9851 12.5499C21.995 12.3678 22 12.1845 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.4354 6.33651 21.858 11.7385 21.9966M12 6V12L15.7384 13.8692"
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
