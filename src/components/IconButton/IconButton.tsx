import React, { FC, JSXElementConstructor } from 'react';

import classNames from 'classnames';
import styles from './IconButton.module.scss';
import { IconProps } from '../Icons/Icons.types';

export interface IconButtonProperties {
  className?: string;
  onClick: () => void;

  Icon: JSXElementConstructor<IconProps>;
  label?: string;
  size?: string | number;
  isFilled?: boolean;
}

export const IconButton: FC<IconButtonProperties> = ({ Icon, onClick, className, label, size, isFilled }) => {
  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    onClick();
  }

  return (
    <button className={classNames(styles.IconButton, className)} onClick={handleClick}>
      <Icon label={label} size={size} isFilled={isFilled} />
    </button>
  );
};
