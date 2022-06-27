import React, { FC, RefObject, useRef } from "react";

import { useLocale } from "@react-aria/i18n";
import { useNumberField } from "@react-aria/numberfield";
import { useNumberFieldState } from "@react-stately/numberfield";
import { AriaNumberFieldProps } from "@react-types/numberfield";
import classNames from "classnames";

import styles from "./Input.module.scss";

interface NumberInputProps extends AriaNumberFieldProps {
  className?: string;
}

const NumberInput: FC<NumberInputProps> = (props) => {
  const { locale } = useLocale();
  const state = useNumberFieldState({ ...props, locale });
  const inputRef = useRef() as RefObject<HTMLInputElement>;
  const { labelProps, inputProps, descriptionProps, errorMessageProps } = useNumberField(props, state, inputRef);

  return (
    <div className={classNames(props.className, styles.Container)}>
      <label {...labelProps}>{props.label}</label>
      <input {...inputProps} ref={inputRef} />
      {props.description && (
        <div {...descriptionProps} className={styles.Description}>
          {props.description}
        </div>
      )}
      {props.errorMessage && (
        <div className={styles.Error} {...errorMessageProps} style={{ color: "red", fontSize: 12 }}>
          {props.errorMessage}
        </div>
      )}
    </div>
  );
};

export default NumberInput;
