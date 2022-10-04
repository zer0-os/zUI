import React from 'react';

import classNames from 'classnames';

import { Button } from '../../../Button';

import './Buttons.scss';

export interface ButtonsProps {
  className?: string;
  isPrimaryButtonActive?: boolean;
  isSecondaryButtonActive?: boolean;
  onClickPrimaryButton: () => void;
  onClickSecondaryButton?: () => void;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

export const Buttons = ({
  className,
  isPrimaryButtonActive = false,
  isSecondaryButtonActive = false,
  onClickPrimaryButton,
  onClickSecondaryButton,
  primaryButtonText = 'Continue',
  secondaryButtonText = 'Cancel'
}: ButtonsProps) => (
  <div className={classNames('zui-wizard-buttons', className)}>
    {onClickSecondaryButton && (
      <Button
        data-testid="secondary-button"
        variant="negative"
        isDisabled={!isSecondaryButtonActive}
        onPress={onClickSecondaryButton}
      >
        {secondaryButtonText}
      </Button>
    )}
    <Button isDisabled={!isPrimaryButtonActive} onPress={onClickPrimaryButton}>
      {primaryButtonText}
    </Button>
  </div>
);
