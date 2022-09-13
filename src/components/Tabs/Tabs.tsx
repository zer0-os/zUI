import React from 'react';

import * as RadixTabs from '@radix-ui/react-tabs';
import classNames from 'classnames/bind';

import styles from './Tabs.module.scss';

const cx = classNames.bind(styles);

export interface Tab {
  text: string;
  content: React.ReactNode | string;
}

export interface TabsProps {
  tabs: Tab[];
  defaultValue?: string;
}

export const Tabs = ({ defaultValue, tabs }: TabsProps) => {
  return (
    <RadixTabs.Root className={styles.Container} defaultValue={defaultValue || tabs[0].text}>
      <RadixTabs.List className={styles.List}>
        {tabs.map(t => (
          <RadixTabs.Trigger
            key={t.text}
            value={t.text}
            className={cx(styles.Tab, { Selected: defaultValue === t.text })}
          >
            {t.text}
          </RadixTabs.Trigger>
        ))}
      </RadixTabs.List>
      <div>
        {tabs.map(t => (
          <RadixTabs.Content key={t.text} value={t.text}>
            {t.content}
          </RadixTabs.Content>
        ))}
      </div>
    </RadixTabs.Root>
  );
};
