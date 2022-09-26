/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from '@testing-library/react';
import { LoadingIndicator } from './LoadingIndicator';

enum MockSpinnerPositionType {
  BOTTOM = 'bottom',
  LEFT = 'left',
  RIGHT = 'right'
}

const MOCK_DEFAULT_PROPS = {
  className: 'mock-class-name',
  message: 'mock message',
  spinnerPosition: MockSpinnerPositionType.LEFT
};

const MOCK_SPINNER = 'Mock Spinner';

jest.mock('./Spinner', () => ({
  Spinner: () => <div>{MOCK_SPINNER}</div>
}));

describe('<LoadingIndicator />', () => {
  // defined
  test('should render loading indicator container', () => {
    const { container } = render(<LoadingIndicator {...MOCK_DEFAULT_PROPS} />);
    expect(container.firstChild).toHaveClass('zui-loading-indicator');

    const loadingIndicatorContainer = container.getElementsByClassName('zui-loading-indicator');
    expect(loadingIndicatorContainer.length).toBe(1);
  });

  test('should render spinner component', () => {
    const { getByText } = render(<LoadingIndicator {...MOCK_DEFAULT_PROPS} />);

    expect(getByText(MOCK_SPINNER)).toBeTruthy();
  });

  test('should render message container and message value', () => {
    const { container } = render(<LoadingIndicator {...MOCK_DEFAULT_PROPS} />);
    const textContainer = container.getElementsByClassName('zui-loading-indicator-message');

    expect(textContainer.length).toBe(1);
    expect(textContainer[0].textContent).toEqual(MOCK_DEFAULT_PROPS.message);
  });

  // undefined
  test('should not render message container', () => {
    const { container } = render(<LoadingIndicator {...MOCK_DEFAULT_PROPS} message={undefined} />);
    const loadingIndicatorContainer = container.getElementsByClassName('zui-loading-indicator');
    const messageContainer = container.getElementsByClassName('zui-loading-indicator-message');

    expect(loadingIndicatorContainer).not.toContain(messageContainer);
    expect(messageContainer.length).toBe(0);
  });
});

describe('class names', () => {
  // defined
  test('should apply className prop to container class', () => {
    const { container } = render(<LoadingIndicator {...MOCK_DEFAULT_PROPS} />);
    const loadingIndicatorContainer = container.getElementsByClassName('zui-loading-indicator');

    expect(loadingIndicatorContainer[0]).toHaveClass(MOCK_DEFAULT_PROPS.className);
  });

  test('should apply spinnerPosition prop to container class', () => {
    const { container } = render(<LoadingIndicator {...MOCK_DEFAULT_PROPS} />);
    const loadingIndicatorContainer = container.getElementsByClassName('zui-loading-indicator');

    expect(loadingIndicatorContainer[0]).toHaveClass(`zui-loading-indicator-${MOCK_DEFAULT_PROPS.spinnerPosition}`);
  });

  test('should apply spinnerPosition prop to message container class', () => {
    const { container } = render(<LoadingIndicator {...MOCK_DEFAULT_PROPS} />);
    const messageContainer = container.getElementsByClassName('zui-loading-indicator-message');

    expect(messageContainer[0]).toHaveClass(`zui-loading-indicator-message-${MOCK_DEFAULT_PROPS.spinnerPosition}`);
  });

  // undefined
  test('should not apply className prop to container class', () => {
    const { container } = render(<LoadingIndicator {...MOCK_DEFAULT_PROPS} className={undefined} />);
    const loadingIndicatorContainer = container.getElementsByClassName('zui-loading-indicator');

    expect(loadingIndicatorContainer[0]).not.toHaveClass(MOCK_DEFAULT_PROPS.className);
  });

  test('should apply default "bottom" spinnerPosition to container class', () => {
    const { container } = render(<LoadingIndicator {...MOCK_DEFAULT_PROPS} spinnerPosition={undefined} />);
    const loadingIndicatorContainer = container.getElementsByClassName('zui-loading-indicator');

    expect(loadingIndicatorContainer[0]).toHaveClass(`zui-loading-indicator-${MockSpinnerPositionType.BOTTOM}`);
  });

  test('should apply default "bottom" spinnerPosition to message container class', () => {
    const { container } = render(<LoadingIndicator {...MOCK_DEFAULT_PROPS} spinnerPosition={undefined} />);
    const messageContainer = container.getElementsByClassName('zui-loading-indicator-message');

    expect(messageContainer[0]).toHaveClass(`zui-loading-indicator-message-${MockSpinnerPositionType.BOTTOM}`);
  });
});
