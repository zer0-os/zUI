/**
 * @TODO: improve accessibility of disabled click
 * Currently, screen readers will still focus on a disabled button,
 * which is a bad pattern.
 *
 * @TODO: disable pointer cursor on hover of disabled button
 */

import React from "react";
import {FC, useRef, createElement, ReactElement} from "react";

import {useButton} from "@react-aria/button";
import classNames from "classnames";

import LoadingIndicator from "../LoadingIndicator/index";
import "./Button.scss";
import 'focus-visible';

type ButtonProps = {
  className?: string;
  children: ReactElement<any, any> | string;
  onPress?: () => void;
  onPressStart?: () => void;
  onPressEnd?: () => void;
  href?: string;

  elementType?: "span" | "p";
  isLoading?: boolean;
  isDisabled?: boolean;
};

/**
 * An accessible styled button component
 */
const Button: FC<ButtonProps> = ({children, className, elementType, isLoading, isDisabled, ...rest}) => {
  const ref = useRef(null);
  const {buttonProps} = useButton({...rest, elementType}, ref ?? null);

  return createElement(
      elementType ?? "button",
      {
        className: classNames(className, 'zui-button'),
        ref,
        "aria-disabled": isDisabled || isLoading,
        ...buttonProps,
      },
      <>
        <div className='zui-button-content'>{children}</div>
        <div className='zui-button-wash'></div>
      </>
  );
};

export default Button;
