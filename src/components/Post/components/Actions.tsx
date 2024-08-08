import React, { forwardRef, HTMLProps } from 'react';

import classNames from 'classnames';
import styles from './styles.module.scss';

export type ActionsProps = HTMLProps<HTMLDivElement>;

export const Actions = forwardRef<HTMLDivElement, ActionsProps>(({ className, ...props }, ref) => {
  return <div ref={ref} className={classNames(styles.Actions, className)} {...props} />;
});
