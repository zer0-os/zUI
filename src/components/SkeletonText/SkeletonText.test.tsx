import React from 'react';
import { MaybeSkeletonText, SkeletonText } from './';
import { render, screen } from '@testing-library/react';

const mockSkeleton = vi.fn();

vi.mock('../Skeleton', () => ({
  Skeleton: (props: any) => {
    mockSkeleton(props);
    return <div data-testid="mock-skeleton" />;
  }
}));

beforeEach(() => {
  mockSkeleton.mockClear();
});

describe('<SkeletonText />', () => {
  it('should pass className prop to container', () => {
    const { container } = render(<SkeletonText className="mock-class" asyncText={{ isLoading: true, text: 'test' }} />);
    expect(container.firstChild).toHaveClass('mock-class');
  });

  describe('element', () => {
    test('should render a span by default', () => {
      const { container } = render(<SkeletonText asyncText={{ isLoading: true, text: 'test' }} />);
      expect(container.firstChild.nodeName).toBe('SPAN');
    });

    test('should render the element passed in as prop', () => {
      const { container } = render(<SkeletonText as="h1" asyncText={{ isLoading: true, text: 'test' }} />);
      expect(container.firstChild.nodeName).toBe('H1');
    });
  });

  describe('when text is loading', () => {
    it('should render skeleton', () => {
      render(<SkeletonText asyncText={{ isLoading: true, text: 'test' }} />);
      expect(screen.getByTestId('mock-skeleton')).toBeInTheDocument();
    });

    it('should not render text', () => {
      render(<SkeletonText asyncText={{ isLoading: true, text: 'mock text' }} />);
      expect(screen.queryByText('mock text')).not.toBeInTheDocument();
    });

    it('should pass skeletonOptions to Skeleton', () => {
      render(
        <SkeletonText
          asyncText={{ isLoading: true, text: 'test' }}
          skeletonOptions={{ className: 'mock-skeleton-class' }}
        />
      );
      expect(mockSkeleton).toHaveBeenCalledWith(expect.objectContaining({ className: 'mock-skeleton-class' }));
    });
  });

  describe('when text has successfully loaded', () => {
    it('should render text', () => {
      render(<SkeletonText asyncText={{ isLoading: false, text: 'mock loaded text' }} />);
      expect(screen.getByText('mock loaded text')).toBeInTheDocument();
    });
  });

  describe('when text has failed to load', () => {
    it('should render errorText text if errorText is defined', () => {
      render(<SkeletonText asyncText={{ isLoading: false, errorText: 'mock error text' }} />);
      expect(screen.getByText('mock error text')).toBeInTheDocument();
    });

    it('should render default error text ("ERR") if errorText is not defined', () => {
      render(<SkeletonText asyncText={{ isLoading: false }} />);
      expect(screen.getByText('ERR')).toBeInTheDocument();
    });

    it('should pass errorClassName prop to container', () => {
      const { container } = render(
        <SkeletonText asyncText={{ isLoading: false, errorClassName: 'mock-error-class' }} />
      );
      expect(container.firstChild).toHaveClass('mock-error-class');
    });
  });
});

describe('<MaybeSkeletonText />', () => {
  describe('when text is a string', () => {
    it('should render text', () => {
      render(<MaybeSkeletonText text="mock text" />);
      expect(screen.getByText('mock text')).toBeInTheDocument();
    });
  });

  describe('when text is AsyncText', () => {
    it('should render text', () => {
      render(<MaybeSkeletonText text={{ text: 'mock text', isLoading: false }} />);
      expect(screen.getByText('mock text')).toBeInTheDocument();
    });
  });
});
