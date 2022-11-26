import React, { useState } from 'react';

import styles from '../Slider.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

import { 
  Root as SliderRoot, 
  Track as SliderTrack, 
  Range as SliderRange, 
  Thumb as SliderThumb 
} from '@radix-ui/react-slider';

export interface RangeSliderProps {
  step?: number;
  min?: number;
  max?: number;
  value?: number;
  defaultValue?: [number, number]; 
  className?: string;
  isSmall?: boolean; 
  minStep?: number; 
  isLight?: boolean;
}

export const RangeSlider: React.FC<RangeSliderProps> = ({ step, min, max, isSmall, minStep, defaultValue, isLight }) => {
  const [
    currentValue,
    setCurrentValue
  ] = useState(defaultValue ?? [min, max]);

  return (
    <>
      <div className={styles.ValueDisplay}>
        {currentValue[0]} - {currentValue[1]}
      </div>
      <form>
        <SliderRoot
          className={cx(styles.SliderRoot, { SmallRoot: isSmall, LightRoot: isLight })}
          defaultValue={defaultValue}
          min={min}
          max={max}
          step={step}
          aria-label='Range Slider'
          onValueChange={(value) => setCurrentValue(value)}
          minStepsBetweenThumbs={minStep}
        >
          <SliderTrack className={classNames(styles.SliderTrack)}>
            <SliderRange className={cx(styles.SliderRange, { SmallRange: isSmall, LightRange: isLight })} />
          </SliderTrack>
          <SliderThumb className={cx(styles.SliderThumb, { SmallThumb: isSmall, LightThumb: isLight })} />
          <SliderThumb className={cx(styles.SliderThumb, { SmallThumb: isSmall, LightThumb: isLight })} />
        </SliderRoot>
      </form>
    </>
  );
};
