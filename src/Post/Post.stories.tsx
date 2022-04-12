import React from "react";
import Post from "./";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Post",
  component: Post,
} as ComponentMeta<typeof Post>;

const Template: ComponentStory<typeof Post> = (args) => <Post {...args}>Hello</Post>;

export const Primary = Template.bind({});
