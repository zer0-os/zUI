import React from 'react';
import { render, waitFor } from '@testing-library/react';

import { Badge } from './';
import { IconArrowUpRight } from '../Icons';

beforeEach(() => {
  jest.resetAllMocks();
});

describe('Badge', () => {
  test('should display text', () => {
    const { getByText } = render(<Badge content="Hello World" variant="active" type="text" />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });

  test('should display number', () => {
    const { getByText } = render(<Badge content="10" type="number" variant="active" />);
    expect(getByText('9+')).toBeInTheDocument();
  });

  test('should display icon', () => {
    const icon = <IconArrowUpRight size={12} />;
    const { container } = render(<Badge content={icon} type="icon" variant="active" />);
    expect(container.firstChild).toHaveAttribute('data-content-type', 'icon');
  });

  test('should be in active state', () => {
    const { container } = render(<Badge content={10} type="text" variant="active" />);
    expect(container.firstChild).toHaveAttribute('data-variant', 'active');
  });

  test('should be in error state', () => {
    const { container } = render(<Badge content="Text" type="text" variant="error" />);
    expect(container.firstChild).toHaveAttribute('data-variant', 'error');
  });
});
