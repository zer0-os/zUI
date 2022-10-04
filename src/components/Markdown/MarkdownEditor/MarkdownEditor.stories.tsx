import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MarkdownEditor } from './MarkdownEditor';
import { MarkdownEditorVariants } from './MarkdownEditor.constants';
import { StoryCard } from '../../.storybook';

export default {
  title: 'Inputs/Markdown/MarkdownEditor',
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
        errorText={args.error || isError ? args.errorText ?? 'Please input the text' : undefined}
      />
    </StoryCard>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  variant: MarkdownEditorVariants.PRIMARY,
  placeholder: 'Text Content'
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: MarkdownEditorVariants.SECONDARY,
  placeholder: 'Text Content'
};
