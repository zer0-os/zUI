import React from 'react';

import { ComponentProps } from './Link.types';
import { Link as ReactRouterLink } from 'react-router-dom';

import classNames from 'classnames';
import styles from './Link.module.scss';

export interface RouterLinkProps extends ComponentProps {
  to: string;
  replace?: boolean;
}

export const RouterLink = ({ to, replace, children, className }: RouterLinkProps) => {
  console.log('got classname:', className);
  return (
    <ReactRouterLink to={to} replace={replace} className={classNames(className, styles.Container, styles.Reset)}>
      {children}
    </ReactRouterLink>
  );
};
