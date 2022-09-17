import React, { useMemo } from 'react';

import { SharedProps } from './Link.types';
import { BackLink, BackLinkProps, ButtonLink, ButtonLinkProps, RouterLink, RouterLinkProps } from './variations';

import classNames from 'classnames/bind';
import styles from './Link.module.scss';
const cx = classNames.bind(styles);

export type LinkProps = SharedProps & (RouterLinkProps | ButtonLinkProps | BackLinkProps);

export const Link = ({ as = 'link', variant = 'primary', className, children, ...rest }: LinkProps) => {
  const classes = cx(className, styles[variant.charAt(0).toUpperCase() + variant.slice(1)], {
    Disabled: rest.isDisabled
  });

  const props = { ...rest, className: classes };

  const WrappedChildren = useMemo(() => <span>{children}</span>, [children]);

  switch (as) {
    case 'button':
      return <ButtonLink {...(props as ButtonLinkProps)} children={WrappedChildren} />;
    case 'link':
      return <RouterLink {...(props as RouterLinkProps)} children={WrappedChildren} />;
    case 'back':
      return <BackLink {...(props as BackLinkProps)} children={WrappedChildren} />;
  }
};
