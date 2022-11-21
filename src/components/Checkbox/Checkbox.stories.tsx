import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Checkbox } from './';
import { StoryCard } from '../.storybook';

export default {
  title: 'Inputs/Checkbox',
  component: Checkbox
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = args => {
  return (
    <StoryCard isContrast>
      <Checkbox {...args} />
    </StoryCard>
  );
};

const LightThemeTemplate: ComponentStory<typeof Checkbox> = args => {
  return (
    <StoryCard>
      <Checkbox {...args} />
    </StoryCard>
  );
};

export const DefaultCheckbox = Template.bind({});
DefaultCheckbox.args = {
  name: 'DefaultCheckbox',
  text: 'Text'
};

export const DefaultDisabled = Template.bind({});
DefaultDisabled.args = {
  name: 'DefaultDisabledCheckboxChecked',
  text: 'Text',
  isDisabled: true
};

export const DefaultChecked = Template.bind({});
DefaultChecked.args = {
  name: 'DefaultCheckboxChecked',
  text: 'Text',
  checked: true
};
export const DefaultDisabledChecked = Template.bind({});
DefaultDisabledChecked.args = {
  name: 'DefaultDisabledCheckboxChecked',
  text: 'Text',
  checked: true,
  isDisabled: true
};

export const withoutText = Template.bind({});
withoutText.args = {
  name: 'WithoutTextCheckbox'
};

export const withoutTextDisabled = Template.bind({});
withoutTextDisabled.args = {
  name: 'WithoutTextCheckbox',
  isDisabled: true
};

export const withoutTextChecked = Template.bind({});
withoutTextChecked.args = {
  name: 'WithoutTextCheckboxChecked',
  checked: true
};

export const withoutTextCheckedDisabled = Template.bind({});
withoutTextCheckedDisabled.args = {
  name: 'WithoutTextCheckboxChecked',
  checked: true,
  isDisabled: true
};

export const LinkCheckbox = Template.bind({});
LinkCheckbox.args = {
  name: 'LinkCheckbox',
  text: 'Text',
  link: 'Text',
  redirectLinkTriggered: () => {
    console.log('Redirected link');
  }
};

export const LinkDisabled = Template.bind({});
LinkDisabled.args = {
  name: 'LinkCheckboxCheckedDisabled',
  text: 'Text',
  link: 'Text',
  isDisabled: true
};

export const LinkChecked = Template.bind({});
LinkChecked.args = {
  name: 'LinkCheckboxChecked',
  text: 'Text',
  link: 'Text',
  checked: true,
  redirectLinkTriggered: () => {
    console.log('Redirected link');
  }
};
export const LinkCheckedDisabled = Template.bind({});
LinkCheckedDisabled.args = {
  name: 'LinkCheckboxCheckedDisabled',
  text: 'Text',
  link: 'Text',
  checked: true,
  isDisabled: true
};

export const LinkWithoutText = Template.bind({});
LinkWithoutText.args = {
  name: 'LinkWithoutTextCheckbox',
  link: 'Text',
  redirectLinkTriggered: () => {
    console.log('Redirected link');
  }
};

export const LinkWithoutTextDisabled = Template.bind({});
LinkWithoutTextDisabled.args = {
  name: 'LinkWithoutTextCheckbox',
  link: 'Text',
  isDisabled: true
};

export const LinkWithoutTextChecked = Template.bind({});
LinkWithoutTextChecked.args = {
  name: 'LinkWithoutTextCheckboxChecked',
  link: 'Text',
  checked: true,
  redirectLinkTriggered: () => {
    console.log('Redirected link');
  }
};

export const LinkWithoutTextCheckedDisabled = Template.bind({});
LinkWithoutTextCheckedDisabled.args = {
  name: 'LinkWithoutTextCheckboxChecked',
  link: 'Text',
  checked: true,
  isDisabled: true
};

export const LongContentFull = Template.bind({});
LongContentFull.args = {
  name: 'LongTextCheckBox',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled '
};

export const LightThemeCheckbox = LightThemeTemplate.bind({});
LightThemeCheckbox.args = {
  name: 'LightThemeCheckbox',
  text: 'Text',
  hasLightBg: true
};

