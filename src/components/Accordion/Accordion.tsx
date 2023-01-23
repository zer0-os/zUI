import React from 'react';

import * as RadixAccordion from '@radix-ui/react-accordion';
import { IconChevronDown } from '../Icons';

import classNames from 'classnames';
import styles from './Accordion.module.scss';

const cx = classNames.bind(styles);

export interface AccordionItem {
  title: string;
  text: string;
}
export interface AccordionProps {
  items: AccordionItem[];
  contrast?: 'high' | 'low';
}

export const Accordion = ({ items, contrast = 'high' }: AccordionProps) => {
  return (
    <div className={styles.Accordion} data-contrast={contrast}>
      <RadixAccordion.Root className={styles.AccordionRoot} type="single" collapsible>
        {items.map((itm, i) => (
          <RadixAccordion.Item className={styles.AccordionItem} value={`item-${i}`} key={i}>
            <RadixAccordion.Header className={styles.AccordionHeader}>
              <RadixAccordion.Trigger className={styles.AccordionTrigger}>
                {itm.title}
                <IconChevronDown className={styles.AccordionChevron} aria-hidden size={22} />
              </RadixAccordion.Trigger>
            </RadixAccordion.Header>
            <RadixAccordion.Content className={styles.AccordionContent}>
              <div className={styles.AccordionContentText}>{itm.text}</div>
            </RadixAccordion.Content>
          </RadixAccordion.Item>
        ))}
      </RadixAccordion.Root>
    </div>
  );
};
