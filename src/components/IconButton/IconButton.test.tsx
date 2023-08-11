import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { IconButton, IconButtonProperties } from '.';
import { IconXClose } from '../Icons';

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
  const renderComponent = (props: Partial<IconButtonProperties> = {}) => {
    const allProps: IconButtonProperties = {
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

  it('passes `type` to button', () => {
    const { getByRole } = renderComponent({ type: 'submit' });

    expect(getByRole('button')).toHaveAttribute('type', 'submit');
  });

  it('should default to `button` type', () => {
    const { getByRole } = renderComponent();

    expect(getByRole('button')).toHaveAttribute('type', 'button');
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

  it('render color and variant className', () => {
    const { getByRole } = renderComponent({ className: 'tacos', variant: 'primary', color: 'red' });

    expect(getByRole('button')).toHaveClass('zui-iconButton-color-red');
    expect(getByRole('button')).toHaveClass('zui-iconButton-variant-primary');
  });

  it('renders large size when "large" is passed in', () => {
    renderComponent({
      Icon: IconXClose,
      label: 'the-label',
      size: 'large',
      isFilled: false
    });

    expect(iconRender).toHaveBeenLastCalledWith({
      label: 'the-label',
      size: 40,
      isFilled: false
    });
  });

  it('renders small size when "small" is passed in', () => {
    renderComponent({
      Icon: IconXClose,
      label: 'the-label',
      size: 'small',
      isFilled: false
    });

    expect(iconRender).toHaveBeenLastCalledWith({
      label: 'the-label',
      size: 32,
      isFilled: false
    });
  });

  it('renders x small size when "x-small" is passed in', () => {
    renderComponent({
      Icon: IconXClose,
      label: 'the-label',
      size: 'x-small',
      isFilled: false
    });

    expect(iconRender).toHaveBeenLastCalledWith({
      label: 'the-label',
      size: 24,
      isFilled: false
    });
  });

  it('renders custom size when a number is passed in (custom smaller)', () => {
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

  it('renders custom size when a number is passed in (custom larger) ', () => {
    renderComponent({
      Icon: IconXClose,
      label: 'the-label',
      size: 48,
      isFilled: false
    });

    expect(iconRender).toHaveBeenLastCalledWith({
      label: 'the-label',
      size: 48,
      isFilled: false
    });
  });
});
