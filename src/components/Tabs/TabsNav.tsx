import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Tabs.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export interface TabNav {
  text: string;
  to: string;
  replace?: boolean;
}

export interface TabsNavProps {
  tabs: TabNav[];
  location?: string;
}

/**
 * Use this component when you want the styling of Tabs,
 * but you need them to work with react-router-dom.
 */
export const TabsNav = ({ tabs, location }: TabsNavProps) => {
  return (
    <ul className={styles.List}>
      {tabs.map(t => (
        <Link
          key={t.text + t.to}
          className={cx(styles.Tab, { Selected: location === t.to })}
          to={t.to}
          replace={t.replace}
        >
          {t.text}
        </Link>
      ))}
    </ul>
  );
};
