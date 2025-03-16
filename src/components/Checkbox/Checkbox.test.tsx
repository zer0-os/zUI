import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { Checkbox, CheckboxProps, StandardCheckboxProps, AdvancedCheckboxProps, ButtonLink, ExternalLink } from './';

const mockOnChange = vi.fn();
const triggerLink = vi.fn();

const DEFAULT_PROPS: CheckboxProps = {
  onChange: mockOnChange,
  name: 'checkbox'
};

beforeEach(() => {
  vi.resetAllMocks();
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
    const checkboxWithTextProps: StandardCheckboxProps = { ...DEFAULT_PROPS, text: 'HelloText', variant: 'standard' };
    render(<Checkbox {...checkboxWithTextProps} />);
    fireEvent.click(screen.getByText('HelloText', { exact: false }));
    expect(mockOnChange).toHaveBeenCalledWith(true);
  });

  test('should call the triggerLink function when the user clicks on the link', () => {
    const linkData: ButtonLink = { text: 'helloLink', onClickLink: () => triggerLink() };
    const checkboxWithTextProps: StandardCheckboxProps = {
      ...DEFAULT_PROPS,
      text: 'HelloText',
      variant: 'standard',
      link: linkData
    };
    render(<Checkbox {...checkboxWithTextProps} />);
    fireEvent.click(screen.getByText('helloLink', { exact: false }));
    expect(triggerLink).toBeCalledTimes(1);
  });

  test('should call the external link when the user clicks on the link', () => {
    const linkData: ExternalLink = { text: 'helloLink', href: 'https://zer0.io/a/home' };
    const checkboxWithTextProps: StandardCheckboxProps = {
      ...DEFAULT_PROPS,
      text: 'HelloText',
      variant: 'standard',
      link: linkData
    };
    render(<Checkbox {...checkboxWithTextProps} />);
    const linkElement = screen.getByText('helloLink', { exact: false }) as HTMLAnchorElement;
    expect(linkElement.href).toEqual('https://zer0.io/a/home');
  });

  test('should not call the triggerLink function when the checkbox is disabled and user clicks on the link', () => {
    const linkData: ButtonLink = { text: 'helloLink', onClickLink: () => triggerLink() };
    const checkboxWithTextProps: StandardCheckboxProps = {
      ...DEFAULT_PROPS,
      text: 'HelloText',
      variant: 'standard',
      link: linkData
    };
    render(<Checkbox {...checkboxWithTextProps} isDisabled />);
    fireEvent.click(screen.getByText('helloLink', { exact: false }));
    expect(triggerLink).toBeCalledTimes(0);
  });

  test('should call onChange with true when the user clicks on the advance checkbox text', () => {
    const checkboxWithTextProps: AdvancedCheckboxProps = {
      ...DEFAULT_PROPS,
      title: 'HelloText',
      description: 'sample description',
      variant: 'advanced'
    };
    render(<Checkbox {...checkboxWithTextProps} />);
    fireEvent.click(screen.getByText('HelloText', { exact: false }));
    expect(mockOnChange).toHaveBeenCalledWith(true);
  });

  test('should not call onChange when the user clicks on the advance checkbox text as the checkbox in disabled state', () => {
    const checkboxWithTextProps: AdvancedCheckboxProps = {
      ...DEFAULT_PROPS,
      title: 'HelloText',
      isDisabled: true,
      description: 'sample description',
      variant: 'advanced'
    };
    render(<Checkbox {...checkboxWithTextProps} />);
    fireEvent.click(screen.getByText('HelloText', { exact: false }));
    expect(mockOnChange).toBeCalledTimes(0);
  });
});
