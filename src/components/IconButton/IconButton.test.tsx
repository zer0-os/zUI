import React from 'react';
import { shallow } from 'enzyme';

import { IconButton, Properties } from '.';
import { IconXClose } from '../Icons/icons/IconXClose';

describe('IconButton', () => {
  const subject = (props: Partial<Properties> = {}, children = <></>) => {
    const allProps = {
      getIcon: () => <path />,
      onClick: (): void => null,
      Icon: () => <></>,
      ...props
    };

    return shallow(<IconButton {...allProps}>{children}</IconButton>);
  };

  it('adds className to main element', () => {
    const wrapper = subject({ className: 'tacos' });

    expect(wrapper.is('.tacos')).toBe(true);
  });

  it('renders the chosen icon', () => {
    const wrapper = subject({
      Icon: IconXClose,
      label: 'the-label',
      size: 12,
      isFilled: false
    });

    expect(wrapper.find('IconXClose').props()).toEqual({
      label: 'the-label',
      size: 12,
      isFilled: false
    });
  });

  it('fires onClick', () => {
    const onClick = jest.fn();
    const wrapper = subject({ onClick });

    click(wrapper.find('button'));

    expect(onClick).toHaveBeenCalledOnce();
  });

  it('prevents propagation of click event', () => {
    const stopPropagation = jest.fn();
    const wrapper = subject({});

    click(wrapper.find('button'), { stopPropagation });

    expect(stopPropagation).toHaveBeenCalledOnce();
  });
});

function click(node: any, eventAttrs: any = {}) {
  node.simulate('click', {
    preventDefault: (): void => null,
    stopPropagation: (): void => null,
    ...eventAttrs
  });
}
