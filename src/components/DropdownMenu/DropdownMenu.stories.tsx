import React from "react";
import DropdownMenu from "./";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Dropdown Menu",
  component: DropdownMenu,
} as ComponentMeta<typeof DropdownMenu>;

const Template: ComponentStory<typeof DropdownMenu> = (args) => (
  <DropdownMenu
    trigger={"Open"}
    items={[{ id: 1, label: "Option 1", onSelect: () => console.log("selected Option 1") }]}
  />
);

export const Primary = Template.bind({});
