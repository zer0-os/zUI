import React from "react";
import Post from "./";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Post",
  component: Post,
} as ComponentMeta<typeof Post>;

const Template: ComponentStory<typeof Post> = (args) => <Post {...args}>Hello</Post>;

export const Primary = Template.bind({});
Primary.args = {
  author: "Frank Wilder",
  avatar: "https://picsum.photos/seed/avatar/164/164",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus commodo velit semper dapibus. Sed ac egestas urna, ut lobortis nulla. Nunc placerat iaculis erat, in maximus ligula finibus nec. Nullam dignissim lacus id aliquet suscipit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent ultrices feugiat congue. Nulla blandit felis quis convallis semper. Nam non nunc tempor, ullamcorper sem a, euismod libero. Phasellus porttitor leo sed ex consectetur, vel ornare tortor efficitur. Mauris lacinia mollis sem. Aenean sed lobortis purus. Aliquam facilisis tortor tortor.",
  title: "Lorem Ipsum",
  zna: "0://frank.wilder",
  image: "https://picsum.photos/seed/image/600/600",
};
