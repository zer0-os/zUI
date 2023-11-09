import React, { cleanup, render, screen } from '@testing-library/react';

import { SelectInput, SelectInputProps } from './';
import { DropdownItem } from '../DropdownMenu';
import {
  DropdownMenuContentProps,
  DropdownMenuItemProps,
  DropdownMenuProps,
  DropdownMenuTriggerProps
} from '@radix-ui/react-dropdown-menu';

const mockOnSelect = jest.fn();

const MOCK_ITEMS: DropdownItem[] = [
  { id: 'lemon', label: 'Lemon', className: 'lemon', onSelect: mockOnSelect },
  { id: 'lime', label: 'Lime', className: 'lime', onSelect: mockOnSelect },
  { id: 'orange', label: 'Orange', className: 'orange', onSelect: mockOnSelect }
];

/* Mock Radix DropdownMenu primitives so we can skip testing them */

const mockRadixTrigger = jest.fn();
const mockRadixContent = jest.fn();
const mockRadixItem = jest.fn();

jest.mock('@radix-ui/react-dropdown-menu', () => ({
  Root: (props: DropdownMenuProps) => {
    return <div data-testid="root">{props.children}</div>;
  },
  Trigger: (props: DropdownMenuTriggerProps) => {
    mockRadixTrigger(props);
    return (
      <div className={props.className} data-testid="trigger">
        {props.children}
      </div>
    );
  },
  Content: (props: DropdownMenuContentProps) => {
    mockRadixContent(props);
    return (
      <div className={props.className} data-testid="content">
        {props.children}
      </div>
    );
  },
  Item: (props: DropdownMenuItemProps) => {
    mockRadixItem(props);
    return <div className={'mock-item ' + props.className}>{props.children}</div>;
  }
}));

const DEFAULT_PROPS: SelectInputProps = {
  items: MOCK_ITEMS,
  label: 'Fruit',
  placeholder: 'Select fruit...',
  value: ''
};

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe('<SelectInput />', () => {
  test('should call menu item onSelect when dropdown value selected', () => {
    render(<SelectInput {...DEFAULT_PROPS} />);
    mockRadixItem.mock.lastCall[0].onSelect();
    expect(mockOnSelect).toBeCalledTimes(1);
  });

  test('should correctly display error alert', () => {
    render(
      <SelectInput
        {...DEFAULT_PROPS}
        error={true}
        alert={{
          variant: 'error',
          text: 'Invalid fruit choice.'
        }}
      />
    );

    expect(screen.getByTestId('zui-input-wrapper')).toHaveAttribute('data-status', 'error');
    expect(screen.getByText('Invalid fruit choice.')).toBeInTheDocument();
  });

  test('should correctly display helper text', () => {
    render(<SelectInput {...DEFAULT_PROPS} helperText="Select a fruit from the dropdown." />);
    expect(screen.getByText('Select a fruit from the dropdown.')).toBeInTheDocument();
  });
});
