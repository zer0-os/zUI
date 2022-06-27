import React, { FC, useRef } from "react";

import { useTextField } from "@react-aria/textfield";

import Input from "./Input";

interface TextInputProps {
  className?: string;
  label: string;
  value?: string;
  placeholderText: string;
  description?: string;
  errorMessage?: string;
  onChange?: (value: string) => void;
}

const TextInput: FC<TextInputProps> = (props: TextInputProps) => {
  const ref = useRef(null);
  const accessibilityProps = useTextField(props, ref);

  const onChange = (val: any) => {
    console.log(val);
  };

  return <Input ref={ref} {...props} {...accessibilityProps} onChange={onChange} />;
};

export default TextInput;
