import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { StepBar, Step } from '.';

const mockSteps: Step[] = [
  { id: 'step_1', title: 'Step 1' },
  { id: 'step_2', title: 'Step 2' },
  { id: 'step_3', title: 'Step 3' }
];
const mockOnChangeStep = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

describe('<StepBar />', () => {
  test('should render all steps', () => {
    const { getByText } = render(<StepBar currentStepId={mockSteps[0].id} steps={mockSteps} />);
    const step1 = getByText(mockSteps[0].title).parentNode;
    const step2 = getByText(mockSteps[1].title).parentNode;
    const step3 = getByText(mockSteps[2].title).parentNode;
    expect(step1).toBeInTheDocument();
    expect(step2).toBeInTheDocument();
    expect(step3).toBeInTheDocument();
  });

  describe('when clicking steps', () => {
    let step1: ParentNode, step2: ParentNode;
    beforeAll(() => {
      const { getByText } = render(
        <StepBar currentStepId={mockSteps[1].id} steps={mockSteps} onChangeStep={mockOnChangeStep} />
      );
      step1 = getByText(mockSteps[0].title).parentNode;
      step2 = getByText(mockSteps[1].title).parentNode;
    });

    test('should not be able to navigate forward in steps by clicking next steps', () => {
      fireEvent.click(step2);
      expect(mockOnChangeStep).not.toHaveBeenCalled();
    });

    test('should be able to navigate backwards in steps by clicking a previous step', () => {
      fireEvent.click(step1);
      expect(mockOnChangeStep).toHaveBeenCalled();
    });
  });
});
