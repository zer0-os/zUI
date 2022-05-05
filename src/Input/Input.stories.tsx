import React from "react";
import Input from "./";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
