import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tooltip, BASE_CLASSNAME } from '.';
import Button from '../Button';
import { StoryCard } from '../.storybook';
import './Tooltip.scss';

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = args => (
  <StoryCard isContrast className={`${BASE_CLASSNAME}__storycard`}>
    <Tooltip {...args}>
      <Button>Click or Hover</Button>
    </Tooltip>
  </StoryCard>
);

export const Default = Template.bind({});
Default.args = {
  side: 'top',
  align: 'center',
  content: 'This may take up to 20 minutes depending on the state of the Ethereum network.'
};
