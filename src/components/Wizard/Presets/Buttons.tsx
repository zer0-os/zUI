import React from "react";

import classNames from "classnames";

import Button from "../../Button/index";
import styles from "./Buttons.module.scss";

const cx = classNames.bind(styles);

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
  <div className={cx(styles.Container, className)}>
    {onClickSecondaryButton && (
      <Button isDisabled={!isSecondaryButtonActive} onPress={onClickSecondaryButton}>
        {secondaryButtonText}
      </Button>
    )}
    <Button isDisabled={!isPrimaryButtonActive} onPress={onClickPrimaryButton}>
      {primaryButtonText}
    </Button>
  </div>
);

export default Buttons;
