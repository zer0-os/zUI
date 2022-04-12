import React, { FC } from "react";

import { ButtonProps, Button as BaseButton } from "baseui/button";

interface IButton {
  size?: ButtonProps["size"];
  type?: ButtonProps["type"];
}

const Button: FC<IButton> = ({ children, size = "default", type = "button" }) => {
  return (
    <BaseButton size={size} shape="pill" type={type}>
      {children}
    </BaseButton>
  );
};

export default Button;
