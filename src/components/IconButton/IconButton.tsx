import React, { FC, JSXElementConstructor } from 'react';

import classNames from 'classnames';
import { IconProps } from '../Icons/Icons.types';
import { Color, Variant } from './IconButton.types';

import './IconButton.scss';

export interface IconButtonProperties {
  className?: string;
  onClick: () => void;

  Icon: JSXElementConstructor<IconProps>;
  label?: string;
  size?: string | number | 'large' | 'small' | 'x-small';
  isFilled?: boolean;
  variant?: Variant;
  color?: Color;
}

export const IconButton: FC<IconButtonProperties> = ({
  Icon,
  onClick,
  className,
  label,
  size,
  isFilled,
  variant = Variant.PRIMARY,
  color = Color.PRIMARY
}) => {
  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    onClick();
  }

  const getSize = () => {
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

  return (
    <button
      className={classNames(
        'zui-iconButton',
        `zui-iconButton-color-${color}`,
        `zui-iconButton-variant-${variant}`,
        className
      )}
      onClick={handleClick}
    >
      <Icon label={label} size={getSize()} isFilled={isFilled} />
    </button>
  );
};
