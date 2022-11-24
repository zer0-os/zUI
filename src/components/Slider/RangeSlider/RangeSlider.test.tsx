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
    return <div data-testid="root" {...props} >{props.children}</div>;
  },
  Track: (props: any) => {
    mockSliderTrack(props);
    return (
      <div className={props.className} data-testid="track">{props.children}</div>
    );
  },
  Range: (props: any) => {
    mockSliderRange(props);
    return (
      <div className={props.className} data-testid="range" >{props.children}</div>
    );
  },
  Thumb: (props: any) => {
    mockSliderThumb(props);
    return <div className={props.className} data-testid="thumb">{props.children}</div>;
  },
  Thumb2: (props: any) => {
    mockSliderThumb(props);
    return <div className={props.className} data-testid="thumb">{props.children}</div>;
  }
}));

const DEFAULT_PROPS: RangeSliderProps = {
  step: 2,
  min: 0,
  max: 100,
  defaultValue: [20, 90],
  minStep: 10,
  isSmall: false
};

const renderComponent = (customProps: Partial<RangeSliderProps> = {}) => {
  return render(
    <RangeSlider {...DEFAULT_PROPS} {...customProps} />
  );
};

afterEach(() => {
  jest.resetAllMocks();
});

test('should pass props to Radix Slider Root', () => {
  renderComponent({ isSmall: true, step: 1 });
  expect(mockSliderRoot).toHaveBeenCalledWith(expect.objectContaining({ className: "SliderRoot SmallRoot", step: 1 }));
});

test('should pass props to Radix Slider Track', () => {
  renderComponent();
  expect(mockSliderTrack).toHaveBeenCalledWith(expect.objectContaining({ className: "SliderTrack" }));
});

test('Radix Slider Range should have small classes', () => {
  renderComponent({ isSmall: true });
  expect(mockSliderRange).toHaveBeenCalledWith(expect.objectContaining({ className: "SliderRange SmallSliderRange" }));
});

test('if 2 thumbs are rendered', () => {
  renderComponent();
  const thumbs = screen.getAllByTestId('thumb').length;
  expect(thumbs).toBe(2);
});