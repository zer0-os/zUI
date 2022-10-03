import React from 'react';
import { render, screen } from '@testing-library/react';

import { Wizard, WizardProps } from '.';

const mockContainer = 'Mock Container';
const mockHeader = 'Mock Header';
const mockLoadingMessage = 'Mock Loading Message';
const mockConfirmation = 'Mock Confirmation';
const mockChildren = 'mock-content';
const mockOnClickPrimaryButton = jest.fn();

const DEFAULT_PROPS: WizardProps = {
  className: '',
  children: <></>
};

describe('<Wizard />', () => {
  describe('class names', () => {
    test('should apply zui-wizard class to container', () => {
      const { container } = render(<Wizard.Container {...DEFAULT_PROPS} />);

      expect(container.firstChild).toHaveClass('zui-wizard');
      expect(container.getElementsByClassName('zui-wizard').length).toBe(1);
    });

    test('should apply className prop to container', () => {
      const { container } = render(<Wizard.Container {...DEFAULT_PROPS} className={'mock-class'} />);

      expect(container.firstChild).toHaveClass('mock-class');
      expect(container.getElementsByClassName('mock-class').length).toBe(1);
    });
  });

  // by ID or byText (speak to brett)
  test('should render children', () => {
    render(
      <Wizard.Container {...DEFAULT_PROPS}>
        <div>{mockChildren}</div>
      </Wizard.Container>
    );
    expect(screen.getByText(mockChildren)).toBeInTheDocument();
  });

  test('should render Header element if header prop is defined', () => {
    const { container } = render(<Wizard.Container {...DEFAULT_PROPS} header={mockHeader} />);

    expect(screen.getByText(mockHeader)).toBeInTheDocument();
    expect(container.getElementsByClassName('zui-wizard-header').length).toBe(1);
    // expect(yolo).toHaveBeenCalledWith(expect.objectContaining({ header: mockHeader }));
  });

  test('should not render Header element if header prop is undefined', () => {
    const { container } = render(<Wizard.Container {...DEFAULT_PROPS} header={undefined} />);

    expect(screen.queryByText(mockHeader)).not.toBeInTheDocument();
    expect(container.getElementsByClassName('zui-wizard-header').length).toBe(0);
  });
});

// test('should forward header to Header component', () => {
//   render(<Wizard.Container {...DEFAULT_PROPS} header={mockHeader} />);
//   expect(screen.getByTestId('mock-header')).toBeInTheDocument();
//   expect(yolo).toHaveBeenCalledWith(expect.objectContaining({ header: 'mock-header' }));
// });

// test('should forward headerInfo to Header component', () => {
//   render(<Wizard.Container {...DEFAULT_PROPS} header={mockHeader} headerInfo={} />);
//   expect(screen.getByTestId('mock-header')).toBeInTheDocument();
//   expect(yolo).toHaveBeenCalledWith(expect.objectContaining({ headerInfo: 'mock-header-info' }));
// });

// test('should forward subHeader to Header component', () => {
//   render(<Wizard.Container {...DEFAULT_PROPS} header={mockHeader} subHeader={} />);
//   expect(screen.getByTestId('mock-header')).toBeInTheDocument();
//   expect(yolo).toHaveBeenCalledWith(expect.objectContaining({ subHeader: 'mock-subHeader' }));
// });

// test('should forward sectionDivider to Header component', () => {
//   render(<Wizard.Container {...DEFAULT_PROPS} header={mockHeader} sectionDivider={false} />);
//   expect(screen.getByTestId('mock-header')).toBeInTheDocument();
//   expect(yolo).toHaveBeenCalledWith(expect.objectContaining({ sectionDivider: false }));
// });

// existing tests can probably be removed
test('should render wizard container', () => {
  const { getByText } = render(<Wizard.Container>{mockContainer}</Wizard.Container>);
  const container = getByText(mockContainer);
  expect(container).toBeInTheDocument();
  expect(container).toHaveClass('zui-wizard');
});

test('should render wizard loading', () => {
  const { getByText } = render(<Wizard.Loading message={mockLoadingMessage} />);
  const loading = getByText(mockLoadingMessage);
  expect(loading).toBeInTheDocument();
});

test('should render wizard header', () => {
  const { getByText } = render(<Wizard.Header header={mockHeader} />);
  const header = getByText(mockHeader);
  expect(header).toBeInTheDocument();
});

test('should render wizard confirmation', () => {
  const { getByText } = render(
    <Wizard.Confirmation message={mockConfirmation} onClickPrimaryButton={mockOnClickPrimaryButton} />
  );
  const confirmation = getByText(mockConfirmation);
  expect(confirmation).toBeInTheDocument();
});
