import React from 'react';
import { render, screen } from '@testing-library/react';

import { Wizard, WizardProps } from '.';
import { HeaderProps } from './Presets';

const mockHeaderText = 'Mock Header';
const mockHeaderInfo = 'Mock Header Info';
const mockSubHeader = 'Mock Sub-Header';
const mockChildren = 'Mock Content';
const mockClassName = 'Mock Class Name';

const DEFAULT_PROPS: WizardProps = {
  className: '',
  children: <></>
};

const mockHeader = jest.fn();

jest.mock('./Presets', () => ({
  Header: (props: HeaderProps) => {
    mockHeader(props);
    return <div>{mockHeaderText}</div>;
  }
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe('<Wizard />', () => {
  describe('class names', () => {
    test('should apply zui-wizard class to container', () => {
      const { container } = render(<Wizard.Container {...DEFAULT_PROPS} />);

      expect(container.firstChild).toHaveClass('zui-wizard');
      expect(container.getElementsByClassName('zui-wizard').length).toBe(1);
    });

    test('should apply className prop to container', () => {
      const { container } = render(<Wizard.Container {...DEFAULT_PROPS} className={mockClassName} />);

      expect(container.firstChild).toHaveClass(mockClassName);
      expect(container.getElementsByClassName(mockClassName).length).toBe(1);
    });
  });

  describe('Container', () => {
    test('should render children', () => {
      render(
        <Wizard.Container {...DEFAULT_PROPS}>
          <div>{mockChildren}</div>
        </Wizard.Container>
      );
      expect(screen.getByText(mockChildren)).toBeInTheDocument();
    });

    describe('Header', () => {
      test('should render Header element if header prop is defined', () => {
        render(<Wizard.Container {...DEFAULT_PROPS} header={mockHeaderText} />);

        expect(screen.getByText(mockHeaderText)).toBeInTheDocument();
        expect(mockHeader).toHaveBeenCalledWith(expect.objectContaining({ header: mockHeaderText }));
      });

      test('should not render Header element if header prop is undefined', () => {
        render(<Wizard.Container {...DEFAULT_PROPS} header={undefined} />);

        expect(screen.queryByText(mockHeaderText)).not.toBeInTheDocument();
        expect(mockHeader).toHaveBeenCalledTimes(0);
      });

      test('should forward headerInfo to Header component', () => {
        render(<Wizard.Container {...DEFAULT_PROPS} header={mockHeaderText} headerInfo={mockHeaderInfo} />);

        expect(mockHeader).toHaveBeenCalledWith(expect.objectContaining({ headerInfo: mockHeaderInfo }));
      });

      test('should forward subHeader to Header component', () => {
        render(<Wizard.Container {...DEFAULT_PROPS} header={mockHeaderText} subHeader={mockSubHeader} />);

        expect(mockHeader).toHaveBeenCalledWith(expect.objectContaining({ subHeader: mockSubHeader }));
      });

      test('should forward sectionDivider to Header component', () => {
        render(<Wizard.Container {...DEFAULT_PROPS} header={mockHeaderText} sectionDivider={true} />);

        expect(mockHeader).toHaveBeenCalledWith(expect.objectContaining({ sectionDivider: true }));
      });
    });
  });
});
