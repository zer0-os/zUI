/* @TODO: this type is used elsewhere - make global? */
import React, { FC } from 'react';

import { Button } from '../../';

import styles from './NFT.module.scss';
import { TextDetail, TextDetailProps } from '../../TextDetail';

interface NFTProps extends TextDetailProps {
  buttonText: string;
  isButtonDisabled?: boolean;
  onClickButton: () => void;
  title: string;
  zna: string;
}

const NFT: FC<NFTProps> = ({
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
    <div>
      <div className={styles.Details}>
        <h4>{title}</h4>
        <span>0://{zna}</span>
      </div>
      <div className={styles.Action}>
        <TextDetail label={label} primaryText={primaryText} secondaryText={secondaryText} />
        <div>
          <Button onPress={onClickButton} isDisabled={isButtonDisabled}>
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NFT;
