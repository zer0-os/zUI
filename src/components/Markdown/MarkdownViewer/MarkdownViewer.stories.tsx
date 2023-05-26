import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MarkdownViewer } from './MarkdownViewer';
import { MARKDOWN_TEXT } from './MarkdownViewer.stories.constants';

export default {
  title: 'Typography/MarkdownViewer',
  component: MarkdownViewer
} as ComponentMeta<typeof MarkdownViewer>;

const Template: ComponentStory<typeof MarkdownViewer> = args => {
  return <MarkdownViewer {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  text: MARKDOWN_TEXT
};
