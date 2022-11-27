import React from 'react';
import { RangeSlider, RangeSliderProps } from './RangeSlider';
import { render, screen } from '@testing-library/react';

const mockSliderRoot = jest.fn();
const mockSliderRange = jest.fn();
const mockSliderThumb = jest.fn();
const mockSliderTrack = jest.fn();

jest.mock('@radix-ui/react-slider', () => ({
  Root: (props: any) => {
    mockSliderRoot(props);
    return (
      <div data-testid="root" {...props}>
        {props.children}
      </div>
    );
  },
  Track: (props: any) => {
    mockSliderTrack(props);
    return (
      <div className={props.className} data-testid="track">
        {props.children}
      </div>
    );
  },
  Range: (props: any) => {
    mockSliderRange(props);
    return (
      <div className={props.className} data-testid="range">
        {props.children}
      </div>
    );
  },
  Thumb: (props: any) => {
    mockSliderThumb(props);
    return (
      <div className={props.className} data-testid="thumb">
        {props.children}
      </div>
    );
  },
  Thumb2: (props: any) => {
    mockSliderThumb(props);
    return (
      <div className={props.className} data-testid="thumb">
        {props.children}
      </div>
    );
  }
}));

const DEFAULT_PROPS: RangeSliderProps = {
  step: 2,
  min: 0,
  max: 100,
  minStep: 10,
  isSmall: false
};

afterEach(() => {
  jest.resetAllMocks();
});

test('should pass props to Radix Slider Root', () => {
  render(<RangeSlider {...DEFAULT_PROPS} step={1} isSmall />);
  expect(mockSliderRoot).toHaveBeenCalledWith(expect.objectContaining({ className: 'SliderRoot SmallRoot', step: 1 }));
});

test('should pass props to Radix Slider Track', () => {
  render(<RangeSlider {...DEFAULT_PROPS} />);
  expect(mockSliderTrack).toHaveBeenCalledWith(expect.objectContaining({ className: 'SliderTrack' }));
});

test('should correctly apply small classes to Radix Slider Range', () => {
  render(<RangeSlider {...DEFAULT_PROPS} isSmall />);
  expect(mockSliderRange).toHaveBeenCalledWith(expect.objectContaining({ className: 'SliderRange SmallRange' }));
});

test('should correctly render both thumbs', () => {
  render(<RangeSlider {...DEFAULT_PROPS} />);
  expect(screen.getAllByTestId('thumb').length).toEqual(2);
});
