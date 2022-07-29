import React, { FC, ReactNode } from "react";

import { AriaTextFieldProps } from "@react-types/textfield";

import TextInput from "./Input";
import NumberInput from "./NumberInput";

import "./Input.scss";

export interface InputProps extends Omit<AriaTextFieldProps, "value" | "onChange"> {
  className?: string;
  error?: boolean;
  success?: boolean;
  helperText?: string;
  startEnhancer?: ReactNode;
  endEnhancer?: ReactNode;
  value: string;
  onChange: (value: string) => void;
  label?: string;
}

const Input: FC<InputProps> = (props) => {
  return props.type === "number" ? <NumberInput {...props} /> : <TextInput {...props} />;
};

export default Input;
