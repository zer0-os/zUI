import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { DropdownMenu, DropdownItem } from '.';
import {
  DropdownMenuArrowProps,
  DropdownMenuTriggerProps,
  DropdownMenuContentProps,
  DropdownMenuItemProps,
  DropdownMenuProps
} from '@radix-ui/react-dropdown-menu';

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
const mockRadixArrow = jest.fn();

jest.mock('@radix-ui/react-dropdown-menu', () => ({
  Root: (props: DropdownMenuProps) => {
    mockRadixRoot(props);
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
  },
  Arrow: (props: DropdownMenuArrowProps) => {
    mockRadixArrow(props);
    return <div data-testid="arrow">{props.children}</div>;
  }
}));

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe('<DropdownMenu />', () => {
  test('should render Radix primitives with correct nesting', () => {
    const { container } = render(<DropdownMenu {...DEFAULT_PROPS} />);

    const root = container.firstChild;
    const trigger = screen.getByTestId('trigger');
    const content = screen.getByTestId('content');

    // Check that trigger and content are children of root
    expect(root).toBe(screen.getByTestId('root'));
    expect(trigger.parentElement).toBe(root);
    expect(content.parentElement).toBe(root);

    // Check that items are only rendered in the dropdown content
    const items = container.getElementsByClassName('mock-item');
    const parents = Array.from(items).map(item => item.parentElement);
    parents.forEach(parent => expect(parent).toBe(content));
  });

  describe('class names', () => {
    test('should apply className to trigger', () => {
      render(<DropdownMenu {...DEFAULT_PROPS} className="mock-class" />);

      expect(screen.getByTestId('trigger')).toHaveClass('mock-class');
    });
  });

  describe('menu items', () => {
    test('should apply classNames to menu items', () => {
      render(<DropdownMenu {...DEFAULT_PROPS} className="mock-class" />);

      MOCK_ITEMS.forEach(item => expect(screen.getByText(item.label as string)).toHaveClass(item.className));
    });

    test('should render correct menu item labels', () => {
      const { container } = render(<DropdownMenu {...DEFAULT_PROPS} />);

      const items = container.getElementsByClassName('mock-item');
      expect(items.length).toBe(MOCK_ITEMS.length);
      expect(Array.from(items).map(item => item.textContent)).toEqual(MOCK_ITEMS.map(item => item.label));
    });

    test('should make menu items clickable', () => {
      render(<DropdownMenu {...DEFAULT_PROPS} />);

      mockRadixItem.mock.lastCall[0].onSelect();
      expect(mockOnSelect).toBeCalledTimes(1);
    });
  });

  describe('dropdown trigger', () => {
    test('should render `...` as default trigger', () => {
      render(<DropdownMenu {...DEFAULT_PROPS} />);

      expect(screen.getByTestId('trigger').textContent).toBe('...');
    });

    test('should render string trigger', () => {
      render(<DropdownMenu {...DEFAULT_PROPS} trigger="mock-trigger-string" />);

      const triggerText = screen.getByText('mock-trigger-string');
      expect(triggerText.nodeName).toBe('SPAN');
      expect(triggerText.parentElement).toBe(screen.getByTestId('trigger'));
    });

    test('should render component trigger', () => {
      render(<DropdownMenu {...DEFAULT_PROPS} trigger={<aside>mock trigger component</aside>} />);

      const triggerText = screen.getByText('mock trigger component');
      expect(triggerText.nodeName).toBe('ASIDE');
      expect(triggerText.parentElement).toBe(screen.getByTestId('trigger'));
    });
  });

  describe('@radix-ui prop forwarding', () => {
    test('should pass content props to Radix Content component', () => {
      render(<DropdownMenu {...DEFAULT_PROPS} alignMenu="start" side="top" />);

      expect(mockRadixContent).toBeCalledWith(expect.objectContaining({ align: 'start', side: 'top' }));
    });

    test('should pass root props to Radix Root component', () => {
      render(<DropdownMenu {...DEFAULT_PROPS} open={true} defaultOpen={true} />);

      expect(mockRadixRoot).toBeCalledWith(expect.objectContaining({ open: true, defaultOpen: true }));
    });
  });

  describe('dropdown arrow', () => {
    test('should not render arrow by default', () => {
      render(<DropdownMenu {...DEFAULT_PROPS} />);

      const arrow = screen.queryByTestId('arrow');
      expect(arrow).toBeNull();
    });

    test('should render arrow if alignMenu is center and showArrow is true', () => {
      render(<DropdownMenu {...DEFAULT_PROPS} alignMenu="center" showArrow={true} />);
      const content = screen.getByTestId('content');

      const arrow = screen.getByTestId('arrow');
      expect(arrow).not.toBeNull();
      expect(arrow.parentElement).toBe(content);
    });

    test('should not render arrow if alignMenu is not center even though showArrow is true', () => {
      render(<DropdownMenu {...DEFAULT_PROPS} alignMenu="start" showArrow={true} />);

      const arrow = screen.queryByTestId('arrow');
      expect(arrow).toBeNull();
    });
  });
});
