import React from 'react';
import { render, screen } from '@testing-library/react';

import { Alert, AlertProps } from './';

const DEFAULT_PROPS: AlertProps = {
  children: '',
  variant: 'success',
  isFilled: false
};

vi.mock('../Icons', () => ({
  IconCheck: () => <div data-testid={'check'}>IconCheck</div>,
  IconAlertCircle: () => <div data-testid={'alert'}>IconAlertCircle</div>,
  IconInfoCircle: () => <div data-testid={'info'}>IconInfoCircle</div>
}));

describe('<Alert />', () => {
  test('should pass variant to data-variant', () => {
    const { container } = render(<Alert {...DEFAULT_PROPS} variant="success" />);
    expect(container.firstChild).toHaveAttribute('data-variant', 'success');
  });

  test('should render children', () => {
    const { container } = render(<Alert {...DEFAULT_PROPS}>mock children</Alert>);
    expect(container.firstChild).toHaveTextContent('mock children');
  });

  test('should apply isFilled', () => {
    const { container } = render(<Alert {...DEFAULT_PROPS} isFilled />);
    expect(container.firstChild).toHaveClass('isFilled');
  });

  describe('icons', () => {
    test('should render success icon when variant is success', () => {
      render(<Alert {...DEFAULT_PROPS} variant="success" />);
      expect(screen.getByTestId('check')).toBeInTheDocument();
    });

    test('should render error icon when variant is error', () => {
      render(<Alert {...DEFAULT_PROPS} variant="error" />);
      expect(screen.getByTestId('alert')).toBeInTheDocument();
    });

    test('should render warning icon when variant is warning', () => {
      render(<Alert {...DEFAULT_PROPS} variant="warning" />);
      expect(screen.getByTestId('alert')).toBeInTheDocument();
    });

    test('should render info icon when variant is info', () => {
      render(<Alert {...DEFAULT_PROPS} variant="info" />);
      expect(screen.getByTestId('info')).toBeInTheDocument();
    });
  });
});
