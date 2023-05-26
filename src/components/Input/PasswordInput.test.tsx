import React from 'react';
import { render } from '@testing-library/react';

import { PasswordInput, PasswordInputProps } from './PasswordInput';

const renderComponent = (props: PasswordInputProps) => render(<PasswordInput {...props} />);

describe('<PasswordInput />', () => {
  test('should toggle visibility', async () => {
    const { getByDisplayValue, getByRole } = renderComponent({ value: '', onChange: () => null });

    const input = getByDisplayValue('') as HTMLInputElement;
    const button = getByRole('button') as HTMLButtonElement;

    expect(input.type).toBe('password');
    button.click();
    expect(input.type).toBe('text');
    button.click();
    expect(input.type).toBe('password');
  });

  test('should set IconButton `type` to `button`', () => {
    const { getByRole } = renderComponent({ value: '', onChange: () => null });
    const button = getByRole('button') as HTMLButtonElement;
    expect(button.type).toBe('button');
  });
});
