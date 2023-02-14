import React from 'react';
import { render, waitFor } from '@testing-library/react';

import { Avatar, AvatarProps } from './';

const DEFAULT_PROPS: AvatarProps = {
  size: 'regular',
  type: 'circle'
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe('when using default props', () => {
  test('should be regular size', () => {
    const { container } = render(<Avatar {...DEFAULT_PROPS} />);
    expect(container.firstChild).toHaveAttribute('data-size', 'regular');
  });

  test('should be medium size', () => {
    const { container } = render(<Avatar {...DEFAULT_PROPS} size="medium" />);
    expect(container.firstChild).toHaveAttribute('data-size', 'medium');
  });

  test('should be circle shape', () => {
    const { container } = render(<Avatar {...DEFAULT_PROPS} type="circle" />);
    expect(container.firstChild).toHaveAttribute('data-type', 'circle');
  });

  test('should be square shape', () => {
    const { container } = render(<Avatar {...DEFAULT_PROPS} type="square" />);
    expect(container.firstChild).toHaveAttribute('data-type', 'square');
  });
});

describe('when status type is "active"', () => {
  test('should show status active', () => {
    const { container } = render(<Avatar {...DEFAULT_PROPS} statusType="active" />);
    expect(container.querySelector('[data-status-type="active"]')).toBeInTheDocument();
  });
});

describe('when badge content is "9+"', () => {
  test('should show badge', () => {
    const { getByText } = render(<Avatar {...DEFAULT_PROPS} badgeContent="9+" />);
    expect(getByText('9+')).toBeInTheDocument();
  });
});

describe('when image is available', () => {
  test('should render the given image', async () => {
    const { getByText } = render(<Avatar {...DEFAULT_PROPS} imageURL="https://picsum.photos/200/300" />);
    // Have to wait until the Radix DOM to load the image
    setTimeout(() => {
      expect(getByText('https://picsum.photos/200/300')).toBeInTheDocument();
    }, 5000);
  });
});

describe('when image is not available and user friendly name is given', () => {
  test('if "John" is given should show "Jo"', async () => {
    const { getByText } = render(<Avatar {...DEFAULT_PROPS} userFriendlyName="John" />);
    await waitFor(() => {
      expect(getByText('Jo')).toBeInTheDocument();
    });
  });

  test('if "John Smith" is given should show "JS"', async () => {
    const { getByText } = render(<Avatar {...DEFAULT_PROPS} userFriendlyName="John Smith" />);
    await waitFor(() => {
      expect(getByText('JS')).toBeInTheDocument();
    });
  });

  test('if "John Smith Appleseed" is given should show "JS"', async () => {
    const { getByText } = render(<Avatar {...DEFAULT_PROPS} userFriendlyName="John Smith Appleseed" />);
    await waitFor(() => {
      expect(getByText('JS')).toBeInTheDocument();
    });
  });
});

describe('when image and user name are not available', () => {
  test('should render the icon', async () => {
    const { container } = render(<Avatar {...DEFAULT_PROPS} />);
    await waitFor(() => {
      const items = container.getElementsByClassName('DefaultIcon');
      expect(items.length).toBe(1);
    });
  });
});
