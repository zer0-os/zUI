import React from 'react';

import classNames from 'classnames';

import { Button, ButtonProps } from '../../Button';

import './Buttons.scss';

export interface ButtonsProps {
  className?: string;
  isPrimaryButtonActive?: boolean;
  isSecondaryButtonActive?: boolean;
  onClickPrimaryButton: () => void;
  onClickSecondaryButton?: () => void;
  primaryButtonVariant?: ButtonProps['variant'];
  secondaryButtonVariant?: ButtonProps['variant'];
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

export const Buttons = ({
  className,
  isPrimaryButtonActive = false,
  isSecondaryButtonActive = false,
  onClickPrimaryButton,
  onClickSecondaryButton,
  primaryButtonVariant = 'primary',
  secondaryButtonVariant = 'negative',
  primaryButtonText = 'Continue',
  secondaryButtonText = 'Cancel'
}: ButtonsProps) => (
  <div className={classNames('zui-wizard-buttons', className)}>
    {onClickSecondaryButton && (
      <Button variant={secondaryButtonVariant} isDisabled={!isSecondaryButtonActive} onPress={onClickSecondaryButton}>
        {secondaryButtonText}
      </Button>
    )}
    <Button variant={primaryButtonVariant} isDisabled={!isPrimaryButtonActive} onPress={onClickPrimaryButton}>
      {primaryButtonText}
    </Button>
  </div>
);
