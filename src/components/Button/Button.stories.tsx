import React from "react";
import Button from "./";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} onPress={() => alert("You clicked the button")}>
    Click me!
  </Button>
);

export const Primary = Template.bind({});

export const Text = Template.bind({});
Text.args = {
  elementType: "span",
};
