import React, { ButtonHTMLAttributes, JSXElementConstructor, MouseEvent } from 'react';

import classNames from 'classnames';
import { IconProps } from '../Icons/Icons.types';

import './IconButton.scss';

export interface IconButtonProperties {
  className?: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;

  Icon: JSXElementConstructor<IconProps>;
  label?: string;
  size?: string | number | 'large' | 'small' | 'x-small';
  isFilled?: boolean;
  variant?: 'primary' | 'secondary' | 'tertiary';
  color?: 'primary' | 'red' | 'greyscale';
  isDisabled?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

const getSize = (size: IconButtonProperties['size']) => {
  if (size && ['large', 'small', 'x-small'].includes(size.toString())) {
    switch (size) {
      case 'large':
        return 40;
      case 'small':
        return 32;
      case 'x-small':
        return 24;
    }
  }

  return size;
};

export const IconButton = ({
  Icon,
  onClick,
  className,
  label,
  size,
  isFilled,
  variant,
  color,
  isDisabled,
  type = 'button'
}: IconButtonProperties) => {
  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    onClick(event);
  }

  return (
    <button
      className={classNames(
        'zui-iconButton',
        `zui-iconButton-color-${color}`,
        `zui-iconButton-variant-${variant}`,
        className
      )}
      onClick={handleClick}
      disabled={isDisabled}
      type={type}
    >
      <Icon label={label} size={getSize(size)} isFilled={isFilled} />
    </button>
  );
};
