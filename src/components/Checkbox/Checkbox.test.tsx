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
  test('should call onChange with true when check box is checked', () => {
    render(<Checkbox {...DEFAULT_PROPS} />);
    fireEvent.click(screen.getByRole('checkbox'), { target: { checked: true } });
    expect(mockOnChange).toHaveBeenCalledWith(true);
  });

  test('should call onChange with flase when check box is unchecked', () => {
    render(<Checkbox {...DEFAULT_PROPS} checked={true} />);
    fireEvent.click(screen.getByRole('checkbox'), { target: { checked: false } });
    expect(mockOnChange).toHaveBeenCalledWith(false);
  });

  test('should not call the onChange when check box is disabled', () => {
    render(<Checkbox {...DEFAULT_PROPS} checked={true} isDisabled={true} />);
    fireEvent.click(screen.getByRole('checkbox'), { target: { checked: false } });
    expect(mockOnChange).toBeCalledTimes(0);
  });

  test('should call the onChange with true when the we clicks on text', () => {
    render(<Checkbox {...DEFAULT_PROPS} text="HelloText" />);
    fireEvent.click(screen.getByText('HelloText', { exact: false }));
    expect(mockOnChange).toHaveBeenCalledWith(true);
  });

  test('should call the triggerLink function when click on link', () => {
    render(<Checkbox {...DEFAULT_PROPS} link="helloLink" redirectLinkTriggered={triggerLink} />);
    fireEvent.click(screen.getByText('helloLink', { exact: false }));
    expect(triggerLink).toBeCalledTimes(1);
  });

  test('should not call the triggerLink function when click on link due to disable', () => {
    render(<Checkbox {...DEFAULT_PROPS} link="helloLink" isDisabled={true} redirectLinkTriggered={triggerLink} />);
    fireEvent.click(screen.getByText('helloLink', { exact: false }));
    expect(triggerLink).toBeCalledTimes(0);
  });
});
