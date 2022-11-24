// - React Imports
import React, { useState } from 'react';

// - Style Imports
import styles from './StandardSlider.module.scss';
import classNames from 'classnames/bind';

// Slider components Imports
import { 
  Root as SliderRoot, 
  Track as SliderTrack, 
  Range as SliderRange, 
  Thumb as SliderThumb 
} from '@radix-ui/react-slider';

export interface SliderProps {
  step?: number; // How much each step should increment by
  min?: number; // Minimum value
  max?: number; // Maximum value
  value?: number; // Current value/Default value on initial render
  isSmall?: boolean; // Whether the slider is small or regular size
  className?: string; // Additional class name
  onValueChange?: (value: number) => void; // Callback function when value changes
  isLight?: boolean; // Whether the slider is light or dark
}

export const StandardSlider: React.FC<SliderProps> = ({ step, min, max, value, isSmall, isLight }) => {
  const [
    currentValue,
    setValue
  ] = useState([value]);

  return (
    <>
      <div className={styles.valueDisplay}>{currentValue}</div>
      <form>
        <SliderRoot
          className={classNames(styles.SliderRoot, `${isSmall ? styles.SmallRoot : ''}`, `${isLight ? styles.LightRoot : ''}`)}
          defaultValue={currentValue}
          min={min}
          max={max}
          step={step}
          aria-label='Value'
          onValueChange={(value) => setValue(value)}
        >
          <SliderTrack className={classNames(styles.SliderTrack)}>
            <SliderRange className={classNames(styles.SliderRange, `${isSmall ? styles.SmallSliderRange : ''}`, `${isLight ? styles.LightRange : ''}`)} />
          </SliderTrack>
          <SliderThumb className={classNames(styles.SliderThumb, `${isSmall ? styles.SmallSliderThumb : ''}`, `${isLight ? styles.LightThumb : ''}`)} />
        </SliderRoot>
      </form>
    </>
  );
};
