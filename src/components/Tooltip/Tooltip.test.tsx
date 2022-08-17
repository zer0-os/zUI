import React from 'react';
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ZUIProvider from '../../ZUIProvider';
import { Tooltip, TooltipProps } from './Tooltip';

const TOOLTIP_INNER_DIV_ID = 'tooltip-inner';
const TOOLTIP_CONTENT = 'tooltip-content';

const mockOnOpenChange = jest.fn();

const mockDefaultProps: TooltipProps = {
  open: undefined,
  defaultOpen: undefined,
  onOpenChange: mockOnOpenChange,
  side: 'top',
  align: 'center',
  content: TOOLTIP_CONTENT
};

const renderComponent = (customProps: Partial<TooltipProps> = {}) => {
  return render(
    <ZUIProvider>
      <Tooltip {...mockDefaultProps} {...customProps}>
        <div data-testid={TOOLTIP_INNER_DIV_ID}>Test</div>
      </Tooltip>
    </ZUIProvider>
  );
};

beforeAll(() => {
  window.ResizeObserver =
    window.ResizeObserver ||
    jest.fn().mockImplementation(() => ({
      disconnect: jest.fn(),
      observe: jest.fn(),
      unobserve: jest.fn()
    }));
});

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

test('should correctly render the trigger attribute', () => {
  const { getByTestId } = renderComponent();

  expect(getByTestId(TOOLTIP_INNER_DIV_ID)).toBeTruthy();
});

test('applies defaultOpen prop to Radix tooltip root', () => {
  const { queryAllByText } = renderComponent({
    defaultOpen: true
  });

  expect(queryAllByText(TOOLTIP_CONTENT)).toBeTruthy();
});

test('applies open prop to Radix tooltip root', () => {
  const { queryAllByText } = renderComponent({
    open: true
  });

  expect(queryAllByText(TOOLTIP_CONTENT)).toBeTruthy();
});

test('applies onOpenChange prop to Radix tooltip root', async () => {
  const { getByTestId } = renderComponent({
    defaultOpen: true
  });

  const trigger = getByTestId(TOOLTIP_INNER_DIV_ID);

  fireEvent.click(trigger);

  await waitFor(() => {
    expect(mockOnOpenChange).toBeCalledTimes(1);
    expect(mockOnOpenChange).toBeCalledWith(false);
  });
});

test('applies side prop to Radix tooltip content', () => {
  const mockSide: TooltipProps['side'] = 'bottom';

  const { queryAllByText } = renderComponent({
    open: true,
    side: mockSide
  });

  const content = queryAllByText(TOOLTIP_CONTENT).at(0);

  expect(content).toHaveAttribute('data-side', mockSide);
});

test('applies align prop to Radix tooltip content', () => {
  const mockAlign: TooltipProps['align'] = 'start';

  const { queryAllByText } = renderComponent({
    open: true,
    align: mockAlign
  });

  const content = queryAllByText(TOOLTIP_CONTENT).at(0);

  expect(content).toHaveAttribute('data-align', mockAlign);
});
