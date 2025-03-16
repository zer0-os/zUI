import type { Meta, StoryFn } from '@storybook/react';
import { Image } from './';

export default {
  title: 'Data Display/Image',
  component: Image
} as Meta<typeof Image>;

const Template: StoryFn<typeof Image> = args => (
  <div style={{ width: 200, height: 300 }}>
    <Image {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  src: 'https://picsum.photos/200/300',
  alt: 'random image'
};
