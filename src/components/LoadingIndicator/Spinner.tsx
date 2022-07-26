// @TODO: make a nicer spinner

import React from 'react';

import classNames from 'classnames';

import styles from './Spinner.module.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Spinner = ({ className, ...props }: any) => (
  <div className={classNames(styles.Spinner, className)} {...props}></div>
);

export default Spinner;
