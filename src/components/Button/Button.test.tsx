import { render, fireEvent, cleanup } from '@testing-library/react';
import React from 'react';

import { Button, ButtonProps } from './';

const TEST_BUTTON_TEXT = 'test button';
const TEST_CLASS_NAME = 'test-class-name';
const TEST_SPINNER_TEXT = 'test spinner';

let mockOnPress = jest.fn();

jest.mock('../LoadingIndicator', () => {
  return { Spinner: () => <span>{TEST_SPINNER_TEXT}</span> };
});

const renderComponent = (props?: Partial<ButtonProps>) =>
  render(
    <Button onPress={mockOnPress} {...props}>
      {TEST_BUTTON_TEXT}
    </Button>
  );

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

test('should render children', () => {
  const { getByText } = renderComponent();
  const children = getByText(TEST_BUTTON_TEXT);
  expect(children).toBeInTheDocument();
});

test('should trigger press callback on mouse up only', () => {
  const { getByRole } = renderComponent();
  const button = getByRole('button');
  fireEvent.mouseDown(button);
  expect(mockOnPress).toBeCalledTimes(0);
  fireEvent.mouseUp(button);
  expect(mockOnPress).toBeCalledTimes(1);
  fireEvent.mouseDown(button);
  expect(mockOnPress).toBeCalledTimes(1);
  fireEvent.mouseUp(button);
  expect(mockOnPress).toBeCalledTimes(2);
});

test('should not be pressable when disabled', () => {
  const { getByRole } = renderComponent({ isDisabled: true });
  const button = getByRole('button');
  fireEvent.mouseDown(button);
  expect(mockOnPress).toBeCalledTimes(0);
  fireEvent.mouseUp(button);
  expect(mockOnPress).toBeCalledTimes(0);
});

test('should not be pressable when loading', () => {
  const { getByRole } = renderComponent({ isLoading: true });
  const button = getByRole('button');
  fireEvent.mouseDown(button);
  expect(mockOnPress).toBeCalledTimes(0);
  fireEvent.mouseUp(button);
  expect(mockOnPress).toBeCalledTimes(0);
});

test('should show spinner when loading', () => {
  const { getByText } = renderComponent({ isLoading: true });
  const spinner = getByText(TEST_SPINNER_TEXT);
  expect(spinner).toBeInTheDocument();
});

test('should not show spinner when not loading', () => {
  const { queryByText } = renderComponent({ isLoading: false });
  const spinner = queryByText(TEST_SPINNER_TEXT);
  expect(spinner).toBeNull();
});

test('should apply class from props', () => {
  const { getByRole } = renderComponent({ className: TEST_CLASS_NAME });
  const button = getByRole('button');
  expect(button).toHaveClass(TEST_CLASS_NAME);
});

test('should apply variant class', () => {
  const { getByRole } = renderComponent({ isDisabled: true, variant: 'secondary' });
  const button = getByRole('button');
  expect(button).toHaveClass('zui-button-secondary');
});

test('should default to type "button"', () => {
  const { getByRole } = renderComponent({ isSubmit: false });
  const button = getByRole('button');
  expect(button).toHaveAttribute('type', 'button');
});

test('should be type "submit" when isSubmit is true', () => {
  const { getByRole } = renderComponent({ isSubmit: true });
  const button = getByRole('button');
  expect(button).toHaveAttribute('type', 'submit');
});

test('should apply startEnhancer', () => {
  const { getByText } = renderComponent({ startEnhancer: <span>start enhancer</span> });
  const startEnhancer = getByText('start enhancer');
  expect(startEnhancer).toBeInTheDocument();
});

test('should apply endEnhancer', () => {
  const { getByText } = renderComponent({ endEnhancer: <span>end enhancer</span> });
  const endEnhancer = getByText('end enhancer');
  expect(endEnhancer).toBeInTheDocument();
});

test('startEnhancer should not appear when loading', () => {
  const { queryByText } = renderComponent({
    isLoading: true,
    startEnhancer: <span>start enhancer</span>
  });
  const startEnhancer = queryByText('start enhancer');
  expect(startEnhancer).toBeNull();
});

test('endEnhancer should not appear when loading', () => {
  const { queryByText } = renderComponent({
    isLoading: true,
    endEnhancer: <span>end enhancer</span>
  });
  const endEnhancer = queryByText('end enhancer');
  expect(endEnhancer).toBeNull();
});

test('should apply large size when specified', () => {
  const { getByRole } = renderComponent({ size: 'large' });
  const button = getByRole('button');
  expect(button).toHaveClass('zui-button-large');
});
