import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { Input, InputProps } from './';

const mockOnChange = jest.fn();

const renderComponent = (props: InputProps) => render(<Input {...props} />);

test('should render controlled input value', () => {
  const { getByDisplayValue } = renderComponent({ value: 'test input value' } as InputProps);
  const input = getByDisplayValue('test input value') as HTMLInputElement;
  expect(input.nodeName.toLowerCase()).toBe('input');
});

test('should show label when field is not empty', () => {
  const { getByText } = renderComponent({ value: 'hello', label: 'test label' } as InputProps);
  const label = getByText('test label') as HTMLLabelElement;
  expect(label).toBeInTheDocument();
  expect(label.nodeName.toLowerCase()).toBe('label');
});

test('should hide label when field is empty', () => {
  const { queryByText } = renderComponent({ value: '', label: 'test label' } as InputProps);
  expect(queryByText('test label')).toBeNull();
});

test('should fire onChange on input change', () => {
  const { getByDisplayValue } = renderComponent({ value: 'test input value', onChange: mockOnChange });
  const input = getByDisplayValue('test input value');
  fireEvent.change(input, { target: { value: 'new input value' } });
  expect(mockOnChange).toBeCalledWith('new input value');
});
