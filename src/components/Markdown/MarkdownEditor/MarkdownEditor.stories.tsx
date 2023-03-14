import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MarkdownEditor } from './MarkdownEditor';
import { StoryCard } from '../../.storybook';

export default {
  title: 'Inputs/MarkdownEditor',
  component: MarkdownEditor
} as ComponentMeta<typeof MarkdownEditor>;

const Template: ComponentStory<typeof MarkdownEditor> = args => {
  const [value, setValue] = useState<string>();
  const isError = value === '';

  return (
    <StoryCard isContrast isContentFull>
      <MarkdownEditor
        {...args}
        text={args.text ?? value}
        onChange={setValue}
        error={args.error || isError}
        errorText={args.error || isError ? args.errorText ?? 'This field is required' : undefined}
        placeholder={args.placeholder ?? 'Enter your proposal description here'}
      />
    </StoryCard>
  );
};

export const Primary = Template.bind({});
