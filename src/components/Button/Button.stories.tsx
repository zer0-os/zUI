import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./";
import { StoryCard } from "../.storybook";

export default {
  title: "Inputs/Button",
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <StoryCard isContrast>
    <Button {...args}>Button</Button>
  </StoryCard>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary"
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary"
};

export const Negative = Template.bind({});
Negative.args = {
  variant: "negative"
};

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true
};
