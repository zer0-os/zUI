import React from 'react';
import { render } from '@testing-library/react';

import { Loading, LoadingProps } from '.';
import { LoadingIndicatorProps } from '../../../LoadingIndicator';

const mockMessage = 'Mock loading message';

const DEFAULT_PROPS: LoadingProps = {
  message: mockMessage
};

const mockLoadingIndicator = jest.fn();

jest.mock('.../../../LoadingIndicator', () => ({
  LoadingIndicator: (props: LoadingIndicatorProps) => {
    mockLoadingIndicator(props);
    return <div />;
  }
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Loading', () => {
  describe('class names', () => {
    test('should render LoadingIndicator with class name "zui-wizard-loading" ', () => {
      render(<Loading {...DEFAULT_PROPS} message={mockMessage} />);

      expect(mockLoadingIndicator).toHaveBeenCalledWith(expect.objectContaining({ className: 'zui-wizard-loading' }));
    });
  });

  test('should pass message prop to LoadingIndicator with text', () => {
    render(<Loading {...DEFAULT_PROPS} message={mockMessage} />);

    expect(mockLoadingIndicator).toHaveBeenCalledWith(expect.objectContaining({ text: mockMessage }));
  });
});
