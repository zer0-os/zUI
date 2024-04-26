import React, { createElement, FC, forwardRef, ReactNode, useCallback } from 'react';

// eslint-disable-next-line import/no-unresolved
import { AriaTextFieldProps } from '@react-types/textfield';
import { Alert, AlertProps } from '../Alert';

import classNames from 'classnames';

import styles from './Input.module.scss';

export interface InputProps extends Omit<AriaTextFieldProps, 'value' | 'onChange'> {
  className?: string;
  wrapperClassName?: string;
  inputClassName?: string;
  alertClassName?: string;
  helperTextClassName?: string;
  error?: boolean;
  // @deprecated
  success?: boolean;
  helperText?: string;
  startEnhancer?: ReactNode | string;
  endEnhancer?: ReactNode | string;
  value: string;
  onChange: (value: string) => void;
  size?: 'large' | 'small';
  alert?: { variant: AlertProps['variant']; text: ReactNode };
}

type EnhancerProps = {
  value: ReactNode | string;
};

const Enhancer: FC<EnhancerProps> = ({ value }) => {
  return createElement(
    'div',
    { className: styles.Enhancer },
    typeof value === 'object' ? value : <span className={styles.EnhancerText}>{value}</span>
  );
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      alert,
      isDisabled,
      className,
      wrapperClassName,
      inputClassName,
      alertClassName,
      helperTextClassName,
      endEnhancer,
      startEnhancer,
      error,
      value,
      label,
      onChange,
      helperText,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      type, // note: intentionally pulling type out for now
      size = 'large',
      ...rest
    },
    ref
  ) => {
    // Allow overriding the type to be password only
    const trueType = type === 'password' ? 'password' : 'text';

    const handleOnChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!isDisabled) {
          onChange(event.target.value);
        }
      },
      [onChange, isDisabled]
    );

    const status = error ? 'error' : undefined;

    return (
      <div data-disabled={isDisabled} className={classNames(className, styles.Container)}>
        <Labels className={helperTextClassName} label={label} helperText={helperText} />
        <div
          className={classNames(styles.Wrapper, wrapperClassName)}
          data-testid="zui-input-wrapper"
          data-size={size}
          data-status={status}
          data-disabled={isDisabled ? '' : undefined}
        >
          {startEnhancer && <Enhancer value={startEnhancer} />}
          <input
            className={classNames(styles.Input, inputClassName)}
            data-testid="zui-input"
            onChange={handleOnChange}
            data-size={size}
            ref={ref}
            value={value}
            disabled={isDisabled}
            type={trueType}
            {...rest}
          />
          {endEnhancer && <Enhancer value={endEnhancer} />}
        </div>
        {alert && (
          <Alert className={alertClassName} variant={alert.variant} isFilled>
            {alert.text}
          </Alert>
        )}
      </div>
    );
  }
);

const Labels = ({
  className,
  label,
  helperText
}: {
  className?: string;
  label?: InputProps['label'];
  helperText?: InputProps['helperText'];
}) => {
  if (!label && !helperText) {
    return null;
  }

  return (
    <div className={classNames(className, styles.Labels)}>
      {label && <label className={styles.Label}>{label}</label>}
      {helperText && <p className={styles.Helper}>{helperText}</p>}
    </div>
  );
};
