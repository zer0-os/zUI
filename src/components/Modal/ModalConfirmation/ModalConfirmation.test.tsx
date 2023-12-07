import React from 'react';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { ModalConfirmation, ModalConfirmationProps } from './ModalConfirmation';

const DEFAULT_PROPS: ModalConfirmationProps = {
  title: 'title',
  cancelLabel: 'cancel label',
  confirmationLabel: 'confirmation label',
  onCancel: jest.fn(),
  onConfirm: jest.fn()
};

const mockRadixOverlay = jest.fn();
const mockRadixRoot = jest.fn();
const mockRadixPortal = jest.fn();
const mockRadixTrigger = jest.fn();
const mockRadixContent = jest.fn();
const mockRadixClose = jest.fn();
const mockRadixTitle = jest.fn();

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
  },
  Close: (props: any) => {
    mockRadixClose(props);
    return <div data-testid="close">{props.children}</div>;
  },
  Title: (props: any) => {
    mockRadixTitle(props);
    return <div data-testid="title">{props.children}</div>;
  }
}));

const buttonRender = jest.fn();
jest.mock('../../Button', () => ({
  Button: (props: any) => {
    buttonRender(props['data-testid'], props);
    return (
      <div data-testid={props['data-testid']} onClick={props.onPress}>
        {props.children}
      </div>
    );
  }
}));

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

const renderComponent = (props?: Partial<ModalConfirmationProps>) =>
  render(<ModalConfirmation {...DEFAULT_PROPS} {...props} />);

test('should render the title', () => {
  renderComponent();

  expect(mockRadixTitle).toHaveBeenCalledWith(expect.objectContaining({ children: 'title', className: 'Title' }));
});

test('should render the modal head', () => {
  renderComponent();

  expect(screen.getByTestId('modal-head')).toBeInTheDocument();
});

test('should render the modal actions/footer', () => {
  renderComponent();

  expect(screen.getByTestId('modal-actions')).toBeInTheDocument();
});

test('should render cancel button', () => {
  renderComponent();

  expect(screen.getByTestId('modal-cancel-button')).toBeInTheDocument();
});

test('should render confirm button', () => {
  renderComponent({ confirmationLabel: 'confirm label' });

  expect(screen.getByTestId('modal-confirm-button')).toHaveTextContent('confirm label');
});

test('should call onCancel', () => {
  const onCancel = jest.fn();
  renderComponent({ onCancel });

  const cancelButton = screen.getByTestId('modal-cancel-button');
  fireEvent.click(cancelButton);

  expect(onCancel).toHaveBeenCalled();
});

test('should call onConfirm', () => {
  const onConfirm = jest.fn();
  renderComponent({ onConfirm });

  const confirmButton = screen.getByTestId('modal-confirm-button');
  fireEvent.click(confirmButton);

  expect(onConfirm).toHaveBeenCalled();
});

test('should set the confirm button to loading when inProgress', () => {
  renderComponent({ inProgress: true });

  expect(buttonRender).toHaveBeenCalledWith('modal-confirm-button', expect.objectContaining({ isLoading: true }));
});
