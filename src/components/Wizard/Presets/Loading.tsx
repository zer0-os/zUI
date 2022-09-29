import React from 'react';

import { LoadingIndicator } from '../../LoadingIndicator';

import './Loading.scss';

export interface LoadingProps {
  message: React.ReactNode | string;
}

export const Loading = ({ message }: LoadingProps) => (
  <LoadingIndicator className={'zui-wizard-loading'} text={message} />
);
