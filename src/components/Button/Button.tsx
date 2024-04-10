import React, { createElement, FC, useRef } from 'react';

import { useButton } from '@react-aria/button';
import classNames from 'classnames';
import { Spinner } from '../LoadingIndicator';
import 'focus-visible';

import './Button.scss';

export enum Size {
  Small = 'small',
  Large = 'large'
}

export enum Variant {
  Primary = 'primary',
  Secondary = 'secondary'
}

export enum Color {
  Highlight = 'highlight',
  Red = 'red',
  Greyscale = 'greyscale'
}

export interface ButtonProps {
  className?: string;
  children: React.ReactNode | string;

  size?: Size;
  variant?: Variant;
  color?: Color;

  isLoading?: boolean;
  isDisabled?: boolean;
  isSubmit?: boolean;

  startEnhancer?: React.ReactNode;
  endEnhancer?: React.ReactNode;

  onPress?: () => void;
  onPressStart?: () => void;
  onPressEnd?: () => void;
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  isLoading,
  isDisabled,
  isSubmit,
  variant = Variant.Primary,
  color = Color.Highlight,
  size = Size.Small,
  startEnhancer,
  endEnhancer,
  ...rest
}) => {
  const ref = useRef(null);

  const { buttonProps, isPressed } = useButton(
    {
      ...rest,
      type: isSubmit ? 'submit' : 'button',
      isDisabled: isDisabled || isLoading
    },
    ref ?? null
  );

  const buttonClasses = classNames(
    className,
    'zui-button',
    `zui-button-${size}`,
    `zui-button-${variant}`,
    `zui-button-${color}`,
    {
      'zui-button-active': isPressed,
      'zui-button-loading': isLoading,
      'zui-button-disabled': isDisabled
    }
  );

  return createElement(
    'button',
    {
      className: buttonClasses,
      ref,
      ...buttonProps
    },
    <>
      <div className="zui-button-content-container">
        {!isLoading && startEnhancer}
        <div className={`zui-button-content-${size}`}>
          {isLoading ? <Spinner className="zui-button-spinner" /> : children}
        </div>
        {!isLoading && endEnhancer}
      </div>
    </>
  );
};
