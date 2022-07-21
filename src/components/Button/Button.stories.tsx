import React, { ReactElement } from "react";
import { ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs";
import Button from "./";
import { Card } from "../.storybook";

export default {
  title: "Inputs/Button",
  component: Button
} as ComponentMeta<typeof Button>;

export const Demo = (): ReactElement => {
  return (
    <>
      <Card title="Primary Button" isContrast>
        <Button variant="primary">Button</Button>
        <Button variant="primary" isDisabled>
          Button
        </Button>
        <Button variant="primary" isLoading>
          Button
        </Button>
      </Card>
      <Card title="Secondary Button" isContrast>
        <Button variant="secondary">Button</Button>
        <Button variant="secondary" isDisabled>
          Button
        </Button>
        <Button variant="secondary" isLoading>
          Button
        </Button>
      </Card>
      <Card title="Negative Button" isContrast>
        <Button variant="negative">Button</Button>
        <Button variant="negative" isDisabled>
          Button
        </Button>
        <Button variant="negative" isLoading>
          Button
        </Button>
      </Card>
      <Card title="Text Button" isContrast>
        <Button variant="text">Button</Button>
        <Button variant="text" isDisabled>
          Button
        </Button>
        <Button variant="text" isLoading>
          Button
        </Button>
      </Card>
    </>
  );
};

export const Edit = (): ReactElement => {
  const buttonVariants: Record<string, "primary" | "secondary" | "negative" | "text"> = {
    primary: "primary",
    secondary: "secondary",
    negative: "negative",
    text: "text"
  };

  return (
    <>
      <Card title="Button with editable props" isContrast>
        <Button
          variant={select("variant", buttonVariants, "primary")}
          onPress={action("onPress")}
          onPressStart={action("onPressStart")}
          onPressEnd={action("onPressEnd")}
          isDisabled={boolean("isDisabled", false)}
          isLoading={boolean("isLoading", false)}
        >
          {text("children", "Button")}
        </Button>
      </Card>
    </>
  );
};
