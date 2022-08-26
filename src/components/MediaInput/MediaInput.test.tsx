import React from 'react';
import { render } from '@testing-library/react';

import MediaInput, { MediaInputProps } from './MediaInput';

const renderComponent = (props: MediaInputProps) => render(<MediaInput {...props} />);

const initialProps: MediaInputProps = {
    mediaType: "",
    previewUrl: "",
    hasError: false,
    onChange: jest.fn()
}

test('should render controlled input value', () => {
  const { getByTestId } = renderComponent(initialProps);
  const input = getByTestId('media-input') as HTMLInputElement;
  expect(input.nodeName.toLowerCase()).toBe('input');
});
