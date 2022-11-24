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
}

export const StandardSlider: React.FC<SliderProps> = ({ step, min, max, value, isSmall }) => {
  const [
    currentValue,
    setValue
  ] = useState([value]);

  return (
    <>
      <div className={styles.valueDisplay}>{currentValue}</div>
      <form>
        <SliderRoot
          className={classNames(styles.SliderRoot, `${isSmall ? styles.SmallRoot : ''}`)}
          defaultValue={currentValue}
          min={min}
          max={max}
          step={step}
          aria-label='Value'
          onValueChange={(value) => setValue(value)}
        >
          <SliderTrack className={classNames(styles.SliderTrack)}>
            <SliderRange className={classNames(styles.SliderRange, `${isSmall ? styles.SmallSliderRange : ''}`)} />
          </SliderTrack>
          <SliderThumb className={classNames(styles.SliderThumb, `${isSmall ? styles.SmallSliderThumb : ''}`)} />
        </SliderRoot>
      </form>
    </>
  );
};
