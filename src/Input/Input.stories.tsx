import React from "react";
import Button from "./";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Hello</Button>;

export const Primary = Template.bind({});
Primary.args = { kind: "primary" };

export const Secondary = Template.bind({});
Secondary.args = { kind: "secondary" };
