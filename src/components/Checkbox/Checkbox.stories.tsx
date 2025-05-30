import type { Meta, StoryFn } from '@storybook/react';
import { Checkbox } from './';

export default {
  title: 'Inputs/Checkbox',
  component: Checkbox
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = args => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'DefaultCheckbox',
  text: 'Text'
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'Disabled',
  text: 'Text',
  isDisabled: true
};

export const WithoutText = Template.bind({});
WithoutText.args = {
  name: 'WithoutText'
};

export const LabelAndLink = Template.bind({});
LabelAndLink.args = {
  name: 'LabelAndLink',
  text: 'Text',
  link: {
    text: 'Text',
    href: 'https://zer0.io/a/home'
  }
};

export const LinkExternal = Template.bind({});
LinkExternal.args = {
  name: 'Link',
  link: {
    text: 'Text',
    href: 'https://zer0.io/a/home',
    openInNewTab: true
  }
};

export const LinkCallback = Template.bind({});
LinkCallback.args = {
  name: 'LinkCallback',
  link: {
    text: 'Text',
    onClickLink: () => {
      console.log('Redirected link');
    }
  }
};

export const LongContent = Template.bind({});
LongContent.args = {
  name: 'LongContent',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled '
};

export const Advanced = Template.bind({});
Advanced.args = {
  name: 'Advanced',
  variant: 'advanced',
  title: 'Majority',
  description: 'The greater number of votes cast will decide the outcome'
};

export const AdvancedWithImage = Template.bind({});
AdvancedWithImage.args = {
  name: 'AdvancedWithImage',
  variant: 'advanced',
  title: 'Majority',
  description: 'The greater number of votes cast will decide the outcome',
  image: 'https://picsum.photos/200/300'
};
