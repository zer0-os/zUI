import React from 'react';
import { render } from '@testing-library/react';

import { View, ViewToggle, ViewToggleProps } from './Controls';
import { IconGrid1, IconRows3 } from '../Icons';

let mockToggleView = jest.fn();

jest.mock('../ToggleGroup', () => ({
  ToggleGroup: (props: any) => {
    mockToggleView(props);
    return <div data-testid="mock-toggle">Mock Toggle Group</div>;
  }
}));

const DEFAULT_PROPS: ViewToggleProps = {
  onChange: jest.fn(),
  view: View.Grid
};

const renderViewToggle = (props?: Partial<ViewToggleProps>) => {
  const mergedProps = { ...DEFAULT_PROPS, ...props };
  return render(<ViewToggle {...mergedProps} />);
};

describe('<ViewToggle />', () => {
  describe('when forwarding props to ToggleGroup', () => {
    renderViewToggle({ view: View.Grid });

    test('should pass Toggle className to ToggleGroup', () => {
      expect(mockToggleView).toHaveBeenCalledWith(expect.objectContaining({ className: 'Toggle' }));
    });

    test('should be selectionType="single"', () => {
      expect(mockToggleView).toHaveBeenCalledWith(expect.objectContaining({ selectionType: 'single' }));
    });

    test('should be variant="minimal"', () => {
      expect(mockToggleView).toHaveBeenCalledWith(expect.objectContaining({ variant: 'minimal' }));
    });

    test('should be isRequired={true}', () => {
      expect(mockToggleView).toHaveBeenCalledWith(expect.objectContaining({ isRequired: true }));
    });

    test('should be selection={view}', () => {
      expect(mockToggleView).toHaveBeenCalledWith(expect.objectContaining({ selection: DEFAULT_PROPS.view }));
    });

    test('should pass onChange to onSelectionChange', () => {
      expect(mockToggleView).toHaveBeenCalledWith(
        expect.objectContaining({ onSelectionChange: DEFAULT_PROPS.onChange })
      );
    });

    test('should have Grid and Row options', () => {
      const { options } = mockToggleView.mock.calls[0][0];
      expect(options.length).toBe(2);
      expect(options[0].icon.type).toBe(IconRows3);
      expect(options[1].icon.type).toBe(IconGrid1);
    });
  });
});
