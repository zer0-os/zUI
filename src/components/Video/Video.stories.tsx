import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Video } from './Video';

export default {
  title: 'Data Display/Video',
  component: Video
} as ComponentMeta<typeof Video>;

const Template: ComponentStory<typeof Video> = args => <Video {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://sample-videos.com/video123/mp4/480/big_buck_bunny_480p_30mb.mp4',
  poster: 'https://via.placeholder.com/480x270',
  autoPlay: true,
  loop: true
};
