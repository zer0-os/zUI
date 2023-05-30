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

  variant?: 'primary' | 'secondary' | 'negative' | 'text';
  isLoading?: boolean;
  isDisabled?: boolean;
  isSubmit?: boolean;

  startEnhancer?: ReactNode;
  endEnhancer?: ReactNode;
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
      className: classNames(className, 'zui-button', `zui-button-${variant}`, {
        'zui-button-active': isPressed
      }),
      ref,
      'aria-disabled': disabled,
      ...buttonProps
    },
    <>
      <div className="zui-button-content">
        {startEnhancer}
        {isLoading ? <Spinner className="zui-button-spinner" /> : children}
        {endEnhancer}
      </div>
    </>
  );
};
