import React, { FC, useRef, createElement, ReactElement } from "react";

import { useButton } from "@react-aria/button";
import classNames from "classnames";

import "./Button.scss";
import "focus-visible";

type ButtonProps = {
  className?: string;
  children: ReactElement<any, any> | string;
  onPress?: () => void;
  onPressStart?: () => void;
  onPressEnd?: () => void;

  variant?: "primary" | "secondary" | "negative" | "text";
  isLoading?: boolean;
  isDisabled?: boolean;
};

const Button: FC<ButtonProps> = ({ children, className, isLoading, isDisabled, variant = "primary", ...rest }) => {
  const ref = useRef(null);
  const { buttonProps, isPressed } = useButton({ ...rest }, ref ?? null);

  return createElement(
    "button",
    {
      className: classNames(className, "zui-button", `zui-button-${variant}`, {
        "zui-button-active": isPressed,
      }),
      ref,
      "aria-disabled": isDisabled || isLoading,
      ...buttonProps,
    },
    <>
      <div className="zui-button-content">{children}</div>
      <div className="zui-button-wash"></div>
    </>
  );
};

export default Button;
