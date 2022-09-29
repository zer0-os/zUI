import React from 'react';
import { render } from '@testing-library/react';

import { Card, CardProps } from './';
import { TextDetailProps } from '../TextDetail';

import styles from './Card.module.scss';

let mockTextDetail = jest.fn();

const MOCK_SKELETON_ID = 'mock-skeleton';

jest.mock('../Skeleton', () => ({
  Skeleton: () => <div data-testid={MOCK_SKELETON_ID} />
}));

// mock TextDetail component
jest.mock('../TextDetail', () => ({
  TextDetail: (props: TextDetailProps) => {
    mockTextDetail(props);
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
  test('should forward label to TextDetail', () => {
    render(<Card {...DEFAULT_PROPS} label={'mock label'} />);
    expect(mockTextDetail).toHaveBeenCalledWith(expect.objectContaining({ label: 'mock label' }));
  });

  test('should forward primaryText to TextDetail', () => {
    render(<Card {...DEFAULT_PROPS} primaryText={'mock primary'} />);
    expect(mockTextDetail).toHaveBeenCalledWith(expect.objectContaining({ primaryText: 'mock primary' }));
  });

  test('should forward secondaryText to TextDetail', () => {
    render(<Card {...DEFAULT_PROPS} secondaryText={'mock secondary'} />);
    expect(mockTextDetail).toHaveBeenCalledWith(expect.objectContaining({ secondaryText: 'mock secondary' }));
  });

  test('should forward className to TextDetail', () => {
    render(<Card {...DEFAULT_PROPS} className={'mock-class'} />);

    expect(mockTextDetail).toHaveBeenCalledWith(
      expect.objectContaining({ className: expect.stringContaining('mock-class') })
    );
  });

  test('should pass Container class to TextDetail', () => {
    render(<Card {...DEFAULT_PROPS} />);

    expect(mockTextDetail).toHaveBeenCalledWith(
      expect.objectContaining({ className: expect.stringContaining(styles.Container) })
    );
  });
});
