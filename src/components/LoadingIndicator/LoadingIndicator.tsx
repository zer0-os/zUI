import React, { ReactNode } from "react";

import Spinner from "./Spinner";

import "./LoadingIndicator.module.scss";
import classNames from "classnames";

export type LoadingIndicatorProps = {
  className?: string;
  text?: string | ReactNode;
  style?: React.CSSProperties;
  spinnerPosition?: "bottom" | "left" | "right";
};

const LoadingIndicator = ({ className, style, text, spinnerPosition = "bottom" }: LoadingIndicatorProps) => {
  return (
    <div
      style={style}
      className={classNames("zui-loading-indicator", `zui-loading-indicator-${spinnerPosition}`, className)}
    >
      <Spinner />
      {text && (
        <div className={classNames("zui-loading-indicator-text", `zui-loading-indicator-text-${spinnerPosition}`)}>
          {text}
        </div>
      )}
    </div>
  );
};

export default LoadingIndicator;
