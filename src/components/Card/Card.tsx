import React, { FC } from 'react';

import { TextStack, TextStackProps } from '../TextStack';

import styles from './Card.module.scss';
import classNames from 'classnames';

export interface CardProps {
  className?: string;
  label: TextStackProps['label'];
  primaryText: TextStackProps['primaryText'];
  secondaryText?: TextStackProps['secondaryText'];
}

export const Card: FC<CardProps> = ({ className, label, primaryText, secondaryText }) => (
  <TextStack
    className={classNames(styles.Container, className)}
    label={label}
    primaryText={primaryText}
    secondaryText={secondaryText}
  />
);
