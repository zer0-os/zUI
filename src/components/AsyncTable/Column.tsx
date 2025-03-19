import React, { createElement, ReactNode } from 'react';

import { startCase, toLower } from 'lodash';

import classNames from 'classnames/bind';
import styles from './alignments.module.scss';

const cx = classNames.bind(styles);

export interface Column {
  id: string; // ID is required because header is optional
  header?: string;
  alignment: 'left' | 'right' | 'center';
  className?: string;
}

interface ColumnProps {
  alignment: Column['alignment'];
  className?: string;
  children: ReactNode;
}

interface ColumnElementProps {
  element: 'th' | 'td';
}

export const TableHeader = ({ children, ...props }: ColumnProps) => {
  return (
    <ColumnElement element="th" {...props}>
      {children}
    </ColumnElement>
  );
};

export const TableData = ({ children, ...props }: ColumnProps) => {
  return (
    <ColumnElement element="td" {...props}>
      {children}
    </ColumnElement>
  );
};

const ColumnElement = ({ alignment, element, className, children }: ColumnProps & ColumnElementProps) => {
  return createElement(
    element,
    {
      className: cx(className, styles[startCase(toLower(alignment))])
    },
    children
  );
};
