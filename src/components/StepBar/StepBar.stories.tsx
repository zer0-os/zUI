import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Step, StepBar } from '.';
import { StoryCard } from '../.storybook';

const STEPS: Step[] = [
  { id: 'step_1', title: 'Step 1' },
  { id: 'step_2', title: 'Step 2' },
  { id: 'step_3', title: 'Step 3' },
  { id: 'step_4', title: 'Step 4' }
];

export default {
  title: 'Data Display/StepBar',
  component: StepBar
} as ComponentMeta<typeof StepBar>;

const Template: ComponentStory<typeof StepBar> = args => {
  const [currentStepId, setCurrentStepId] = useState<Step['id']>(STEPS[STEPS.length - 1].id);

  const onChangeStep = (step: Step) => {
    setCurrentStepId(step.id);
  };

  return (
    <StoryCard isContrast>
      <StepBar {...args} currentStepId={currentStepId} onChangeStep={onChangeStep} />
    </StoryCard>
  );
};

export const Default = Template.bind({});
Default.args = {
  steps: STEPS
};
