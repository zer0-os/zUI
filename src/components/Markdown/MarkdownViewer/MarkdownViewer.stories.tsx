import type { Meta, StoryFn } from '@storybook/react';
import { MarkdownViewer } from './MarkdownViewer';
import { MARKDOWN_TEXT } from './MarkdownViewer.stories.constants';

export default {
  title: 'Typography/MarkdownViewer',
  component: MarkdownViewer
} as Meta<typeof MarkdownViewer>;

const Template: StoryFn<typeof MarkdownViewer> = args => {
  return <MarkdownViewer {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  text: MARKDOWN_TEXT
};
