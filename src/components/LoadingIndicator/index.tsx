import React from "react";

import classNames from "classnames";

import styles from "./LoadingIndicator.module.scss";

const Spinner = ({ className, ...props }: any) => (
  <div className={classNames(styles.Spinner, className)} {...props}></div>
);

export default Spinner;
