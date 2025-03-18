import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { IconButton, IconButtonProperties } from '.';
import { IconXClose } from '../Icons';

let iconRender = vi.fn();

vi.mock('../Icons/icons/IconXClose', () => {
  return {
    IconXClose: (props: any) => {
      iconRender(props);
      return <div />;
    }
  };
});

describe('IconButton', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  const renderComponent = (props: Partial<IconButtonProperties> = {}) => {
    const defaultProps: IconButtonProperties = {
      onClick: (): void => null,
      Icon: () => <></>,
      ...props
    };

    return render(<IconButton {...defaultProps}></IconButton>);
  };

  describe('Base functionality', () => {
    it('adds className to main element', () => {
      const { getByRole } = renderComponent({ className: 'tacos' });
      expect(getByRole('button')).toHaveClass('tacos');
    });

    it('renders the chosen icon', () => {
      renderComponent({ Icon: IconXClose, label: 'the-label', isFilled: false });
      expect(iconRender).toHaveBeenLastCalledWith({ label: 'the-label', isFilled: false });
    });

    it('fires onClick when the button is clicked', () => {
      const onClick = vi.fn();
      const { getByRole } = renderComponent({ onClick });

      fireEvent.click(getByRole('button'));
      expect(onClick).toHaveBeenCalled();
    });

    it('passes `type` to button', () => {
      const { getByRole } = renderComponent({ type: 'submit' });
      expect(getByRole('button')).toHaveAttribute('type', 'submit');
    });

    it('defaults to `button` type if no type is provided', () => {
      const { getByRole } = renderComponent();
      expect(getByRole('button')).toHaveAttribute('type', 'button');
    });

    it('prevents propagation of click event', () => {
      const onClick = vi.fn();
      const onOuterClick = vi.fn();

      const { getByRole } = render(
        <div onClick={onOuterClick}>
          <IconButton onClick={onClick} Icon={() => <></>}></IconButton>
        </div>
      );

      fireEvent.click(getByRole('button'));
      expect(onOuterClick).not.toHaveBeenCalled();
    });

    it('renders color and variant className', () => {
      const { getByRole } = renderComponent({ className: 'tacos', variant: 'primary', color: 'red' });

      expect(getByRole('button')).toHaveClass('zui-iconButton-color-red');
      expect(getByRole('button')).toHaveClass('zui-iconButton-variant-primary');
    });
  });

  describe('Icon Size and Button Size', () => {
    describe('Button Sizes', () => {
      it('sets the correct size for the button when "large" is passed in', () => {
        const { getByRole } = renderComponent({ Icon: IconXClose, size: 'large' });
        expect(getByRole('button')).toHaveStyle('width: 40px; height: 40px;');
      });

      it('sets the correct size for the button when "small" is passed in', () => {
        const { getByRole } = renderComponent({ Icon: IconXClose, size: 'small' });
        expect(getByRole('button')).toHaveStyle('width: 32px; height: 32px;');
      });

      it('sets the correct size for the button when "x-small" is passed in', () => {
        const { getByRole } = renderComponent({ Icon: IconXClose, size: 'x-small' });
        expect(getByRole('button')).toHaveStyle('width: 24px; height: 24px;');
      });

      it('sets the correct size for the button when a number is passed in (custom smaller)', () => {
        const { getByRole } = renderComponent({ Icon: IconXClose, size: 12 });
        expect(getByRole('button')).toHaveStyle('width: 12px; height: 12px;');
      });

      it('sets the correct size for the button when a number is passed in (custom larger)', () => {
        const { getByRole } = renderComponent({ Icon: IconXClose, size: 72 });
        expect(getByRole('button')).toHaveStyle('width: 72px; height: 72px;');
      });
    });

    describe('Icon Sizes', () => {
      it('has an offset of 8px for the icon when the value of the size attribute is greater than 16px', () => {
        renderComponent({
          Icon: IconXClose,
          label: 'the-label',
          size: 58,
          isFilled: false
        });

        expect(iconRender).toHaveBeenLastCalledWith({
          label: 'the-label',
          size: 50,
          isFilled: false
        });
      });

      it('has an offset of 4px for the icon when the value of the size attribute is equal to or less than 16px', () => {
        renderComponent({
          Icon: IconXClose,
          label: 'the-label',
          size: 10,
          isFilled: false
        });

        expect(iconRender).toHaveBeenLastCalledWith({
          label: 'the-label',
          size: 6,
          isFilled: false
        });
      });

      it('renders large size for the icon when "large" is passed in', () => {
        renderComponent({
          Icon: IconXClose,
          label: 'the-label',
          size: 'large',
          isFilled: false
        });

        expect(iconRender).toHaveBeenLastCalledWith({
          label: 'the-label',
          size: 32, // 40 (button size) - 8 (offset) = 32 (icon size)
          isFilled: false
        });
      });

      it('renders small size for the icon when "small" is passed in', () => {
        renderComponent({
          Icon: IconXClose,
          label: 'the-label',
          size: 'small',
          isFilled: false
        });

        expect(iconRender).toHaveBeenLastCalledWith({
          label: 'the-label',
          size: 24, // 32 (button size) - 8 (offset) = 24 (icon size)
          isFilled: false
        });
      });

      it('renders x-small size for the icon when "x-small" is passed in', () => {
        renderComponent({
          Icon: IconXClose,
          label: 'the-label',
          size: 'x-small',
          isFilled: false
        });

        expect(iconRender).toHaveBeenLastCalledWith({
          label: 'the-label',
          size: 16, // 24 (button size) - 8 (offset) = 16 (icon size)
          isFilled: false
        });
      });
    });
  });
});
