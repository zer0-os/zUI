import React, { ButtonHTMLAttributes, JSXElementConstructor, MouseEvent } from 'react';

import { IconProps } from '../Icons/Icons.types';

import classNames from 'classnames';
import './IconButton.scss';

export interface IconButtonProperties {
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
  if (size && ['large', 'small', 'x-small'].includes(size.toString())) {
    switch (size) {
      case 'large':
        return forIcon ? 32 : 40;
      case 'small':
        return forIcon ? 24 : 32;
      case 'x-small':
        return forIcon ? 16 : 24;
    }
  }

  if (typeof size === 'number') {
    return forIcon ? size - 8 : size;
  }

  return size;
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
  variant
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
    >
      <Icon label={label} size={iconSize} isFilled={isFilled} />
    </button>
  );
};
