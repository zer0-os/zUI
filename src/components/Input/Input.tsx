import React, { FC, forwardRef, ReactNode, useCallback, useRef } from 'react';

// eslint-disable-next-line import/no-unresolved
import { AriaTextFieldProps } from '@react-types/textfield';

import classNames from 'classnames';

import './Input.scss';

export interface InputProps extends Omit<AriaTextFieldProps, 'value' | 'onChange'> {
  className?: string;
  error?: boolean;
  success?: boolean;
  helperText?: string;
  startEnhancer?: ReactNode | string;
  endEnhancer?: ReactNode | string;
  value: string;
  onChange: (value: string) => void;
}

type EnhancerProps = {
  value: ReactNode | string;
  className: string;
};

const Enhancer: FC<EnhancerProps> = ({ value, className }) => {
  if (typeof value === 'object') {
    return <div className={classNames('zui-input-enhancer', className)}>{value}</div>;
  } else {
    return (
      <div className={classNames('zui-input-enhancer', className)}>
        <span className={'zui-input-enhancer-default'}>{value}</span>
      </div>
    );
  }
};

export const Input = forwardRef<HTMLDivElement, InputProps>(
  (
    {
      isDisabled,
      className,
      endEnhancer,
      startEnhancer,
      error,
      success,
      value,
      label,
      onChange,
      helperText,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      type, // note: intentionally pulling type out for now
      ...rest
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>();

    const clickWrapper = useCallback(() => {
      inputRef.current.focus();
    }, [inputRef]);

    return (
      <div
        data-disabled={isDisabled}
        className={classNames(className, 'zui-input-container', {
          'zui-input-error': error,
          'zui-input-success': success
        })}
        ref={ref}
      >
        <div onClick={clickWrapper} className={classNames('zui-input-wrapper', { 'zui-input-empty': !value?.length })}>
          {startEnhancer && <Enhancer value={startEnhancer} className={'zui-input-enhancer-start'} />}
          <div
            className={classNames('zui-input-input', {
              'zui-input-enhanced-end': endEnhancer !== undefined,
              'zui-input-enhanced-start': startEnhancer !== undefined
            })}
          >
            {label && value && <label>{label}</label>}
            <input
              className={classNames({
                'zui-input-no-label': label === undefined,
                'zui-input-input-empty': value === undefined || !value.length
              })}
              onChange={event => {
                onChange(event.target.value);
              }}
              ref={inputRef}
              value={value}
              {...rest}
            />
          </div>
          {endEnhancer && <Enhancer value={endEnhancer} className={'zui-input-enhancer-end'} />}
        </div>
        {helperText && <p className={'zui-input-helper'}>{helperText}</p>}
      </div>
    );
  }
);
