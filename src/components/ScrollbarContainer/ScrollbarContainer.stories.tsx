import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ScrollbarContainer } from './ScrollbarContainer';

export default {
  title: 'Container/ScrollbarContainer',
  component: ScrollbarContainer,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['fixed', 'on-hover']
      }
    }
  }
} as Meta;

const Template: Story = args => (
  <ScrollbarContainer {...args}>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        height: '200px',
        width: '200px',
        padding: '0 1rem'
      }}
    >
      <div>Conversation Item 1</div>
      <div>Conversation Item 2</div>
      <div>Conversation Item 3</div>
      <div>Conversation Item 4</div>
      <div>Conversation Item 5</div>
      <div>Conversation Item 6</div>
      <div>Conversation Item 7</div>
      <div>Conversation Item 8</div>
      <div>Conversation Item 9</div>
      <div>Conversation Item 10</div>
      <div>Conversation Item 11</div>
      <div>Conversation Item 12</div>
    </div>
  </ScrollbarContainer>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'fixed'
};
