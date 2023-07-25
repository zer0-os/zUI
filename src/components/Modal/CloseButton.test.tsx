import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { CloseButton, CloseButtonProps } from './CloseButton';

const DEFAULT_PROPS: CloseButtonProps = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: () => {},
  className: ''
};

const renderComponent = (props?: Partial<CloseButtonProps>) => render(<CloseButton {...DEFAULT_PROPS} {...props} />);

describe('<CloseButton />', () => {
  it('should be a button', () => {
    const { container } = renderComponent();
    expect(container.querySelector('button')).toBeInTheDocument();
  });

  it('should pass onClick to button', () => {
    const onClick = jest.fn();
    const { container } = renderComponent({ onClick });
    fireEvent.click(container.querySelector('button'));
    expect(onClick).toHaveBeenCalled();
  });

  it('should pass className to button', () => {
    const { container } = renderComponent({ className: 'test' });
    expect(container.firstChild).toHaveClass('test');
  });
});
