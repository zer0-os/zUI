import React from 'react';

import { truncateAddress } from '../../utils';
import { render, screen } from '@testing-library/react';

import { Address, AddressProps } from '.';
import { SkeletonTextProps } from '../SkeletonText';

import styles from './Address.module.scss';

const mockAddress = 'Mock address';
const mockClassName = 'Mock class name';

const DEFAULT_PROPS: AddressProps = {
  className: '',
  address: ''
};

const mockSkeletonText = jest.fn();

jest.mock('../SkeletonText', () => ({
  SkeletonText: (props: SkeletonTextProps) => {
    mockSkeletonText(props);
    return mockAddress;
  }
}));

beforeEach(() => {
  mockSkeletonText.mockClear();
});

describe('Address', () => {
  test('should render address', () => {
    const { container } = render(<Address {...DEFAULT_PROPS} address={mockAddress} />);

    expect(container.firstChild?.textContent).toBe(truncateAddress(mockAddress));
  });

  describe('when address type === string', () => {
    test('should not render skeleton text', () => {
      render(<Address {...DEFAULT_PROPS} className={mockClassName} address={mockAddress} />);

      expect(mockSkeletonText).not.toHaveBeenCalled();
    });
  });

  describe('when address type === AsyncText', () => {
    test('should render skeleton text', () => {
      render(
        <Address {...DEFAULT_PROPS} className={mockClassName} address={{ text: mockAddress, isLoading: false }} />
      );

      expect(mockSkeletonText).toHaveBeenCalledTimes(1);
    });

    test('should contain address text', () => {
      render(
        <Address {...DEFAULT_PROPS} className={mockClassName} address={{ text: mockAddress, isLoading: false }} />
      );

      const address = screen.getByText(mockAddress);

      expect(address).toBeInTheDocument();
      expect(mockSkeletonText).toHaveBeenCalledWith(
        expect.objectContaining({ asyncText: { text: truncateAddress(mockAddress), isLoading: false } })
      );
    });
  });

  describe('class names', () => {
    describe('when address type === string', () => {
      test('should apply className class', () => {
        const { container } = render(<Address {...DEFAULT_PROPS} className={mockClassName} address={mockAddress} />);

        expect(container.getElementsByClassName(mockClassName).length).toBe(1);
      });
    });

    describe('when address type === AsyncText', () => {
      test('should apply className class', () => {
        render(
          <Address {...DEFAULT_PROPS} className={mockClassName} address={{ text: mockAddress, isLoading: false }} />
        );

        expect(mockSkeletonText).toHaveBeenCalledWith(
          expect.objectContaining({ className: expect.stringContaining(mockClassName) })
        );
      });

      test('should apply AsyncAddress class', () => {
        render(
          <Address {...DEFAULT_PROPS} className={mockClassName} address={{ text: mockAddress, isLoading: false }} />
        );

        expect(mockSkeletonText).toHaveBeenCalledWith(
          expect.objectContaining({ className: expect.stringContaining(styles.AsyncAddress) })
        );
      });
    });
  });
});
