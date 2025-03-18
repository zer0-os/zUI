import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import { Video, VideoProps } from './';

const DEFAULT_PROPS: VideoProps = {
  src: 'https://test-video.com',
  autoPlay: false,
  loop: false
};

const mockPlay = vi.fn().mockImplementation(() => Promise.resolve());

beforeEach(() => {
  vi.clearAllMocks();
  // Reset the mock implementation for each test
  Object.defineProperty(HTMLMediaElement.prototype, 'play', {
    writable: true,
    value: mockPlay
  });
  Object.defineProperty(HTMLMediaElement.prototype, 'paused', {
    writable: true,
    value: true
  });
});

describe('<Video />', () => {
  test('should render video with provided source', () => {
    render(<Video {...DEFAULT_PROPS} />);
    expect(screen.getByTestId('video-element')).toHaveAttribute('src', DEFAULT_PROPS.src);
  });

  test('should render video with provided poster', () => {
    const poster = 'https://test-poster.com';
    render(<Video {...DEFAULT_PROPS} poster={poster} />);
    expect(screen.getByTestId('video-element')).toHaveAttribute('poster', poster);
  });

  test('should start playing video when play button is clicked', () => {
    const { container } = render(<Video {...DEFAULT_PROPS} />);
    const video = container.querySelector('video');

    expect(video?.paused).toBe(true);
    const playButton = screen.getByTestId('play-button');
    expect(playButton.querySelector('svg')).toBeInTheDocument();

    fireEvent.click(playButton);

    expect(mockPlay).toHaveBeenCalled();
    expect(playButton.querySelector('svg')).toBeInTheDocument();
    expect(playButton).toHaveAttribute('aria-label', 'Pause video');
  });

  test('should be muted by default and unmute when clicked', () => {
    const video = render(<Video {...DEFAULT_PROPS} />).container.querySelector('video');
    expect(video?.muted).toBe(true);
    fireEvent.click(screen.getByTestId('mute-button'));
    expect(video?.muted).toBe(false);
  });

  test('should mute video when mute button is clicked', () => {
    const video = render(<Video {...DEFAULT_PROPS} />).container.querySelector('video');
    fireEvent.click(screen.getByTestId('mute-button'));
    fireEvent.click(screen.getByTestId('mute-button'));
    expect(video?.muted).toBe(true);
  });

  test('should call onError when video encounters an error', () => {
    const onError = vi.fn();
    render(<Video {...DEFAULT_PROPS} onError={onError} />);
    fireEvent.error(screen.getByTestId('video-element'));
    expect(onError).toHaveBeenCalled();
  });
});
