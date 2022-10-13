import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Image } from './Image';
import { StoryCard } from '../../.storybook';

export default {
  title: 'Data Display/Media/Image',
  component: Image
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = args => (
  <StoryCard isContrast>
    <Image {...args} />
  </StoryCard>
);

export const Default = Template.bind({});
Default.args = {
  alt: 'Storybook mock image',
  url: 'https://picsum.photos/500/500'
};
