import React, { forwardRef, ReactNode } from "react";

import { AriaTextFieldProps } from "@react-types/textfield";

import classNames from "classnames";
import "./Input.module.scss";

export interface InputProps extends Omit<AriaTextFieldProps, "value" | "onChange"> {
  className?: string;
  error?: boolean;
  success?: boolean;
  helperText?: string;
  endEnhancer?: ReactNode;
  value: string;
  onChange: (value: string) => void;
}

const Input = forwardRef<HTMLDivElement, InputProps>(
  ({ isDisabled, className, endEnhancer, error, success, value, label, onChange, helperText, type, ...rest }, ref) => (
    <div
      data-disabled={isDisabled}
      className={classNames(className, "zui-input-container", {
        "zui-input-error": error,
        "zui-input-success": success,
      })}
      ref={ref}
    >
      <div className={"zui-input-wrapper"}>
        <div className={"zui-input-input"}>
          {label && value && <label>{label}</label>}
          <input
            className={classNames({ "zui-input-input-empty": !value?.length })}
            onChange={(event: any) => onChange(event.target.value)}
            value={value}
            type={type}
            {...rest}
          />
        </div>
        {endEnhancer && <div className={"zui-input-enhancer-end"}>{endEnhancer}</div>}
      </div>
      {helperText && <p className={"zui-input-helper"}>{helperText}</p>}
    </div>
  )
);

export default Input;
