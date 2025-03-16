import React from 'react';
import { render } from '@testing-library/react';

import { SearchInput, SearchInputProps } from './SearchInput';
import { InputProps } from './Input';

let mockInput = vi.fn();

vi.mock('./Input', () => ({
  Input: (props: InputProps) => {
    mockInput(props);
    return <div data-testid={'input'} />;
  }
}));

const renderComponent = (props: SearchInputProps) => render(<SearchInput {...props} />);

describe('<SearchInput />', () => {
  it('should pass important props to Input', () => {
    const mockOnChange = vi.fn();
    const mockValue = 'mock-value';
    renderComponent({ value: mockValue, onChange: mockOnChange });
    expect(mockInput).toHaveBeenCalledWith(
      expect.objectContaining({
        value: mockValue,
        onChange: mockOnChange
      })
    );
  });
});
