import { render } from '@testing-library/react';
import React from 'react';

import Card, { CardProps } from './';
import { TEST_ID } from './Card.constants';

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

test('should render all text elements in the correct order', () => {
  const { getByTestId } = renderComponent(DEFAULT_PROPS);

  const children = getByTestId(TEST_ID.container).childNodes;
  const nodes: string[] = [];
  const text: string[] = [];
  children.forEach(node => {
    nodes.push(node.nodeName);
    text.push(node.textContent);
  });

  expect(text).toEqual([DEFAULT_PROPS.title, DEFAULT_PROPS.value, DEFAULT_PROPS.bottomText]);
  // Also assert that each text value was rendered in the correct node
  expect(nodes).toEqual(['LABEL', 'SPAN', 'SPAN']);
});

test('should show skeleton when loading asynchronous value', () => {
  const { getByText, queryByText } = renderComponent({ ...DEFAULT_PROPS, value: { isLoading: true } });
  // Expect non-async values to be rendered
  expect(getByText(DEFAULT_PROPS.title)).toBeInTheDocument();
  expect(getByText(DEFAULT_PROPS.bottomText)).toBeInTheDocument();

  // Expect skeleton
  expect(queryByText(DEFAULT_PROPS.value)).toBeNull();
  expect(getByText(MOCK_SKELETON)).toBeInTheDocument();
});

test('should show skeleton when loading asynchronous bottomText', () => {
  const { getByText, queryByText } = renderComponent({ ...DEFAULT_PROPS, bottomText: { isLoading: true } });
  // Expect non-async values to be rendered
  expect(getByText(DEFAULT_PROPS.title)).toBeInTheDocument();
  expect(getByText(DEFAULT_PROPS.value)).toBeInTheDocument();

  // Expect skeleton
  expect(getByText(MOCK_SKELETON)).toBeInTheDocument();
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
