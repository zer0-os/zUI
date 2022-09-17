import React from 'react';

import { ComponentProps } from './Link.types';

import classNames from 'classnames';
import styles from './Link.module.scss';

export interface ButtonLinkProps extends ComponentProps {
  onClick: () => void;
}

export const ButtonLink = ({ onClick: onClickProps, children, className, isDisabled }: ButtonLinkProps) => {
  const onClick = () => {
    if (!isDisabled) {
      onClickProps();
    }
  };

  return (
    <button onClick={onClick} className={classNames(className, styles.Container, styles.Reset)}>
      {children}
    </button>
  );
};
