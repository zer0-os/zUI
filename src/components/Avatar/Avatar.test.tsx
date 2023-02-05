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

describe('<Avatar />', () => {
  test('should have only avatar with regular size and circle shape', () => {
    const { container } = render(<Avatar {...DEFAULT_PROPS} />);
    expect(container.firstChild).toHaveAttribute('data-type', 'circle');
    expect(container.firstChild).toHaveAttribute('data-size', 'regular');
  });

  test('should have avatar with regular size and circle shape with badge', () => {
    const { container, getByText } = render(<Avatar {...DEFAULT_PROPS} badgeContent="9+" />);
    expect(container.firstChild).toHaveAttribute('data-type', 'circle');
    expect(container.firstChild).toHaveAttribute('data-size', 'regular');
    expect(getByText('9+')).toBeInTheDocument();
  });

  test('should have avatar with regular size and circle shape with badge and status', () => {
    const { container, getByText } = render(<Avatar {...DEFAULT_PROPS} badgeContent="9+" statusType="active" />);
    expect(container.firstChild).toHaveAttribute('data-type', 'circle');
    expect(container.firstChild).toHaveAttribute('data-size', 'regular');
    expect(getByText('9+')).toBeInTheDocument();
    expect(container.querySelector('[data-status-type="active"]')).toBeInTheDocument();
  });

  test('should have avatar with regular size and square shape with badge and status', () => {
    const { container, getByText } = render(
      <Avatar {...DEFAULT_PROPS} type="square" badgeContent="9+" statusType="active" />
    );
    expect(container.firstChild).toHaveAttribute('data-type', 'square');
    expect(container.firstChild).toHaveAttribute('data-size', 'regular');
    expect(getByText('9+')).toBeInTheDocument();
    expect(container.querySelector('[data-status-type="active"]')).toBeInTheDocument();
  });

  test('should not display badge and status if avatar size is extra small size and circle shape', () => {
    const { container } = render(
      <Avatar {...DEFAULT_PROPS} size="extra small" type="circle" badgeContent="9+" statusType="active" />
    );
    expect(container.firstChild).toHaveAttribute('data-type', 'circle');
    expect(container.firstChild).toHaveAttribute('data-size', 'extra small');
    expect(container.querySelector('[class="Badge"]')).toBe(null);
    expect(container.querySelector('[data-status-type="active"]')).not.toBeInTheDocument();
  });
});
