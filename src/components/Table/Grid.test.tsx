import React from 'react';
import { render } from '@testing-library/react';

import { Grid } from './Grid';

describe('<Grid />', () => {
  test('should render children', () => {
    const { getByText } = render(
      <Grid>
        <div>Child 1</div>
        <div>Child 2</div>
      </Grid>
    );

    expect(getByText('Child 1')).toBeInTheDocument();
    expect(getByText('Child 2')).toBeInTheDocument();
  });

  test('should apply className prop to grid root', () => {
    const { container } = render(
      <Grid className={'test'}>
        <div>Child 1</div>
      </Grid>
    );

    expect(container.firstChild).toHaveClass('test');
  });

  describe('when placeholders are required', () => {
    test('should render 2 placeholders when num children = 1', () => {
      const { getAllByTestId } = render(
        <Grid>
          <div>Child 1</div>
        </Grid>
      );

      expect(getAllByTestId('zui-grid-placeholder')).toHaveLength(2);
    });

    test('should render 1 placeholder when num children = 2', () => {
      const { getAllByTestId } = render(
        <Grid>
          <div>Child 1</div>
          <div>Child 2</div>
        </Grid>
      );

      expect(getAllByTestId('zui-grid-placeholder')).toHaveLength(1);
    });
  });
});
