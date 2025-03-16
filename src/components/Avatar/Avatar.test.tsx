import { render, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { Avatar, AvatarProps } from './';

const DEFAULT_PROPS: AvatarProps = {
  size: 'regular'
};

beforeEach(() => {
  vi.resetAllMocks();
});

describe('Avatar', () => {
  describe('when using default props', () => {
    it('should be regular size', () => {
      const { container } = render(<Avatar {...DEFAULT_PROPS} />);
      expect(container.firstChild).toHaveAttribute('data-size', 'regular');
    });

    it('should be medium size', () => {
      const { container } = render(<Avatar {...DEFAULT_PROPS} size="medium" />);
      expect(container.firstChild).toHaveAttribute('data-size', 'medium');
    });

    it('should be small size', () => {
      const { container } = render(<Avatar {...DEFAULT_PROPS} size="small" />);
      expect(container.firstChild).toHaveAttribute('data-size', 'small');
    });

    it('should be extra small size', () => {
      const { container } = render(<Avatar {...DEFAULT_PROPS} size="extra small" />);
      expect(container.firstChild).toHaveAttribute('data-size', 'extra small');
    });
  });

  describe('when status type is "active"', () => {
    it('should show status active', () => {
      const { container } = render(<Avatar {...DEFAULT_PROPS} statusType="active" />);
      expect(container.querySelector('[data-status-type="active"]')).toBeInTheDocument();
    });
  });

  describe('when badge content is "9+"', () => {
    it('should show badge', () => {
      const { getByText } = render(<Avatar {...DEFAULT_PROPS} badgeContent="9+" />);
      expect(getByText('9+')).toBeInTheDocument();
    });
  });

  describe('when image is available', () => {
    it('should render the given image', async () => {
      const { getByText } = render(<Avatar {...DEFAULT_PROPS} imageURL="https://picsum.photos/200/300" />);
      // Have to wait until the Radix DOM to load the image
      setTimeout(() => {
        expect(getByText('https://picsum.photos/200/300')).toBeInTheDocument();
      }, 5000);
    });
  });

  describe('when image is not available', () => {
    it('should render the icon', async () => {
      const { container } = render(<Avatar {...DEFAULT_PROPS} />);
      await waitFor(() => {
        const items = container.getElementsByClassName('DefaultIcon');
        expect(items.length).toBe(1);
      });
    });
  });

  describe('when isActive is true', () => {
    it('should apply the active class', () => {
      const { container } = render(<Avatar {...DEFAULT_PROPS} isActive />);
      expect(container.firstChild).toHaveClass('isActive');
    });
  });

  describe('when isRaised is true', () => {
    it('should apply the Raised class', () => {
      const { container } = render(<Avatar {...DEFAULT_PROPS} isRaised />);
      expect(container.firstChild).toHaveClass('isRaised');
    });
  });

  describe('when tabIndex is not specified (default value)', () => {
    it('should have tabIndex attribute set to 0', () => {
      const { container } = render(<Avatar {...DEFAULT_PROPS} />);
      expect(container.firstChild).toHaveAttribute('tabIndex', '0');
    });
  });

  describe('when tabIndex is set to -1', () => {
    it('should have tabIndex attribute set to -1', () => {
      const { container } = render(<Avatar {...DEFAULT_PROPS} tabIndex={-1} />);
      expect(container.firstChild).toHaveAttribute('tabIndex', '-1');
    });
  });
});
