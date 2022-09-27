import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { StepBar, Step } from '.';
import styles from './StepBar.module.scss';

const mockOnChangeStep = jest.fn();

const MOCK_TABS: Step[] = [
  { id: 'step_1', title: 'Step 1' },
  { id: 'step_2', title: 'Step 2' },
  { id: 'step_3', title: 'Step 3' }
];

const DEFAULT_PROPS = {
  currentStepId: MOCK_TABS[0].id,
  steps: MOCK_TABS
};

describe('<StepBar />', () => {
  test('should apply StepBar class to the container', () => {
    const { container } = render(<StepBar {...DEFAULT_PROPS} />);

    expect(container.firstChild).toHaveClass(styles.StepBar);
  });

  test('should apply List class only to the List element', () => {
    const { container } = render(<StepBar {...DEFAULT_PROPS} />);
    const list = container.getElementsByClassName(styles.List);

    expect(list.length).toBe(1);
  });

  test('should render 1st step', () => {
    const { getByText } = render(<StepBar currentStepId={MOCK_TABS[0].id} steps={MOCK_TABS} />);
    const step1 = getByText(MOCK_TABS[0].title);
    expect(step1).toBeInTheDocument();
  });

  test('should render 2nd step', () => {
    render(<StepBar currentStepId={MOCK_TABS[1].id} steps={MOCK_TABS} onChangeStep={mockOnChangeStep} />);

    const step1 = screen.getByText(MOCK_TABS[0].title);
    const step2 = screen.getByText(MOCK_TABS[1].title);
    expect(step1).toBeInTheDocument();
    expect(step2).toBeInTheDocument();

    fireEvent.click(step1);

    expect(mockOnChangeStep).toHaveBeenCalledWith(MOCK_TABS[0]);
  });

  test('should render 3rd step', () => {
    const { getByText } = render(
      <StepBar currentStepId={MOCK_TABS[2].id} steps={MOCK_TABS} onChangeStep={mockOnChangeStep} />
    );

    const step1 = getByText(MOCK_TABS[0].title);
    const step2 = getByText(MOCK_TABS[1].title);
    const step3 = getByText(MOCK_TABS[2].title);
    expect(step1).toBeInTheDocument();
    expect(step2).toBeInTheDocument();
    expect(step3).toBeInTheDocument();

    fireEvent.click(step2);

    expect(mockOnChangeStep).toHaveBeenCalledWith(MOCK_TABS[1]);

    fireEvent.click(step1);

    expect(mockOnChangeStep).toHaveBeenCalledWith(MOCK_TABS[0]);
  });
});
