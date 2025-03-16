import { test, expect, vi, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';

import { Tooltip, TooltipProps } from './Tooltip';

// Prop mocks
const TOOLTIP_TEXT = 'Mock content';
const TRIGGER_TEXT = 'Mock trigger';
const mockOnOpenChange = vi.fn();

// Radix mocks
const mockRadixRoot = vi.fn();
const mockRadixTrigger = vi.fn();
const mockRadixContent = vi.fn();
const mockRadixArrow = vi.fn();

vi.mock('@radix-ui/react-tooltip', () => ({
  Provider: (props: any) => props.children,
  Root: (props: any) => {
    mockRadixRoot(props);
    return <div data-testid="root">{props.children}</div>;
  },
  Trigger: (props: any) => {
    mockRadixTrigger(props);
    return <div data-testid="trigger">{props.children}</div>;
  },
  Content: (props: any) => {
    mockRadixContent(props);
    return <div data-testid="content">{props.children}</div>;
  },
  Arrow: (props: any) => {
    mockRadixArrow(props);
    return <div data-testid="arrow">{props.children}</div>;
  }
}));

const DEFAULT_PROPS: TooltipProps = {
  open: undefined,
  defaultOpen: undefined,
  onOpenChange: mockOnOpenChange,
  side: 'top',
  align: 'center',
  content: TOOLTIP_TEXT
};

const renderComponent = (customProps: Partial<TooltipProps> = {}) => {
  return render(
    <Tooltip {...DEFAULT_PROPS} {...customProps}>
      {TRIGGER_TEXT}
    </Tooltip>
  );
};

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

test('should pass props to Radix Root', () => {
  renderComponent({ open: true, defaultOpen: true });
  expect(mockRadixRoot).toHaveBeenCalledWith(expect.objectContaining({ open: true, defaultOpen: true }));
});

test('should pass props to Radix Trigger', () => {
  const { getByTestId } = renderComponent();
  expect(mockRadixTrigger).toHaveBeenCalledWith(expect.objectContaining({ asChild: true }));
  const trigger = getByTestId('trigger');
  expect(trigger).toHaveTextContent(TRIGGER_TEXT);
});

test('should pass props to Radix Content', () => {
  const { getByTestId } = renderComponent({ side: 'top', align: 'center' });
  expect(mockRadixContent).toHaveBeenCalledWith(expect.objectContaining({ side: 'top', align: 'center' }));
  const content = getByTestId('content');
  expect(content).toHaveTextContent(TOOLTIP_TEXT);
});

test('should pass props to Radix Arrow', () => {
  renderComponent();
  expect(mockRadixArrow).toHaveBeenCalledWith(expect.objectContaining({ width: 32, height: 16 }));
});
