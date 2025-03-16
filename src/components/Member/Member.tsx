import React, { FC, PropsWithChildren } from 'react';

import classNames from 'classnames';
import styles from './Member.module.scss';

export type LabelVariant = 'primary' | 'secondary';

export interface MemberProps {
  label: string;
  href?: string;
  className?: string;
  variant?: LabelVariant;
}

export const Member: FC<PropsWithChildren<MemberProps>> = ({
  label,
  href,
  children,
  className,
  variant = 'primary'
}) => {
  return (
    <div className={classNames(styles.Container, className)}>
      <label className={styles.Label} data-variant={variant}>
        {label}
      </label>

      {href ? (
        <a className={styles.Content} href={href} target={'_blank'} rel={'noreferrer'}>
          {children}
        </a>
      ) : (
        <div className={styles.Content}>{children}</div>
      )}
    </div>
  );
};
