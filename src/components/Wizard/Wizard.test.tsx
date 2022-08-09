import React from 'react';
import { render } from '@testing-library/react';
import Wzard from '.';

const mockContainer = 'Mock Container';
const mockLoadingMessage = 'Mock Loading Message';
const mockHeader = 'Mock Header';
const mockConfirmation = 'Mock Confirmation';

const mockOnClickPrimaryButton = jest.fn();

test('should render wizard container', () => {
  const { getByText } = render(<Wzard.Container>{mockContainer}</Wzard.Container>);
  const container = getByText(mockContainer);
  expect(container).toBeInTheDocument();
  expect(container).toHaveClass('zui-wizard');
});

test('should render wizard loading', () => {
  const { getByText } = render(<Wzard.Loading message={mockLoadingMessage} />);
  const loading = getByText(mockLoadingMessage);
  expect(loading).toBeInTheDocument();
});

test('should render wizard header', () => {
  const { getByText } = render(<Wzard.Header header={mockHeader} />);
  const header = getByText(mockHeader);
  expect(header).toBeInTheDocument();
});

test('should render wizard confirmation', () => {
  const { getByText } = render(
    <Wzard.Confirmation message={mockConfirmation} onClickPrimaryButton={mockOnClickPrimaryButton} />
  );
  const confirmation = getByText(mockConfirmation);
  expect(confirmation).toBeInTheDocument();
});
