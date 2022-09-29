import React from 'react';
import { render, screen } from '@testing-library/react';

import { TextDetail, TextDetailProps } from './';

import styles from './TextDetail.module.scss';

const DEFAULT_PROPS: TextDetailProps = {
  label: '',
  primaryText: '',
  secondaryText: undefined
};

const MOCK_SKELETON_ID = 'mock-skeleton';

jest.mock('../Skeleton', () => ({
  Skeleton: () => <div data-testid={MOCK_SKELETON_ID} />
}));

describe('<TextDetail />', () => {
  test('should render in the correct order - label, primary, secondary', () => {
    const { container } = render(<TextDetail label={'label'} primaryText={'primary'} secondaryText={'secondary'} />);
    expect(container.textContent).toBe('labelprimarysecondary');
  });

  describe('semantic tags', () => {
    test('should render label as <label>', () => {
      const { container } = render(<TextDetail {...DEFAULT_PROPS} label={'mock label'} />);
      const label = container.getElementsByTagName('label');
      expect(label.length).toBe(1);
      expect(label[0]).toHaveTextContent('mock label');
    });
  });

  describe('class names', () => {
    test('should apply Container class to container', () => {
      const { container } = render(<TextDetail {...DEFAULT_PROPS} />);
      expect(container.firstChild).toHaveClass(styles.Container);
    });

    test('should apply Primary class to primary element', () => {
      const { container } = render(<TextDetail {...DEFAULT_PROPS} primaryText={'mock primary'} />);

      const primary = container.getElementsByClassName(styles.Primary);
      expect(primary.length).toBe(1);
      expect(primary[0].textContent).toBe('mock primary');
    });

    test('should apply className prop to container', () => {
      const { container } = render(<TextDetail {...DEFAULT_PROPS} className={'mock-class'} />);
      expect(container.firstChild).toHaveClass('mock-class');
    });
  });

  describe('when text props are synchronous', () => {
    test('should render label', () => {
      render(<TextDetail {...DEFAULT_PROPS} label={'mock label'} />);
      expect(screen.getByText('mock label')).toBeInTheDocument();
    });

    test('should render synchronous primary', () => {
      render(<TextDetail {...DEFAULT_PROPS} primaryText={'mock primary'} />);
      expect(screen.getByText('mock primary')).toBeInTheDocument();
    });

    test('should render synchronous secondaryText', () => {
      render(<TextDetail {...DEFAULT_PROPS} secondaryText={'mock secondaryText'} />);
      expect(screen.getByText('mock secondaryText')).toBeInTheDocument();
    });
  });

  describe('when secondaryText is asynchronous', () => {
    test('should show loading skeleton when loading secondaryText', () => {
      render(<TextDetail {...DEFAULT_PROPS} secondaryText={{ isLoading: true }} />);
      expect(screen.getByTestId(MOCK_SKELETON_ID)).toBeInTheDocument();
    });

    test('should show bottom text when loaded bottom text', () => {
      render(<TextDetail {...DEFAULT_PROPS} secondaryText={{ isLoading: false, text: 'mock secondaryText' }} />);
      expect(screen.getByText('mock secondaryText')).toBeInTheDocument();
      expect(screen.queryByTestId(MOCK_SKELETON_ID)).toBeFalsy();
    });
  });

  describe('when primaryText is asynchronous', () => {
    test('should show skeleton when loading primaryText', () => {
      render(<TextDetail {...DEFAULT_PROPS} primaryText={{ isLoading: true }} />);
      expect(screen.getByTestId(MOCK_SKELETON_ID)).toBeInTheDocument();
    });

    test('should show primary when loaded primaryText', () => {
      render(<TextDetail {...DEFAULT_PROPS} primaryText={{ isLoading: false, text: 'mock primaryText' }} />);
      expect(screen.getByText('mock primaryText')).toBeInTheDocument();
      expect(screen.queryByTestId(MOCK_SKELETON_ID)).toBeFalsy();
    });
  });
});
