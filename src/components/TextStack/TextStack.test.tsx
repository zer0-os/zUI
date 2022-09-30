import React from 'react';
import { render, screen } from '@testing-library/react';

import { TextStack, TextStackProps } from './';

import styles from './TextStack.module.scss';

const DEFAULT_PROPS: TextStackProps = {
  label: '',
  primaryText: '',
  secondaryText: undefined
};

const MOCK_SKELETON_ID = 'mock-skeleton';

jest.mock('../Skeleton', () => ({
  Skeleton: () => <div data-testid={MOCK_SKELETON_ID} />
}));

describe('<TextStack />', () => {
  test('should render in the correct order - label, primary, secondary', () => {
    const { container } = render(<TextStack label={'label'} primaryText={'primary'} secondaryText={'secondary'} />);
    expect(container.textContent).toBe('labelprimarysecondary');
  });

  describe('semantic tags', () => {
    test('should render label as <label>', () => {
      const { container } = render(<TextStack {...DEFAULT_PROPS} label={'mock label'} />);
      const label = container.getElementsByTagName('label');
      expect(label.length).toBe(1);
      expect(label[0]).toHaveTextContent('mock label');
    });
  });

  describe('class names', () => {
    test('should apply Container class to container', () => {
      const { container } = render(<TextStack {...DEFAULT_PROPS} />);
      expect(container.firstChild).toHaveClass(styles.Container);
    });

    test('should apply Primary class to primary element', () => {
      const { container } = render(<TextStack {...DEFAULT_PROPS} primaryText={'mock primary'} />);

      const primary = container.getElementsByClassName(styles.Primary);
      expect(primary.length).toBe(1);
      expect(primary[0].textContent).toBe('mock primary');
    });

    test('should apply className prop to container', () => {
      const { container } = render(<TextStack {...DEFAULT_PROPS} className={'mock-class'} />);
      expect(container.firstChild).toHaveClass('mock-class');
    });
  });

  describe('when text props are synchronous', () => {
    test('should render label', () => {
      render(<TextStack {...DEFAULT_PROPS} label={'mock label'} />);
      expect(screen.getByText('mock label')).toBeInTheDocument();
    });

    test('should render synchronous primary', () => {
      render(<TextStack {...DEFAULT_PROPS} primaryText={'mock primary'} />);
      expect(screen.getByText('mock primary')).toBeInTheDocument();
    });

    test('should render synchronous secondaryText', () => {
      render(<TextStack {...DEFAULT_PROPS} secondaryText={'mock secondaryText'} />);
      expect(screen.getByText('mock secondaryText')).toBeInTheDocument();
    });
  });

  describe('when secondaryText is asynchronous', () => {
    test('should show loading skeleton when loading secondaryText', () => {
      render(<TextStack {...DEFAULT_PROPS} secondaryText={{ isLoading: true }} />);
      expect(screen.getByTestId(MOCK_SKELETON_ID)).toBeInTheDocument();
    });

    test('should show bottom text when loaded bottom text', () => {
      render(<TextStack {...DEFAULT_PROPS} secondaryText={{ isLoading: false, text: 'mock secondaryText' }} />);
      expect(screen.getByText('mock secondaryText')).toBeInTheDocument();
      expect(screen.queryByTestId(MOCK_SKELETON_ID)).toBeFalsy();
    });
  });

  describe('when primaryText is asynchronous', () => {
    test('should show skeleton when loading primaryText', () => {
      render(<TextStack {...DEFAULT_PROPS} primaryText={{ isLoading: true }} />);
      expect(screen.getByTestId(MOCK_SKELETON_ID)).toBeInTheDocument();
    });

    test('should show primary when loaded primaryText', () => {
      render(<TextStack {...DEFAULT_PROPS} primaryText={{ isLoading: false, text: 'mock primaryText' }} />);
      expect(screen.getByText('mock primaryText')).toBeInTheDocument();
      expect(screen.queryByTestId(MOCK_SKELETON_ID)).toBeFalsy();
    });
  });
});
