import React from 'react';
import { render, screen } from '@testing-library/react';

import { Card, CardProps } from './';

import styles from './Card.module.scss';

const DEFAULT_PROPS: CardProps = {
  title: '',
  value: '',
  bottomText: undefined
};

const MOCK_SKELETON_ID = 'mock-skeleton';

jest.mock('../Skeleton', () => ({
  Skeleton: () => <div data-testid={MOCK_SKELETON_ID} />
}));

describe('<Card />', () => {
  test('should only render text in the correct order - title, value, bottom text', () => {
    const { container } = render(<Card title={'title-'} value={'value-'} bottomText={'bottom'} />);
    expect(container.textContent).toBe('title-value-bottom');
  });

  describe('semantic tags', () => {
    test('should render title as <label>', () => {
      const { container } = render(<Card {...DEFAULT_PROPS} title={'mock title'} />);
      const label = container.getElementsByTagName('label');
      expect(label.length).toBe(1);
      expect(label[0]).toHaveTextContent('mock title');
    });
  });

  describe('class names', () => {
    test('should apply Title class to only the title element', () => {
      const { container } = render(<Card {...DEFAULT_PROPS} title={'mock title'} />);
      const title = container.getElementsByClassName(styles.Title);
      expect(title.length).toBe(1);
      expect(title[0]).toHaveTextContent('mock title');
    });

    test('should apply Value class to the value element', () => {
      const { container } = render(<Card {...DEFAULT_PROPS} value={'mock value'} />);
      const value = container.getElementsByClassName(styles.Value);
      expect(value.length).toBe(1);
      expect(value[0]).toHaveTextContent('mock value');
    });

    test('should apply BottomText class to the bottom text element', () => {
      const { container } = render(<Card {...DEFAULT_PROPS} bottomText={'mock bottom text'} />);
      const bottomText = container.getElementsByClassName(styles.BottomText);
      expect(bottomText.length).toBe(1);
      expect(bottomText[0]).toHaveTextContent('mock bottom text');
    });
  });

  describe('when text props are synchronous', () => {
    test('should render title', () => {
      render(<Card {...DEFAULT_PROPS} title={'mock title'} />);
      expect(screen.getByText('mock title')).toBeInTheDocument();
    });

    test('should render synchronous value', () => {
      render(<Card {...DEFAULT_PROPS} value={'mock value'} />);
      expect(screen.getByText('mock value')).toBeInTheDocument();
    });

    test('should render synchronous bottomText', () => {
      render(<Card {...DEFAULT_PROPS} bottomText={'mock bottom text'} />);
      expect(screen.getByText('mock bottom text')).toBeInTheDocument();
    });
  });

  describe('when bottom text is asynchronous', () => {
    test('should show loading skeleton when loading bottom text', () => {
      render(<Card {...DEFAULT_PROPS} bottomText={{ isLoading: true }} />);
      expect(screen.getByTestId(MOCK_SKELETON_ID)).toBeInTheDocument();
    });

    test('should show bottom text when loaded bottom text', () => {
      render(<Card {...DEFAULT_PROPS} bottomText={{ isLoading: false, text: 'mock bottom text' }} />);
      expect(screen.getByText('mock bottom text')).toBeInTheDocument();
    });
  });

  describe('when value is asynchronous', () => {
    test('should show skeleton when loading value', () => {
      render(<Card {...DEFAULT_PROPS} value={{ isLoading: true }} />);
      expect(screen.getByTestId(MOCK_SKELETON_ID)).toBeInTheDocument();
    });

    test('should show value when loaded value', () => {
      render(<Card {...DEFAULT_PROPS} value={{ isLoading: false, text: 'mock value' }} />);
      expect(screen.getByText('mock value')).toBeInTheDocument();
    });
  });
});
