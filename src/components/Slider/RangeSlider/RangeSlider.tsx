// - React Imports
import React, { useState } from 'react';

// - Style Imports
import styles from '../StandardSlider/StandardSlider.module.scss';
import classNames from 'classnames/bind';

// Slider components Imports
import { 
  Root as SliderRoot, 
  Track as SliderTrack, 
  Range as SliderRange, 
  Thumb as SliderThumb 
} from '@radix-ui/react-slider';

export interface RangeSliderProps {
  step?: number; // The amount to increment/decrement the value by
  min?: number; // The minimum value of the slider
  max?: number; // The maximum value of the slider
  value?: number; // The current value of the slider
  defaultValue?: [number, number]; // The default value of the slider
  className?: string; // The class name of the slider
  isSmall?: boolean; // The size of the slider
  minStep?: number; // The minimum step of the slider
  isLight?: boolean; // The color of the slider
}

export const RangeSlider: React.FC<RangeSliderProps> = ({ step, min, max, value, isSmall, minStep, defaultValue, isLight }) => {
  const [
    currentValue,
    setValue
  ] = useState([value]);

  const defaultValues = [
    defaultValue[0],
    defaultValue[1]
  ];
  const currentValues = [
    currentValue[0],
    currentValue[1]
  ];

  function initialiseDefaultValues() {
    if (currentValue.length === 1) {
      const valuesOnDisplay = defaultValues;
      return valuesOnDisplay;
    } else {
      return currentValues;
    }
  }

  return (
    <>
      <div className={styles.valueDisplay}>
        {initialiseDefaultValues()[0]} - {initialiseDefaultValues()[1]}
      </div>
      <form>
        <SliderRoot
          className={classNames(styles.SliderRoot, `${isSmall ? styles.SmallRoot : ''}`, `${isLight ? styles.LightRoot : ''}`)}
          defaultValue={defaultValue}
          min={min}
          max={max}
          step={step}
          aria-label='Value'
          onValueChange={(value) => setValue(value)}
          minStepsBetweenThumbs={minStep}
        >
          <SliderTrack className={classNames(styles.SliderTrack)}>
            <SliderRange className={classNames(styles.SliderRange, `${isSmall ? styles.SmallSliderRange : ''}`, `${isLight ? styles.LightRange : ''}`)} />
          </SliderTrack>
          <SliderThumb className={classNames(styles.SliderThumb, `${isSmall ? styles.SmallSliderThumb : ''}`, `${isLight ? styles.LightThumb : ''}`)} />
          <SliderThumb className={classNames(styles.SliderThumb, `${isSmall ? styles.SmallSliderThumb : ''}`, `${isLight ? styles.LightThumb : ''}`)} />
        </SliderRoot>
      </form>
    </>
  );
};
