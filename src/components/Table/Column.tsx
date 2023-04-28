import React, { createElement, forwardRef, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './alignments.module.scss';

interface Column {
  id: string;
  header?: string;
  alignment: 'left' | 'right' | 'center';
  className?: string;
}

export interface ColumnProps {
  alignment: Column['alignment'];
  className?: string;
  children: ReactNode;
}

interface ColumnElementProps {
  element: 'th' | 'td';
  children: ReactNode;
}

export const Header = forwardRef<HTMLTableHeaderCellElement, ColumnProps>(
  ({ children, ...props }: ColumnProps, ref) => {
    return (
      <ColumnElement element="th" {...props} ref={ref}>
        {children}
      </ColumnElement>
    );
  }
);

export const Cell = forwardRef<HTMLTableCellElement, ColumnProps>(({ children, ...props }: ColumnProps, ref) => {
  return (
    <ColumnElement element="td" {...props} ref={ref}>
      {children}
    </ColumnElement>
  );
});

const ColumnElement = forwardRef<HTMLTableDataCellElement | HTMLTableHeaderCellElement, ColumnElementProps>(
  ({ alignment, element, className, children }: ColumnProps & ColumnElementProps, ref) => {
    const alignmentClass = alignment === 'left' ? styles.Left : alignment === 'center' ? styles.Center : styles.Right;
    const columnClasses = classNames(className, alignmentClass);
    return createElement(
      element,
      {
        className: columnClasses,
        'data-alignment': alignment,
        ref: ref
      },
      children
    );
  }
);
