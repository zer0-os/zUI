/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen } from '@testing-library/react';
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
  test('should render loading indicator container', () => {
    const { container } = render(<LoadingIndicator {...MOCK_DEFAULT_PROPS} />);
    expect(container.firstChild).toHaveClass('zui-loading-indicator');

    const loadingIndicatorContainer = container.getElementsByClassName('zui-loading-indicator');
    expect(loadingIndicatorContainer.length).toBe(1);
  });

  test('should render spinner component', () => {
    render(<LoadingIndicator {...MOCK_DEFAULT_PROPS} />);

    expect(screen.getByText(MOCK_SPINNER)).toBeInTheDocument();
  });

  test('should render message container and message value', () => {
    const { container } = render(<LoadingIndicator {...MOCK_DEFAULT_PROPS} message={'mock-message'} />);
    const textContainer = container.getElementsByClassName('zui-loading-indicator-message');

    expect(textContainer.length).toBe(1);
    expect(textContainer[0].textContent).toEqual('mock-message');
  });

  test('should not render message container if message is undefined', () => {
    const { container } = render(<LoadingIndicator {...MOCK_DEFAULT_PROPS} message={undefined} />);
    const loadingIndicatorContainer = container.getElementsByClassName('zui-loading-indicator');
    const messageContainer = container.getElementsByClassName('zui-loading-indicator-message');

    expect(loadingIndicatorContainer).not.toContain(messageContainer);
    expect(messageContainer.length).toBe(0);
  });
});

describe('class names', () => {
  test('should apply className prop to container class', () => {
    const { container } = render(<LoadingIndicator {...MOCK_DEFAULT_PROPS} className={'mock-class-name'} />);

    expect(container.firstElementChild).toHaveClass('mock-class-name');
  });

  test('should apply spinnerPosition prop to container class', () => {
    const { container } = render(
      <LoadingIndicator {...MOCK_DEFAULT_PROPS} spinnerPosition={MockSpinnerPositionType.RIGHT} />
    );

    expect(container.firstElementChild).toHaveClass(`zui-loading-indicator-${MockSpinnerPositionType.RIGHT}`);
  });

  test('should apply default spinnerPosition to container class if prop is undefined', () => {
    const { container } = render(<LoadingIndicator {...MOCK_DEFAULT_PROPS} spinnerPosition={undefined} />);

    expect(container.firstElementChild).toHaveClass(`zui-loading-indicator-${MockSpinnerPositionType.BOTTOM}`);
  });
});
