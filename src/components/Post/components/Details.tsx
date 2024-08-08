import React, { forwardRef, HTMLProps } from 'react';

import classNames from 'classnames';
import styles from './styles.module.scss';

export type DetailsProps = HTMLProps<HTMLDivElement>;

export const Details = forwardRef<HTMLDivElement, DetailsProps>(({ className, ...props }, ref) => {
  return <div ref={ref} className={classNames(styles.Details, className)} {...props} />;
});
