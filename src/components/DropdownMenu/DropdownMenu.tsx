import React, { forwardRef, ReactNode } from 'react';

import {
  DropdownMenuProps as RadixUIDropdownMenuProps,
  Root as RadixUIDropdownMenuRoot,
  Trigger as RadixUIDropdownMenuTrigger,
  Content as RadixUIDropdownMenuContent,
  Item as RadixUIDropdownMenuItem
} from '@radix-ui/react-dropdown-menu';

import './DropdownMenu.scss';

import classNames from 'classnames';

export interface DropdownItem {
  id: string;
  label: string | ReactNode;
  onSelect: (event?: Event) => void;
  className?: string;
  icon?: string | ReactNode;
}

export interface DropdownMenuProps extends RadixUIDropdownMenuProps {
  items: DropdownItem[];
  trigger?: ReactNode | 'triple-dot';

  // from RadixDropdownMenu.DropdownMenuContentProps
  side?: 'top' | 'right' | 'bottom' | 'left';
  alignMenu?: 'start' | 'center' | 'end';

  className?: string;
  menuClassName?: string;
}

export const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  ({ className, alignMenu = 'center', items, trigger = 'triple-dot', side = 'bottom', ...dropdownMenuProps }, ref) => {
    return (
      <RadixUIDropdownMenuRoot {...dropdownMenuProps}>
        <RadixUIDropdownMenuTrigger className={classNames(className, 'zui-dropdown-trigger')}>
          {trigger === 'triple-dot' ? '...' : trigger}
        </RadixUIDropdownMenuTrigger>
        <RadixUIDropdownMenuContent className={'zui-dropdown-menu'} align={alignMenu} side={side} ref={ref}>
          {items.map(i => (
            <RadixUIDropdownMenuItem
              className={classNames('zui-dropdown-item', i.className)}
              key={i.id}
              onSelect={(event: Event) => i.onSelect(event)}
            >
              {i.label}
            </RadixUIDropdownMenuItem>
          ))}
        </RadixUIDropdownMenuContent>
      </RadixUIDropdownMenuRoot>
    );
  }
);
