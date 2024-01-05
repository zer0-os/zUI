import React from 'react';
import { cleanup, getByRole, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Modal, ModalProps } from '.';

const MOCK_TRIGGER = 'Mock Trigger';
const DEFAULT_PROPS = { trigger: MOCK_TRIGGER };

const mockRadixOverlay = jest.fn();
const mockRadixRoot = jest.fn();
const mockRadixPortal = jest.fn();
const mockRadixTrigger = jest.fn();
const mockRadixContent = jest.fn();

/* Mock Radix Dialog primitives so we can skip testing them */
jest.mock('@radix-ui/react-dialog', () => ({
  Overlay: (props: any) => {
    mockRadixOverlay(props);
    return <div data-testid="overlay">{props.children}</div>;
  },
  Root: (props: any) => {
    mockRadixRoot(props);
    return <div data-testid="root">{props.children}</div>;
  },
  Portal: (props: any) => {
    mockRadixPortal(props);
    return <div data-testid="portal">{props.children}</div>;
  },
  Trigger: (props: any) => {
    mockRadixTrigger(props);
    return <div data-testid="trigger">{props.children}</div>;
  },
  Content: (props: any) => {
    mockRadixContent(props);
    return <div data-testid="content">{props.children}</div>;
  }
}));

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

const renderComponent = (props?: ModalProps) => render(<Modal {...DEFAULT_PROPS} {...props} />);

test('should render string trigger as a button', () => {
  const { getByTestId } = renderComponent();
  const trigger = getByTestId('trigger');
  expect(mockRadixTrigger).toBeCalledWith(expect.objectContaining({ asChild: true }));
  expect(trigger.textContent).toBe(MOCK_TRIGGER);
  expect(trigger.childNodes.length).toBe(1);
  expect(getByRole(trigger, 'button')).toBeInTheDocument();
});

test('should render ReactNode trigger as a ReactNode', () => {
  const { getByText, getByTestId } = renderComponent({ trigger: <p>{MOCK_TRIGGER}</p> });
  const trigger = getByTestId('trigger');
  expect(mockRadixTrigger).toBeCalledWith(expect.objectContaining({ asChild: true }));
  expect(trigger.textContent).toBe(MOCK_TRIGGER);
  expect(trigger.childNodes.length).toBe(1);
  expect(getByText(MOCK_TRIGGER).nodeName).toBe('P');
});

test('should render children in Radix Content primitive', () => {
  renderComponent({ children: 'mock-children' });
  expect(mockRadixContent).toHaveBeenCalledWith(expect.objectContaining({ children: 'mock-children' }));
});

test('should not render Trigger when trigger prop is undefined', () => {
  renderComponent({ trigger: undefined });
  expect(mockRadixTrigger).toBeCalledTimes(0);
});

test('should apply className prop to Content', () => {
  renderComponent({ className: 'mock-class' });
  expect(mockRadixContent).toHaveBeenCalledTimes(1);
  expect(mockRadixContent.mock.calls[0][0].className.split(' ').includes('mock-class')).toBe(true);
});

test('should apply Radix DialogProps to the Radix DialogRoot', () => {
  renderComponent({ open: true });
  expect(mockRadixRoot).toHaveBeenCalledWith(expect.objectContaining({ open: true }));
});

test('should not render Trigger as a child of Portal', () => {
  const { getByTestId } = renderComponent();

  const root = getByTestId('root');
  expect(root).toBeInTheDocument();
  expect(root.childElementCount).toBe(2);

  const ids = Array.from(root.children).map(c => c.getAttribute('data-testid'));
  expect(ids).toContain('trigger');
  expect(ids).toContain('portal');
});

test('should render Overlay and Content in Portal with correct nesting', () => {
  const { getByTestId } = renderComponent();

  const portal = getByTestId('portal');
  expect(portal.childElementCount).toBe(1);
  expect(portal.children[0].getAttribute('data-testid')).toContain('overlay');

  const overlay = getByTestId('overlay');
  expect(overlay.childElementCount).toBe(1);

  // Verify that the first child of overlay is the contentWrapper
  const contentWrapper = overlay.children[0];
  expect(contentWrapper).toBeTruthy();

  expect(contentWrapper.children[0].getAttribute('data-testid')).toContain('content');
});
