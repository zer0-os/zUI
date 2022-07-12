// @TODO: make a nicer spinner

import styles from "./Spinner.module.scss";
import classNames from "classnames";
import React from "react";

const Spinner = ({ className, ...props }: any) => (
  <div className={classNames(styles.Spinner, className)} {...props}></div>
);

export default Spinner;
