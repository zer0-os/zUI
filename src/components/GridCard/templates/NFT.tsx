import React, { FC } from 'react';

import { Button } from '../../Button';
import { TextStack, TextStackProps } from '../../TextStack';

import styles from './NFT.module.scss';
import { AsyncText } from '../../../lib/types';
import { MaybeSkeletonText } from '../../SkeletonText';

export interface NFTProps extends TextStackProps {
  className?: string;
  buttonText: string;
  isButtonDisabled?: boolean;
  onClickButton: () => void;
  title: string | AsyncText;
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
        <MaybeSkeletonText as={'h4'} text={title} />
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
