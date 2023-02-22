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
  Loading = 'loading',
  Empty = 'empty',
  Searching = 'searching',
  Error = 'error'
}

const StatusMessage = {
  [TableStatus.Loading]: 'Loading',
  [TableStatus.Empty]: 'Nothing to see here.',
  [TableStatus.Searching]: 'Searching',
  [TableStatus.Error]: 'Something went wrong!'
};

const StatusIcon = {
  [TableStatus.Loading]: <Spinner />,
  [TableStatus.Empty]: <IconFolderClosed />,
  [TableStatus.Searching]: <Spinner />,
  [TableStatus.Error]: <IconAlertCircle />
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
