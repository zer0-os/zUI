import React, { CSSProperties, forwardRef, ReactNode } from 'react';

import classNames from 'classnames';
import styles from './Table.module.scss';

interface SharedProps {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

/************************
 * Table container
 ***********************/

interface TableProps extends SharedProps {}

export const Table = forwardRef<HTMLTableElement, TableProps>(({ children, className, ...props }: TableProps, ref) => {
  return (
    <table className={classNames(className, styles.Table)} ref={ref} {...props}>
      {children}
    </table>
  );
});

/************************
 * Header container
 ***********************/

interface HeaderGroupProps extends SharedProps {}

export const HeaderGroup = forwardRef<HTMLTableSectionElement, HeaderGroupProps>(
  ({ children, className, ...props }: HeaderGroupProps, ref) => {
    return (
      <thead className={classNames(className, styles.Head)} ref={ref} {...props}>
        <tr>{children}</tr>
      </thead>
    );
  }
);

/************************
 * Body container
 ***********************/

interface BodyProps extends SharedProps {}

export const Body = forwardRef<HTMLTableSectionElement, BodyProps>(
  ({ children, className, ...props }: BodyProps, ref) => {
    return (
      <tbody className={classNames(className, styles.Body)} ref={ref} {...props}>
        {children}
      </tbody>
    );
  }
);
