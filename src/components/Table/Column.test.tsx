import React from 'react';
import { render } from '@testing-library/react';

import { Cell, ColumnProps, Header } from './Column';

const DEFAULT_PROPS: ColumnProps = {
  alignment: 'left',
  children: 'Default Cell'
};

/*********************
 * Cell tests
 *********************/

const renderCell = (props?: Partial<ColumnProps>) => {
  const mergedProps = { ...DEFAULT_PROPS, ...props };
  return render(<Cell {...mergedProps}>{mergedProps.children}</Cell>, {
    container: document.body.appendChild(document.createElement('tr'))
  });
};

describe('<Cell />', () => {
  test('should be a td element', () => {
    const { container } = renderCell();
    expect(container.firstChild.nodeName).toBe('TD');
  });

  test('should apply className from props', () => {
    const { container } = renderCell({ className: 'test' });
    expect(container.firstChild).toHaveClass('test');
  });

  describe('when alignment is left', () => {
    test('should have a data-alignment attribute of "left"', () => {
      const { container } = renderCell();
      expect(container.firstChild).toHaveAttribute('data-alignment', 'left');
    });
  });

  describe('when alignment is right', () => {
    test('should have a data-alignment attribute of "right"', () => {
      const { container } = renderCell({ alignment: 'right' });
      expect(container.firstChild).toHaveAttribute('data-alignment', 'right');
    });
  });

  describe('when alignment is center', () => {
    test('should have a data-alignment attribute of "center"', () => {
      const { container } = renderCell({ alignment: 'center' });
      expect(container.firstChild).toHaveAttribute('data-alignment', 'center');
    });
  });
});

/*********************
 * Header tests
 *********************/
const renderHeader = (props?: Partial<ColumnProps>) => {
  const mergedProps = { ...DEFAULT_PROPS, ...props };
  return render(<Header {...mergedProps}>{mergedProps.children}</Header>, {
    container: document.body.appendChild(document.createElement('tr'))
  });
};

describe('<Header />', () => {
  test('should be a th element', () => {
    const { container } = renderHeader();
    expect(container.firstChild.nodeName).toBe('TH');
  });

  test('should apply className from props', () => {
    const { container } = renderHeader({ className: 'test' });
    expect(container.firstChild).toHaveClass('test');
  });

  describe('when alignment is left', () => {
    test('should have a data-alignment attribute of "left"', () => {
      const { container } = renderHeader();
      expect(container.firstChild).toHaveAttribute('data-alignment', 'left');
    });
  });

  describe('when alignment is right', () => {
    test('should have a data-alignment attribute of "right"', () => {
      const { container } = renderHeader({ alignment: 'right' });
      expect(container.firstChild).toHaveAttribute('data-alignment', 'right');
    });
  });

  describe('when alignment is center', () => {
    test('should have a data-alignment attribute of "center"', () => {
      const { container } = renderHeader({ alignment: 'center' });
      expect(container.firstChild).toHaveAttribute('data-alignment', 'center');
    });
  });
});
