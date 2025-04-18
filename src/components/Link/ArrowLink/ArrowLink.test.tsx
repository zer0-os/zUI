import { test, expect } from 'vitest';
import { render } from '@testing-library/react';

import { ArrowLink, TEST_ID } from './ArrowLink';

const renderComponent = () => {
  return render(<ArrowLink>Arrow Link</ArrowLink>);
};

test('Renders ArrowLink', () => {
  const { getByTestId } = renderComponent();

  const container = getByTestId(TEST_ID.CONTAINER);
  expect(container).toBeInTheDocument();
});

test('Renders Arrow Container', () => {
  const { getByTestId } = renderComponent();

  const arrowContainer = getByTestId(TEST_ID.ARROW.CONTAINER);
  expect(arrowContainer).toBeInTheDocument();
});

test('Renders Arrow', () => {
  const { getByTestId } = renderComponent();

  const arrow = getByTestId(TEST_ID.ARROW.ARROW);
  expect(arrow).toBeInTheDocument();
});
