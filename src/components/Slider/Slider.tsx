// - React Imports
import React, { useState } from 'react';

// - Style Imports
import styles from './Slider.module.scss';

// Slider components Imports
import { Root, Track, Range, Thumb } from '@radix-ui/react-slider';

export interface SliderProps {
  step?: number; // How much each step should increment by
  min?: number; // Minimum value
  max?: number; // Maximum value
  value?: number; // Current value/Default value on initial render
  isSmall?: boolean; // Whether the slider is small or regular size
}

export const StandardSlider: React.FC<SliderProps> = ({ step, min, max, value, isSmall }) => {
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

  return (
    <>
      <div className={styles.valueDisplay}>{currentValue}</div>
      <form>
        <Root
          className={isSmall ? styles.SmallSliderRoot : styles.SliderRoot}
          defaultValue={currentValue}
          min={min}
          max={max}
          step={step}
          aria-label='Value'
          onValueChange={(value) => setValue(value)}
        >
          <Track className={isSmall ? styles.SmallSliderTrack : styles.SliderTrack}>
            <Range className={isSmall ? styles.SmallSliderRange : styles.SliderRange} />
          </Track>
          <Thumb className={isSmall ? styles.SmallSliderThumb : styles.SliderThumb} />
        </Root>
      </form>
    </>
  );
};
