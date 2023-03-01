import React from 'react';
import { render, waitFor } from '@testing-library/react';

import { Badge } from './';
import { IconArrowUpRight } from '../Icons';

beforeEach(() => {
  jest.resetAllMocks();
});

describe('Badge', () => {
  test('should display text', () => {
    const { getByText } = render(<Badge content="Hello World" type="text" />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });

  test('should display number', () => {
    const { getByText } = render(<Badge content="9+" type="count" />);
    expect(getByText('9+')).toBeInTheDocument();
  });

  test('should display icon', () => {
    const icon = <IconArrowUpRight size={12} />;
    const { container } = render(<Badge content={icon} type="icon" />);
    expect(container.firstChild).toHaveAttribute('data-content-type', 'icon');
  });

  test('should be in green color', () => {
    const { container } = render(<Badge content="9+" type="text" color="green" />);
    expect(container.firstChild).toHaveAttribute('style', 'background-color: green;');
  });

  test('should be in alert state', () => {
    const { container } = render(<Badge content="Text" type="text" alertState={true} />);
    expect(container.firstChild).toHaveAttribute('data-alert-state', 'true');
  });
});
