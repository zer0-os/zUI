import React, { FC, ReactNode, RefObject, useRef } from "react";

import { useLocale } from "@react-aria/i18n";
import { useNumberField } from "@react-aria/numberfield";
import { useNumberFieldState } from "@react-stately/numberfield";
import { AriaNumberFieldProps } from "@react-types/numberfield";
import classNames from "classnames/bind";

import styles from "./Input.module.scss";

const cx = classNames.bind(styles);

interface NumberInputProps extends AriaNumberFieldProps {
  className?: string;
  error?: boolean;
  success?: boolean;
  helperText?: string;
  endEnhancer?: ReactNode;
}

const NumberInput: FC<NumberInputProps> = ({
  maxValue,
  endEnhancer,
  formatOptions = { maximumFractionDigits: 18 },
  ...props
}) => {
  const { locale } = useLocale();
  const state = useNumberFieldState({ ...{ ...props, ...formatOptions }, locale });
  const inputRef = useRef() as RefObject<HTMLInputElement>;
  const { labelProps, inputProps } = useNumberField(props, state, inputRef);

  return (
    <div
      data-disabled={inputProps.disabled}
      className={cx(props.className, styles.Container, { Error: props.error, Success: props.success })}
    >
      <div className={styles.Wrapper}>
        <div className={styles.Input}>
          {props.label && state.inputValue && <label {...labelProps}>{props.label}</label>}
          <input {...inputProps} ref={inputRef} />
        </div>
        {endEnhancer && <div className={styles.EndEnhancer}>{endEnhancer}</div>}
      </div>
      {/*{props.description && (*/}
      {/*  <div {...descriptionProps} className={styles.Description}>*/}
      {/*    {props.description}*/}
      {/*  </div>*/}
      {/*)}*/}
      {props.helperText && <p className={styles.Helper}>{props.helperText}</p>}
    </div>
  );
};

export default NumberInput;
