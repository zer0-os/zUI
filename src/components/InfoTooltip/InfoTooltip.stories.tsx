import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InfoTooltip as InfoTooltipComponent } from './InfoTooltip';
import { CSS_PREFIX } from '../constants';
import { StoryCard } from '../.storybook';
import '../Tooltip/Tooltip.scss';

export default {
  title: 'Data Display/Tooltip/InfoTooltip',
  component: InfoTooltipComponent
} as ComponentMeta<typeof InfoTooltipComponent>;

const Template: ComponentStory<typeof InfoTooltipComponent> = args => (
  <StoryCard isContrast className={`${CSS_PREFIX}-tooltip__storycard`}>
    <InfoTooltipComponent {...args} />
  </StoryCard>
);

export const InfoTooltip = Template.bind({});
InfoTooltip.args = {
  side: 'top',
  align: 'center',
  content: 'This may take up to 20 minutes depending on the state of the Ethereum network.'
};
