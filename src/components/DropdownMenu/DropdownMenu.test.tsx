import React from 'react';
import { cleanup, render } from '@testing-library/react';

import { DropdownMenu, DropdownItem, DropdownMenuProps } from '.';

const mockOnSelect = jest.fn();
const MOCK_ITEMS: DropdownItem[] = [
  { id: 'dropdown_item_id_1', label: 'Dropdown Item 1', className: 'dropdown-item-1', onSelect: mockOnSelect },
  { id: 'dropdown_item_id_2', label: 'Dropdown Item 2', className: 'dropdown-item-2', onSelect: mockOnSelect },
  { id: 'dropdown_item_id_3', label: 'Dropdown Item 3', className: 'dropdown-item-3', onSelect: mockOnSelect }
];

const DEFAULT_PROPS = { items: MOCK_ITEMS };

/* Mock Radix DropdownMenu primitives so we can skip testing them */

const mockRadixRoot = jest.fn();
const mockRadixTrigger = jest.fn();
const mockRadixContent = jest.fn();
const mockRadixItem = jest.fn();

jest.mock('@radix-ui/react-dropdown-menu', () => ({
  Root: (props: any) => {
    mockRadixRoot(props);
    return <div data-testid="root">{props.children}</div>;
  },
  Trigger: (props: any) => {
    mockRadixTrigger(props);
    return (
      <div className={props.className} data-testid="trigger">
        {props.children}
      </div>
    );
  },
  Content: (props: any) => {
    mockRadixContent(props);
    return (
      <div className={props.className} data-testid="content">
        {props.children}
      </div>
    );
  },
  Item: (props: any) => {
    mockRadixItem(props);
    return <div className={'mock-item ' + props.className}>{props.children}</div>;
  }
}));

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

const renderComponent = (props?: Partial<DropdownMenuProps>) => render(<DropdownMenu {...DEFAULT_PROPS} {...props} />);

test('should render Radix primitives in the correct order', () => {
  const { container, getByTestId } = renderComponent();

  const root = container.firstChild;
  const trigger = getByTestId('trigger');
  const content = getByTestId('content');

  // Check that trigger and content are children of root
  expect(root).toBe(getByTestId('root'));
  expect(trigger.parentElement).toBe(root);
  expect(content.parentElement).toBe(root);

  // Check that items are only rendered in the dropdown content
  const items = container.getElementsByClassName('mock-item');
  const parents = Array.from(items).map(item => item.parentElement);
  parents.forEach(parent => expect(parent).toBe(content));
});

test('should apply className to trigger', () => {
  const { getByTestId } = renderComponent({ className: 'mock-class' });

  expect(getByTestId('trigger')).toHaveClass('mock-class');
});

test('should render correct menu item labels', () => {
  const { container } = renderComponent();

  const items = container.getElementsByClassName('mock-item');
  expect(items.length).toBe(MOCK_ITEMS.length);
  expect(Array.from(items).map(item => item.textContent)).toEqual(MOCK_ITEMS.map(item => item.label));
});

test('should apply classNames to menu items', () => {
  const { getByText } = renderComponent();

  MOCK_ITEMS.forEach(item => expect(getByText(item.label as string)).toHaveClass(item.className));
});

test('should make menu items clickable', () => {
  renderComponent();

  mockRadixItem.mock.lastCall[0].onSelect();
  expect(mockOnSelect).toBeCalledTimes(1);
});

test('should render `...` as default trigger', () => {
  const { getByTestId } = renderComponent();

  expect(getByTestId('trigger').textContent).toBe('...');
});

test('should render string trigger', () => {
  const { getByText, getByTestId } = renderComponent({ trigger: 'mock-trigger-string' });

  const triggerText = getByText('mock-trigger-string');
  expect(triggerText.nodeName).toBe('SPAN');
  expect(triggerText.parentElement).toBe(getByTestId('trigger'));
});

test('should render component trigger', () => {
  const { getByText, getByTestId } = renderComponent({ trigger: <aside>mock trigger component</aside> });

  const triggerText = getByText('mock trigger component');
  expect(triggerText.nodeName).toBe('ASIDE');
  expect(triggerText.parentElement).toBe(getByTestId('trigger'));
});

test('should apply content props to content', () => {
  renderComponent({ alignMenu: 'start', side: 'top' });

  expect(mockRadixContent).toBeCalledWith(expect.objectContaining({ align: 'start', side: 'top' }));
});

test('should apply props from RadixUIDropdownMenuProps to root', () => {
  renderComponent({ open: true, defaultOpen: true, modal: true });

  expect(mockRadixRoot).toBeCalledWith(expect.objectContaining({ open: true, defaultOpen: true, modal: true }));
});
