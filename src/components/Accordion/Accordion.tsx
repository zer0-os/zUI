import React, { ReactNode, useState } from 'react';

import * as RadixAccordion from '@radix-ui/react-accordion';
import { IconChevronDown } from '../Icons';

import styles from './Accordion.module.scss';

export interface AccordionItem {
  title: string;
  content: ReactNode;
}
export interface AccordionProps {
  items: AccordionItem[];
  contrast?: 'high' | 'low';
}

export const Accordion = ({ items, contrast = 'high' }: AccordionProps) => {
  const [focusState, setFocusState] = useState(false);
  return (
    <div className={styles.Accordion} data-contrast={contrast}>
      <RadixAccordion.Root className={styles.Root} type="single" collapsible>
        {items.map((itm, i) => (
          <RadixAccordion.Item
            className={styles.Item}
            value={`item-${i}`}
            key={`${itm.title}-${i}`}
            data-focus-on-key-press={focusState}
          >
            <RadixAccordion.Header className={styles.Header}>
              <RadixAccordion.Trigger
                className={styles.Trigger}
                onMouseDown={() => setFocusState(false)}
                onKeyDown={() => setFocusState(true)}
              >
                {itm.title}
                <IconChevronDown className={styles.Chevron} isFilled aria-hidden size={16} />
              </RadixAccordion.Trigger>
            </RadixAccordion.Header>
            <RadixAccordion.Content className={styles.Content}>
              <div className={styles.ContentText}>{itm.content}</div>
            </RadixAccordion.Content>
          </RadixAccordion.Item>
        ))}
      </RadixAccordion.Root>
    </div>
  );
};
