import React from 'react';
import { render, screen } from '@testing-library/react';

import { GridCard } from './GridCard';
import { AspectRatioProps } from '@radix-ui/react-aspect-ratio';

const mockAspectRatio = jest.fn();

jest.mock('@radix-ui/react-aspect-ratio', () => ({
  Root: (props: AspectRatioProps) => {
    mockAspectRatio(props);
    return <div data-testid="mock-aspect-ratio">{props.children}</div>;
  }
}));

const DEFAULT_PROPS = {
  aspectRatio: 1,
  imageAlt: '',
  imageSrc: '',
  children: <></>
};

beforeEach(() => {
  jest.clearAllMocks();
});

describe('<GridCard />', () => {
  test('should render children', () => {
    render(
      <GridCard {...DEFAULT_PROPS}>
        <div>mock child text</div>
      </GridCard>
    );
    expect(screen.getByText('mock child text')).toBeInTheDocument();
  });

  test('should be able to pass in a className', () => {
    const mockClassName = 'mock-class-name';
    const { container } = render(<GridCard {...DEFAULT_PROPS} className={mockClassName} />);
    expect(container.firstChild).toHaveClass(mockClassName);
  });

  describe('Image', () => {
    test('should pass aspect ratio prop to AspectRatio component', () => {
      const aspectRatio = 1;
      render(<GridCard {...DEFAULT_PROPS} aspectRatio={aspectRatio} />);
      expect(screen.getByTestId('mock-aspect-ratio')).toBeInTheDocument();
      expect(mockAspectRatio).toHaveBeenCalledWith(expect.objectContaining({ ratio: aspectRatio }));
    });

    test('should pass alt prop to img element', () => {
      render(<GridCard {...DEFAULT_PROPS} imageAlt={'mock-alt'} />);
      expect(screen.getByRole('img')).toHaveAttribute('alt', 'mock-alt');
    });

    test('should pass src prop to img element', () => {
      render(<GridCard {...DEFAULT_PROPS} imageSrc={'mock-src'} />);
      expect(screen.getByRole('img')).toHaveAttribute('src', 'mock-src');
    });
  });
});
