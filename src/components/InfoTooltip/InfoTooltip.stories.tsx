import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InfoTooltip } from './InfoTooltip';

export default {
  title: 'Data Display/Info Tooltip',
  component: InfoTooltip
} as ComponentMeta<typeof InfoTooltip>;

const Template: ComponentStory<typeof InfoTooltip> = args => (
  <InfoTooltip
    {...args}
    content={'This is a long info message that is used when the text is at least two lines long'}
  ></InfoTooltip>
);

export const Default = Template.bind({});
