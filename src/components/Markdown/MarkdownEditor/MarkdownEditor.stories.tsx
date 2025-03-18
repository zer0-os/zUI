import { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { MarkdownEditor } from './MarkdownEditor';

export default {
  title: 'Inputs/MarkdownEditor',
  component: MarkdownEditor
} as Meta<typeof MarkdownEditor>;

const Template: StoryFn<typeof MarkdownEditor> = args => {
  const [value, setValue] = useState<string>();
  const isError = value === '';

  return (
    <MarkdownEditor
      {...args}
      text={args.text ?? value}
      onChange={setValue}
      error={args.error || isError}
      errorText={args.error || isError ? args.errorText ?? 'This field is required' : undefined}
      placeholder={args.placeholder ?? 'Enter your proposal description here'}
    />
  );
};

export const Primary = Template.bind({});
