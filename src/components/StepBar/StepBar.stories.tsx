import React, { FC, useState } from 'react';
import StepBar from './StepBar';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoryCard } from '../.storybook';
import { Step } from './StepBar.types';

export default {
  title: 'StepBar',
  component: StepBar
} as ComponentMeta<typeof StepBar>;

export const Default: ComponentStory<typeof StepBar> = ({ currentStepId, steps }) => {
  const [step, setStep] = useState(steps.find((x) => x.id === currentStepId));

  return (
    <StoryCard isContrast>
      <StepBar currentStepId={step?.id ?? ""} steps={steps} onChangeStep={(step: Step) => setStep(step)} />
    </StoryCard>
  );
}

Default.args = {
    currentStepId: "summary",
    steps: [
        {
            id: "details",
            title: "Details"
        },
        {
            id: "test",
            title: "Test"
        },
        {
            id: "summary",
            title: "Summary"
        }
    ]
};