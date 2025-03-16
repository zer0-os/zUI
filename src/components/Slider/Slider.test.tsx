import React from 'react';
import { Slider, SliderProps } from './Slider';
import { render, screen } from '@testing-library/react';

const mockSliderRoot = vi.fn();
const mockSliderRange = vi.fn();
const mockSliderThumb = vi.fn();
const mockSliderTrack = vi.fn();

vi.mock('@radix-ui/react-slider', () => ({
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
  isRangeSlider: false
};

afterEach(() => {
  vi.resetAllMocks();
});

test('should pass props to Radix Slider Root', () => {
  render(<Slider {...DEFAULT_PROPS} min={20} step={1} size="small" />);
  expect(mockSliderRoot).toHaveBeenCalledWith(
    expect.objectContaining({ className: 'Root', min: 20, step: 1, 'data-size': 'small' })
  );
});

test('should pass props to Radix Slider Track', () => {
  render(<Slider {...DEFAULT_PROPS} />);
  expect(mockSliderTrack).toHaveBeenCalledWith(expect.objectContaining({ className: 'Track' }));
});

test('should correctly apply small classes to Radix Slider Range', () => {
  render(<Slider {...DEFAULT_PROPS} size="small" />);
  expect(mockSliderRange).toHaveBeenCalledWith(expect.objectContaining({ 'data-size': 'small', className: 'Range' }));
});

test('should pass props to Radix Slider Thumb', () => {
  render(<Slider {...DEFAULT_PROPS} />);
  expect(mockSliderThumb).toHaveBeenCalledWith(expect.objectContaining({ className: 'Thumb' }));
});

test('should correctly render both thumbs when isRangeSlider is true', () => {
  render(<Slider {...DEFAULT_PROPS} isRangeSlider />);
  expect(screen.getAllByTestId('thumb').length).toEqual(2);
});
