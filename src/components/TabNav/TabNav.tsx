import React from 'react';

import * as Tabs from '@radix-ui/react-tabs';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './TabNav.module.scss';

const cx = classNames.bind(styles);

export interface Tab {
  text: string;
  to: string;
  content: React.ReactNode | string;
}

export interface TabNavProps {
  tabs: Tab[];
  defaultValue?: string;
}

const TabNav: React.FC<TabNavProps> = ({ defaultValue, tabs }) => {
  return (
    <Tabs.Root className={styles.Container} defaultValue={defaultValue || tabs[0].text}>
      <Tabs.List className={styles.List}>
        {tabs.map(t => (
          <Tabs.Trigger key={t.text} value={t.text} asChild>
            <Link className={cx({ Selected: defaultValue === t.text })} to={t.to}>
              {t.text}
            </Link>
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      <div>
        {tabs.map(t => (
          <Tabs.Content key={t.text} value={t.text}>
            {t.content}
          </Tabs.Content>
        ))}
      </div>
    </Tabs.Root>
  );
};

export default TabNav;
