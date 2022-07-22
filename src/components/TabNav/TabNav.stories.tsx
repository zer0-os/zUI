import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TabNav from ".";
import { StoryCard } from "../.storybook";

export default {
  title: "Data Display/TabNav",
  component: TabNav
} as ComponentMeta<typeof TabNav>;

const Template: ComponentStory<typeof TabNav> = (args) => {
  return (
    <StoryCard isContrast>
      <TabNav {...args} />
    </StoryCard>
  );
};

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { text: "Tab 1", to: "#", content: "This is Tab 1 content" },
    { text: "Tab 2", to: "#", content: "This is Tab 2 content" },
    { text: "Tab 3", to: "#", content: "This is Tab 3 content" }
  ]
};
