import React, { forwardRef, HTMLProps } from 'react';

import classNames from 'classnames';
import styles from './styles.module.scss';

export type ContainerProps = HTMLProps<HTMLElement>;

export const Container = forwardRef<HTMLElement, ContainerProps>(({ className, ...props }, ref) => {
  return <article ref={ref} className={classNames(styles.Container, className)} {...props} />;
});
