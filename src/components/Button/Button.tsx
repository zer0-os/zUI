import React, { createElement, FC, useRef } from 'react';

import { useButton } from '@react-aria/button';
import classNames from 'classnames';

import './Button.scss';
import 'focus-visible';
import { Spinner } from '../LoadingIndicator';

export interface ButtonProps {
  className?: string;
  children: string;
  onPress?: () => void;
  onPressStart?: () => void;
  onPressEnd?: () => void;

  variant?: 'primary' | 'secondary' | 'negative' | 'text';
  isLoading?: boolean;
  isDisabled?: boolean;
  isSubmit?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  isLoading,
  isDisabled,
  isSubmit,
  variant = 'primary',
  ...rest
}) => {
  const ref = useRef(null);
  const disabled = isDisabled || isLoading;

  const { buttonProps, isPressed } = useButton(
    {
      ...rest,
      type: isSubmit ? 'submit' : 'button',
      onPress: rest.onPress
        ? () => {
            if (!disabled) rest.onPress();
          }
        : undefined
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
      <div className="zui-button-content">{isLoading ? <Spinner className="zui-button-spinner" /> : children}</div>
    </>
  );
};
