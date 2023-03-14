import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArrowLink } from '.';
import { StoryCard } from '../../.storybook';

export default {
  title: 'Navigation/Links/ArrowLink',
  component: ArrowLink
} as ComponentMeta<typeof ArrowLink>;

const Template: ComponentStory<typeof ArrowLink> = args => {
  return (
    <StoryCard isContrast>
      <ArrowLink {...args} href={'https://zero.tech/'}>
        Lorem Ipsum
      </ArrowLink>
    </StoryCard>
  );
};

export const Default = Template.bind({});
