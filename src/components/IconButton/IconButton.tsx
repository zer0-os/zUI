//- Type Imports
import type { FC } from 'react';

//- React Imports
import React, { useState } from 'react';

//- Styles Imports
import classNames from 'classnames/bind';
import styles from './IconButton.module.scss';

const cx = classNames.bind(styles);

type IconButtonProps = {
  isTogglable?: boolean;
  isToggled?: boolean;
  onClick?: () => void;
  icon: React.ReactNode;
};

export const IconButton: FC<IconButtonProps> = ({ isTogglable, isToggled, onClick, icon }) => {
  const [isSelected, setIsSelected] = useState(false);
  const selectedIcon = (isTogglable && isSelected) || isToggled;

  const handleClick = () => {
    setIsSelected(!isSelected);
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      className={cx(styles.IconButton, {
        selectedIcon: selectedIcon
      })}
    >
      {icon}
    </button>
  );
};
