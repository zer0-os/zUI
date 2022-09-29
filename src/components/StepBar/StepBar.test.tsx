import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { StepBar, Step } from '.';
import styles from './StepBar.module.scss';

const mockOnChangeStep = jest.fn();

const MOCK_STEPS: Step[] = [
  { id: 'step_1', title: 'Step 1' },
  { id: 'step_2', title: 'Step 2' },
  { id: 'step_3', title: 'Step 3' }
];

const DEFAULT_PROPS = {
  currentStepId: MOCK_STEPS[2].id,
  steps: MOCK_STEPS
};

const mockArrowLink = jest.fn();

jest.mock('../Link', () => ({
  ArrowLink: (props: any) => {
    mockArrowLink(props);
    return <div {...props}>{props.children}</div>;
  }
}));

afterEach(() => {
  jest.clearAllMocks();
});

describe('<StepBar />', () => {
  test('should render each step and in the correct order and apply titles', () => {
    const { container } = render(<StepBar {...DEFAULT_PROPS} currentStepId={MOCK_STEPS[2].id} />);

    expect(container.textContent).toBe(`${MOCK_STEPS[0].title}${MOCK_STEPS[1].title}${MOCK_STEPS[2].title}`);
  });

  describe('class names', () => {
    test('should apply StepBar class to the container element', () => {
      const { container } = render(<StepBar {...DEFAULT_PROPS} />);
      const stepBar = container.getElementsByClassName(styles.StepBar);

      expect(stepBar.length).toBe(1);
    });

    test('should apply Step class to step elements', () => {
      const { container } = render(<StepBar {...DEFAULT_PROPS} currentStepId={MOCK_STEPS[1].id} />);
      const step = container.getElementsByClassName(styles.Step);

      expect(step.length).toBe(1);
    });

    test('should apply Bar class to only the current step element', () => {
      const { container } = render(<StepBar {...DEFAULT_PROPS} />);
      const currentStep = container.getElementsByClassName(styles.Bar);

      expect(currentStep.length).toBe(1);
    });

    test('should apply className prop to container class', () => {
      const { container } = render(<StepBar {...DEFAULT_PROPS} className={'mock-class-name'} />);
      expect(container.firstElementChild).toHaveClass('mock-class-name');

      const stepBar = container.getElementsByClassName('mock-class-name');
      expect(stepBar.length).toBe(1);
    });
  });

  describe('step', () => {
    test('should contain ArrowLink', () => {
      render(<StepBar {...DEFAULT_PROPS} currentStepId={MOCK_STEPS[1].id} />);

      expect(mockArrowLink).toHaveBeenCalledTimes(1);
      expect(mockArrowLink).toHaveBeenCalledWith(
        expect.objectContaining({ back: true, children: MOCK_STEPS[0].title })
      );
    });

    test('should call onChangeStep when defined and clicked', () => {
      render(<StepBar {...DEFAULT_PROPS} currentStepId={MOCK_STEPS[2].id} onChangeStep={mockOnChangeStep} />);

      fireEvent.click(screen.getByText(MOCK_STEPS[1].title));
      expect(mockOnChangeStep).toHaveBeenCalledWith(MOCK_STEPS[1]);

      fireEvent.click(screen.getByText(MOCK_STEPS[0].title));
      expect(mockOnChangeStep).toHaveBeenCalledWith(MOCK_STEPS[0]);

      expect(mockOnChangeStep).toHaveBeenCalledTimes(2);
    });
  });

  describe('current step', () => {
    test('should apply the current step title', () => {
      const { container } = render(<StepBar {...DEFAULT_PROPS} currentStepId={MOCK_STEPS[2].id} />);
      const currentStep = container.getElementsByClassName(styles.Bar);

      expect(currentStep[0].textContent).toBe(MOCK_STEPS[2].title);
      expect(currentStep[0].textContent).not.toBe(MOCK_STEPS[1].title);
      expect(currentStep[0].textContent).not.toBe(MOCK_STEPS[0].title);
    });

    test('should contain the current step title', () => {
      const { container } = render(<StepBar {...DEFAULT_PROPS} currentStepId={MOCK_STEPS[2].id} />);
      const currentStep = container.getElementsByClassName(styles.Bar);

      expect(currentStep[0].textContent).toBe(MOCK_STEPS[2].title);
      expect(currentStep[0].textContent).not.toBe(MOCK_STEPS[1].title);
      expect(currentStep[0].textContent).not.toBe(MOCK_STEPS[0].title);
    });

    test('should apply Hide styles when current step index is greater than number of steps', () => {
      const { container } = render(
        <StepBar {...DEFAULT_PROPS} currentStepId={MOCK_STEPS[2].id} steps={[MOCK_STEPS[0]]} />
      );

      expect(container.lastChild).toHaveStyle('border-bottom: 1px solid #{$black}');
      expect(container.lastChild).toHaveStyle('color: #{$black}');
    });
  });
});
