import { cleanup, render } from '@testing-library/react';
import React from 'react';

import { Link } from './';
import styles from './Link.module.scss';

const mockBackLink = jest.fn();
const mockButtonLink = jest.fn();
const mockRouterLink = jest.fn();
const mockOnClick = jest.fn();

// Mocking variations so we can test individually

jest.mock('./variations', () => ({
  ButtonLink: (props: any) => {
    mockButtonLink(props);
    // @ts-ignore
    return <mock-ButtonLink data-testid="button-link" {...props} />;
  },
  BackLink: (props: any) => {
    mockBackLink(props);
    // @ts-ignore
    return <mock-BackLink data-testid="back-link" {...props} />;
  },
  RouterLink: (props: any) => {
    mockRouterLink(props);
    // @ts-ignore
    return <mock-RouterLink data-testid="router-link" {...props} />;
  }
}));

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

test('should render RouterLink by default', () => {
  const { queryByTestId } = render(<Link to={'/mock-url'}>mock</Link>);

  expect(queryByTestId('router-link')).toBeTruthy();
});

test('should render ButtonLink when `as = "button"`', () => {
  const { queryByTestId } = render(
    <Link as="button" onClick={mockOnClick}>
      mock
    </Link>
  );

  expect(queryByTestId('button-link')).toBeTruthy();
});

test('should render BackLink when `as = "back"`', () => {
  const { queryByTestId } = render(
    <Link as="back" onClick={mockOnClick}>
      mock
    </Link>
  );

  expect(queryByTestId('back-link')).toBeTruthy();
});

test('should wrap children in span', () => {
  render(
    <Link as="link" to="/mock-url">
      mock
    </Link>
  );

  expect(mockRouterLink).toBeCalled();
  expect(mockRouterLink.mock.lastCall[0].children.type).toMatch(/span/i);
});

test('should handle variant class names', () => {
  render(
    <Link as="link" to="/mock-url" variant="primary">
      mock
    </Link>
  );

  const className = mockRouterLink.mock.lastCall[0].className;
  expect(className).toMatch(styles.Primary);
});

test('should handle isDisabled', () => {
  render(
    <Link as="link" to="/mock-url" variant="primary" isDisabled={true}>
      mock
    </Link>
  );

  const classes = mockRouterLink.mock.lastCall[0].className.split(' ');
  expect(classes).toContain(styles.Disabled);
  expect(mockRouterLink).toBeCalledWith(expect.objectContaining({ isDisabled: true }));
});

test('should pass class name to children', () => {
  render(
    <Link as="link" to="/mock-url" variant="primary" className={'mock-class'}>
      mock
    </Link>
  );

  const classes = mockRouterLink.mock.lastCall[0].className.split(' ');
  expect(classes).toContain(styles.Primary);
  expect(classes).toContain('mock-class');
});

test('should forward props to children', () => {
  render(
    <Link as="link" to="/mock-url">
      mock
    </Link>
  );

  expect(mockRouterLink).toHaveBeenCalledWith(expect.objectContaining({ to: '/mock-url' }));
});
