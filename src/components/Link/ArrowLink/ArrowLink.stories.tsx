import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArrowLink } from '.';

export default {
  title: 'Navigation/Links/ArrowLink',
  component: ArrowLink
} as ComponentMeta<typeof ArrowLink>;

const Template: ComponentStory<typeof ArrowLink> = args => {
  return (
    <ArrowLink {...args} href={'https://zero.tech/'}>
      Lorem Ipsum
    </ArrowLink>
  );
};

export const Default = Template.bind({});
