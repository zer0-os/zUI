import { FC } from "react";

import * as Tabs from "@radix-ui/react-tabs";

import styles from "./TabNav.module.scss";
import classNames from "classnames/bind";

import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

export type Tab = {
  text: string;
  to: string;
  content: React.ReactNode | string;
};

type TabNavProps = {
  tabs: Tab[];
  defaultValue?: string;
};

const TabNav: FC<TabNavProps> = ({ defaultValue, tabs }) => {
  return (
    <Tabs.Root defaultValue={defaultValue || tabs[0].text}>
      <Tabs.List className={styles.List}>
        {tabs.map((t) => (
          <Tabs.Trigger value={t.text} asChild>
            <Link className={cx({ Selected: defaultValue === t.text })} to={t.to} replace>
              {t.text}
            </Link>
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      <div>
        {tabs.map((t) => (
          <Tabs.Content value={t.text}>{t.content}</Tabs.Content>
        ))}
      </div>
    </Tabs.Root>
  );
};

export default TabNav;
