import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Image } from './';

export default {
  title: 'Data Display/Image',
  component: Image
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = args => (
  <div style={{ width: 200, height: 300 }}>
    <Image {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  src: 'https://picsum.photos/200/300',
  alt: 'random image'
};
