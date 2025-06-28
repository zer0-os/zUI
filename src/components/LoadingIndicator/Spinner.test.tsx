import React from 'react';
import { render } from '@testing-library/react';
import { Spinner, SpinnerProps } from './Spinner';

const renderComponent = (props: SpinnerProps) => render(<Spinner {...props} />);

const mockCustomClassName = 'my_custom--class-name';

test('should render with custom class name', () => {
  const { getByTestId } = renderComponent({ className: mockCustomClassName });
  const spinner = getByTestId('spinner');
  expect(spinner).toBeInTheDocument();
  expect(spinner).toHaveClass(mockCustomClassName);
});
