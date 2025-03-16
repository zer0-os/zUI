import type { Meta, StoryFn } from '@storybook/react';
import { Video } from './Video';

export default {
  title: 'Data Display/Video',
  component: Video
} as Meta<typeof Video>;

const Template: StoryFn<typeof Video> = args => <Video {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: '',
  poster: 'https://via.placeholder.com/480x270',
  autoPlay: true,
  loop: true
};
