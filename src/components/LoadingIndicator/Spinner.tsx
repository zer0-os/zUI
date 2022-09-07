import React from 'react';

import './Spinner.scss';
import classNames from 'classnames';

export type SpinnerProps = React.HTMLAttributes<HTMLDivElement>;

export const Spinner = ({ className, ...props }: SpinnerProps) => (
  <div className={classNames('zui-spinner', className)} {...props}></div>
);
