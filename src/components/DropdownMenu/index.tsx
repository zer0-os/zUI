import React, { forwardRef, ReactNode } from "react";
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";

import styles from "./DropdownMenu.module.scss";

import classNames from "classnames";

interface DropdownItem {
  id: string;
  label: string | ReactNode;
  onSelect: (event?: Event) => void;
  className?: string;
  icon?: string | ReactNode;
}

interface DropdownMenuProps extends RadixDropdownMenu.DropdownMenuProps {
  items: DropdownItem[];
  trigger?: string | ReactNode | "triple-dot";

  // from RadixDropdownMenu.DropdownMenuContentProps
  side?: "top" | "right" | "bottom" | "left";
  alignMenu?: "start" | "center" | "end";

  className?: string;
  menuClassName?: string;
}

const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  (
    {
      className,
      alignMenu = "center",
      menuClassName,
      items,
      trigger = "triple-dot",
      side = "bottom",
      ...dropdownMenuProps
    },
    ref
  ) => {
    // @TODO: is attaching ref to content the best api?

    return (
      <RadixDropdownMenu.Root {...dropdownMenuProps}>
        <RadixDropdownMenu.Trigger className={classNames(className, styles.Trigger)}>
          {trigger === "triple-dot" ? "..." : trigger}
        </RadixDropdownMenu.Trigger>
        <RadixDropdownMenu.Content
          className={classNames(styles.Menu, menuClassName)}
          align={alignMenu}
          side={side}
          ref={ref}
        >
          {items.map((i) => (
            <RadixDropdownMenu.Item
              className={classNames(styles.Item, i.className)}
              key={i.id}
              onSelect={(event: Event) => i.onSelect(event)}
            >
              {typeof i.label === "string" ? i.label : <>{i.label}</>}
            </RadixDropdownMenu.Item>
          ))}
        </RadixDropdownMenu.Content>
      </RadixDropdownMenu.Root>
    );
  }
);

export default DropdownMenu;
