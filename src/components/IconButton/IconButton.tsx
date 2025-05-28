import React, { ButtonHTMLAttributes, HTMLAttributes, JSXElementConstructor, MouseEvent } from 'react';

import { IconProps } from '../Icons/Icons.types';

import classNames from 'classnames';
import './IconButton.scss';

export interface IconButtonProperties extends HTMLAttributes<HTMLButtonElement> {
  Icon: JSXElementConstructor<IconProps>;
  className?: string;
  color?: 'primary' | 'red' | 'greyscale';
  isDisabled?: boolean;
  isFilled?: boolean;
  label?: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  size?: string | number | 'large' | 'small' | 'x-small';
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  variant?: 'primary' | 'secondary' | 'tertiary';
}

const getSize = (size: IconButtonProperties['size'], forIcon = false): string | number | undefined => {
  let baseSize: number | undefined;

  if (size && ['large', 'small', 'x-small'].includes(size.toString())) {
    switch (size) {
      case 'large':
        baseSize = 40;
        break;
      case 'small':
        baseSize = 32;
        break;
      case 'x-small':
        baseSize = 24;
        break;
    }
  } else if (typeof size === 'number') {
    baseSize = size;
  }

  if (forIcon && baseSize !== undefined) {
    const offset = baseSize <= 16 ? 4 : 8;
    return baseSize - offset;
  }

  return baseSize;
};

export const IconButton = ({
  Icon,
  className,
  color,
  isDisabled,
  isFilled,
  label,
  onClick,
  size,
  type = 'button',
  variant,
  ...rest
}: IconButtonProperties) => {
  const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onClick(event);
  };

  const buttonSize = getSize(size);
  const iconSize = getSize(size, true);
  const buttonStyle = {
    width: buttonSize ? `${buttonSize}px` : undefined,
    height: buttonSize ? `${buttonSize}px` : undefined
  };

  return (
    <button
      className={classNames(
        'zui-iconButton',
        `zui-iconButton-color-${color}`,
        `zui-iconButton-variant-${variant}`,
        className
      )}
      disabled={isDisabled}
      onClick={handleOnClick}
      type={type}
      style={buttonStyle}
      {...rest}
    >
      <Icon label={label} size={iconSize} isFilled={isFilled} />
    </button>
  );
};
