import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { Accordion, AccordionProps } from './';

const DEFAULT_PROPS: AccordionProps = {
  items: [
    {
      title: 'Title',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget quam netus consectetur magnis. Lorem est ac duis risus semper. Nunc faucibus turpis ac sollicitudin suscipit imperdiet est, cursus.'
    }
  ]
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe('<Accordion />', () => {
  test('Accordion should be in closed state by default', () => {
    const { container } = render(<Accordion {...DEFAULT_PROPS} />);
    const selectAccordionTriggerElement = container.getElementsByClassName('Trigger')[0];
    expect(selectAccordionTriggerElement).toHaveAttribute('data-state', 'closed');
  });

  test('Accordion should toggle "open" state on click', () => {
    const { container } = render(<Accordion {...DEFAULT_PROPS} />);
    const selectAccordionTriggerElement = container.getElementsByClassName('Trigger')[0];
    fireEvent.click(selectAccordionTriggerElement);
    expect(selectAccordionTriggerElement).toHaveAttribute('data-state', 'open');
    fireEvent.click(selectAccordionTriggerElement);
    expect(selectAccordionTriggerElement).toHaveAttribute('data-state', 'closed');
  });
});
