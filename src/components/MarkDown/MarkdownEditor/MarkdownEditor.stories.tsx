import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MarkDownEditor } from './MarkDownEditor';
import { MARKDOWN_EDITOR_TYPES } from './MarkDownEditor.constants';
import { StoryCard } from '../../.storybook';

export default {
  title: 'Inputs/Markdown/MarkDownEditor',
  component: MarkDownEditor
} as ComponentMeta<typeof MarkDownEditor>;

const Template: ComponentStory<typeof MarkDownEditor> = args => {
  const [value, setValue] = useState<string>();
  const isErroor = value === '';
  
  return (
    <StoryCard isContrast isContentFull>
      <MarkDownEditor
        {...args}
        text={args.text ?? value}
        onChange={setValue}
        error={args.error || isErroor}
        errorText={(args.error || isErroor) ? args.errorText ?? 'Please input the text' : undefined}
      />
    </StoryCard>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  type: MARKDOWN_EDITOR_TYPES.PRIMARY,
  placeholder: 'Text Content'
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: MARKDOWN_EDITOR_TYPES.SECONDARY,
  placeholder: 'Text Content'
};
