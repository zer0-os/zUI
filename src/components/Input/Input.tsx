import React, { forwardRef, HTMLAttributes, InputHTMLAttributes, LabelHTMLAttributes } from "react";

import classNames from "classnames";

import styles from "./Input.module.scss";

interface InputProps {
  className?: string;
  label: string;
  value?: string | number;
  placeholderText: string | number;
  description?: string;
  errorMessage?: string;

  // @TODO: improve onChange typings
  onChange?: (val: any) => void;

  // these come from react-aria
  labelProps: LabelHTMLAttributes<HTMLLabelElement>;
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  descriptionProps: HTMLAttributes<HTMLElement>;
  errorMessageProps: HTMLAttributes<HTMLElement>;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <div className={classNames(props.className, styles.Container)}>
      <label {...props.labelProps}>{props.label}</label>
      <input {...props.inputProps} ref={ref} value={props.value} placeholder={props.placeholderText.toString()} />
      {props.description && (
        <div {...props.descriptionProps} className={styles.Description}>
          {props.description}
        </div>
      )}
      {props.errorMessage && (
        <div className={styles.Error} {...props.errorMessageProps} style={{ color: "red", fontSize: 12 }}>
          {props.errorMessage}
        </div>
      )}
    </div>
  );
});

export default Input;
