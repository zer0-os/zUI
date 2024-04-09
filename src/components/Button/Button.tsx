import React, { createElement, FC, ReactNode, useRef } from 'react';

import { useButton } from '@react-aria/button';
import classNames from 'classnames';

import './Button.scss';
import 'focus-visible';
import { Spinner } from '../LoadingIndicator';

export interface ButtonProps {
  className?: string;
  children: ReactNode | string;
  onPress?: () => void;
  onPressStart?: () => void;
  onPressEnd?: () => void;

  variant?: 'primary' | 'secondary' | 'negative';
  isLoading?: boolean;
  isDisabled?: boolean;
  isSubmit?: boolean;
  isTextButton?: boolean;

  startEnhancer?: ReactNode;
  endEnhancer?: ReactNode;

  size?: 'small' | 'large';
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  isLoading,
  isDisabled,
  isSubmit,
  variant = 'primary',
  startEnhancer,
  endEnhancer,
  size = 'small',
  isTextButton = false,
  ...rest
}) => {
  const ref = useRef(null);
  const disabled = isDisabled || isLoading;

  const { buttonProps, isPressed } = useButton(
    {
      ...rest,
      type: isSubmit ? 'submit' : 'button',
      isDisabled: disabled
    },
    ref ?? null
  );

  return createElement(
    'button',
    {
      className: classNames(className, 'zui-button', `zui-button-${variant}`, `zui-button-${size}`, {
        'zui-button-active': isPressed,
        'zui-button-text': isTextButton
      }),
      ref,
      'aria-disabled': disabled,
      ...buttonProps
    },
    <>
      <div className={`zui-button-content-container zui-button-content-container-${size}`}>
        {!isLoading && startEnhancer}
        {isLoading ? (
          <Spinner className="zui-button-spinner" />
        ) : (
          <div className={`zui-button-content zui-button-content-${size}`}>{children}</div>
        )}
        {!isLoading && endEnhancer}
      </div>
    </>
  );
};
