import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Tabs, Tab, TabsProps } from '.';

const mockTabs: Tab[] = [
  { text: 'Tab 1', content: 'This is Tab 1 content' },
  { text: 'Tab 2', content: 'This is Tab 2 content' },
  { text: 'Tab 3', content: 'This is Tab 3 content' }
];

const renderComponent = (props: TabsProps) =>
  render(
    <Router>
      <Tabs {...props} />
    </Router>
  );

test('should render tab triggers', () => {
  const { getByText } = renderComponent({ tabs: mockTabs });
  mockTabs.forEach((tab: Tab) => {
    const tabTrigger = getByText(tab.text);
    expect(tabTrigger).toBeInTheDocument();
  });
});

test('should render tab content for selected tab', () => {
  mockTabs.forEach((tab: Tab) => {
    const { getByText } = renderComponent({ tabs: mockTabs, defaultValue: tab.text });
    const tabContent = getByText(String(tab.content));
    expect(tabContent).toBeInTheDocument();
  });
});
