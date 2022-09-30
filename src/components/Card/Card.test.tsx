import React from 'react';
import { render } from '@testing-library/react';

import { Card, CardProps } from './';
import { TextStackProps } from '../TextStack';

import styles from './Card.module.scss';

let mockTextStack = jest.fn();

const MOCK_SKELETON_ID = 'mock-skeleton';

jest.mock('../Skeleton', () => ({
  Skeleton: () => <div data-testid={MOCK_SKELETON_ID} />
}));

// mock TextStack component
jest.mock('../TextStack', () => ({
  TextStack: (props: TextStackProps) => {
    mockTextStack(props);
    return <div data-testid="mock-text-detail" />;
  }
}));

const DEFAULT_PROPS: CardProps = {
  className: undefined,
  label: '',
  primaryText: '',
  secondaryText: ''
};

describe('<Card />', () => {
  test('should forward label to TextStack', () => {
    render(<Card {...DEFAULT_PROPS} label={'mock label'} />);
    expect(mockTextStack).toHaveBeenCalledWith(expect.objectContaining({ label: 'mock label' }));
  });

  test('should forward primaryText to TextStack', () => {
    render(<Card {...DEFAULT_PROPS} primaryText={'mock primary'} />);
    expect(mockTextStack).toHaveBeenCalledWith(expect.objectContaining({ primaryText: 'mock primary' }));
  });

  test('should forward secondaryText to TextStack', () => {
    render(<Card {...DEFAULT_PROPS} secondaryText={'mock secondary'} />);
    expect(mockTextStack).toHaveBeenCalledWith(expect.objectContaining({ secondaryText: 'mock secondary' }));
  });

  test('should forward className to TextStack', () => {
    render(<Card {...DEFAULT_PROPS} className={'mock-class'} />);

    expect(mockTextStack).toHaveBeenCalledWith(
      expect.objectContaining({ className: expect.stringContaining('mock-class') })
    );
  });

  test('should pass Container class to TextStack', () => {
    render(<Card {...DEFAULT_PROPS} />);

    expect(mockTextStack).toHaveBeenCalledWith(
      expect.objectContaining({ className: expect.stringContaining(styles.Container) })
    );
  });
});
