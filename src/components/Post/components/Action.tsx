import { ButtonHTMLAttributes, forwardRef } from 'react';

import classNames from 'classnames';
import styles from './styles.module.scss';

export type ActionProps = {
  isLoading?: boolean;
  isDisabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Action = forwardRef<HTMLButtonElement, ActionProps>(
  ({ className, isLoading, isDisabled, ...props }, ref) => {
    const disabled = props.disabled || isDisabled || isLoading;

    return (
      <button
        ref={ref}
        className={classNames(styles.Action, isLoading && 'react-loading-skeleton', className)}
        data-is-loading={isLoading ? '' : null}
        disabled={disabled}
        {...props}
      />
    );
  }
);
