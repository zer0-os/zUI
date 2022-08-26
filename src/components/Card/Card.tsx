import React, { FC } from 'react';

import { TextDetail, TextDetailProps } from '../TextDetail';

import styles from './Card.module.scss';

export interface CardProps {
  title: TextDetailProps['label'];
  value: TextDetailProps['primaryText'];
  bottomText?: TextDetailProps['secondaryText'];
}

const Card: FC<CardProps> = ({ title, value, bottomText }) => (
  <div className={styles.Container}>
    <TextDetail label={title} primaryText={value} secondaryText={bottomText} />
  </div>
);

export default Card;
