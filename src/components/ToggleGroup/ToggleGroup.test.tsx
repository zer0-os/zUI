/**
 * @TODO: assess coverage
 */

import { render } from '@testing-library/react';
import { describe, test, expect, vi, beforeEach } from 'vitest';

import { ToggleGroup, ToggleGroupProps } from './';

const mockRoot = vi.fn();
const mockItem = vi.fn();

vi.mock('@radix-ui/react-toggle-group', () => ({
  Root: (props: any) => {
    mockRoot(props);
    return <div {...props}>{props.children}</div>;
  },
  Item: (props: any) => {
    mockItem(props);
    return <div {...props}>{props.children}</div>;
  }
}));

const LABEL_OPTIONS = [
  { key: '1', label: 'Option 1' },
  { key: '2', label: 'Option 2' },
  { key: '3', label: 'Option 3' }
];

/* Using asides below so we can assert that the icon nodes are preserved */
const ICON_OPTIONS = [
  { key: '1', icon: <aside>Icon 1</aside> },
  { key: '2', icon: <aside>Icon 2</aside> },
  { key: '3', icon: <aside>Icon 3</aside> }
];

const mockOnSelectionChange = vi.fn();

const DEFAULT_PROPS_SINGLE: ToggleGroupProps = {
  options: LABEL_OPTIONS,
  selection: undefined,
  onSelectionChange: mockOnSelectionChange,
  variant: 'default',
  selectionType: 'single'
};

beforeEach(() => {
  vi.resetAllMocks();
});

describe('<ToggleGroup />', () => {
  test('should pass className to container', () => {
    const { container } = render(<ToggleGroup {...DEFAULT_PROPS_SINGLE} className={'mock-class'} />);
    expect(container.firstChild).toHaveClass('mock-class');
  });

  test('should render options as Radix Items', () => {
    render(<ToggleGroup {...DEFAULT_PROPS_SINGLE} options={LABEL_OPTIONS} />);
    expect(mockItem).toHaveBeenCalledTimes(3);
  });

  test('should render label options', () => {
    const { container } = render(<ToggleGroup {...DEFAULT_PROPS_SINGLE} options={LABEL_OPTIONS} />);
    expect(container.textContent).toBe('Option 1Option 2Option 3');
  });

  test('should render icon options', () => {
    const { container } = render(<ToggleGroup {...DEFAULT_PROPS_SINGLE} options={ICON_OPTIONS} />);
    expect(container.textContent).toBe('Icon 1Icon 2Icon 3');
    expect(container.getElementsByTagName('aside')).toHaveLength(3);
  });

  describe('when whole component is disabled', () => {
    test('should add data-disabled attribute to container', () => {
      const { container } = render(<ToggleGroup {...DEFAULT_PROPS_SINGLE} isDisabled={true} />);
      expect(container.firstChild).toHaveAttribute('data-disabled', '');
    });

    test('should make all options disabled', () => {
      render(<ToggleGroup isDisabled={true} {...DEFAULT_PROPS_SINGLE} />);

      expect(mockItem).toHaveBeenNthCalledWith(1, expect.objectContaining({ disabled: true }));
      expect(mockItem).toHaveBeenNthCalledWith(2, expect.objectContaining({ disabled: true }));
      expect(mockItem).toHaveBeenNthCalledWith(3, expect.objectContaining({ disabled: true }));
    });
  });

  test('should add disabled attribute to disabled options', () => {
    const options = LABEL_OPTIONS.map(l => ({ ...l, isDisabled: true }));
    render(<ToggleGroup {...DEFAULT_PROPS_SINGLE} options={options} />);
  });

  describe('selection type', () => {
    test('should default to "single" selectionType', () => {
      render(<ToggleGroup {...DEFAULT_PROPS_SINGLE} />);
      expect(mockRoot).toHaveBeenNthCalledWith(1, expect.objectContaining({ type: 'single' }));
    });

    test('should pass "multiple" selectionType to Radix Root', () => {
      render(<ToggleGroup {...DEFAULT_PROPS_SINGLE} selectionType={'single'} />);
      expect(mockRoot).toHaveBeenCalledWith(expect.objectContaining({ type: 'single' }));
    });
  });
});
