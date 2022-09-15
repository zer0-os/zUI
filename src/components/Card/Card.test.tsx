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

test('should put title in a <label>', () => {
  const { getByText } = renderComponent();

  expect(getByText(DEFAULT_PROPS.title).nodeName).toBe('LABEL');
});

test('should apply Title class to title element', () => {
  const { container } = renderComponent();

  const title = container.getElementsByClassName(styles.Title);
  expect(title.length).toBe(1);
  expect(title[0].textContent).toBe(DEFAULT_PROPS.title);
});

test('should apply Value class to value element', () => {
  const { container } = renderComponent();

  const value = container.getElementsByClassName(styles.Value);
  expect(value.length).toBe(1);
  expect(value[0].textContent).toBe(DEFAULT_PROPS.value);
});

test('should apply BottomText class to bottom text element', () => {
  const { container } = renderComponent();

  const bottomText = container.getElementsByClassName(styles.BottomText);
  expect(bottomText.length).toBe(1);
  expect(bottomText[0].textContent).toBe(DEFAULT_PROPS.bottomText);
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
    value: { isLoading: false, text: 'mock-value-text' }
  });

  // All text should be in DOM
  expect(getByText(DEFAULT_PROPS.title)).toBeTruthy();
  expect(getByText(DEFAULT_PROPS.bottomText)).toBeTruthy();
  expect(getByText('mock-value-text')).toBeTruthy();

  // Skeleton shouldn't be in DOM
  expect(queryByText(MOCK_SKELETON)).toBeFalsy();
});

test('should show asynchronous bottomText when data has loaded', () => {
  const { getByText, queryByText } = renderComponent({
    bottomText: { isLoading: false, text: 'mock-bottom-text' }
  });

  // All text should be in DOM
  expect(getByText(DEFAULT_PROPS.title)).toBeTruthy();
  expect(getByText('mock-bottom-text')).toBeTruthy();
  expect(getByText(DEFAULT_PROPS.value)).toBeTruthy();

  // Skeleton shouldn't be in DOM
  expect(queryByText(MOCK_SKELETON)).toBeFalsy();
});
