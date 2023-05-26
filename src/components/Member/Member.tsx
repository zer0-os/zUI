import React, { FC } from 'react';

import classNames from 'classnames';
import styles from './Member.module.scss';

type LabelVariant = 'primary' | 'secondary';

export type MemberProps = {
  label: string;
  href?: string;
  className?: string;
  variant?: LabelVariant;
};

export const Member: FC<MemberProps> = ({ label, href, children, className, variant = 'primary' }) => {
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
