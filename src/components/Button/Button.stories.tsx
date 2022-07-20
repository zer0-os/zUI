import React from "react";
import Button from "./";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} onPress={() => alert("You clicked the button")}>
    zUI Button
  </Button>
);

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
};

export const Negative = Template.bind({});
Negative.args = {
  variant: "negative",
};

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
