import React, { createElement, forwardRef, ReactNode } from 'react';

/**
 * Note: typings here could be improved here
 */
interface Column {
  id: string; // ID is required because header is optional
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
    return createElement(
      element,
      {
        className,
        'data-alignment': alignment,
        ref: ref
      },
      children
    );
  }
);
