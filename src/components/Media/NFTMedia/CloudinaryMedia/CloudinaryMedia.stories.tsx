import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CloudinaryMedia } from './CloudinaryMedia';
import { StoryCard } from '../../../.storybook';

export default {
  title: 'Data Display/Media/CloudinaryMedia',
  component: CloudinaryMedia
} as ComponentMeta<typeof CloudinaryMedia>;

const Template: ComponentStory<typeof CloudinaryMedia> = args => (
  <StoryCard isContrast>
    <CloudinaryMedia {...args} />
  </StoryCard>
);

export const Image = Template.bind({});
Image.args = {
  alt: 'Storybook mock ipfs image',
  ipfsUrl: 'ipfs://QmajvjoD6KgQKwcNKHt92C457Wr25X1kDW46LJS44pvVeX'
};

export const Video = Template.bind({});
Video.args = {
  alt: 'Storybook mock ipfs video',
  ipfsUrl: 'ipfs://Qmbq3ERGnMQjxZiFo6EuTys2UGg7snRwoTyqAXHGgcwHCx'
};
