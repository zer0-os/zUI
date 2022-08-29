import React from 'react';
import { render, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import MediaInput, { MediaInputProps } from './MediaInput';

const renderComponent = (props: MediaInputProps) => render(<MediaInput {...props} />);

const initialProps: MediaInputProps = {
  mediaType: '',
  previewUrl: '',
  hasError: false,
  onChange: jest.fn()
};

test('should not render input element', () => {
  const { getByText } = renderComponent(initialProps);
  const input = getByText('Choose Media') as HTMLInputElement;
  expect(input).toBeVisible();
});

test('should render choose media text when previewUrl empty', () => {
  const { getByText } = renderComponent(initialProps);
  const input = getByText('Choose Media') as HTMLInputElement;
  expect(input).toBeVisible();
});

test('should render preview image when previewUrl valid and mediaType equals image', () => {
  const { container } = renderComponent({
    ...initialProps,
    mediaType: 'image',
    previewUrl: 'testing.png'
  });

  expect(container.querySelector('img')).toBeVisible();
});

test('should render preview video when previewUrl valid and mediaType equals video', () => {
  const { container } = renderComponent({
    ...initialProps,
    mediaType: 'video',
    previewUrl: 'testing.mp3'
  });

  expect(container.querySelector('video')).toBeVisible();
});

test('should render custom border color on preview when hasError is true', () => {
  const { getByTestId } = renderComponent({
    ...initialProps,
    hasError: true
  });

  const previewElement = getByTestId('preview') as HTMLInputElement;
  expect(previewElement).toHaveClass('has-error');
});

test('should not render custom border color on preview when hasError is false', () => {
  const { getByTestId } = renderComponent(initialProps);
  const previewElement = getByTestId('preview') as HTMLInputElement;
  expect(previewElement).not.toHaveClass('has-error');
});

test('should call onChange on successful file upload', async () => {
  global.URL.createObjectURL = jest.fn();
  const mockOnChange = jest.fn();

  const { getByTestId } = renderComponent({
    ...initialProps,
    onChange: mockOnChange
  });

  const file = new File([new Blob(['test'])], 'test.png', {
    type: 'image/png'
  });

  const input = getByTestId('input');
  user.upload(input, file);

  await waitFor(() => expect(mockOnChange).toHaveBeenCalled());
});
