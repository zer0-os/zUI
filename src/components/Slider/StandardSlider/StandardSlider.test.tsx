import React from 'react';
import { StandardSlider, SliderProps } from './StandardSlider';
import { render } from '@testing-library/react';

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
  }
}));

const DEFAULT_PROPS: SliderProps = {
  step: 2,
  min: 0,
  max: 100,
  value: 20,
  isSmall: false
};

afterEach(() => {
  jest.resetAllMocks();
});

test('should pass props to Radix Slider Root', () => {
  render(<StandardSlider {...DEFAULT_PROPS} min={20} step={1} isSmall />);
  expect(mockSliderRoot).toHaveBeenCalledWith(
    expect.objectContaining({ className: 'SliderRoot SmallRoot', min: 20, step: 1 })
  );
});

test('should pass props to Radix Slider Track', () => {
  render(<StandardSlider {...DEFAULT_PROPS} />);
  expect(mockSliderTrack).toHaveBeenCalledWith(expect.objectContaining({ className: 'SliderTrack' }));
});

test('should correctly apply small classes to Radix Slider Range', () => {
  render(<StandardSlider {...DEFAULT_PROPS} isSmall />);
  expect(mockSliderRange).toHaveBeenCalledWith(expect.objectContaining({ className: 'SliderRange SmallRange' }));
});

test('should pass props to Radix Slider Thumb', () => {
  render(<StandardSlider {...DEFAULT_PROPS} />);
  expect(mockSliderThumb).toHaveBeenCalledWith(expect.objectContaining({ className: 'SliderThumb' }));
});
