import type { Meta, StoryFn } from '@storybook/react';
import { InfoTooltip } from './InfoTooltip';

export default {
  title: 'Data Display/Info Tooltip',
  component: InfoTooltip
} as Meta<typeof InfoTooltip>;

const Template: StoryFn<typeof InfoTooltip> = args => (
  <InfoTooltip
    {...args}
    content={'This is a long info message that is used when the text is at least two lines long'}
  ></InfoTooltip>
);

export const Default = Template.bind({});
