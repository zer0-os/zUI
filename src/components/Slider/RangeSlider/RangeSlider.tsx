// - React Imports
import React, { useState } from 'react';

// - Style Imports
import styles from '../Slider.module.scss';

// Slider components Imports
import { Root, Track, Range, Thumb } from '@radix-ui/react-slider';

export interface SliderProps {
  step?: number; // How much each step should increment by
  min?: number; // Minimum value
  max?: number; // Maximum value
  value?: number; // Current value
  defaultValue?: [number, number]; // Default value on initial render
  isSmall?: boolean; // Whether the slider is small or regular size
  minStep?: number; // Minimum step value between two thumbs
}

export const RangeSlider: React.FC<SliderProps> = ({ step, min, max, value, isSmall, minStep, defaultValue }) => {

  const [currentValue, setValue] = useState([value]);

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
          className={isSmall ? styles.SmallSliderRoot : styles.SliderRoot}
          defaultValue={defaultValue}
          min={min}
          max={max}
          step={step}
          aria-label='Value'
          onValueChange={(value) => setValue(value)}
          minStepsBetweenThumbs={minStep}
        >
          <Track className={isSmall ? styles.SmallSliderTrack : styles.SliderTrack}>
            <Range className={isSmall ? styles.SmallSliderRange : styles.SliderRange} />
          </Track>
          <Thumb className={isSmall ? styles.SmallRangeSliderThumb : styles.RangeSliderThumb} />
          <Thumb className={isSmall ? styles.SmallRangeSliderThumb : styles.RangeSliderThumb} />
        </Root>
      </form>
    </>
  );
};
