import React, { forwardRef, ReactNode, FC } from 'react';

import {
  DropdownMenuProps as RadixUIDropdownMenuProps,
  DropdownMenuContentProps as RadixUIDropdownMenuContentProps,
  Root as RadixUIDropdownMenuRoot,
  Trigger as RadixUIDropdownMenuTrigger,
  Content as RadixUIDropdownMenuContent,
  Item as RadixUIDropdownMenuItem
} from '@radix-ui/react-dropdown-menu';

import './DropdownMenu.scss';

import classNames from 'classnames';

export interface DropdownItem {
  /** Unique ID to use in Array.map() */
  id: string;
  /** Label to appear in the menu */
  label: string | ReactNode;
  /** Callback to run when an item is selected */
  onSelect: (event?: Event) => void;
  className?: string;
}

export interface DropdownMenuProps {
  /** Childrens to render as content in the dropdown */
  children?: ReactNode;
  /** List of items to render in the dropdown menu */
  items: DropdownItem[];
  /** Clicking this will make the dropdown menu appear */
  trigger?: ReactNode;

  // from RadixDropdownMenu.DropdownMenuProps
  open?: RadixUIDropdownMenuProps['open'];
  defaultOpen?: RadixUIDropdownMenuProps['defaultOpen'];
  onOpenChange?: RadixUIDropdownMenuProps['onOpenChange'];

  // from RadixDropdownMenu.DropdownMenuContentProps
  side?: RadixUIDropdownMenuContentProps['side'];
  alignMenu?: RadixUIDropdownMenuContentProps['align'];

  /** Class to apply to the trigger */
  className?: string;

  /** Class to apply to the menu */
  menuClassName?: string;
}

export const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  (
    {
      children,
      className,
      menuClassName,
      alignMenu = 'center',
      items,
      trigger,
      side = 'bottom',
      open,
      defaultOpen,
      onOpenChange
    },
    ref
  ) => {
    const triggerElement = !trigger ? <span>...</span> : typeof trigger === 'string' ? <span>{trigger}</span> : trigger;

    return (
      <RadixUIDropdownMenuRoot open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
        <RadixUIDropdownMenuTrigger className={classNames(className, 'zui-dropdown-trigger')}>
          {triggerElement}
        </RadixUIDropdownMenuTrigger>
        <RadixUIDropdownMenuContent
          className={classNames(menuClassName, 'zui-dropdown-menu')}
          align={alignMenu}
          side={side}
          ref={ref}
        >
          {children}
          {items.map(item => (
            <RadixUIDropdownMenuItem
              className={classNames('zui-dropdown-item', item.className)}
              key={item.id}
              onSelect={(event: Event) => item.onSelect(event)}
            >
              {item.label}
            </RadixUIDropdownMenuItem>
          ))}
        </RadixUIDropdownMenuContent>
      </RadixUIDropdownMenuRoot>
    );
  }
);

export interface HeaderProps {
  /** Item to render inside the Header */
  item: string | ReactNode;

  /** Class to apply to the container */
  className?: string;

  /** Class to apply to the text */
  titleClassName?: string;
}

export const Header: FC<HeaderProps> = ({ item, className, titleClassName }) => {
  const itemElement =
    typeof item === 'string' ? (
      <span className={classNames('zui-dropdown-header-title', titleClassName)}>{item}</span>
    ) : (
      item
    );

  return <div className={classNames('zui-dropdown-header-container', className)}>{itemElement}</div>;
};
