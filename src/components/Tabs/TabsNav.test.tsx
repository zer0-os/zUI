import type { HtmlHTMLAttributes } from 'react';

import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { TabsNav, TabNav, TabsNavProps } from '.';

const MOCK_TABS: TabNav[] = [
  { text: 'Tab 1', to: '/1', replace: true },
  { text: 'Tab 2', to: '/2' },
  { text: 'Tab 3', to: '/3' }
];

const DEFAULT_PROPS = { tabs: MOCK_TABS, location: MOCK_TABS[0].to };
const mockLink = jest.fn();

jest.mock('react-router-dom', () => ({
  Link: (props: HtmlHTMLAttributes<HTMLDivElement>) => {
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
  jest.clearAllMocks();
});

const renderComponent = (props?: TabsNavProps) => render(<TabsNav {...DEFAULT_PROPS} {...props} />);

test('should render react-router-dom Link elements with correct class names', () => {
  const { getAllByTestId } = renderComponent();
  const links = getAllByTestId('link');
  expect(links.length).toEqual(MOCK_TABS.length);
  links.forEach(l => expect(l.classList).toContain('Tab'));
});

test('should apply Selected class name on selected Link', () => {
  const { container } = renderComponent();
  const selected = container.getElementsByClassName('Selected');
  expect(selected.length).toBe(1);
  expect(selected[0].textContent).toBe(MOCK_TABS[0].text);
});

test('should apply replace prop to Link', () => {
  renderComponent({ tabs: [MOCK_TABS[0]] });
  expect(mockLink).toHaveBeenCalledTimes(1);
  expect(mockLink).toHaveBeenCalledWith(expect.objectContaining({ replace: true }));
});

test('should not apply replace prop to Link by default', () => {
  renderComponent({ tabs: [MOCK_TABS[1]] });
  expect(mockLink).toHaveBeenCalledTimes(1);
  expect(mockLink).toHaveBeenCalledWith(expect.objectContaining({ replace: undefined }));
});
