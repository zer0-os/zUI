import React, { ReactElement, useState } from "react";
import { ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs";
import Input, { InputProps } from "./";
import { Card } from "../.storybook";



export default {
  title: "Inputs/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const InputForStory = (
  props: Omit<InputProps, 'onChange'>
): ReactElement => {
  const { value: initialValue = "", ...restProps} = props;
  const [value, setValue] = useState<string>(initialValue);

  return <Input value={value} onChange={setValue} {...restProps} />;
};

export const Demo = (): ReactElement => {
  return (
    <>
      <Card title="Text" isContrast>
        <InputForStory  label="NFT Name" placeholder="NFT Name" value="" />
      </Card>
      <Card title="Number" isContrast>
        <InputForStory type="number"  label="Bid Amount (ETH)" placeholder="Bid Amount (ETH)"  value=""/>
      </Card>
      <Card title="Success" isContrast>
        <InputForStory  label="Domain zNA" placeholder="Domain zNA" helperText="Domain zNA is available!" value="zero.Domain" success />
      </Card>
      <Card title="Error" isContrast>
        <InputForStory  label="Domain zNA" placeholder="Domain zNA" helperText="Domain zNAs must be lowercase." value="zero.Domain" error />
      </Card>
      <Card title="Disabled" isContrast>
        <InputForStory  label="Domain zNA" placeholder="Domain zNA" value="zero.Domain" isDisabled />
      </Card>
    </>
  );
};

export const Edit = (): ReactElement => {
  const inputTypes: Record<string, "text" | "number" | "email" | "password"> = {
    text: "text",
    number: "number",
    email: "email",
    password: "password"
  };

  return (
    <>
      <Card title="Input with editable props" isContrast>
        <Input
          type={select("type", inputTypes, "text")}
          value={text("value", "")}
          className={text("className", "")}
          label={text("label", "")}
          helperText={text("helperText", "")}
          placeholder={text("placeholder", "")}
          success={boolean("success", false)}
          error={boolean("error", false)}
          isDisabled={boolean("isDisabled", false)}
          onChange={action("onChange")}
       />
      </Card>
    </>
  );
};

export const StartEnhancer = Template.bind({});
StartEnhancer.args = { placeholder: "zNA", startEnhancer: "0://" };

export const EndEnhancer = Template.bind({});
EndEnhancer.args = {
  placeholder: "Token Address",
  endEnhancer: <Button onPress={() => alert("Pressed button!")}>Check</Button>,
  label: "Token Address",
};
