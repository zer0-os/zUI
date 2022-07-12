import Spinner from "./Spinner";

import styles from "./LoadingIndicator.module.scss";
import classNames from "classnames/bind";
import { ReactNode } from "react";
import React from "react";

const cx = classNames.bind(styles);

type LoadingIndicatorProps = {
  className?: string;
  text: string | ReactNode;
  subtext?: string | ReactNode;
  style?: React.CSSProperties;
  spinnerPosition?: "bottom" | "left";
};

const LoadingIndicator = ({ className, style, text, subtext, spinnerPosition = "bottom" }: LoadingIndicatorProps) => {
  return (
    <div
      style={style}
      className={cx(styles.Container, className, {
        Left: spinnerPosition === "left",
      })}
    >
      {spinnerPosition === "left" && <Spinner />}
      <div className={styles.TextContainer}>{text}</div>
      {subtext && <div className={styles.SubtextContainer}>{subtext}</div>}
      {spinnerPosition !== "left" && <Spinner />}
    </div>
  );
};

export default LoadingIndicator;
