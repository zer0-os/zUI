import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MarkdownViewer } from './MarkdownViewer';
import { MARKDOWN_TEXT } from './MarkdownViewer.stories.constants';
import { StoryCard } from '../../.storybook';

export default {
  title: 'Typography/Markdown/MarkdownViewer',
  component: MarkdownViewer
} as ComponentMeta<typeof MarkdownViewer>;

const Template: ComponentStory<typeof MarkdownViewer> = args => {
  return (
    <StoryCard isContrast isContentFull>
      <MarkdownViewer {...args} />
    </StoryCard>
  );
};

export const Default = Template.bind({});
Default.args = {
  text: MARKDOWN_TEXT
};
