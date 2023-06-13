import React from 'react';
import { render } from '@testing-library/react';
import { ScrollbarContainer, ScrollbarContainerProps } from './ScrollbarContainer';

const DEFAULT_PROPS: ScrollbarContainerProps = {
  children: <div>Test Content</div>,
  variant: 'fixed'
};

describe('<ScrollbarContainer />', () => {
  test('renders children correctly', () => {
    const { getByText } = render(<ScrollbarContainer {...DEFAULT_PROPS} />);
    expect(getByText('Test Content')).toBeInTheDocument();
  });

  test('applies "fixed" variant by default', () => {
    const { container } = render(<ScrollbarContainer {...DEFAULT_PROPS} />);
    expect(container.firstChild).toHaveAttribute('data-variant', 'fixed');
  });

  test('applies "on-hover" variant when specified', () => {
    const { container } = render(<ScrollbarContainer {...DEFAULT_PROPS} variant="on-hover" />);
    expect(container.firstChild).toHaveAttribute('data-variant', 'on-hover');
  });
});
