import React from 'react';
import { render } from '@testing-library/react';

import { Avatar, AvatarProps } from './';

const DEFAULT_PROPS: AvatarProps = {
  size: 'regular',
  type: 'circle'
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe('when using default props', () => {
  test('should be regular size', () => {
    const { container } = render(<Avatar {...DEFAULT_PROPS} />);
    expect(container.firstChild).toHaveAttribute('data-size', 'regular');
  });

  test('should be medium size', () => {
    const { container } = render(<Avatar {...DEFAULT_PROPS} size="medium" />);
    expect(container.firstChild).toHaveAttribute('data-size', 'medium');
  });

  test('should be circle shape', () => {
    const { container } = render(<Avatar {...DEFAULT_PROPS} type="circle" />);
    expect(container.firstChild).toHaveAttribute('data-type', 'circle');
  });

  test('should be square shape', () => {
    const { container } = render(<Avatar {...DEFAULT_PROPS} type="square" />);
    expect(container.firstChild).toHaveAttribute('data-type', 'square');
  });
});

describe('when status type is "active"', () => {
  test('should show status active', () => {
    const { container } = render(<Avatar {...DEFAULT_PROPS} statusType="active" />);
    expect(container.querySelector('[data-status-type="active"]')).toBeInTheDocument();
  });
});

describe('when badge content is "9+"', () => {
  test('should show badge', () => {
    const { getByText } = render(<Avatar {...DEFAULT_PROPS} badgeContent="9+" />);
    expect(getByText('9+')).toBeInTheDocument();
  });
});
