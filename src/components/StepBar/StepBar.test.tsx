import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { StepBar, Step, StepBarProps } from '.';

const mockSteps: Step[] = [
  { id: 'step_1', title: 'Step 1' },
  { id: 'step_2', title: 'Step 2' },
  { id: 'step_3', title: 'Step 3' }
];
const mockOnChangeStep = jest.fn();

const renderComponent = (props: StepBarProps) => {
  return render(<StepBar {...props} />);
};

test('should render 1st step', () => {
  const { getByText } = renderComponent({ currentStepId: mockSteps[0].id, steps: mockSteps });
  const step1 = getByText(mockSteps[0].title).parentNode;
  expect(step1).toBeInTheDocument();
});

test('should render 2nd step', () => {
  const { getByText } = renderComponent({
    currentStepId: mockSteps[1].id,
    steps: mockSteps,
    onChangeStep: mockOnChangeStep
  });
  const step1 = getByText(mockSteps[0].title).parentNode;
  const step2 = getByText(mockSteps[1].title).parentNode;
  expect(step1).toBeInTheDocument();
  expect(step2).toBeInTheDocument();

  fireEvent.click(step1);

  expect(mockOnChangeStep).toHaveBeenCalledWith(mockSteps[0]);
});

test('should render 3rd step', () => {
  const { getByText } = renderComponent({
    currentStepId: mockSteps[2].id,
    steps: mockSteps,
    onChangeStep: mockOnChangeStep
  });
  const step1 = getByText(mockSteps[0].title).parentNode;
  const step2 = getByText(mockSteps[1].title).parentNode;
  const step3 = getByText(mockSteps[2].title).parentNode;
  expect(step1).toBeInTheDocument();
  expect(step2).toBeInTheDocument();
  expect(step3).toBeInTheDocument();

  fireEvent.click(step2);

  expect(mockOnChangeStep).toHaveBeenCalledWith(mockSteps[1]);

  fireEvent.click(step1);

  expect(mockOnChangeStep).toHaveBeenCalledWith(mockSteps[0]);
});
