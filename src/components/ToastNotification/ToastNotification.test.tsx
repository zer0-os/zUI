import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { ToastNotification, ToastNotificationProps } from './';

const mockOnClick = jest.fn();
const mockOnClose = jest.fn();

const DEFAULT_PROPS: ToastNotificationProps = {
  title: 'Toast Notification Title',
  description: 'Toast Notification Description',
  actionTitle: 'Invite',
  actionAltText: 'call to action',
  positionVariant: 'right',
  themeVariant: 'primary',
  swipeDirection: 'left',
  openToast: true,
  onClick: mockOnClick,
  onClose: mockOnClose
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe('<ToastNotification />', () => {
  test('should render without crashing', () => {
    render(<ToastNotification {...DEFAULT_PROPS} />);
    expect(screen.getByText(DEFAULT_PROPS.title)).toBeInTheDocument();
    expect(screen.getByText(DEFAULT_PROPS.description)).toBeInTheDocument();
    expect(screen.getByText(DEFAULT_PROPS.actionTitle)).toBeInTheDocument();
  });

  test('should render the ToastNotification with title and description', () => {
    render(<ToastNotification {...DEFAULT_PROPS} />);
    expect(screen.getByText(DEFAULT_PROPS.title)).toBeInTheDocument();
    expect(screen.getByText(DEFAULT_PROPS.description)).toBeInTheDocument();
  });

  test('should not show the action button if actionTitle is empty', () => {
    const props = { ...DEFAULT_PROPS, actionTitle: '' };
    render(<ToastNotification {...props} />);
    const actionButton = screen.queryByText(DEFAULT_PROPS.actionTitle);
    expect(actionButton).not.toBeInTheDocument();
  });

  test('should call onClick when action button is clicked', () => {
    render(<ToastNotification {...DEFAULT_PROPS} />);
    fireEvent.click(screen.getByText(DEFAULT_PROPS.actionTitle));
    expect(mockOnClick).toHaveBeenCalled();
  });

  test('should call onClose when close button is clicked', () => {
    render(<ToastNotification {...DEFAULT_PROPS} />);
    fireEvent.click(screen.getByTestId('toast-close-button'));
    expect(mockOnClose).toHaveBeenCalled();
  });

  test('should close the toast automatically after 10 seconds', async () => {
    jest.useFakeTimers();
    render(<ToastNotification {...DEFAULT_PROPS} />);
    act(() => {
      jest.advanceTimersByTime(10000);
    });
    await waitFor(() => expect(screen.queryByText(DEFAULT_PROPS.title)).not.toBeInTheDocument());
  });

  test('should not render the toast when openToast is false', () => {
    render(<ToastNotification {...DEFAULT_PROPS} openToast={false} />);
    expect(screen.queryByText(DEFAULT_PROPS.title)).not.toBeInTheDocument();
  });

  test('should render the toast when openToast changes from false to true', () => {
    const { rerender } = render(<ToastNotification {...DEFAULT_PROPS} openToast={false} />);
    expect(screen.queryByText(DEFAULT_PROPS.title)).not.toBeInTheDocument();

    rerender(<ToastNotification {...DEFAULT_PROPS} openToast={true} />);
    expect(screen.getByText(DEFAULT_PROPS.title)).toBeInTheDocument();
  });

  test.each([
    ['left', 'right'],
    ['right', 'left']
  ])('should render with position %s', (positionVariant, notPosition) => {
    render(<ToastNotification {...DEFAULT_PROPS} positionVariant={positionVariant as 'left' | 'right'} />);
    const toastRoot = screen.getByTestId('toast-root');
    expect(toastRoot).toHaveAttribute('data-position', positionVariant);
    expect(toastRoot).not.toHaveAttribute('data-position', notPosition);
  });

  test.each([
    ['primary', ['success', 'error']],
    ['success', ['primary', 'error']],
    ['error', ['primary', 'success']]
  ])('should render with theme %s', (themeVariant, notThemes) => {
    render(<ToastNotification {...DEFAULT_PROPS} themeVariant={themeVariant as 'primary' | 'success' | 'error'} />);
    const toastRoot = screen.getByTestId('toast-root');
    expect(toastRoot).toHaveAttribute('data-variant', themeVariant);
    notThemes.forEach(notTheme => {
      expect(toastRoot).not.toHaveAttribute('data-variant', notTheme);
    });
  });

  test('should have correct class on ToastViewport', () => {
    const customClass = 'my-custom-viewport-class';
    render(<ToastNotification {...DEFAULT_PROPS} viewportClassName={customClass} />);
    const viewport = screen.getByTestId('toast-viewport');
    expect(viewport).toHaveClass('ToastViewport');
    expect(viewport).toHaveClass(customClass);
  });
});
