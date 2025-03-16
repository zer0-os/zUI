import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { NumberInput, NumberInputProps } from './NumberInput';
import { parseEther } from 'ethers/lib/utils';

const mockOnChange = vi.fn();

const renderComponent = (props: NumberInputProps) => render(<NumberInput {...props} />);

test('should only allow number inputs', async () => {
  const { getByDisplayValue } = renderComponent({ value: 'test', onChange: mockOnChange });
  const input = getByDisplayValue('') as HTMLInputElement;
  expect(input.nodeName.toLowerCase()).toBe('input');
  fireEvent.change(input, { target: { value: '20' } });
  expect(input.value).toBe('20');
  fireEvent.change(input, { target: { value: 'nope' } });
  expect(input.value).toBe('20');

  /*
   * Expect two changes
   * 1. 'test' (prop) to ''
   * 2. '' to '20'
   */
  expect(mockOnChange).toBeCalledTimes(2);
});

test('should handle BigNumber', async () => {
  const { getByDisplayValue } = renderComponent({
    value: String(parseEther('20')),
    isBigNumber: true,
    onChange: mockOnChange
  });
  const input = getByDisplayValue('20.0') as HTMLInputElement;
  fireEvent.change(input, { target: { value: '2000' } });
  expect(mockOnChange).toBeCalledWith(parseEther('2000').toString());
});
