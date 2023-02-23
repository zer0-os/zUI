import React, { ReactNode } from 'react';

import { Spinner } from '../LoadingIndicator';
import { IconFolderClosed, IconAlertCircle } from '../Icons';

import styles from './Message.module.scss';

/*************************
 * TableMessage
 ************************/

interface TableMessageProps {
  children: ReactNode;
}

const TableMessage = ({ children }: TableMessageProps) => {
  return <div className={styles.Container}>{children}</div>;
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
  status: TableStatus;
  message?: ReactNode;
}

export const TableStatusMessage = ({ status, message }: TableStatusMessageProps): JSX.Element => {
  return (
    <TableMessage>
      {StatusIcon[status]} {message ?? StatusMessage[status]}
    </TableMessage>
  );
};
