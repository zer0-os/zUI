import React from 'react';

import { cleanup, render, screen } from '@testing-library/react';
import { TabsNav, TabNav } from '.';

import styles from './Tabs.module.scss';

const MOCK_TABS: TabNav[] = [
  { text: 'Tab 1', to: '/1', replace: true },
  { text: 'Tab 2', to: '/2' },
  { text: 'Tab 3', to: '/3' }
];

const DEFAULT_PROPS = { tabs: MOCK_TABS, location: MOCK_TABS[0].to };
const mockLink = vi.fn();

vi.mock('react-router-dom', () => ({
  Link: (props: any) => {
    mockLink(props);
    return (
      <div data-testid="link" {...props}>
        {props.children}
      </div>
    );
  }
}));

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

describe('<TabsNav />', () => {
  describe('class names', () => {
    test('should apply Container class only to the container element', () => {
      const { container } = render(<TabsNav {...DEFAULT_PROPS} />);

      expect(container.getElementsByClassName(styles.Container).length).toBe(1);
    });

    test('should apply List class only to the List element', () => {
      const { container } = render(<TabsNav {...DEFAULT_PROPS} />);

      expect(container.getElementsByClassName(styles.List).length).toBe(1);
    });

    test('should apply Tab class only to the Link elements', () => {
      const { container } = render(<TabsNav {...DEFAULT_PROPS} />);

      expect(container.getElementsByClassName(styles.Tab).length).toBe(3);
    });

    test('should apply Selected class on default selected link', () => {
      const { container } = render(<TabsNav {...DEFAULT_PROPS} />);
      const selectedLink = container.getElementsByClassName(styles.Selected);

      expect(selectedLink[0]).toHaveTextContent(MOCK_TABS[0].text);
    });

    test('should apply Selected class only to the selected link', () => {
      const { container } = render(<TabsNav {...DEFAULT_PROPS} />);
      const selectedLink = container.getElementsByClassName(styles.Selected);

      expect(selectedLink.length).toBe(1);
      expect(selectedLink[0]).not.toHaveTextContent(MOCK_TABS[1].text);
      expect(selectedLink[0]).not.toHaveTextContent(MOCK_TABS[2].text);
    });

    test('should not apply Selected class on any Link by default', () => {
      const { container } = render(<TabsNav {...DEFAULT_PROPS} location={undefined} />);

      expect(container.getElementsByClassName(styles.Selected).length).toBe(0);
    });
  });

  describe('list', () => {
    test('should render correct number of links', () => {
      const { container } = render(<TabsNav {...DEFAULT_PROPS} />);
      const tab = container.getElementsByClassName(styles.Tab);

      expect(tab.length).toEqual(MOCK_TABS.length);
    });

    test('should render links in the correct order', () => {
      const MOCK_TABS: TabNav[] = [
        { text: 'Tab 1,', to: '/1' },
        { text: 'Tab 2,', to: '/2' },
        { text: 'Tab 3', to: '/3' }
      ];

      const { container } = render(<TabsNav tabs={MOCK_TABS} location={MOCK_TABS[0].to} />);

      expect(container.textContent).toBe('Tab 1,Tab 2,Tab 3');
    });
  });

  describe('link/tab', () => {
    test('should apply replace prop to Link', () => {
      render(<TabsNav {...DEFAULT_PROPS} tabs={[MOCK_TABS[0]]} />);

      expect(mockLink).toHaveBeenCalledTimes(1);
      expect(mockLink).toHaveBeenCalledWith(expect.objectContaining({ replace: true }));
    });

    test('should not apply replace prop to Link by default', () => {
      render(<TabsNav {...DEFAULT_PROPS} tabs={[MOCK_TABS[1]]} />);

      expect(mockLink).toHaveBeenCalledTimes(1);
      expect(mockLink).toHaveBeenCalledWith(expect.objectContaining({ replace: undefined }));
    });

    test('should apply and display tab label text', () => {
      const { container } = render(<TabsNav {...DEFAULT_PROPS} />);
      const tab = container.getElementsByClassName(styles.Tab);

      expect(tab[0]).toHaveTextContent(MOCK_TABS[0].text);
      expect(screen.getByText(MOCK_TABS[0].text)).toBeInTheDocument();
    });

    test('should apply a path for attribute to', () => {
      const { container } = render(<TabsNav {...DEFAULT_PROPS} />);
      const tab = container.getElementsByClassName(styles.Tab);

      expect(tab[0]).toHaveAttribute('to', MOCK_TABS[0].to);
    });
  });
});
