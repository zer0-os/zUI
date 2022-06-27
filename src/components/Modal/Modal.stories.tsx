import React from "react";
import Modal from "./";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal triggerText="Click me!">Hello! This is a modal</Modal>;

export const Primary = Template.bind({});
