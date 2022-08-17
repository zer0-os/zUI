import React from 'react';
import { render } from '@testing-library/react';
import Modal, { ModalProps } from '.';

const mockTrigger = 'Mock Trigger';

const renderComponent = (props: ModalProps) => render(<Modal {...props} />);

test('should render trigger', () => {
  const { getByText } = renderComponent({ trigger: mockTrigger });
  const trigger = getByText(mockTrigger);
  expect(trigger).toBeInTheDocument();
});
