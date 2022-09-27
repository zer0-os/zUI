/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { LoadingIndicator } from './LoadingIndicator';

enum MockSpinnerPositionType {
  BOTTOM = 'bottom',
  LEFT = 'left',
  RIGHT = 'right',
  TOP = 'top'
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
});

describe('spinner', () => {
  test('should render spinner component', () => {
    render(<LoadingIndicator {...MOCK_DEFAULT_PROPS} />);

    expect(screen.getByText(MOCK_SPINNER)).toBeInTheDocument();
  });

  test('should be the first element in the container - spinner, message', () => {
    const { container } = render(<LoadingIndicator {...MOCK_DEFAULT_PROPS} message=", mock-message" />);

    expect(container.textContent).toBe('Mock Spinner, mock-message');
  });
});

describe('spinner position', () => {
  test('should apply bottom spinnerPosition if prop is undefined', () => {
    const { container } = render(<LoadingIndicator {...MOCK_DEFAULT_PROPS} spinnerPosition={undefined} />);

    expect(container.firstElementChild).toHaveClass(`zui-loading-indicator-${MockSpinnerPositionType.BOTTOM}`);
  });

  test('should apply value of spinnerPosition prop to container class', () => {
    const { container } = render(<LoadingIndicator {...MOCK_DEFAULT_PROPS} spinnerPosition="top" />);

    expect(container.firstElementChild).toHaveClass(`zui-loading-indicator-${MockSpinnerPositionType.TOP}`);
  });
});

describe('message', () => {
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
