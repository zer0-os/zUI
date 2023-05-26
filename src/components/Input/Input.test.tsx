import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { Input, InputProps } from './';

const mockOnChange = jest.fn();

const DEFAULT_PROPS: InputProps = {
  onChange: mockOnChange,
  value: 'mock value'
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe('<Input />', () => {
  test('should call onChange when input value changes', () => {
    render(<Input {...DEFAULT_PROPS} value={''} />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'mock new value' } });
    expect(mockOnChange).toHaveBeenCalledWith('mock new value');
  });

  test('should set size attribute on input wrapper', () => {
    render(<Input {...DEFAULT_PROPS} />);
    expect(screen.getByTestId('zui-input-wrapper')).toHaveAttribute('data-size', 'large');
  });

  test('should set status attribute to error on error', () => {
    render(<Input {...DEFAULT_PROPS} error={true} />);
    expect(screen.getByTestId('zui-input-wrapper')).toHaveAttribute('data-status', 'error');
  });

  test('should focus on input when wrapper is clicked', () => {
    render(<Input {...DEFAULT_PROPS} />);
    fireEvent.click(screen.getByTestId('zui-input-wrapper'));
    expect(screen.getByRole('textbox')).toHaveFocus();
  });

  test('should set type attribute on input if it is a password type', () => {
    render(<Input {...DEFAULT_PROPS} type="password" />);
    expect(screen.getByTestId('zui-input')).toHaveAttribute('type', 'password');
  });

  test('should set the type attribute to text for anything other than password', () => {
    const { getByTestId, rerender } = render(<Input {...DEFAULT_PROPS} />);
    expect(getByTestId('zui-input')).toHaveAttribute('type', 'text');

    rerender(<Input {...DEFAULT_PROPS} type="text" />);
    expect(getByTestId('zui-input')).toHaveAttribute('type', 'text');

    rerender(<Input {...DEFAULT_PROPS} type="number" />);
    expect(getByTestId('zui-input')).toHaveAttribute('type', 'text');
  });

  describe('labels', () => {
    test('should render label outside of input wrapper', () => {
      render(<Input {...DEFAULT_PROPS} label={'mock label'} />);
      expect(screen.getByText('mock label')).toBeInTheDocument();
      expect(screen.getByTestId('zui-input-wrapper')).not.toHaveTextContent('mock label');
    });

    test('should render helper text outside of input wrapper', () => {
      render(<Input {...DEFAULT_PROPS} helperText={'mock helper text'} />);
      expect(screen.getByText('mock helper text')).toBeInTheDocument();
      expect(screen.getByTestId('zui-input-wrapper')).not.toHaveTextContent('mock helper text');
    });
  });

  describe('enhancers', () => {
    test('should render start enhancer as first child of input wrapper', () => {
      render(<Input {...DEFAULT_PROPS} startEnhancer={'mock start enhancer'} />);
      expect(screen.getByTestId('zui-input-wrapper').firstChild).toHaveTextContent('mock start enhancer');
    });

    test('should render end enhancer as last child of input wrapper', () => {
      render(<Input {...DEFAULT_PROPS} endEnhancer={'mock end enhancer'} />);
      expect(screen.getByTestId('zui-input-wrapper').lastChild).toHaveTextContent('mock end enhancer');
    });
  });

  describe('when Input is disabled', () => {
    test('should render disabled attribute on input', () => {
      render(<Input {...DEFAULT_PROPS} isDisabled={true} />);
      expect(screen.getByRole('textbox')).toHaveAttribute('disabled');
    });

    test('should render disabled data attribute on input wrapper', () => {
      render(<Input {...DEFAULT_PROPS} isDisabled={true} />);
      expect(screen.getByTestId('zui-input-wrapper')).toHaveAttribute('data-disabled');
    });

    test('should not call onChange', () => {
      render(<Input {...DEFAULT_PROPS} value={''} isDisabled={true} />);
      fireEvent.change(screen.getByRole('textbox'), { target: { value: 'mock new value' } });
      expect(mockOnChange).not.toHaveBeenCalled();
    });
  });
});
