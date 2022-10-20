import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InfoTooltip } from './InfoTooltip';
import { StoryCard } from '../.storybook';

export default {
  title: 'Data Display/Info Tooltip',
  component: InfoTooltip
} as ComponentMeta<typeof InfoTooltip>;

const Template: ComponentStory<typeof InfoTooltip> = args => (
  <StoryCard isContrast isContentCentered>
    <InfoTooltip {...args} />
  </StoryCard>
);

export const Default = Template.bind({});
Default.args = {
  side: 'top',
  align: 'center',
  content: 'This may take up to 20 minutes depending on the state of the Ethereum network.'
};
