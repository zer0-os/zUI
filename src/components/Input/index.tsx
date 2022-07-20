import NumberInput from "./NumberInput";
import { AriaTextFieldProps } from "@react-types/textfield";
import { FC, ReactNode } from "react";
import TextInput from "./Input";
import React from "react";

export interface InputProps extends Omit<AriaTextFieldProps, "value" | "onChange"> {
  className?: string;
  error?: boolean;
  success?: boolean;
  helperText?: string;
  endEnhancer?: ReactNode;
  value: string;
  onChange: (value: string) => void;
  label: string;
}

const Input: FC<InputProps> = (props) => {
  if (props.type === "number") {
    return <NumberInput {...props} />;
  } else {
    return <TextInput {...props} />;
  }
};

export default Input;
