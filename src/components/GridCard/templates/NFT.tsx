import React, { FC } from 'react';

import { Button } from '../../Button';
import { TextStack, TextStackProps } from '../../TextStack';

import styles from './NFT.module.scss';

export interface NFTProps extends TextStackProps {
  className?: string;
  buttonText: string;
  isButtonDisabled?: boolean;
  onClickButton: () => void;
  title: string;
  zna: string;
}

export const NFT: FC<NFTProps> = ({
  className,
  buttonText,
  isButtonDisabled,
  label,
  onClickButton,
  primaryText,
  secondaryText,
  title,
  zna
}) => {
  return (
    <div className={className}>
      <div className={styles.Details}>
        <h4>{title}</h4>
        <span>0://{zna}</span>
      </div>
      <div className={styles.Action}>
        <TextStack label={label} primaryText={primaryText} secondaryText={secondaryText} />
        <div className={styles.Button}>
          <Button onPress={onClickButton} isDisabled={isButtonDisabled}>
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};
