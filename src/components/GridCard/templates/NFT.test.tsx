import { render, screen } from '@testing-library/react';

import { NFT, NFTProps } from './NFT';
import { TextStackProps } from '../../TextStack';

const mockTextStack = vi.fn();

vi.mock('../../TextStack', () => ({
  TextStack: (props: TextStackProps) => {
    mockTextStack(props);
    return <div />;
  }
}));

const TestButton = () => <button>Test Button</button>;

const DEFAULT_PROPS: NFTProps = {
  label: '',
  primaryText: '',
  secondaryText: undefined,
  title: '',
  zna: '',
  button: <TestButton />
};

beforeEach(() => {
  vi.clearAllMocks();
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
    test('should render button ', () => {
      const { container } = render(<NFT {...DEFAULT_PROPS} />);
      expect(container.getElementsByClassName('Button').length).toBe(1);
    });
  });
});
