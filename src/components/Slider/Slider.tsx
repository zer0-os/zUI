import React, { useState } from 'react';

import styles from './Slider.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

import { Root as Root, Track as Track, Range as Range, Thumb as Thumb } from '@radix-ui/react-slider';

export interface SliderProps {
  step?: number;
  min?: number;
  max?: number;
  value?: number;
  className?: string;
  minStep?: number;
  isLight?: boolean;
  isSmall?: boolean;
  isRangeSlider?: boolean;
}

export const Slider: React.FC<SliderProps> = ({ step, min, max, value, isSmall, isLight, isRangeSlider, minStep }) => {
  const [currentValues, setCurrentValues] = useState(!isRangeSlider ? [value] : [min, max]);
  return (
    <div className={cx(styles.Container, { LightContainer: isLight })}>
      {!isRangeSlider ? currentValues[0] : `${currentValues[0]} - ${currentValues[1]}`}
      <form>
        <Root
          className={cx(styles.Root, { SmallRoot: isSmall, LightRoot: isLight })}
          defaultValue={currentValues}
          min={min}
          max={max}
          step={step}
          minStepsBetweenThumbs={isRangeSlider ? minStep : 1}
          aria-label="Slider"
          onValueChange={value => setCurrentValues(value)}
        >
          <Track className={styles.Track}>
            <Range className={cx(styles.Range, { SmallRange: isSmall, LightRange: isLight })} />
          </Track>
          <Thumb className={cx(styles.Thumb, { SmallThumb: isSmall, LightThumb: isLight })} />
          {isRangeSlider ? <Thumb className={cx(styles.Thumb, { SmallThumb: isSmall, LightThumb: isLight })} /> : <></>}
        </Root>
      </form>
    </div>
  );
};
