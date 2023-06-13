import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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
    expect(container.firstChild.firstChild).toHaveAttribute('data-variant', 'fixed');
  });

  test('applies "on-hover" variant when specified', () => {
    const { container } = render(<ScrollbarContainer {...DEFAULT_PROPS} variant="on-hover" />);
    expect(container.firstChild.firstChild).toHaveAttribute('data-variant', 'on-hover');
  });

  test('renders panel when variant is "on-hover"', () => {
    const { container } = render(<ScrollbarContainer {...DEFAULT_PROPS} variant="on-hover" />);
    expect(container.querySelector('.scrollbar-container__panel')).toBeInTheDocument();
  });

  test('does not render panel when variant is "fixed"', () => {
    const { container } = render(<ScrollbarContainer {...DEFAULT_PROPS} />);
    expect(container.firstChild).not.toHaveClass('scrollbar-container__panel');
  });

  test('hides panel on hover when variant is "on-hover"', () => {
    const { container, getByText } = render(<ScrollbarContainer {...DEFAULT_PROPS} variant="on-hover" />);
    fireEvent.mouseOver(getByText('Test Content'));
    expect(container.firstChild).not.toHaveClass('scrollbar-container__panel');
  });
});
