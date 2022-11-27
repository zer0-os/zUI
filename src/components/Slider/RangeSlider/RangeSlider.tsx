import React, { useState } from 'react';

import {
  Root as SliderRoot,
  Track as SliderTrack,
  Range as SliderRange,
  Thumb as SliderThumb
} from '@radix-ui/react-slider';

import styles from '../Slider.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export interface RangeSliderProps {
  values?: number[];
  min: number;
  max: number;
  step: number;
  minStep?: number;
  isSmall?: boolean;
  isLight?: boolean;
}

export const RangeSlider: React.FC<RangeSliderProps> = ({ step, min, max, values, isSmall, minStep, isLight }) => {
  const [currentValues, setCurrentValues] = useState(values ?? [min, max]);
  return (
    <>
      <div className={styles.ValueDisplay}>
        {currentValues[0]} - {currentValues[1]}
      </div>
      <form>
        <SliderRoot
          className={cx(styles.SliderRoot, { SmallRoot: isSmall, LightRoot: isLight })}
          defaultValue={[min, max]}
          min={min}
          max={max}
          step={step}
          minStepsBetweenThumbs={minStep}
          aria-label="Range slider"
          onValueChange={value => setCurrentValues(value)}
        >
          <SliderTrack className={styles.SliderTrack}>
            <SliderRange className={cx(styles.SliderRange, { SmallRange: isSmall, LightRange: isLight })} />
          </SliderTrack>
          <SliderThumb className={cx(styles.SliderThumb, { SmallThumb: isSmall, LightThumb: isLight })} />
          <SliderThumb className={cx(styles.SliderThumb, { SmallThumb: isSmall, LightThumb: isLight })} />
        </SliderRoot>
      </form>
    </>
  );
};
