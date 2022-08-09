import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ZUIProvider from '../../ZUIProvider';
import { Tooltip } from './Tooltip';

const TOOLTIP_INNER_DIV_ID = 'tooltip-inner';
const TOOLTIP_CONTENT = 'tooltip-content';

const renderComponent = (isOepn = false) => {
  return render(
    <ZUIProvider>
      <Tooltip content={TOOLTIP_CONTENT} open={isOepn}>
        <div data-testid={TOOLTIP_INNER_DIV_ID}>Test</div>
      </Tooltip>
    </ZUIProvider>
  );
};

describe('Tooltip', () => {
  beforeAll(() => {
    window.ResizeObserver =
      window.ResizeObserver ||
      jest.fn().mockImplementation(() => ({
        disconnect: jest.fn(),
        observe: jest.fn(),
        unobserve: jest.fn()
      }));
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('Should correctly render the trigger attribute of the Tooltip component', () => {
    const { getByTestId } = renderComponent();

    expect(getByTestId(TOOLTIP_INNER_DIV_ID)).toBeTruthy();
  });

  it('Should correctly sets the content attribute of the Tooltip component', () => {
    const { queryAllByText } = renderComponent(true);

    expect(queryAllByText(TOOLTIP_CONTENT)).toBeTruthy();
  });
});
