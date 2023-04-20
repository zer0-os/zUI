import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { PasswordInput, PasswordInputProps } from './PasswordInput';

const renderComponent = (props: PasswordInputProps) => render(<PasswordInput {...props} />);

test('toggles visibility', async () => {
  const { getByDisplayValue, getByRole } = renderComponent({ value: '', onChange: () => null });

  const input = getByDisplayValue('') as HTMLInputElement;
  const button = getByRole('button') as HTMLButtonElement;

  expect(input.type).toBe('password');
  button.click();
  expect(input.type).toBe('text');
  button.click();
  expect(input.type).toBe('password');
});
