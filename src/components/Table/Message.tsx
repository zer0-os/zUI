import React, { ReactNode } from 'react';

import { Spinner } from '../LoadingIndicator';
import { IconFolderClosed, IconAlertCircle } from '../Icons';

import classNames from 'classnames';
import styles from './Message.module.scss';

/*************************
 * TableMessage
 ************************/

interface TableMessageProps {
  className?: string;
  children: ReactNode;
}

const TableMessage = ({ className, children }: TableMessageProps) => {
  return <div className={classNames(styles.Container, className)}>{children}</div>;
};

/*************************
 * Table Status Message
 ************************/

export enum TableStatus {
  LOADING = 'loading',
  EMPTY = 'empty',
  SEARCHING = 'searching',
  ERROR = 'error'
}

const StatusMessage = {
  [TableStatus.LOADING]: 'Loading',
  [TableStatus.EMPTY]: 'Nothing to see here.',
  [TableStatus.SEARCHING]: 'Searching',
  [TableStatus.ERROR]: 'Something went wrong!'
};

const StatusIcon = {
  [TableStatus.LOADING]: <Spinner />,
  [TableStatus.EMPTY]: <IconFolderClosed />,
  [TableStatus.SEARCHING]: <Spinner />,
  [TableStatus.ERROR]: <IconAlertCircle />
};

interface TableStatusMessageProps {
  className?: string;
  status: TableStatus;
  message?: ReactNode;
}

export const TableStatusMessage = ({ className, status, message }: TableStatusMessageProps): JSX.Element => {
  return (
    <TableMessage className={className}>
      {StatusIcon[status]} {message ?? StatusMessage[status]}
    </TableMessage>
  );
};
