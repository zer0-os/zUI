import React, { useState } from 'react';

import styles from './Slider.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

import { Root as Root, Track as Track, Range as Range, Thumb as Thumb } from '@radix-ui/react-slider';

export interface SliderProps {
  step?: number;
  min?: number;
  max?: number;
  value?: number;
  className?: string;
  minStep?: number;
  size?: 'default' | 'small';
  isRangeSlider?: boolean;
  label?: string;
  onValueChange?: (value: number[]) => void;
}

export const Slider: React.FC<SliderProps> = ({
  step,
  min,
  max,
  value,
  size,
  isRangeSlider,
  minStep,
  label,
  onValueChange
}) => {
  const thumbStyles = cx(styles.Thumb);
  const [currentValues, setCurrentValues] = useState(!isRangeSlider ? [value] : [min, max]);

  const handleChange = (value: number[]) => {
    onValueChange(value);
    setCurrentValues(value);
  };

  return (
    <div className={cx(styles.Container)}>
      {!isRangeSlider ? currentValues[0] : `${currentValues[0]} - ${currentValues[1]}`}
      <Root
        className={cx(styles.Root)}
        data-size={size}
        value={currentValues}
        min={min}
        max={max}
        step={step}
        minStepsBetweenThumbs={isRangeSlider ? minStep : 1}
        aria-label={label}
        onValueChange={value => handleChange(value)}
      >
        <Track className={styles.Track}>
          <Range className={cx(styles.Range)} data-size={size} />
        </Track>
        <Thumb className={thumbStyles} data-size={size} />
        {isRangeSlider ? <Thumb className={thumbStyles} data-size={size} /> : <></>}
      </Root>
    </div>
  );
};
