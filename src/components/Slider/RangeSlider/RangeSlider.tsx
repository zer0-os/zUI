// - React Imports
import React, { useState } from 'react';

// - Style Imports
import styles from '../Slider.module.scss';
import classNames from 'classnames/bind';

// Slider components Imports
import { Root, Track, Range, Thumb } from '@radix-ui/react-slider';

export interface RangeSliderProps {
  step?: number; // The amount to increment/decrement the value by
  min?: number; // The minimum value of the slider
  max?: number; // The maximum value of the slider
  value?: number; // The current value of the slider
  defaultValue?: [number, number]; // The default value of the slider
  className?: string; // The class name of the slider
  isSmall?: boolean; // The size of the slider
  minStep?: number; // The minimum step of the slider
}

export const RangeSlider: React.FC<RangeSliderProps> = ({ step, min, max, value, isSmall, minStep, defaultValue }) => {
  const [
    currentValue,
    setValue
  ] = useState([value]);

  // export const TEST_ID = {
  //   CONTAINER: 'arrow-link-container',
  //   ARROW: {
  //     CONTAINER: 'arrow-link-arrow-container',
  //     ARROW: 'arrow-link-arrow'
  //   }
  // };

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
        <Root
          className={classNames(styles.SliderRoot, `${isSmall ? styles.SmallRoot : ''}`)}
          defaultValue={defaultValue}
          min={min}
          max={max}
          step={step}
          aria-label='Value'
          onValueChange={(value) => setValue(value)}
          minStepsBetweenThumbs={minStep}
        >
          <Track className={classNames(styles.SliderTrack)}>
            <Range className={classNames(styles.SliderRange, `${isSmall ? styles.SmallSliderRange : ''}`)} />
          </Track>
          <Thumb className={classNames(styles.SliderThumb, `${isSmall ? styles.SmallSliderThumb : ''}`)} />
          <Thumb className={classNames(styles.SliderThumb, `${isSmall ? styles.SmallSliderThumb : ''}`)} />
        </Root>
      </form>
    </>
  );
};
