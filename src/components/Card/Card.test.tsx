import React from 'react';
import { render } from '@testing-library/react';

import { Card, CardProps } from './';
import styles from './Card.module.scss';

const DEFAULT_PROPS = {
  title: 'Mock Text Title',
  value: 'Mock Text Value',
  bottomText: 'Mock Text Bottom'
};

const MOCK_SKELETON = 'Mock Skeleton';

jest.mock('../Skeleton', () => ({
  // Note: if you change this from <div>, make sure to update tests below
  Skeleton: () => <div>{MOCK_SKELETON}</div>
}));

const renderComponent = (props?: Partial<CardProps>) => render(<Card {...DEFAULT_PROPS} {...props} />);

test('should render correct nodes in the correct order', () => {
  const { container } = renderComponent(DEFAULT_PROPS);

  // Extract text and nodes
  const children = container.firstChild.childNodes;
  const asText = Array.from(children).map(c => c.textContent);
  const asNodes = Array.from(children).map(c => c.nodeName);

  // Assert correct nodes and correct order
  const expectedNodes = ['label', 'b', 'span'];
  const expectedText = [DEFAULT_PROPS.title, DEFAULT_PROPS.value, DEFAULT_PROPS.bottomText];
  expect(
    asText.toString() === expectedText.toString() &&
      asNodes.map(n => n.toLowerCase()).toString() === expectedNodes.map(n => n.toLowerCase()).toString()
  );
});

test('should apply class module names to correct elements', () => {
  const { getByText } = renderComponent();

  expect(getByText(DEFAULT_PROPS.title)).toHaveClass(styles.Title);
  expect(getByText(DEFAULT_PROPS.value)).toHaveClass(styles.Value);
  expect(getByText(DEFAULT_PROPS.bottomText)).toHaveClass(styles.BottomText);
});

test('should show skeleton when loading asynchronous value', () => {
  const { getByText, queryByText } = renderComponent({ ...DEFAULT_PROPS, value: { isLoading: true } });

  // Keeps title and bottom text in DOM
  expect(getByText(DEFAULT_PROPS.title)).toBeTruthy();
  expect(getByText(DEFAULT_PROPS.bottomText)).toBeTruthy();

  // Value shouldn't be in DOM
  expect(queryByText(DEFAULT_PROPS.value)).toBeFalsy();
  expect(getByText(MOCK_SKELETON)).toBeTruthy();
});

test('should show skeleton when loading asynchronous bottomText', () => {
  const { getByText, queryByText } = renderComponent({ ...DEFAULT_PROPS, bottomText: { isLoading: true } });

  // Title and value should be in DOM
  expect(getByText(DEFAULT_PROPS.title)).toBeTruthy();
  expect(getByText(DEFAULT_PROPS.value)).toBeTruthy();

  // Bottom text shouldn't be in DOM
  expect(queryByText(DEFAULT_PROPS.bottomText)).toBeFalsy();
  expect(getByText(MOCK_SKELETON)).toBeTruthy();
});

test('should show asynchronous value when data has loaded', () => {
  const { getByText, queryByText } = renderComponent({
    value: { isLoading: false, text: DEFAULT_PROPS.value }
  });

  // All text should be in DOM
  expect(getByText(DEFAULT_PROPS.title)).toBeTruthy();
  expect(getByText(DEFAULT_PROPS.bottomText)).toBeTruthy();
  expect(getByText(DEFAULT_PROPS.value)).toBeTruthy();

  // Skeleton shouldn't be in DOM
  expect(queryByText(MOCK_SKELETON)).toBeFalsy();
});

test('should show asynchronous bottomText when data has loaded', () => {
  const { getByText, queryByText } = renderComponent({
    bottomText: { isLoading: false, text: DEFAULT_PROPS.bottomText }
  });

  // All text should be in DOM
  expect(getByText(DEFAULT_PROPS.title)).toBeTruthy();
  expect(getByText(DEFAULT_PROPS.bottomText)).toBeTruthy();
  expect(getByText(DEFAULT_PROPS.value)).toBeTruthy();

  // Skeleton shouldn't be in DOM
  expect(queryByText(MOCK_SKELETON)).toBeFalsy();
});
