import React, { forwardRef, HTMLProps } from 'react';

import classNames from 'classnames';
import styles from './styles.module.scss';

export type NameProps = {
  variant?: 'name' | 'username';
} & HTMLProps<HTMLHeadingElement>;

export const Name = forwardRef<HTMLHeadingElement, NameProps>(({ className, variant = 'name', ...props }, ref) => {
  const classes = classNames(variant === 'name' ? styles.Name : styles.Username, className);

  const allProps = {
    ...props,
    className: classes,
    ref: ref
  };

  if (variant === 'username') {
    return <span {...allProps} />;
  } else {
    return <h3 {...allProps} />;
  }
});
