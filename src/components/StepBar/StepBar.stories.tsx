import React, { useState } from 'react';
import { StepBar } from './StepBar';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Step } from './StepBar.types';

export default {
  title: 'Navigation/Step Bar',
  component: StepBar
} as ComponentMeta<typeof StepBar>;

export const Default: ComponentStory<typeof StepBar> = ({ currentStepId, steps }) => {
  const [step, setStep] = useState(steps.find((x: Step) => x.id === currentStepId));

  return <StepBar currentStepId={step?.id ?? ''} steps={steps} onChangeStep={(step: Step) => setStep(step)} />;
};

Default.args = {
  currentStepId: 'summary',
  steps: [
    {
      id: 'details',
      title: 'Details'
    },
    {
      id: 'test',
      title: 'Test'
    },
    {
      id: 'summary',
      title: 'Summary'
    }
  ]
};
