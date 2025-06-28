import React from 'react';

import { IconLoading2 } from '../../icons';

import classNames from 'classnames';
import styles from './Spinner.module.scss';

export type SpinnerProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;

export const Spinner = ({ className, ...props }: SpinnerProps) => (
  <div className={classNames(styles.Spinner, className)} {...props} data-testid="spinner">
    <IconLoading2 size={16} color="var(--color-greyscale-transparency-12)" />
  </div>
);
