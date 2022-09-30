import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MarkDownEditor } from './MarkDownEditor';
import { MarkdownEditorTypes } from './MarkDownEditor.constants';
import { StoryCard } from '../../.storybook';

export default {
  title: 'Inputs/Markdown/MarkDownEditor',
  component: MarkDownEditor
} as ComponentMeta<typeof MarkDownEditor>;

const Template: ComponentStory<typeof MarkDownEditor> = args => {
  const [value, setValue] = useState<string>();
  const isError = value === '';

  return (
    <StoryCard isContrast isContentFull>
      <MarkDownEditor
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
  type: MarkdownEditorTypes.PRIMARY,
  placeholder: 'Text Content'
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: MarkdownEditorTypes.SECONDARY,
  placeholder: 'Text Content'
};
