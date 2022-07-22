import React, { forwardRef, ReactNode } from "react";
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";

import "./DropdownMenu.scss";

import classNames from "classnames";

export interface DropdownItem {
  id: string;
  label: string | ReactNode;
  onSelect: (event?: Event) => void;
  className?: string;
  icon?: string | ReactNode;
}

export interface DropdownMenuProps extends RadixDropdownMenu.DropdownMenuProps {
  items: DropdownItem[];
  trigger?: string | ReactNode | "triple-dot";

  // from RadixDropdownMenu.DropdownMenuContentProps
  side?: "top" | "right" | "bottom" | "left";
  alignMenu?: "start" | "center" | "end";

  className?: string;
  menuClassName?: string;
}

const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  ({ className, alignMenu = "center", items, trigger = "triple-dot", side = "bottom", ...dropdownMenuProps }, ref) => {
    return (
      <RadixDropdownMenu.Root {...dropdownMenuProps}>
        <RadixDropdownMenu.Trigger className={classNames(className, "zui-dropdown-trigger")}>
          {trigger === "triple-dot" ? "..." : trigger}
        </RadixDropdownMenu.Trigger>
        <RadixDropdownMenu.Content className={"zui-dropdown-menu"} align={alignMenu} side={side} ref={ref}>
          {items.map((i) => (
            <RadixDropdownMenu.Item
              className={classNames("zui-dropdown-item", i.className)}
              key={i.id}
              onSelect={(event: Event) => i.onSelect(event)}
            >
              {i.label}
            </RadixDropdownMenu.Item>
          ))}
        </RadixDropdownMenu.Content>
      </RadixDropdownMenu.Root>
    );
  }
);

export default DropdownMenu;
