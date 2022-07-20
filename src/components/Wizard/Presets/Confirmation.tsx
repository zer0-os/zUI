import React, { useMemo } from "react";

import classNames from "classnames/bind";

import Buttons, { ButtonsProps } from "./Buttons";
import "./Confirmation.scss";

interface ConfirmationProps extends ButtonsProps {
  error?: string;
  message: React.ReactNode | string;
}

const Confirmation = ({ className, message, error, ...rest }: ConfirmationProps) => {
  const isMessageString = useMemo(() => {
    return ["string", "number"].includes(typeof message);
  }, [message]);

  return (
    <div className={classNames("zui-wizard-confirmation", className)}>
      {isMessageString ? <p>{message}</p> : message}
      {error !== undefined && <p className="error-text">{error}</p>}
      <Buttons {...rest} />
    </div>
  );
};

export default Confirmation;
