import React, { FC, useRef, useState } from 'react';

import { IconGrid, IconPlay, IconVolumeMax, IconVolumeX } from '../Icons';

import classNames from 'classnames';
import styles from './Video.module.scss';

export interface VideoProps {
  className?: string;
  src: string;
  poster?: string;
  autoPlay?: boolean;
  loop?: boolean;
  onError?: () => void;
}

export const Video = ({ className, src, poster, autoPlay, loop, onError }: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  return (
    <div className={classNames(styles.VideoContainer, className)}>
      <video
        data-testid="video-element"
        ref={videoRef}
        src={src}
        poster={poster}
        onError={onError}
        autoPlay={autoPlay}
        loop={loop}
      />

      <div className={styles.Controls}>
        <button data-testid="play-button" className={styles.Control} onClick={togglePlayPause}>
          {isPlaying ? (
            <IconGrid isFilled color="#ffffff" size={16} />
          ) : (
            <IconPlay isFilled color="#ffffff" size={16} />
          )}
        </button>

        <button data-testid="mute-button" className={styles.Control} onClick={toggleMute}>
          {isMuted ? (
            <IconVolumeX isFilled color="#ffffff" size={16} />
          ) : (
            <IconVolumeMax isFilled color="#ffffff" size={16} />
          )}
        </button>
      </div>
    </div>
  );
};
