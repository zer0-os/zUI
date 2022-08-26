import { render } from '@testing-library/react';
import React from 'react';

import Card, { CardProps } from './';

const DEFAULT_PROPS = {
  title: 'Mock Text Title',
  value: 'Mock Text Value',
  bottomText: 'Mock Text Bottom'
};

const MOCK_SKELETON = 'Mock Skeleton';

jest.mock('../Skeleton', () => {
  return function MockSkeleton() {
    return <span>{MOCK_SKELETON}</span>;
  };
});

const renderComponent = (props?: CardProps) => render(<Card {...props} />);

test('should render all text in the correct order', () => {
  const { getAllByText } = renderComponent(DEFAULT_PROPS);
  const textElements = getAllByText(/Mock\ Text/);
  expect(textElements.map(t => t.textContent)).toEqual([
    DEFAULT_PROPS.title,
    DEFAULT_PROPS.value,
    DEFAULT_PROPS.bottomText
  ]);
});

test('should show skeleton when loading asynchronous value', () => {
  const { getByText, queryByText } = renderComponent({ ...DEFAULT_PROPS, value: { isLoading: true } });
  expect(getByText(MOCK_SKELETON)).toBeInTheDocument();
  expect(getByText(DEFAULT_PROPS.title)).toBeInTheDocument();
  expect(getByText(DEFAULT_PROPS.bottomText)).toBeInTheDocument();
  expect(queryByText(DEFAULT_PROPS.value)).toBeNull();
});

test('should show skeleton when loading asynchronous bottomText', () => {
  const { getByText, queryByText } = renderComponent({ ...DEFAULT_PROPS, bottomText: { isLoading: true } });
  expect(getByText(MOCK_SKELETON)).toBeInTheDocument();
  expect(getByText(DEFAULT_PROPS.title)).toBeInTheDocument();
  expect(getByText(DEFAULT_PROPS.value)).toBeInTheDocument();
  expect(queryByText(DEFAULT_PROPS.bottomText)).toBeNull();
});

test('should show asynchronous value when data has loaded', () => {
  const { getByText, queryByText } = renderComponent({
    ...DEFAULT_PROPS,
    value: { isLoading: false, text: 'Async Data' }
  });
  expect(queryByText(MOCK_SKELETON)).toBeNull();
  expect(getByText('Async Data')).toBeInTheDocument();
});

test('should show asynchronous bottomText when data has loaded', () => {
  const { getByText, queryByText } = renderComponent({
    ...DEFAULT_PROPS,
    bottomText: { isLoading: false, text: 'Async Data' }
  });
  expect(queryByText(MOCK_SKELETON)).toBeNull();
  expect(getByText('Async Data')).toBeInTheDocument();
});
