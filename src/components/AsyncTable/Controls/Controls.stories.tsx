import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Controls } from './Controls';
import { StoryCard } from '../../.storybook';

export default {
  title: 'Data Display/Table/Controls',
  component: Controls
} as ComponentMeta<typeof Controls>;

const Template: ComponentStory<typeof Controls> = args => {
  const [isGridView, setIsGridView] = useState<boolean>(false);

  const onChangeView = (isGridView: boolean) => setIsGridView(isGridView);

  return (
    <StoryCard isContrast isContentFull>
      <Controls {...args} isGridView={isGridView} onChangeView={onChangeView} />
    </StoryCard>
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Search by domain name'
};
