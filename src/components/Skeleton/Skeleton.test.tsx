import React from 'react';
import { render } from '@testing-library/react';
import { Skeleton, SkeletonProps } from './index';

const mockSkeleton = jest.fn();

jest.mock('react-loading-skeleton', () => {
  return (props: any): null => {
    mockSkeleton(props);
    return null;
  };
});

const defaultProps: SkeletonProps = {
  width: 100,
  height: 100,
  count: 1,
  circle: false,
  style: { color: 'red' },
  className: 'mock-class',
  containerClassName: 'mock-container-class',
  containerTestId: 'mock-container-test-id',
  inline: false
};

describe('<Skeleton />', () => {
  it('should pass Skeleton props to react-loading-skeleton', () => {
    render(<Skeleton {...defaultProps} />);
    expect(mockSkeleton).toHaveBeenCalledWith(defaultProps);
  });
});
