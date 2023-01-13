import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { Accordion, AccordionProps } from './';

// const mockOnChange = jest.fn();

const DEFAULT_PROPS: AccordionProps = {
    items: [
        {
          title: 'Title',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget quam netus consectetur magnis. Lorem est ac duis risus semper. Nunc faucibus turpis ac sollicitudin suscipit imperdiet est, cursus.'
        }
    ]
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe('<Accordion />', () => {
  test('Accordion must be in closed state by default', () => {
    const { container } = render(<Accordion {...DEFAULT_PROPS} />);
    const selectAccordionTriggerElement  = container.getElementsByClassName('AccordionTrigger')[0];
    expect(selectAccordionTriggerElement).toHaveAttribute('data-state','closed');
  });

  test('Accordion must be in open state when user clicks on accordion header', () => {
    const { container } = render(<Accordion {...DEFAULT_PROPS} />);
    const selectAccordionTriggerElement  = container.getElementsByClassName('AccordionTrigger')[0];
    fireEvent.click(selectAccordionTriggerElement);
    expect(selectAccordionTriggerElement).toHaveAttribute('data-state','open');
  });

  test('Accordion must be in closed state when user clicks on accordion header two times', () => {
    const { container } = render(<Accordion {...DEFAULT_PROPS} />);
    const selectAccordionTriggerElement  = container.getElementsByClassName('AccordionTrigger')[0];
    fireEvent.click(selectAccordionTriggerElement);
    expect(selectAccordionTriggerElement).toHaveAttribute('data-state','open');
    fireEvent.click(selectAccordionTriggerElement);
    expect(selectAccordionTriggerElement).toHaveAttribute('data-state','closed');
  });
});


