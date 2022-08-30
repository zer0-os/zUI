import React from 'react';
import { render } from '@testing-library/react';
import { LoadingIndicator, LoadingIndicatorProps, TEST_ID } from './LoadingIndicator';

const renderComponent = (props: LoadingIndicatorProps) => render(<LoadingIndicator {...props} />);

const mockText = 'LoadingIndicator Text';
const mockCustomClassName = 'my_custom--class-name';

test('should render container', () => {
  const { getByTestId } = renderComponent({});
  const container = getByTestId(TEST_ID.CONTAINER);
  expect(container).toBeInTheDocument();
  expect(container).toHaveClass('zui-loading-indicator');
  expect(container).toHaveClass('zui-loading-indicator-bottom');
});

test('should render container with custom class name', () => {
  const { getByTestId } = renderComponent({ className: mockCustomClassName });
  const container = getByTestId(TEST_ID.CONTAINER);
  expect(container).toHaveClass(mockCustomClassName);
});

test('should render container with custom position', () => {
  const { getByTestId } = renderComponent({ spinnerPosition: 'right' });
  const container = getByTestId(TEST_ID.CONTAINER);
  expect(container).toHaveClass('zui-loading-indicator-right');
});

test('should render spinner', () => {
  const { getByTestId } = renderComponent({});
  const spinner = getByTestId(TEST_ID.SPINNER);
  expect(spinner).toBeInTheDocument();
});

test('should render text', () => {
  const { getByTestId } = renderComponent({ text: mockText });
  const text = getByTestId(TEST_ID.TEXT);
  expect(text).toBeInTheDocument();
  expect(text).toHaveClass('zui-loading-indicator-text');
  expect(text).toHaveClass('zui-loading-indicator-text-bottom');
});

test('should render text with custom postiion', () => {
  const { getByTestId } = renderComponent({ text: mockText, spinnerPosition: 'left' });
  const text = getByTestId(TEST_ID.TEXT);
  expect(text).toHaveClass('zui-loading-indicator-text-left');
});
