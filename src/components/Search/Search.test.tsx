import React from 'react';
import { render } from '@testing-library/react';

import { Search, SearchProps } from './';

const mockOnQueryStringChange = vi.fn();

const DEFAULT_PROPS: SearchProps = {
  onQueryStringChange: mockOnQueryStringChange
};

const mockInput = vi.fn();

vi.mock('../Input', () => ({
  Input: (props: any): null => {
    mockInput(props);
    return null;
  }
}));

beforeEach(() => {
  vi.resetAllMocks();
});

describe('<Search />', () => {
  test('should pass className to Input', () => {
    render(<Search {...DEFAULT_PROPS} className={'mock-class'} />);
    const { className } = mockInput.mock.calls[0][0];
    expect(className).toContain('mock-class');
  });

  test('should pass placeholder to Input', () => {
    render(<Search {...DEFAULT_PROPS} placeholder={'mock-placeholder'} />);
    expect(mockInput).toHaveBeenCalledWith(expect.objectContaining({ placeholder: 'mock-placeholder' }));
  });

  test('should pass queryString to Input value', () => {
    render(<Search {...DEFAULT_PROPS} queryString={'mock-query-string'} />);
    expect(mockInput).toHaveBeenCalledWith(expect.objectContaining({ value: 'mock-query-string' }));
  });

  test('should pass isDisabled to Input', () => {
    render(<Search {...DEFAULT_PROPS} isDisabled={true} />);
    expect(mockInput).toHaveBeenCalledWith(expect.objectContaining({ isDisabled: true }));
  });

  test('should pass onQueryStringChange to Input onChange', () => {
    render(<Search {...DEFAULT_PROPS} onQueryStringChange={mockOnQueryStringChange} />);
    expect(mockInput).toHaveBeenCalledWith(expect.objectContaining({ onChange: mockOnQueryStringChange }));
  });
});
