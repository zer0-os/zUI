import React from 'react';
import { render } from '@testing-library/react';

import { Status } from './';

beforeEach(() => {
  vi.resetAllMocks();
});

describe('<Status />', () => {
  test('should have active status', () => {
    const { container } = render(<Status type="active" />);
    expect(container.firstChild).toHaveAttribute('data-status-type', 'active');
  });

  test('should have idle status', () => {
    const { container } = render(<Status type="idle" />);
    expect(container.firstChild).toHaveAttribute('data-status-type', 'idle');
  });

  test('should have busy status', () => {
    const { container } = render(<Status type="busy" />);
    expect(container.firstChild).toHaveAttribute('data-status-type', 'busy');
  });

  test('should have offline status', () => {
    const { container } = render(<Status type="offline" />);
    expect(container.firstChild).toHaveAttribute('data-status-type', 'offline');
  });

  test('should have unread status', () => {
    const { container } = render(<Status type="unread" />);
    expect(container.firstChild).toHaveAttribute('data-status-type', 'unread');
  });
});
