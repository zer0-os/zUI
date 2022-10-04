import React from 'react';
import { render, screen } from '@testing-library/react';

import { Confirmation, ConfirmationProps } from '.';
const mockOnClickPrimaryButton = jest.fn();

const mockClassName = 'Mock class name';
const mockErrorText = 'Mock error';
const mockMessageText = 'Mock message text';
const mockPrimaryButtonText = 'Mock primary button text';

const DEFAULT_PROPS: ConfirmationProps = {
  error: mockErrorText,
  message: mockMessageText,
  onClickPrimaryButton: mockOnClickPrimaryButton
};

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Confirmation', () => {
  test('should not render error element if error is undefined', () => {
    const { container } = render(<Confirmation {...DEFAULT_PROPS} error={undefined} />);

    expect(screen.queryByText(mockErrorText)).not.toBeInTheDocument();
    expect(container.getElementsByClassName('error-text').length).toBe(0);
  });

  test('should render elements and in the correct order - message, error, primaryButtonText', () => {
    const { container } = render(
      <Confirmation
        {...DEFAULT_PROPS}
        message={mockMessageText}
        error={mockErrorText}
        primaryButtonText={mockPrimaryButtonText}
      />
    );

    expect(container.textContent).toBe(`${mockMessageText}${mockErrorText}${mockPrimaryButtonText}`);
  });

  describe('class names', () => {
    test('should apply "zui-wizard-confirmation" class to container', () => {
      const { container } = render(<Confirmation {...DEFAULT_PROPS} />);

      expect(container.firstChild).toHaveClass('zui-wizard-confirmation');
      expect(container.getElementsByClassName('zui-wizard-confirmation').length).toBe(1);
    });

    test('should apply className prop to container class', () => {
      const { container } = render(<Confirmation {...DEFAULT_PROPS} className={mockClassName} />);

      expect(container.firstChild).toHaveClass(mockClassName);
      expect(container.getElementsByClassName(mockClassName).length).toBe(1);
    });

    test('should apply "error-text" class to error element', () => {
      const { container } = render(<Confirmation {...DEFAULT_PROPS} error={mockErrorText} />);

      expect(screen.getByText(mockErrorText)).toHaveClass('error-text');
      expect(container.getElementsByClassName('error-text').length).toBe(1);
    });
  });
});
