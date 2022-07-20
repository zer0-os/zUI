import React, { forwardRef, useEffect, useState } from "react";

import { formatUnits, parseUnits } from "ethers/lib/utils";
import Input, { InputProps } from "./Input";

interface NumberInputProps extends InputProps {
  decimals?: number;
}

/**
 * Number input with BigNumber validation.
 */
const NumberInput = forwardRef<HTMLDivElement, NumberInputProps>(
  ({ decimals = 18, value, onChange, ...props }, ref) => {
    const [inputValue, setInputValue] = useState<string>(value ?? "");

    useEffect(() => {
      if (!value) {
        setInputValue("");
      } else {
        try {
          formatUnits(value, decimals);
        } catch (e) {
          setInputValue("");
          onChange("");
        }
      }
    }, [value]);

    const onInputChange = (value: string) => {
      if (value === "") {
        onChange(value);
        setInputValue(value);
      } else {
        try {
          const newValue = parseUnits(value, decimals);
          setInputValue(value);
          onChange(newValue.toString());
        } catch (e) {
          // just catching to prevent state setting
          // if parseUnits throws
        }
      }
    };

    return <Input type="number" ref={ref} value={inputValue} onChange={onInputChange} {...props} />;
  }
);

export default NumberInput;
