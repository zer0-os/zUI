import React from 'react';

import { render, screen } from '@testing-library/react';
import { Image, ImageProps } from './';

const DEFAULT_PROPS: ImageProps = {
  alt: 'mock alt'
};

const DEFAULT_IMAGE_URL = 'https://picsum.photos/1/1';

const mockSkeleton = jest.fn();

jest.mock('../Skeleton', () => ({
  Skeleton: (props: any) => {
    mockSkeleton(props);
    return <div data-testid={'zui-image-skeleton'} />;
  }
}));

beforeEach(() => {
  mockSkeleton.mockClear();
});

describe('<Image />', () => {
  test('should render a skeleton when image is loading or undefined', () => {
    render(<Image {...DEFAULT_PROPS} />);
    expect(screen.getByTestId('zui-image-skeleton')).toBeVisible();
  });

  test('should pass onLoad to image', () => {
    const onLoad = jest.fn();
    render(<Image {...DEFAULT_PROPS} src={DEFAULT_IMAGE_URL} onLoad={onLoad} />);
    expect(onLoad).not.toHaveBeenCalled();
    const img = screen.getByTestId('zui-image-img');
    img.dispatchEvent(new Event('load'));
    expect(onLoad).toHaveBeenCalled();
  });

  test('should pass onError to image', () => {
    const onError = jest.fn();
    render(<Image {...DEFAULT_PROPS} src={DEFAULT_IMAGE_URL} onError={onError} />);
    const image = screen.getByTestId('zui-image-img');
    image.dispatchEvent(new Event('error'));
    expect(onError).toHaveBeenCalled();
  });

  test('should pass alt to image', () => {
    render(<Image {...DEFAULT_PROPS} alt={'mock alt'} />);
    expect(screen.getByTestId('zui-image-img')).toHaveAttribute('alt', 'mock alt');
  });

  describe('class names', () => {
    test('should pass className to the root element', () => {
      const { container } = render(<Image {...DEFAULT_PROPS} className={'test-class'} />);
      expect(container.firstChild).toHaveClass('test-class');
    });

    test('should apply Container class name to root element', () => {
      const { container } = render(<Image {...DEFAULT_PROPS} />);
      expect(container.firstChild).toHaveClass('Container');
    });

    test('should apply Image class name to image element', () => {
      render(<Image {...DEFAULT_PROPS} />);
      expect(screen.getByTestId('zui-image-img')).toHaveClass('Image');
    });

    test('should apply Skeleton class to skeleton', () => {
      render(<Image {...DEFAULT_PROPS} />);
      expect(mockSkeleton).toHaveBeenCalledWith(expect.objectContaining({ className: 'Skeleton' }));
    });
  });
});
