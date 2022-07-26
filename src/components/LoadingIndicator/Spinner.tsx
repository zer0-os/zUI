import React from "react";

import "./Spinner.scss";
import classNames from "classnames";

const Spinner = ({ className, ...props }: any) => (
  <div className={classNames("zui-spinner", className)} {...props}></div>
);

export default Spinner;