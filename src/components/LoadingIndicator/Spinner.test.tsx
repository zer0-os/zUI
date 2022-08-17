import React from 'react';
import { render } from '@testing-library/react';
import Spinner, { SpinnerProps } from './Spinner';

const renderComponent = (props: SpinnerProps) => render(<Spinner {...props} />);

const mockChildren = 'Spinner Content';
const mockCustomClassName = 'my_custom--class-name';

test('should render with children', () => {
  const { getByText } = renderComponent({ children: mockChildren });
  const spinner = getByText(mockChildren);
  expect(spinner).toBeInTheDocument();
});

test('should render with default class name', () => {
  const { getByText } = renderComponent({ children: mockChildren });
  const spinner = getByText(mockChildren);
  expect(spinner).toBeInTheDocument();
  expect(spinner).toHaveClass('zui-spinner');
});

test('should render with custom class name', () => {
  const { getByText } = renderComponent({ children: mockChildren, className: mockCustomClassName });
  const spinner = getByText(mockChildren);
  expect(spinner).toBeInTheDocument();
  expect(spinner).toHaveClass(mockCustomClassName);
});
