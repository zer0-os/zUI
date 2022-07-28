import InputComponent from "./";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useState } from "react";
import Button from "../Button";

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

export const StartEnhancer = Template.bind({});
StartEnhancer.args = { placeholder: "zNA", startEnhancer: "0://" };

export const EndEnhancer = Template.bind({});
EndEnhancer.args = {
  placeholder: "Token Address",
  endEnhancer: <Button onPress={() => alert("Pressed button!")}>Check</Button>,
  label: "Token Address",
};
