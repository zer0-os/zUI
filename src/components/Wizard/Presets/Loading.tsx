import React from 'react';

import LoadingIndicator from '../../LoadingIndicator';

type LoadingProps = {
  message: React.ReactNode | string;
};

const Loading = ({ message }: LoadingProps) => <LoadingIndicator text={message} />;

export default Loading;
