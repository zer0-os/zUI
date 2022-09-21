import React from 'react';
import { render } from '@testing-library/react';
import { LoadingIndicator, LoadingIndicatorProps } from './LoadingIndicator';

enum MockSpinnerPositionType {
  BOTTOM = 'bottom',
  LEFT = 'left',
  RIGHT = 'right'
}

const MOCK_DEFAULT_PROPS = {
  className: 'mock-class-name',
  text: 'Mock Text',
  spinnerPosition: MockSpinnerPositionType.LEFT
};

const MOCK_SPINNER = 'Mock Spinner';

jest.mock('./Spinner', () => ({
  Spinner: () => <div>{MOCK_SPINNER}</div>
}));

const renderComponent = (props?: LoadingIndicatorProps) =>
  render(
    <LoadingIndicator
      className={MOCK_DEFAULT_PROPS.className}
      text={MOCK_DEFAULT_PROPS.text}
      spinnerPosition={MOCK_DEFAULT_PROPS.spinnerPosition}
      {...props}
    />
  );

describe('LoadingIndicator', () => {
  test('should render loading indicator container', () => {
    const { container } = renderComponent();
    const loadingIndicatorContainer = container.getElementsByClassName('zui-loading-indicator');

    expect(loadingIndicatorContainer.length).toBe(1);
  });

  test('should render loading indicator text container and text value', () => {
    const { container } = renderComponent();
    const textContainer = container.getElementsByClassName('zui-loading-indicator-text');

    expect(textContainer.length).toBe(1);
    expect(textContainer[0].textContent).toBe(MOCK_DEFAULT_PROPS.text);
  });

  test('should render spinner container', () => {
    const { getByText } = renderComponent();

    expect(getByText(MOCK_SPINNER)).toBeTruthy();
  });

  describe('when props are defined', () => {
    test('should apply a custom className to loading indicator container className attribute', () => {
      const { container } = renderComponent();
      const loadingIndicatorContainer = container.getElementsByClassName('zui-loading-indicator');

      expect(loadingIndicatorContainer[0]).toHaveClass(MOCK_DEFAULT_PROPS.className);
    });

    test('should append spinnerPosition type to loading indicator container className attribute', () => {
      const { container } = renderComponent();
      const loadingIndicatorContainer = container.getElementsByClassName('zui-loading-indicator');

      expect(loadingIndicatorContainer[0]).toHaveClass(`zui-loading-indicator-${MOCK_DEFAULT_PROPS.spinnerPosition}`);
    });

    // what should we change name of text too, as Joel suggested?
    test('should append spinnerPosition type to text container className attribute', () => {
      const { container } = renderComponent();
      const textContainer = container.getElementsByClassName('zui-loading-indicator-text');

      expect(textContainer[0]).toHaveClass(`zui-loading-indicator-text-${MOCK_DEFAULT_PROPS.spinnerPosition}`);
    });
  });

  describe('when props are undefined', () => {
    test('should not apply a custom className to loading indicator container', () => {
      const { container } = renderComponent({ className: undefined });
      const loadingIndicatorContainer = container.getElementsByClassName('zui-loading-indicator');

      expect(loadingIndicatorContainer[0]).not.toHaveClass(MOCK_DEFAULT_PROPS.className);
    });

    test('should append default "bottom" spinnerPosition type to loading indicator container className attribute', () => {
      const { container } = renderComponent({ spinnerPosition: undefined });
      const loadingIndicatorContainer = container.getElementsByClassName('zui-loading-indicator');

      expect(loadingIndicatorContainer[0]).toHaveClass(`zui-loading-indicator-${MockSpinnerPositionType.BOTTOM}`);
    });

    test('should not render text container', () => {
      const { container } = renderComponent({ text: undefined });
      const loadingIndicatorContainer = container.getElementsByClassName('zui-loading-indicator');
      const textContainer = container.getElementsByClassName('zui-loading-indicator-text');

      expect(loadingIndicatorContainer).not.toContain(textContainer);
      expect(textContainer.length).toBe(0);
    });
  });

  describe('when text is defined and spinnerPosition is undefined', () => {
    test('should append "bottom" spinnerPosition type to text container className attribute', () => {
      const { container } = renderComponent({ spinnerPosition: undefined });
      const textContainer = container.getElementsByClassName('zui-loading-indicator-text');

      expect(textContainer[0]).toHaveClass(`zui-loading-indicator-text-${MockSpinnerPositionType.BOTTOM}`);
    });
  });
});
