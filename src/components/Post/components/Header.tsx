import React, { forwardRef, HTMLProps } from 'react';

import classNames from 'classnames';
import styles from './styles.module.scss';

export type HeaderProps = HTMLProps<HTMLDivElement>;

export const Header = forwardRef<HTMLDivElement, HeaderProps>(({ className, ...props }, ref) => {
  return <div ref={ref} className={classNames(styles.Header, className)} {...props} />;
});
