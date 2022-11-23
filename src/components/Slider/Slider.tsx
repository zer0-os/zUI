// - React Imports
import React, { useState } from 'react';

// - Style Imports
import styles from './Slider.module.scss';
import classNames from 'classnames/bind';

// Slider components Imports
import { Root, Track, Range, Thumb } from '@radix-ui/react-slider';

export interface SliderProps {
  step?: number; // How much each step should increment by
  min?: number; // Minimum value
  max?: number; // Maximum value
  value?: number; // Current value/Default value on initial render
  isSmall?: boolean; // Whether the slider is small or regular size
  className?: string; // Additional class name
}

export const StandardSlider: React.FC<SliderProps> = ({ step, min, max, value, isSmall, className }) => {
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
          className={classNames(styles.SliderRoot, `${isSmall ? styles.SmallRoot : ''}`)}
          defaultValue={currentValue}
          min={min}
          max={max}
          step={step}
          aria-label='Value'
          onValueChange={(value) => setValue(value)}
        >
          <Track className={classNames(styles.SliderTrack)}>
            <Range className={classNames(styles.SliderRange, `${isSmall ? styles.SmallSliderRange : ''}`)} />
          </Track>
          <Thumb className={classNames(styles.SliderThumb, `${isSmall ? styles.SmallSliderThumb : ''}`)} />
        </Root>
      </form>
    </>
  );
};
