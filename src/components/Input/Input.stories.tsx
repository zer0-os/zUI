import InputComponent from "./";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import React from "react";

export default {
  title: "Input",
  component: InputComponent,
} as ComponentMeta<typeof InputComponent>;

const Template: ComponentStory<typeof InputComponent> = (args) => {
  const [val, setVal] = useState<string>("");
  return <InputComponent value={val} onChange={(val: string) => setVal(val)} {...args} />;
};

export const Text = Template.bind({});
Text.args = { label: "NFT Name", placeholder: "NFT Name" };

export const Number = Template.bind({});
Number.args = {
  type: "number",
  label: "Bid Amount (ETH)",
  placeholder: "Bid Amount (ETH)",
};

export const Error = Template.bind({});
Error.args = {
  value: "zero.Domain",
  label: "Domain zNA",
  placeholder: "Domain zNA",
  error: true,
  helperText: "Domain zNAs must be lowercase.",
};

export const Success = Template.bind({});
Success.args = {
  value: "zero.domain",
  label: "Domain zNA",
  placeholder: "Domain zNA",
  success: true,
  helperText: "Domain zNA is available!",
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: "zero.Domain",
  label: "Domain zNA",
  placeholder: "Domain zNA",
  isDisabled: true,
};
