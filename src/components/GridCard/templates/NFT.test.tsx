import React from 'react';
import { render, screen } from '@testing-library/react';

import { NFT, NFTProps } from './NFT';
import { TextStackProps } from '../../TextStack';
import { ButtonProps } from '../../Button';

const mockTextStack = jest.fn();

jest.mock('../../TextStack', () => ({
  TextStack: (props: TextStackProps) => {
    mockTextStack(props);
    return <div />;
  }
}));

const mockButton = jest.fn();

jest.mock('../../Button', () => ({
  Button: (props: ButtonProps) => {
    mockButton(props);
    return <div />;
  }
}));

const DEFAULT_PROPS: NFTProps = {
  buttonText: '',
  isButtonDisabled: false,
  label: '',
  onClickButton: undefined,
  primaryText: '',
  secondaryText: undefined,
  title: '',
  zna: ''
};

beforeEach(() => {
  jest.clearAllMocks();
});

describe('<NFT />', () => {
  describe('class names', () => {
    test('should apply className prop to container', () => {
      const { container } = render(<NFT {...DEFAULT_PROPS} className={'mock-class'} />);
      expect(container.firstChild).toHaveClass('mock-class');
    });
  });

  describe('when rendering details', () => {
    test('should render title', () => {
      render(<NFT {...DEFAULT_PROPS} title={'mock title'} />);
      expect(screen.getByText('mock title')).toBeInTheDocument();
    });

    test('should render zna with 0:// prepended', () => {
      render(<NFT {...DEFAULT_PROPS} zna={'mock zna'} />);
      expect(screen.getByText('0://mock zna')).toBeInTheDocument();
    });
  });

  describe('TextStack', () => {
    test('should forward primaryText to TextStack', () => {
      render(<NFT {...DEFAULT_PROPS} primaryText={'mock primary'} />);
      expect(mockTextStack).toHaveBeenCalledWith(expect.objectContaining({ primaryText: 'mock primary' }));
    });

    test('should forward secondaryText to TextStack', () => {
      render(<NFT {...DEFAULT_PROPS} secondaryText={'mock secondary'} />);
      expect(mockTextStack).toHaveBeenCalledWith(expect.objectContaining({ secondaryText: 'mock secondary' }));
    });

    test('should forward label to TextStack', () => {
      render(<NFT {...DEFAULT_PROPS} label={'mock label'} />);
      expect(mockTextStack).toHaveBeenCalledWith(expect.objectContaining({ label: 'mock label' }));
    });
  });

  describe('Button', () => {
    test('should forward buttonText to Button children', () => {
      render(<NFT {...DEFAULT_PROPS} buttonText={'mock button text'} />);
      expect(mockButton).toHaveBeenCalledWith(
        expect.objectContaining({
          children: 'mock button text'
        })
      );
    });

    test('should forward isButtonDisabled to Button', () => {
      render(<NFT {...DEFAULT_PROPS} isButtonDisabled={true} />);
      expect(mockButton).toHaveBeenCalledWith(
        expect.objectContaining({
          isDisabled: true
        })
      );
    });

    test('should forward onClickButton to Button', () => {
      const mockOnClickButton = jest.fn();
      render(<NFT {...DEFAULT_PROPS} onClickButton={mockOnClickButton} />);
      expect(mockButton).toHaveBeenCalledWith(
        expect.objectContaining({
          onPress: mockOnClickButton
        })
      );
    });
  });
});
