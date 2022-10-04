import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Buttons, ButtonsProps } from '.';

const mockOnClickPrimaryButton = jest.fn();
const mockOnClickSecondaryButton = jest.fn();

const mockClassName = 'Mock Class Name';
const mockPrimaryButtonText = 'Mock primary button text';
const mockSecondaryButtonText = 'Mock secondary button text';

const DEFAULT_PROPS: ButtonsProps = {
  className: undefined,
  onClickPrimaryButton: mockOnClickPrimaryButton,
  onClickSecondaryButton: mockOnClickSecondaryButton,
  primaryButtonText: mockPrimaryButtonText,
  secondaryButtonText: mockSecondaryButtonText
};

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Buttons', () => {
  test('should render buttons in the correct order - secondary, primary', () => {
    const { container } = render(<Buttons {...DEFAULT_PROPS} />);

    expect(container.firstChild?.textContent).toBe(`${mockSecondaryButtonText}${mockPrimaryButtonText}`);
  });

  describe('class names', () => {
    test('should apply "zui-wizard-buttons" class to container', () => {
      const { container } = render(<Buttons {...DEFAULT_PROPS} />);

      expect(container.firstChild).toHaveClass('zui-wizard-buttons');
      expect(container.getElementsByClassName('zui-wizard-buttons').length).toBe(1);
    });

    test('should apply className prop to container class', () => {
      const { container } = render(<Buttons {...DEFAULT_PROPS} className={mockClassName} />);

      expect(container.firstChild).toHaveClass(mockClassName);
      expect(container.getElementsByClassName(mockClassName).length).toBe(1);
    });

    test('should apply negative variant class to secondary button', () => {
      render(<Buttons {...DEFAULT_PROPS} />);

      expect(screen.getByTestId('secondary-button')).toHaveClass('zui-button-negative');
    });
  });

  describe('primary button', () => {
    test('should call mockOnClickPrimaryButton when clicked', () => {
      render(
        <Buttons {...DEFAULT_PROPS} onClickPrimaryButton={mockOnClickPrimaryButton} isPrimaryButtonActive={true} />
      );

      expect(screen.getByText(mockPrimaryButtonText)).toBeInTheDocument();

      fireEvent.click(screen.getByText(mockPrimaryButtonText));

      expect(mockOnClickPrimaryButton).toHaveBeenCalledTimes(1);
    });

    test('should be disabled by default', () => {
      render(<Buttons {...DEFAULT_PROPS} primaryButtonText={mockPrimaryButtonText} />);

      const primaryButton = screen.getByRole('button', {
        name: mockPrimaryButtonText
      });

      expect(primaryButton).toHaveAttribute('aria-disabled', 'true');
    });
  });

  describe('secondary button', () => {
    test('should call mockOnClickSecondaryButton when clicked', () => {
      render(
        <Buttons
          {...DEFAULT_PROPS}
          onClickSecondaryButton={mockOnClickSecondaryButton}
          isSecondaryButtonActive={true}
        />
      );

      expect(screen.getByText(mockSecondaryButtonText)).toBeInTheDocument();

      fireEvent.click(screen.getByText(mockSecondaryButtonText));

      expect(mockOnClickSecondaryButton).toHaveBeenCalledTimes(1);
    });

    test('should not render secondary button by default', () => {
      render(<Buttons {...DEFAULT_PROPS} onClickSecondaryButton={undefined} />);

      const secondaryButton = screen.queryByText(mockSecondaryButtonText);
      expect(secondaryButton).not.toBeInTheDocument();
    });

    test('should be disabled by default', () => {
      render(
        <Buttons
          {...DEFAULT_PROPS}
          secondaryButtonText={mockSecondaryButtonText}
          onClickSecondaryButton={mockOnClickSecondaryButton}
        />
      );

      const secondaryyButton = screen.getByRole('button', {
        name: mockSecondaryButtonText
      });

      expect(secondaryyButton).toHaveAttribute('aria-disabled', 'true');
    });
  });
});
