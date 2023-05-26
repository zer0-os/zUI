import React, { forwardRef, ReactNode } from 'react';

import styles from './Grid.module.scss';
import classNames from 'classnames';

interface GridProps {
  className?: string;
  children: ReactNode;
}

export const Grid = forwardRef<HTMLDivElement, GridProps>(({ className, children }: GridProps, ref) => {
  const numChildren = React.Children.count(children);

  return (
    <div className={classNames(styles.Grid, className)} ref={ref}>
      {children}
      <Placeholder numChildren={numChildren} />
    </div>
  );
});

/************************
 * Placeholder
 ***********************/

interface PlaceholderProps {
  numChildren: number;
}

const Placeholder = ({ numChildren }: PlaceholderProps) => {
  if (numChildren < 3) {
    return (
      <>
        {Array.from({ length: 3 - numChildren }, (_, i) => (
          <div key={i} data-testid="zui-grid-placeholder" />
        ))}
      </>
    );
  } else {
    return null;
  }
};
