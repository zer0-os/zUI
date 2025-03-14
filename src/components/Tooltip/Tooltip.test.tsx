 
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Tooltip, TooltipProps } from './Tooltip';

// Prop mocks
const TOOLTIP_TEXT = 'Mock content';
const TRIGGER_TEXT = 'Mock trigger';
const mockOnOpenChange = jest.fn();

// Radix mocks
const mockRadixRoot = jest.fn();
const mockRadixTrigger = jest.fn();
const mockRadixContent = jest.fn();
const mockRadixArrow = jest.fn();

jest.mock('@radix-ui/react-tooltip', () => ({
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
  jest.clearAllMocks();
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
