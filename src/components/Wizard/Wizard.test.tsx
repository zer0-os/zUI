import React from 'react';
import { render } from '@testing-library/react';
import { Wizard } from '.';
import { Confirmation as WizardConfirmation, Loading as WizardLoading, Header as WizardHeader } from './Presets';

const mockContainer = 'Mock Container';
const mockLoadingMessage = 'Mock Loading Message';
const mockHeader = 'Mock Header';
const mockConfirmation = 'Mock Confirmation';

const mockOnClickPrimaryButton = jest.fn();

describe('<Wizard />', () => {
  test('should render wizard container', () => {
    const { getByText } = render(<Wizard>{mockContainer}</Wizard>);
    const container = getByText(mockContainer);
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('zui-wizard');
  });

  test('should render wizard loading', () => {
    const { getByText } = render(<WizardLoading message={mockLoadingMessage} />);
    const loading = getByText(mockLoadingMessage);
    expect(loading).toBeInTheDocument();
  });

  test('should render wizard header', () => {
    const { getByText } = render(<WizardHeader header={mockHeader} />);
    const header = getByText(mockHeader);
    expect(header).toBeInTheDocument();
  });

  test('should render wizard confirmation', () => {
    const { getByText } = render(
      <WizardConfirmation message={mockConfirmation} onClickPrimaryButton={mockOnClickPrimaryButton} />
    );
    const confirmation = getByText(mockConfirmation);
    expect(confirmation).toBeInTheDocument();
  });
});
