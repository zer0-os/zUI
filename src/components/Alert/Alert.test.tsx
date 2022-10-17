import React from 'react';
import { render, screen } from '@testing-library/react';

import { Alert, AlertProps } from './';

const DEFAULT_PROPS: AlertProps = {
  children: '',
  variant: 'success'
};

jest.mock('../Icons', () => ({
  IconCheck: () => <div data-testid={'check'}>IconCheck</div>,
  IconAlertCircle: () => <div data-testid={'alert'}>IconAlertCircle</div>
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
      expect(screen.getByTestId('alert')).toBeInTheDocument();
    });
  });
});
