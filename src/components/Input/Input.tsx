import React, { createElement, FC, forwardRef, ReactNode, useCallback, useRef } from 'react';

// eslint-disable-next-line import/no-unresolved
import { AriaTextFieldProps } from '@react-types/textfield';
import { Alert, AlertProps } from '../Alert';

import classNames from 'classnames';

import styles from './Input.module.scss';

export interface InputProps extends Omit<AriaTextFieldProps, 'value' | 'onChange'> {
  className?: string;
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

export const Input = forwardRef<HTMLDivElement, InputProps>(
  (
    {
      alert,
      isDisabled,
      className,
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
    const inputRef = useRef<HTMLInputElement>();

    const clickWrapper = useCallback(() => {
      inputRef.current.focus();
    }, [inputRef]);

    const handleOnChange = useCallback(() => {
      if (!isDisabled) {
        onChange(inputRef.current.value);
      }
    }, [onChange, isDisabled]);

    const status = error ? 'error' : undefined;

    return (
      <div data-disabled={isDisabled} className={classNames(className, styles.Container)} ref={ref}>
        <Labels label={label} helperText={helperText} />
        <div
          onClick={clickWrapper}
          className={classNames(styles.Wrapper)}
          data-testid={`zui-input-wrapper`}
          data-size={size}
          data-status={status}
          data-disabled={isDisabled ? '' : undefined}
        >
          {startEnhancer && <Enhancer value={startEnhancer} />}
          <input
            className={styles.Input}
            onChange={handleOnChange}
            ref={inputRef}
            value={value}
            disabled={isDisabled}
            {...rest}
          />
          {endEnhancer && <Enhancer value={endEnhancer} />}
        </div>
        {alert && <Alert variant={alert.variant}>{alert.text}</Alert>}
      </div>
    );
  }
);

const Labels = ({ label, helperText }: { label?: InputProps['label']; helperText?: InputProps['helperText'] }) => {
  if (!label && !helperText) {
    return null;
  }

  return (
    <div className={styles.Labels}>
      {label && <label className={styles.Label}>{label}</label>}
      {helperText && <p className={styles.Helper}>{helperText}</p>}
    </div>
  );
};
