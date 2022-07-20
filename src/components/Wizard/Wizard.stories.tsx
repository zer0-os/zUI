import React from "react";
import Wizard from "./";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "../Input/Input";

export default {
  title: "Wizard",
  component: Wizard.Container,
} as ComponentMeta<typeof Wizard.Container>;

const Template: ComponentStory<typeof Wizard.Container> = (args) => (
  <Wizard.Container {...args}>
    <p style={{ textAlign: "center" }}>You can put any content in this container, and it will apply Wizard styling!</p>
    {/*<Wizard.Loading message={"Loading"} />*/}
    {/*<Wizard.Confirmation*/}
    {/*  message={"Some confirmation text"}*/}
    {/*  isPrimaryButtonActive*/}
    {/*  isSecondaryButtonActive*/}
    {/*  onClickPrimaryButton={() => alert("Clicked confirm")}*/}
    {/*  onClickSecondaryButton={() => alert("Clicked cancel")}*/}
    {/*/>*/}
  </Wizard.Container>
);

export const Container: ComponentStory<typeof Wizard.Container> = (args) => (
  <Wizard.Container {...args}>
    <p style={{ textAlign: "center" }}>You can put any content in this container, and it will apply Wizard styling!</p>
    {/*<Wizard.Loading message={"Loading"} />*/}
    {/*<Wizard.Confirmation*/}
    {/*  message={"Some confirmation text"}*/}
    {/*  isPrimaryButtonActive*/}
    {/*  isSecondaryButtonActive*/}
    {/*  onClickPrimaryButton={() => alert("Clicked confirm")}*/}
    {/*  onClickSecondaryButton={() => alert("Clicked cancel")}*/}
    {/*/>*/}
  </Wizard.Container>
);

export const Header: ComponentStory<typeof Wizard.Header> = (args) => (
  <Wizard.Container>
    <Wizard.Header {...args} header={"Wizard Header Goes Here"} subHeader={"Some additional info as a subheader"} />
    {/*<Wizard.Loading message={"Loading"} />*/}
    {/*<Wizard.Confirmation*/}
    {/*  message={"Some confirmation text"}*/}
    {/*  isPrimaryButtonActive*/}
    {/*  isSecondaryButtonActive*/}
    {/*  onClickPrimaryButton={() => alert("Clicked confirm")}*/}
    {/*  onClickSecondaryButton={() => alert("Clicked cancel")}*/}
    {/*/>*/}
  </Wizard.Container>
);

export const Confirmation: ComponentStory<typeof Wizard.Confirmation> = (args) => (
  <Wizard.Container>
    <Wizard.Confirmation
      {...args}
      message={"Some confirmation text"}
      isPrimaryButtonActive
      isSecondaryButtonActive
      onClickPrimaryButton={() => alert("Clicked confirm")}
      onClickSecondaryButton={() => alert("Clicked cancel")}
    />
  </Wizard.Container>
);
