import React from 'react';
import { render, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import { MediaInput, MediaInputProps } from './MediaInput';

const renderComponent = (props: MediaInputProps) => render(<MediaInput {...props} />);

const initialProps: MediaInputProps = {
  mediaType: undefined,
  previewUrl: '',
  hasError: false,
  onChange: vi.fn()
};

test('should render choose media text and not render preview component when previewUrl empty', () => {
  const { container, getByText } = renderComponent(initialProps);
  const input = getByText('Choose Media') as HTMLInputElement;
  expect(input).toBeVisible();
  expect(container.querySelector(`[data-testid="preview"]`)).toBeNull();
});

test('should render preview image when previewUrl valid and mediaType equals image', () => {
  const previewUrl = 'http://localhost/testing.png';
  const { container } = renderComponent({
    ...initialProps,
    mediaType: 'image',
    previewUrl: previewUrl
  });

  const imageElement = container.querySelector('img');
  expect(imageElement).toBeVisible();
  expect(imageElement?.src).toEqual(previewUrl);
});

test('should render preview video when previewUrl valid and mediaType equals video', () => {
  const previewUrl = 'http://localhost/testing.mp3';
  const { container } = renderComponent({
    ...initialProps,
    mediaType: 'video',
    previewUrl: previewUrl
  });

  const videoElement = container.querySelector('video');
  expect(videoElement).toBeVisible();
  expect(videoElement?.src).toEqual(previewUrl);
});

test('should apply className to preview container', () => {
  const className = 'testing';
  const { getByTestId } = renderComponent({
    ...initialProps,
    className: className
  });

  const element = getByTestId('preview-container') as HTMLInputElement;
  expect(element).toHaveClass(className);
});

test('should apply error className on error', () => {
  const { getByTestId } = renderComponent({
    ...initialProps,
    hasError: true
  });

  const previewElement = getByTestId('preview-container') as HTMLInputElement;
  expect(previewElement).toHaveClass('zui-media-input-error');
});

test('should not apply error className when no error', () => {
  const { getByTestId } = renderComponent({
    ...initialProps,
    hasError: false
  });

  const previewElement = getByTestId('preview-container') as HTMLInputElement;
  expect(previewElement).not.toHaveClass('zui-media-input-error');
});

test('should apply uploaded className when previewUrl valid', () => {
  const { getByTestId } = renderComponent({
    ...initialProps,
    previewUrl: 'http://localhost/testing.png'
  });

  const previewElement = getByTestId('preview-container') as HTMLInputElement;
  expect(previewElement).toHaveClass('zui-media-input-uploaded');
});

test('should not apply uploaded className when empty previewUrl', () => {
  const { getByTestId } = renderComponent({
    ...initialProps,
    previewUrl: ''
  });

  const previewElement = getByTestId('preview-container') as HTMLInputElement;
  expect(previewElement).not.toHaveClass('zui-media-input-uploaded');
});

test('should call onChange on successful file upload', async () => {
  global.URL.createObjectURL = vi.fn();
  const mockOnChange = vi.fn();

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
