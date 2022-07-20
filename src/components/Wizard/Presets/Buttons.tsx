import React from "react";

import Button from "../../Button";

import classNames from "classnames";
import "./Buttons.scss";

export interface ButtonsProps {
  className?: string;
  isPrimaryButtonActive?: boolean;
  isSecondaryButtonActive?: boolean;
  onClickPrimaryButton: () => void;
  onClickSecondaryButton?: () => void;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

const Buttons = ({
  className,
  isPrimaryButtonActive = false,
  isSecondaryButtonActive = false,
  onClickPrimaryButton,
  onClickSecondaryButton,
  primaryButtonText = "Continue",
  secondaryButtonText = "Cancel",
}: ButtonsProps) => (
  <div className={classNames("zui-wizard-buttons", className)}>
    {onClickSecondaryButton && (
      <Button variant="negative" isDisabled={!isSecondaryButtonActive} onPress={onClickSecondaryButton}>
        {secondaryButtonText}
      </Button>
    )}
    <Button isDisabled={!isPrimaryButtonActive} onPress={onClickPrimaryButton}>
      {primaryButtonText}
    </Button>
  </div>
);

export default Buttons;
