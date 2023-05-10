import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import { Video, VideoProps } from './';

const DEFAULT_PROPS: VideoProps = {
  src: 'https://test-video.com',
  autoPlay: false,
  loop: false
};

const mockPlay = jest.spyOn(window.HTMLMediaElement.prototype, 'play').mockImplementation(() => Promise.resolve());

beforeEach(() => {
  jest.clearAllMocks();
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
    render(<Video {...DEFAULT_PROPS} />);
    fireEvent.click(screen.getByTestId('play-button'));
    expect(mockPlay).toHaveBeenCalled();
  });

  test('should mute video when mute button is clicked', () => {
    const video = render(<Video {...DEFAULT_PROPS} />).container.querySelector('video');
    fireEvent.click(screen.getByTestId('mute-button'));
    expect(video?.muted).toBe(true);
  });

  test('should unmute video when unmute button is clicked', () => {
    const video = render(<Video {...DEFAULT_PROPS} />).container.querySelector('video');
    fireEvent.click(screen.getByTestId('mute-button'));
    fireEvent.click(screen.getByTestId('mute-button'));
    expect(video?.muted).toBe(false);
  });

  test('should call onError when video encounters an error', () => {
    const onError = jest.fn();
    render(<Video {...DEFAULT_PROPS} onError={onError} />);
    fireEvent.error(screen.getByTestId('video-element'));
    expect(onError).toHaveBeenCalled();
  });
});
