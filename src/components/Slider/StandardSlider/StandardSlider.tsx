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

export interface SliderProps {
  step?: number;
  min?: number; 
  max?: number; 
  value?: number;
  isSmall?: boolean;
  className?: string;
  onValueChange?: (value: number) => void;
  isLight?: boolean;
}

export const StandardSlider: React.FC<SliderProps> = ({ step, min, max, value, isSmall, isLight }) => {
  const [
    currentValue,
    setValue
  ] = useState([value]);

  return (
    <>
      <div className={styles.ValueDisplay}>{currentValue}</div>
      <form>
        <SliderRoot
          className={cx(styles.SliderRoot, { SmallRoot: isSmall, LightRoot: isLight })}
          defaultValue={currentValue}
          min={min}
          max={max}
          step={step}
          aria-label='Standard Slider'
          onValueChange={(value) => setValue(value)}
        >
          <SliderTrack className={classNames(styles.SliderTrack)}>
            <SliderRange className={cx(styles.SliderRange, { SmallRange: isSmall, LightRange: isLight })} />
          </SliderTrack>
          <SliderThumb className={cx(styles.SliderThumb, { SmallThumb: isSmall, Light: isLight })} />
        </SliderRoot>
      </form>
    </>
  );
};
