import React, { FC, ReactNode } from 'react';

import { AsyncText } from '../../../lib/types';

import { TextStack, TextStackProps } from '../../TextStack';
import { MaybeSkeletonText } from '../../SkeletonText';

import styles from './NFT.module.scss';

export interface NFTProps extends TextStackProps {
  className?: string;
  button?: ReactNode;
  title: string | AsyncText;
  zna: string;
}

export const NFT: FC<NFTProps> = ({ className, button, label, primaryText, secondaryText, title, zna }) => {
  return (
    <div className={className}>
      <div className={styles.Details}>
        <MaybeSkeletonText as={'h4'} text={title} />
        <span>0://{zna}</span>
      </div>
      <div className={styles.Action}>
        <TextStack label={label} primaryText={primaryText} secondaryText={secondaryText} />
        {button && <div className={styles.Button}>{button}</div>}
      </div>
    </div>
  );
};
