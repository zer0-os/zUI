import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MarkDownViewer } from './MarkDownViewer';
import { MARKDOWN_TEXT } from './MarkdownViewer.stories.constants';
import { StoryCard } from '../../.storybook';

export default {
  title: 'Inputs/Markdown/MarkDownViewer',
  component: MarkDownViewer
} as ComponentMeta<typeof MarkDownViewer>;

const Template: ComponentStory<typeof MarkDownViewer> = args => {
  return (
    <StoryCard isContrast isContentFull>
      <MarkDownViewer {...args} />
    </StoryCard>
  );
};

export const Default = Template.bind({});
Default.args = {
  text: MARKDOWN_TEXT
};
