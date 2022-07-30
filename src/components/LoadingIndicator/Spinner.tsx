import React from 'react';

import './Spinner.scss';
import classNames from 'classnames';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Spinner = ({ className, ...props }: any) => (
  <div className={classNames('zui-spinner', className)} {...props}></div>
);

export default Spinner;
