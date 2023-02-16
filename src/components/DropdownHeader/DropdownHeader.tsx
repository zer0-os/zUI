import React, { FC, ReactNode } from 'react';

import './DropdownHeader.scss';

import classNames from 'classnames';

export interface DropdownHeaderProps {
  /** Item to render inside the Header */
  item: string | ReactNode;

  /** Class to apply to the container */
  className?: string;

  /** Class to apply to the text */
  titleClassName?: string;
}

export const DropdownHeader: FC<DropdownHeaderProps> = ({ item, className, titleClassName }) => {
  const itemElement =
    typeof item === 'string' ? (
      <span className={classNames('zui-dropdown-header-title', titleClassName)}>{item}</span>
    ) : (
      item
    );

  return <div className={classNames('zui-dropdown-header-container', className)}>{itemElement}</div>;
};
