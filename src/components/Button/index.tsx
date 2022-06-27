/**
 * @TODO: improve accessibility of disabled click
 * Currently, screen readers will still focus on a disabled button,
 * which is a bad pattern.
 *
 * @TODO: disable pointer cursor on hover of disabled button
 */

import { FC, useRef, createElement, ReactElement } from "react";

import { useButton } from "@react-aria/button";
import classNames from "classnames";

import LoadingIndicator from "../LoadingIndicator/index";
import styles from "./Button.module.scss";

type ButtonProps = {
  className?: string;
  children: ReactElement<any, any> | string;
  onPress: () => void;
  elementType?: "span" | "p";
  isLoading?: boolean;
  isDisabled?: boolean;
};

/**
 * An accessible styled button component
 */
const Button: FC<ButtonProps> = ({ children, className, elementType, isLoading, isDisabled, ...rest }) => {
  const ref = useRef(null);
  const { buttonProps } = useButton({ ...rest }, ref ?? null);

  return createElement(
    elementType ?? "button",
    { className: classNames(className, styles.Container), ref, "aria-disabled": isDisabled === true, ...buttonProps },
    isLoading ? LoadingIndicator : children
  );
};

export default Button;
