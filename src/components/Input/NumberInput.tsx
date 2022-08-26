/**
 * @TODO: handle type="number" for auto numpad on mobile/screen readers
 */

import React, { forwardRef, useEffect, useState } from 'react';

import { formatUnits, parseUnits } from 'ethers/lib/utils';

import { Input, InputProps } from './Input';

export interface NumberInputProps extends InputProps {
  decimals?: number;
  isBigNumber?: boolean;
}

import './Input.scss';

/**
 * Number input, with optional BigNumber parsing.
 */
export const NumberInput = forwardRef<HTMLDivElement, NumberInputProps>(
  ({ decimals = 18, value, isBigNumber, onChange, ...props }, ref) => {
    const [inputValue, setInputValue] = useState<string>('');

    /**
     * Handle direct changes to the value prop which
     * weren't the result of typing.
     */
    useEffect(() => {
      if (props.isDisabled) {
        return;
      }
      if (!value) {
        setInputValue('');
      } else {
        try {
          if (isBigNumber) {
            const formatted = formatUnits(value, decimals);
            setInputValue(formatted);
          } else {
            if (isNaN(Number(value))) {
              throw Error('Not a number.');
            }
            setInputValue(value);
          }
        } catch (e) {
          setInputValue('');
          onChange('');
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    /**
     * Handles input changes and validates the value.
     * @param value new input value
     */
    const onInputChange = (value: string) => {
      if (props.isDisabled) {
        return;
      }
      if (value === '') {
        onChange('');
        setInputValue('');
      } else {
        try {
          if (isBigNumber) {
            const newValue = parseUnits(value, decimals);
            onChange(newValue.toString());
          } else {
            if (isNaN(Number(value))) {
              return;
            }
            onChange(value);
          }
          setInputValue(value);
        } catch (e) {
          // just catching to prevent state setting
          // if parseUnits throws
        }
      }
    };

    return <Input type="number" ref={ref} value={inputValue} onChange={onInputChange} {...props} />;
  }
);
