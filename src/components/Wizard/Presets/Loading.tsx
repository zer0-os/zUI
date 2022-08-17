import React from 'react';

import LoadingIndicator from '../../LoadingIndicator';

export interface LoadingProps {
  message: React.ReactNode | string;
}

const Loading = ({ message }: LoadingProps) => <LoadingIndicator className={'zui-wizard-loading'} text={message} />;

export default Loading;
