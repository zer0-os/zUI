import { render, screen, fireEvent, act } from '@testing-library/react';
import { ToastNotification, ToastNotificationProps } from './';

const mockOnClick = vi.fn();
const mockOnClose = vi.fn();

const DEFAULT_PROPS: ToastNotificationProps = {
  duration: 10000,
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
  vi.useFakeTimers();
});

afterEach(() => {
  vi.clearAllTimers();
  vi.useRealTimers();
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

  test('should close the toast after duration', async () => {
    render(<ToastNotification {...DEFAULT_PROPS} />);
    expect(screen.getByText(DEFAULT_PROPS.title)).toBeInTheDocument();

    // Wrap timer updates in act
    await act(async () => {
      await vi.runAllTimersAsync();
    });

    expect(screen.queryByText(DEFAULT_PROPS.title)).not.toBeInTheDocument();
  });

  test('should close the toast after custom duration', async () => {
    const customDuration = 5000;
    render(<ToastNotification {...DEFAULT_PROPS} duration={customDuration} />);

    expect(screen.getByText(DEFAULT_PROPS.title)).toBeInTheDocument();

    await act(async () => {
      await vi.runAllTimersAsync();
    });

    expect(screen.queryByText(DEFAULT_PROPS.title)).not.toBeInTheDocument();
  });

  test('toast stays open before duration elapses', async () => {
    const customDuration = 15000;
    render(<ToastNotification {...DEFAULT_PROPS} duration={customDuration} />);

    expect(screen.getByText(DEFAULT_PROPS.title)).toBeInTheDocument();

    await act(async () => {
      await vi.advanceTimersByTimeAsync(10000);
    });

    expect(screen.getByText(DEFAULT_PROPS.title)).toBeInTheDocument();
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
