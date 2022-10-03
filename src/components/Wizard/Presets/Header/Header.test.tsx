import React from 'react';
import { render, screen } from '@testing-library/react';

import { Header, HeaderProps } from '.';
import { TooltipProvider } from '@radix-ui/react-tooltip';

const mockHeader = 'Mock Header';
const mockHeaderInfo = 'Mock Header Info';
const mockSubHeader = 'Mock SubHeader';
const mockChildren = 'Mock Content';

const DEFAULT_PROPS: HeaderProps = {
  header: '',
  headerInfo: '',
  subHeader: ''
};

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Header', () => {
  describe('class names', () => {
    test('should apply zui-wizard-header class to outer container', () => {
      const { container } = render(<Header {...DEFAULT_PROPS} header={mockHeader} />);

      expect(container.firstChild).toHaveClass('zui-wizard-header');
      expect(container.getElementsByClassName('zui-wizard-header').length).toBe(1);
    });

    test('should apply zui-wizard-header-container class to inner container', () => {
      const { container } = render(<Header {...DEFAULT_PROPS} header={mockHeader} />);
      const headerContainer = container.getElementsByClassName('zui-wizard-header-container');

      expect(headerContainer[0]).toHaveClass('zui-wizard-header-container');
      expect(headerContainer[0].textContent).toBe(mockHeader);
      expect(headerContainer.length).toBe(1);
    });
  });

  test('should render header as <h1 />', () => {
    const { container } = render(<Header {...DEFAULT_PROPS} header={mockHeader} />);

    const header = container.getElementsByTagName('h1');

    expect(header.length).toBe(1);
    expect(header[0].textContent).toBe(mockHeader);
  });

  test('should render subheader as <h2 />', () => {
    const { container } = render(<Header {...DEFAULT_PROPS} header={mockHeader} subHeader={mockSubHeader} />);

    const subheader = container.getElementsByTagName('h2');

    expect(subheader.length).toBe(1);
    expect(subheader[0].textContent).toBe(mockSubHeader);
  });

  test('should not render subheader by default', () => {
    const { container } = render(<Header {...DEFAULT_PROPS} header={mockHeader} />);

    const subheader = container.getElementsByTagName('h2');

    expect(subheader.length).toBe(0);
  });

  test('should render children', () => {
    render(
      <Header {...DEFAULT_PROPS}>
        <div>{mockChildren}</div>
      </Header>
    );
    expect(screen.getByText(mockChildren)).toBeInTheDocument();
  });

  test('should render InfoToolTip if headerInfo is defined', () => {
    const { container } = render(
      <TooltipProvider>
        <Header {...DEFAULT_PROPS} header={mockHeader} headerInfo={mockHeaderInfo} />
      </TooltipProvider>
    );

    const tooltip = container.getElementsByClassName('zui-info-tooltip');

    expect(tooltip.length).toBe(1);
    expect(tooltip[0].textContent).toBe('icon');
  });

  test('should not render InfoToolTip if headerInfo is undefined', () => {
    const { container } = render(<Header {...DEFAULT_PROPS} header={mockHeader} headerInfo={undefined} />);

    const tooltip = container.getElementsByClassName('zui-info-tooltip');

    expect(tooltip.length).toBe(0);
  });

  test('should render sectionDivider by default as <hr />', () => {
    const { container } = render(<Header {...DEFAULT_PROPS} header={mockHeader} />);
    const sectionDivider = container.getElementsByTagName('hr');

    expect(sectionDivider.length).toBe(1);
    expect(sectionDivider[0]).toBeInTheDocument();
  });

  test('should not render sectionDivider if false is passed to prop', () => {
    const { container } = render(<Header {...DEFAULT_PROPS} header={mockHeader} sectionDivider={false} />);
    const sectionDivider = container.getElementsByTagName('hr');

    expect(sectionDivider.length).toBe(0);
  });
});
