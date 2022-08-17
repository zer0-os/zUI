import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

import DropdownMenu, { DropdownItem, DropdownMenuProps } from '.';

const mockOnSelect = jest.fn();
const mockTrigger = 'Mock Trigger';

const mockItems: DropdownItem[] = [
  { id: 'dropdown_item_id_1', label: 'Dropdown Item 1', onSelect: mockOnSelect },
  { id: 'dropdown_item_id_2', label: 'Dropdown Item 2', onSelect: mockOnSelect },
  { id: 'dropdown_item_id_3', label: 'Dropdown Item 3', onSelect: mockOnSelect }
];

const renderComponent = (props: DropdownMenuProps) => render(<DropdownMenu {...props} />);

test('should render default trigger', () => {
  const { getByText } = renderComponent({ items: mockItems });
  const trigger = getByText('...');
  expect(trigger).toBeInTheDocument();
  expect(trigger).toHaveClass('zui-dropdown-trigger');
});

test('should render custom trigger', () => {
  const { getByText } = renderComponent({ items: mockItems, trigger: mockTrigger });
  const trigger = getByText(mockTrigger);
  expect(trigger).toBeInTheDocument();
  expect(trigger).toHaveClass('zui-dropdown-trigger');
});
