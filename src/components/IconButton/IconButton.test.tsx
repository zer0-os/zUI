import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { IconButton, Properties } from '.';
import { IconXClose } from '../Icons/icons/IconXClose';

let iconRender = jest.fn();
jest.mock('../Icons/icons/IconXClose', () => {
  return {
    IconXClose: (props: any) => {
      iconRender(props);
      return <div />;
    }
  };
});

describe('IconButton', () => {
  const renderComponent = (props: Partial<Properties> = {}) => {
    const allProps: Properties = {
      onClick: (): void => null,
      Icon: () => <></>,
      ...props
    };

    return render(<IconButton {...allProps}></IconButton>);
  };

  it('adds className to main element', () => {
    const { getByRole } = renderComponent({ className: 'tacos' });

    expect(getByRole('button')).toHaveClass('tacos');
  });

  it('renders the chosen icon', () => {
    renderComponent({
      Icon: IconXClose,
      label: 'the-label',
      size: 12,
      isFilled: false
    });

    expect(iconRender).toHaveBeenLastCalledWith({
      label: 'the-label',
      size: 12,
      isFilled: false
    });
  });

  it('fires onClick', () => {
    const onClick = jest.fn();
    const { getByRole } = renderComponent({ onClick });

    fireEvent.click(getByRole('button'));

    expect(onClick).toHaveBeenCalledOnce();
  });

  it('prevents propagation of click event', () => {
    const onClick = jest.fn();
    const onOuterClick = jest.fn();

    const { getByRole } = render(
      <div onClick={onOuterClick}>
        <IconButton onClick={onClick} Icon={() => <></>}></IconButton>
      </div>
    );

    fireEvent.click(getByRole('button'));

    expect(onOuterClick).toHaveBeenCalledTimes(0);
  });
});
