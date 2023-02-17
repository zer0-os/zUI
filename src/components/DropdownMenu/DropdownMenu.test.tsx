import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import * as Dropdown from '.';
import {
  DropdownMenuRootContentProps,
  DropdownMenuTriggerProps,
  DropdownMenuContentProps,
  DropdownMenuItemProps
} from '@radix-ui/react-dropdown-menu';

const mockOnSelect = jest.fn();
const MOCK_ITEMS: Dropdown.DropdownItem[] = [
  { id: 'dropdown_item_id_1', label: 'Dropdown Item 1', className: 'dropdown-item-1', onSelect: mockOnSelect },
  { id: 'dropdown_item_id_2', label: 'Dropdown Item 2', className: 'dropdown-item-2', onSelect: mockOnSelect },
  { id: 'dropdown_item_id_3', label: 'Dropdown Item 3', className: 'dropdown-item-3', onSelect: mockOnSelect }
];
const mockText = ['Mock Text', 'Second Mock Text'];
const mockClassName = 'Mock-ClassName';
const MockComponent = ({ text }: { text: string }) => {
  return (
    <div id="mockComponent">
      <p>{text}</p>
    </div>
  );
};
const DEFAULT_PROPS_MENU = { items: MOCK_ITEMS };
const DEFAULT_PROPS_HEADER: Dropdown.HeaderProps = {
  item: '',
  className: undefined
};

/* Mock Radix DropdownMenu primitives so we can skip testing them */
const mockRadixRoot = jest.fn();
const mockRadixTrigger = jest.fn();
const mockRadixContent = jest.fn();
const mockRadixItem = jest.fn();

jest.mock('@radix-ui/react-dropdown-menu', () => ({
  Root: (props: DropdownMenuRootContentProps) => {
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
  }
}));

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe('<DropdownMenu />', () => {
  test('should render Radix primitives with correct nesting', () => {
    const { container } = render(<Dropdown.DropdownMenu {...DEFAULT_PROPS_MENU} />);
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
      render(<Dropdown.DropdownMenu {...DEFAULT_PROPS_MENU} className="mock-class" />);
      expect(screen.getByTestId('trigger')).toHaveClass('mock-class');
    });
  });

  describe('menu items', () => {
    test('should apply classNames to menu items', () => {
      render(<Dropdown.DropdownMenu {...DEFAULT_PROPS_MENU} className="mock-class" />);
      MOCK_ITEMS.forEach(item => expect(screen.getByText(item.label as string)).toHaveClass(item.className));
    });

    test('should render correct menu item labels', () => {
      const { container } = render(<Dropdown.DropdownMenu {...DEFAULT_PROPS_MENU} />);
      const items = container.getElementsByClassName('mock-item');
      expect(items.length).toBe(MOCK_ITEMS.length);
      expect(Array.from(items).map(item => item.textContent)).toEqual(MOCK_ITEMS.map(item => item.label));
    });

    test('should make menu items clickable', () => {
      render(<Dropdown.DropdownMenu {...DEFAULT_PROPS_MENU} />);
      mockRadixItem.mock.lastCall[0].onSelect();
      expect(mockOnSelect).toBeCalledTimes(1);
    });
  });

  describe('dropdown trigger', () => {
    test('should render `...` as default trigger', () => {
      render(<Dropdown.DropdownMenu {...DEFAULT_PROPS_MENU} />);
      expect(screen.getByTestId('trigger').textContent).toBe('...');
    });

    test('should render string trigger', () => {
      render(<Dropdown.DropdownMenu {...DEFAULT_PROPS_MENU} trigger="mock-trigger-string" />);
      const triggerText = screen.getByText('mock-trigger-string');
      expect(triggerText.nodeName).toBe('SPAN');
      expect(triggerText.parentElement).toBe(screen.getByTestId('trigger'));
    });

    test('should render component trigger', () => {
      render(<Dropdown.DropdownMenu {...DEFAULT_PROPS_MENU} trigger={<aside>mock trigger component</aside>} />);
      const triggerText = screen.getByText('mock trigger component');
      expect(triggerText.nodeName).toBe('ASIDE');
      expect(triggerText.parentElement).toBe(screen.getByTestId('trigger'));
    });
  });

  describe('@radix-ui prop forwarding', () => {
    test('should pass content props to Radix Content component', () => {
      render(<Dropdown.DropdownMenu {...DEFAULT_PROPS_MENU} alignMenu="start" side="top" />);
      expect(mockRadixContent).toBeCalledWith(expect.objectContaining({ align: 'start', side: 'top' }));
    });

    test('should pass root props to Radix Root component', () => {
      render(<Dropdown.DropdownMenu {...DEFAULT_PROPS_MENU} open={true} defaultOpen={true} />);
      expect(mockRadixRoot).toBeCalledWith(expect.objectContaining({ open: true, defaultOpen: true }));
    });
  });

  describe('menu header component', () => {
    test('should render Header component', () => {
      const { container } = render(
        <Dropdown.DropdownMenu {...DEFAULT_PROPS_MENU} open={true} defaultOpen={true}>
          <Dropdown.Header {...DEFAULT_PROPS_HEADER} className={mockClassName} item={mockText[0]} />
        </Dropdown.DropdownMenu>
      );
      expect(container.getElementsByClassName(mockClassName).length).toBe(1);
      expect(screen.getByText(mockText[0])).toBeInTheDocument();
    });
  });
});

const renderHeader = (props?: Dropdown.HeaderProps) => render(<Dropdown.Header {...DEFAULT_PROPS_HEADER} {...props} />);

describe('<Dropdown.Header />', () => {
  test('should recognize a string and render it from props', () => {
    const { container } = renderHeader({ item: mockText[0] });
    expect(container.firstChild?.textContent).toBe(mockText[0]);
  });

  test('should recognize a Component and render it from props', () => {
    renderHeader({ item: <MockComponent text={mockText[0]} /> });
    expect(screen.getByText(mockText[0])).toBeInTheDocument();
  });

  test('should recognize a Fragment and render it from props', () => {
    renderHeader({
      item: (
        <>
          <MockComponent text={mockText[0]} />
          <MockComponent text={mockText[1]} />
        </>
      )
    });
    mockText.forEach(item => expect(screen.getByText(item)).toBeInTheDocument());
  });

  test('should apply className from props to tag container', () => {
    const { container } = renderHeader({ ...DEFAULT_PROPS_HEADER, className: mockClassName });
    expect(container.firstChild).toHaveClass(mockClassName);
    expect(container.getElementsByClassName(mockClassName).length).toBe(1);
  });
});
