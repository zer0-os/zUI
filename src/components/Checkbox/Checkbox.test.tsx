import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { Checkbox, CheckboxProps } from './';

const mockOnChange = jest.fn();
const triggerLink = jest.fn();

const DEFAULT_PROPS: CheckboxProps = {
  onChange: mockOnChange,
  name: 'checkbox'
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe('<Checkbox />', () => {
  test('should call onChange with true when checkbox is checked', () => {
    render(<Checkbox {...DEFAULT_PROPS} />);
    fireEvent.click(screen.getByRole('checkbox'), { target: { checked: true } });
    expect(mockOnChange).toHaveBeenCalledWith(true);
  });

  test('should call onChange with false when checkbox is unchecked', () => {
    render(<Checkbox {...DEFAULT_PROPS} checked />);
    fireEvent.click(screen.getByRole('checkbox'), { target: { checked: false } });
    expect(mockOnChange).toHaveBeenCalledWith(false);
  });

  test('should not call onChange when checkbox is disabled', () => {
    render(<Checkbox {...DEFAULT_PROPS} checked isDisabled />);
    fireEvent.click(screen.getByRole('checkbox'), { target: { checked: false } });
    expect(mockOnChange).toBeCalledTimes(0);
  });

  test('should call onChange with true when the user clicks on the checkbox text', () => {
    render(<Checkbox {...DEFAULT_PROPS} text="HelloText" />);
    fireEvent.click(screen.getByText('HelloText', { exact: false }));
    expect(mockOnChange).toHaveBeenCalledWith(true);
  });

  test('should call the triggerLink function when the user clicks on the link', () => {
    render(<Checkbox {...DEFAULT_PROPS} link="helloLink" onLinkClick={triggerLink} />);
    fireEvent.click(screen.getByText('helloLink', { exact: false }));
    expect(triggerLink).toBeCalledTimes(1);
  });

  test('should not call the triggerLink function when the checkbox is disabled and user clicks on the link', () => {
    render(<Checkbox {...DEFAULT_PROPS} link="helloLink" isDisabled onLinkClick={triggerLink} />);
    fireEvent.click(screen.getByText('helloLink', { exact: false }));
    expect(triggerLink).toBeCalledTimes(0);
  });
});
