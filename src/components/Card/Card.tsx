import React, { FC } from 'react';

import { TextDetail, TextDetailProps } from '../TextDetail';

import styles from './Card.module.scss';
import classNames from 'classnames';

export interface CardProps {
  className?: string;
  label: TextDetailProps['label'];
  primaryText: TextDetailProps['primaryText'];
  secondaryText?: TextDetailProps['secondaryText'];
}

export const Card: FC<CardProps> = ({ className, label, primaryText, secondaryText }) => (
  <TextDetail
    className={classNames(styles.Container, className)}
    label={label}
    primaryText={primaryText}
    secondaryText={secondaryText}
  />
);
